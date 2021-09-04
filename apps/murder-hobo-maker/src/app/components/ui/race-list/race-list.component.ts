/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Race } from '../../../models/character/options/race.model';

@Component({
  selector: 'matabert-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.css']
})
export class RaceListComponent implements OnInit {

  @Output() activeRaceOut: EventEmitter<Race> = new EventEmitter<Race>();

  races: Race[] = [];
  

  constructor() { }

  ngOnInit(): void { }

}
