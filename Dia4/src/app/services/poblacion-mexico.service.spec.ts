import { TestBed, inject } from '@angular/core/testing';

import { PoblacionMexicoService } from './poblacion-mexico.service';

describe('PoblacionMexicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoblacionMexicoService]
    });
  });

  it('should be created', inject([PoblacionMexicoService], (service: PoblacionMexicoService) => {
    expect(service).toBeTruthy();
  }));
});
