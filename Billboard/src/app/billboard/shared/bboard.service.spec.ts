import { TestBed, inject } from '@angular/core/testing';

import { BboardService } from './bboard.service';

describe('BboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BboardService]
    });
  });

  it('should be created', inject([BboardService], (service: BboardService) => {
    expect(service).toBeTruthy();
  }));
});
