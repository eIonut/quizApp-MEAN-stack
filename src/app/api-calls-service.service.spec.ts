import { TestBed } from '@angular/core/testing';

import { ApiCallsServiceService } from './api-calls-service.service';

describe('ApiCallsServiceService', () => {
  let service: ApiCallsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCallsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
