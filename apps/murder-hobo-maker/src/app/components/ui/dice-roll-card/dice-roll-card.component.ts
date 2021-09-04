/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
//import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'matabert-dice-roll-card',
  templateUrl: './dice-roll-card.component.html',
  styleUrls: ['./dice-roll-card.component.css']
})
export class DiceRollCardComponent implements OnInit {

  @Input() individualRolls: number[] = [];
  @Input() score: number;
  @Input() droppedIndex: number;

  @Output() private rollAssignment = new EventEmitter<any>();

  _rollAssignmentForm = new FormGroup({
    assignedScore: new FormControl()
  });

  //number of rolls, 3 for 3d6, 4 for 4d6
  numRolls: number;

  constructor() {
    this.numRolls = this.individualRolls.length;
    this.score = 0;
    this.droppedIndex = -1;
  }

  ngOnInit(): void {
    this.rollAssignment.emit(this._rollAssignmentForm);
  }

}
