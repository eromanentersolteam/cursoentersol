import { TestBed, inject } from '@angular/core/testing';

import { PopulationMexicoService } from './population-mexico.service';

describe('PopulationMexicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopulationMexicoService]
    });
  });

  it('should be created', inject([PopulationMexicoService], (service: PopulationMexicoService) => {
    expect(service).toBeTruthy();
  }));
});
