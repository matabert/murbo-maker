import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollCardComponent } from './dice-roll-card.component';

describe('DiceRollCardComponent', () => {
  let component: DiceRollCardComponent;
  let fixture: ComponentFixture<DiceRollCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceRollCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
