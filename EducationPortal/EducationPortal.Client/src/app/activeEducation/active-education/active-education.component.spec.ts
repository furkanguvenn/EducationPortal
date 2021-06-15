import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEducationComponent } from './active-education.component';

describe('ActiveEducationComponent', () => {
  let component: ActiveEducationComponent;
  let fixture: ComponentFixture<ActiveEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
