import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllListEducationComponent } from './all-list-education.component';

describe('AllListEducationComponent', () => {
  let component: AllListEducationComponent;
  let fixture: ComponentFixture<AllListEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllListEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllListEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
