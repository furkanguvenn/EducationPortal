import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestListeduComponent } from './request-listedu.component';

describe('RequestListeduComponent', () => {
  let component: RequestListeduComponent;
  let fixture: ComponentFixture<RequestListeduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestListeduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListeduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
