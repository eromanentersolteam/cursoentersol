import { TestBed, inject } from '@angular/core/testing';

import { PopulationMexico32Service } from './population-mexico-32.service';

describe('PopulationMexico32Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopulationMexico32Service]
    });
  });

  it('should be created', inject([PopulationMexico32Service], (service: PopulationMexico32Service) => {
    expect(service).toBeTruthy();
  }));
});
