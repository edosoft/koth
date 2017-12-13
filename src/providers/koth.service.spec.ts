import { TestBed, inject } from '@angular/core/testing';

import { KothService } from './koth.service';

describe('KothService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KothService]
    });
  });

  it('should be created', inject([KothService], (service: KothService) => {
    expect(service).toBeTruthy();
  }));
});
