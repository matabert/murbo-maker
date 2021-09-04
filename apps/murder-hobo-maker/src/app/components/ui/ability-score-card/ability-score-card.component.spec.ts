import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityScoreCardComponent } from './ability-score-card.component';

describe('AbilityScoreCardComponent', () => {
  let component: AbilityScoreCardComponent;
  let fixture: ComponentFixture<AbilityScoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityScoreCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
