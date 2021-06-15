import { TestBed } from '@angular/core/testing';

import { CreateEducationService } from './create-education.service';

describe('CreateEducationService', () => {
  let service: CreateEducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateEducationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
