import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardArrayComponent } from './standard-array.component';

describe('StandardArrayComponent', () => {
  let component: StandardArrayComponent;
  let fixture: ComponentFixture<StandardArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
