import { TestBed } from '@angular/core/testing';

import { UsearchService } from './usearch.service';

describe('UsearchService', () => {
  let service: UsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
