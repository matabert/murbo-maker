/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Input } from '@angular/core';
import { Proficiency } from '../../../models/character/abilities-and-skills/proficiency.model';
import { Background } from '../../../models/character/options/background.model';
import { Item } from '../../../models/items/item.model';

@Component({
  selector: 'matabert-background-display',
  templateUrl: './background-display.component.html',
  styleUrls: ['./background-display.component.css']
})
export class BackgroundDisplayComponent implements OnInit {

  @Input() displayedBackground: Background;

  //proficiencyList: string[];
  //equipmentList: string[];


  constructor() { 
    this.displayedBackground = new Background();
    //this.proficiencyList = this.generateList(this.displayedBackground._proficiencies!);
  }

  ngOnInit(): void { }

  generateList(arr: (Proficiency | Item)[]): string[] {
    const list = [];
    for(let i = 0; i < arr.length; i++) {
      list.push(arr[i]._name);
    }
    return list;
  }

}
