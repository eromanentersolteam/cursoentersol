import { TestBed, inject } from '@angular/core/testing';

import { CountriesServiceService } from './countries-service.service';

describe('CountriesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountriesServiceService]
    });
  });

  it('should be created', inject([CountriesServiceService], (service: CountriesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
