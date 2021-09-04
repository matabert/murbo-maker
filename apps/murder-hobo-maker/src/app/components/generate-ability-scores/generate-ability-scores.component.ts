/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
//import { AbilityScore } from '../../models/character/abilities-and-skills/ability-score.model';
//import { PlayerCharacter } from '../../models/character/player-character.model';
import { CharacterDataService } from '../../services/character-data.service';
//import { AbilityScoreCardComponent } from '../ui/ability-score-card/ability-score-card.component';

@Component({
  selector: 'matabert-generate-ability-scores',
  templateUrl: './generate-ability-scores.component.html',
  styleUrls: ['./generate-ability-scores.component.css']
})
export class GenerateAbilityScoresComponent implements OnInit {

  replacementBaseValues: number[] = new Array(6);

  constructor(private characterData: CharacterDataService) { 
    //this.test = new AbilityScore();
  }

  ngOnInit(): void { 
    
  }

  submitValues(values: number[]): void {
    this.characterData.setBaseScores(values);
    this.characterData.updateAllAbilityScores();
  }

}
