/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Background } from '../../models/character/options/background.model';
import { CharacterDataService } from '../../services/character-data.service';

@Component({
  selector: 'matabert-select-background',
  templateUrl: './select-background.component.html',
  styleUrls: ['./select-background.component.css']
})
export class SelectBackgroundComponent implements OnInit {

  activeBackground: Background = {
    _name: "Select a Background",
    _description: "Your character's background is a representation of their life prior to becoming an adventurer. Over the course of this period your character came to be proficient with certain skills and/or tools, and some belongings.",
    _feature: {
      _name: "Background Feature",
      _description: "Each background comes with a feature that gives your character benefits based on the connections they would have made during this time in their lives."
    }
  };

  constructor(private characterData: CharacterDataService) { }

  ngOnInit(): void { }

  activateBackground(bg: Background): void {
    this.activeBackground = bg;
    console.log(`${this.activeBackground._name} is now the active background.`);
  }
}
