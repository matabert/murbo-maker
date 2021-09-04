/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AbilityScore } from '../models/character/abilities-and-skills/ability-score.model';
import { PlayerCharacter } from '../models/character/player-character.model';

@Injectable({ providedIn: 'root' })
export class CharacterDataService {

  private playerCharacter = new PlayerCharacter();
  private pc = new BehaviorSubject<PlayerCharacter>(this.playerCharacter);
  characterState = this.pc.asObservable();

  constructor() { }

  //GETTERS FOR PLAYER CHARACTER'S ABILITY SCORES
  getStrength(): AbilityScore { return this.playerCharacter.strength; }
  getDexterity(): AbilityScore { return this.playerCharacter.dexterity; }
  getConstitution(): AbilityScore { return this.playerCharacter.constitution; }
  getIntelligence(): AbilityScore { return this.playerCharacter.intelligence; }
  getWisdom(): AbilityScore { return this.playerCharacter.wisdom; }
  getCharisma(): AbilityScore { return this.playerCharacter.charisma; }

  //SETTER FOR PLAYER CHARACTER'S ABILITY SCORE BASE VALUES
  setBaseScores(values: number[]): void {
    this.playerCharacter.strength.baseValue = values[0];
    this.playerCharacter.dexterity.baseValue = values[1];
    this.playerCharacter.constitution.baseValue = values[2];
    this.playerCharacter.intelligence.baseValue = values[3];
    this.playerCharacter.wisdom.baseValue = values[4];
    this.playerCharacter.charisma.baseValue = values[5];
  }
  //RE-CALCULATE ABILITY SCORE PROPERTIES
  updateAllAbilityScores(): void {
    this.updateAllScoreTotals();
    this.updateAllScoreModifiers();
  }

  //RECALCULATE SCORES ON UPDATE
  updateAllScoreTotals(): void {
    for(let i = 0; i < 6; i++) {
      this.updateScoreTotal(i);
    }
  }
  updateScoreTotal(index: number): void {
    switch(index) {
      case 0:
        this.playerCharacter.strength.totalValue = 
          this.playerCharacter.strength.baseValue + this.playerCharacter.strength.asiBonus + this.playerCharacter.strength.racialBonus + this.playerCharacter.strength.miscBonus;
        break;
      case 1:
        this.playerCharacter.dexterity.totalValue = 
          this.playerCharacter.dexterity.baseValue + this.playerCharacter.dexterity.asiBonus + this.playerCharacter.dexterity.racialBonus + this.playerCharacter.dexterity.miscBonus;
        break;
      case 2:
        this.playerCharacter.constitution.totalValue = 
          this.playerCharacter.constitution.baseValue + this.playerCharacter.constitution.asiBonus + this.playerCharacter.constitution.racialBonus + this.playerCharacter.constitution.miscBonus;
        break;
      case 3:
        this.playerCharacter.intelligence.totalValue = 
          this.playerCharacter.intelligence.baseValue + this.playerCharacter.intelligence.asiBonus + this.playerCharacter.intelligence.racialBonus + this.playerCharacter.intelligence.miscBonus;
        break;
      case 4:
        this.playerCharacter.wisdom.totalValue = 
          this.playerCharacter.wisdom.baseValue + this.playerCharacter.wisdom.asiBonus + this.playerCharacter.wisdom.racialBonus + this.playerCharacter.wisdom.miscBonus;
        break;
      case 5:
        this.playerCharacter.charisma.totalValue = 
          this.playerCharacter.charisma.baseValue + this.playerCharacter.charisma.asiBonus + this.playerCharacter.charisma.racialBonus + this.playerCharacter.charisma.miscBonus;
        break;
      default:
        break;
    }
  }
  updateAllScoreModifiers(): void {
    this.playerCharacter.strength.modifier = this.calcScoreModifier(this.playerCharacter.strength.totalValue);
    this.playerCharacter.dexterity.modifier = this.calcScoreModifier(this.playerCharacter.dexterity.totalValue);
    this.playerCharacter.constitution.modifier = this.calcScoreModifier(this.playerCharacter.constitution.totalValue);
    this.playerCharacter.intelligence.modifier = this.calcScoreModifier(this.playerCharacter.intelligence.totalValue);
    this.playerCharacter.wisdom.modifier = this.calcScoreModifier(this.playerCharacter.wisdom.totalValue);
    this.playerCharacter.charisma.modifier = this.calcScoreModifier(this.playerCharacter.charisma.totalValue);
  }
  calcScoreModifier(score: number): number {
    return Math.floor((score - 10) / 2);
  }
}
