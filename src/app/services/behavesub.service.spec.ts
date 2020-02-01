import { TestBed } from '@angular/core/testing';

import { BehavesubService } from './behavesub.service';

describe('BehavesubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BehavesubService = TestBed.get(BehavesubService);
    expect(service).toBeTruthy();
  });
});
