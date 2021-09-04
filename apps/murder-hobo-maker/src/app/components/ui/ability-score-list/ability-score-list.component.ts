/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { AbilityScore } from '../../../models/character/abilities-and-skills/ability-score.model';
import { CharacterDataService } from '../../../services/character-data.service';

@Component({
  selector: 'matabert-ability-score-list',
  templateUrl: './ability-score-list.component.html',
  styleUrls: ['./ability-score-list.component.css']
})
export class AbilityScoreListComponent implements OnInit {

  cardList: AbilityScore[];

  constructor(private characterData: CharacterDataService) {
    
    this.cardList = [];
    this.cardList.push(characterData.getStrength());
    this.cardList.push(characterData.getDexterity());
    this.cardList.push(characterData.getConstitution());
    this.cardList.push(characterData.getIntelligence());
    this.cardList.push(characterData.getWisdom());
    this.cardList.push(characterData.getCharisma());
   }

  ngOnInit(): void { }

}
