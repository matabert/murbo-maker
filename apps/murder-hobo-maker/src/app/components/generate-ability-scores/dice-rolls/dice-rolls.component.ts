/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'matabert-dice-rolls',
  templateUrl: './dice-rolls.component.html',
  styleUrls: ['./dice-rolls.component.css']
})
export class DiceRollsComponent implements OnInit {

  //options for rolling
  _rollForm: FormGroup;
  numRolls: number;

  //roll values
  scoreRolls: number[][];
  scoreTotals: number[];
  droppedRolls: number[];
  
  //form group for handling roll<->ability score assignments
  _scoreAssignmentsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    //initialize scoreAssignmentsForm
    this._scoreAssignmentsForm = new FormGroup({
      
    });
    //initialize rollForm
    this._rollForm = this.fb.group({
      numRolls: new FormControl('3'),
      rerollOnesOption: new FormControl(false)
    });
    this.numRolls = parseInt(this._rollForm.get('numRolls')?.value);
    //console.log(this.numRolls);
    //console.log(this._rollForm.get('rerollOnesOption')?.value);

    //initialize matrix for score rolls
    this.droppedRolls = new Array(6).fill(-1);
    this.scoreTotals = new Array(6).fill(0);
    this.scoreRolls = new Array(6).fill(0);
    for(let i = 0; i < this.scoreRolls.length; i++) { 
      this.scoreRolls[i] = new Array(this.numRolls).fill(0); 
    }
  }

  get rollForm(): FormGroup { return this._rollForm; }

  ngOnInit(): void { }

  resetScoreRollsMatrices(): void {
    this.scoreRolls = new Array(6).fill(0);
    for(let i = 0; i < this.scoreRolls.length; i++) {
      this.scoreRolls[i] = new Array(this.numRolls).fill(0);
    }
    this.scoreTotals = new Array(6).fill(0);
    this.droppedRolls = new Array(6).fill(-1);
  }

  rollOneDSix(): number {
    let roll = 0;
    do {
      roll = Math.floor(Math.random() * 6 + 1)
    } while (roll === 1 && this._rollForm.get('rerollOnesOption')?.value)
    return roll;
  }

  rollScoreSet(): void {
    let dSixRoll;
    for(let i = 0; i < this.scoreRolls.length; i++) {
      dSixRoll = 0;
      for(let j = 0; j < this.numRolls; j++) {
        dSixRoll = this.rollOneDSix();
        this.scoreRolls[i][j] = dSixRoll;
      }
      console.log(this.scoreRolls[i]);
    }
    //If 4d6 are being rolled, find and record the index of
    //the lowest roll for each score.
    if(this.numRolls === 4) {
      this.indeciesOfLowestRolls();
      console.log(this.droppedRolls);
    }
  }


  indeciesOfLowestRolls(): void {
    for(let i = 0; i < this.scoreRolls.length; i++) {
      // eslint-disable-next-line prefer-spread
      this.droppedRolls[i] = this.scoreRolls[i].indexOf(Math.min.apply(Math, this.scoreRolls[i]));
    }
  }

  calcScores(): void {
    let sum;
    for(let i = 0; i < this.scoreRolls.length; i++) {
      sum = 0;
      for(let j = 0; j < this.numRolls; j++) {
        sum += this.scoreRolls[i][j];
      }
      //drop the lowest value from a 4d6 roll
      if(this.numRolls === 4) {
        sum -= this.scoreRolls[i][this.droppedRolls[i]];
      }
      this.scoreTotals[i] = sum;
    }
  }

  submit(): void {
    this.numRolls = parseInt(this._rollForm.get('numRolls')?.value);
    console.log(`numRolls: ${this.numRolls}`);
    this.resetScoreRollsMatrices();
    this.rollScoreSet();
    this.calcScores();
    console.log(this.scoreTotals);
  }

}
