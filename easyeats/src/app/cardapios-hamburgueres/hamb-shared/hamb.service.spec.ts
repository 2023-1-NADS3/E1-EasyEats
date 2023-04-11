import { TestBed } from '@angular/core/testing';

import { HambService } from './hamb.service';

describe('HambService', () => {
  let service: HambService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HambService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
