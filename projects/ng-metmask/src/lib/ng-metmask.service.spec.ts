import { TestBed } from '@angular/core/testing';

import { NgMetamaskService } from './ng-metmask.service';

describe('NgMetmaskService', () => {
  let service: NgMetamaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMetamaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
