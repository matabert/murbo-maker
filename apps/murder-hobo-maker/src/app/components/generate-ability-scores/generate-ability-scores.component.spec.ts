import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateAbilityScoresComponent } from './generate-ability-scores.component';

describe('GenerateAbilityScoresComponent', () => {
  let component: GenerateAbilityScoresComponent;
  let fixture: ComponentFixture<GenerateAbilityScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateAbilityScoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateAbilityScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
