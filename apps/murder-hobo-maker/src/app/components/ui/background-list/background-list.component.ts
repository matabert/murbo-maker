/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Background } from '../../../models/character/options/background.model';
import { DummyData } from '../dummy-data';

@Component({
  selector: 'matabert-background-list',
  templateUrl: './background-list.component.html',
  styleUrls: ['./background-list.component.css']
})
export class BackgroundListComponent implements OnInit {

  @Output() activeBackgroundOut: EventEmitter<Background> = new EventEmitter<Background>();
  
  backgrounds: Background[] = DummyData.bgList;
  tableColumns: string[] = ["Name", "Skills"];
  activeBackground?: Background;

  constructor() { }

  ngOnInit(): void { }
  
  selectBackground(bg: Background): void {
    this.activeBackground = bg;
    console.log(`Selected Background: ${this.activeBackground._name}`);
    this.activeBackgroundOut.emit(this.activeBackground);
  }
  
}
