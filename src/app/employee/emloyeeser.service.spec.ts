import { TestBed } from '@angular/core/testing';

import { EmloyeeserService } from './emloyeeser.service';

describe('EmloyeeserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmloyeeserService = TestBed.get(EmloyeeserService);
    expect(service).toBeTruthy();
  });
});
