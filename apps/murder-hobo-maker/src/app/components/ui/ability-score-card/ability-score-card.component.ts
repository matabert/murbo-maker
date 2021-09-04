/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Input } from '@angular/core';
import { AbilityScore } from '../../../models/character/abilities-and-skills/ability-score.model';

@Component({
  selector: 'matabert-ability-score-card',
  templateUrl: './ability-score-card.component.html',
  styleUrls: ['./ability-score-card.component.css']
})
export class AbilityScoreCardComponent implements OnInit {

  @Input() abilityScore: AbilityScore;
  
  infoPanelOpenState = false;
  expansionLabels: string[] = ['Base score:', 'Racial bonus:', 'ASI bonus:', 'Misc. bonus:'];
  expansionValues: number[] = [];
  modifierLabels: string[] = ['', '±', '+']
  modLabelIndex: number;

  constructor() { 
    this.abilityScore = new AbilityScore(); 
    
    this.expansionValues.push(this.abilityScore.baseValue);
    this.expansionValues.push(this.abilityScore.racialBonus);
    this.expansionValues.push(this.abilityScore.asiBonus);
    this.expansionValues.push(this.abilityScore.miscBonus);
    //determine modLabelIndex (which symbol appears next to the score modifier)
    if (this.abilityScore.modifier > 0) { this.modLabelIndex = 2; }
    else if (this.abilityScore.modifier < 0) { this.modLabelIndex = 0; }
    else { this.modLabelIndex = 1; }
  }
  
  selectModLabel(): number {
    if (this.abilityScore.modifier > 0) { return 2; }
    else if (this.abilityScore.modifier === 0) { return 1; }
    else { return 0; }
  }

  ngOnInit(): void { }

}
