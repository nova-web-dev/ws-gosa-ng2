import { TestBed, inject } from '@angular/core/testing';

import { FakepressService } from './fakepress.service';

describe('FakepressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakepressService]
    });
  });

  it('should ...', inject([FakepressService], (service: FakepressService) => {
    expect(service).toBeTruthy();
  }));
});
