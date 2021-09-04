import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundDisplayComponent } from './background-display.component';

describe('BackgroundDisplayComponent', () => {
  let component: BackgroundDisplayComponent;
  let fixture: ComponentFixture<BackgroundDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
