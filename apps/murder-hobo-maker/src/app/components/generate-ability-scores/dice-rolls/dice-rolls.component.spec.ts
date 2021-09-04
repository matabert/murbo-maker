import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollsComponent } from './dice-rolls.component';

describe('DiceRollsComponent', () => {
  let component: DiceRollsComponent;
  let fixture: ComponentFixture<DiceRollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceRollsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
