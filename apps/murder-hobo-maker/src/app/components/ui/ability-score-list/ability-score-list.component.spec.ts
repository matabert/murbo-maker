import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityScoreListComponent } from './ability-score-list.component';

describe('AbilityScoreListComponent', () => {
  let component: AbilityScoreListComponent;
  let fixture: ComponentFixture<AbilityScoreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityScoreListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityScoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
