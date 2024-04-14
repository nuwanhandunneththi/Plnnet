import { TestBed } from '@angular/core/testing';

import { PlannetService } from './plannet.service';

describe('PlannetService', () => {
  let service: PlannetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlannetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
