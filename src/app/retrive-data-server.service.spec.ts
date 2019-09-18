import { TestBed } from '@angular/core/testing';

import { RetriveDataServerService } from './retrive-data-server.service';

describe('RetriveDataServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetriveDataServerService = TestBed.get(RetriveDataServerService);
    expect(service).toBeTruthy();
  });
});
