import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { GenerateAbilityScoresComponent } from './components/generate-ability-scores/generate-ability-scores.component';
import { SelectBackgroundComponent } from './components/select-background/select-background.component';
import { SelectRaceComponent } from './components/select-race/select-race.component';
import { AbilityScoreCardComponent } from './components/ui/ability-score-card/ability-score-card.component';
import { AbilityScoreListComponent } from './components/ui/ability-score-list/ability-score-list.component';
import { DiceRollsComponent } from './components/generate-ability-scores/dice-rolls/dice-rolls.component';
import { ManualEntryComponent } from './components/generate-ability-scores/manual-entry/manual-entry.component';
import { PointBuyComponent } from './components/generate-ability-scores/point-buy/point-buy.component';
import { StandardArrayComponent } from './components/generate-ability-scores/standard-array/standard-array.component';
import { DiceRollCardComponent } from './components/ui/dice-roll-card/dice-roll-card.component';
import { BackgroundListComponent } from './components/ui/background-list/background-list.component';
import { BackgroundDisplayComponent } from './components/ui/background-display/background-display.component';
import { RaceListComponent } from './components/ui/race-list/race-list.component';

@NgModule({
  declarations: [
    AppComponent, 
    GenerateAbilityScoresComponent, 
    SelectBackgroundComponent, 
    SelectRaceComponent, 
    AbilityScoreCardComponent, AbilityScoreListComponent, DiceRollsComponent, ManualEntryComponent, PointBuyComponent, StandardArrayComponent, DiceRollCardComponent, BackgroundListComponent, BackgroundDisplayComponent, RaceListComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatExpansionModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
