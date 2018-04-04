import { TestBed, inject } from '@angular/core/testing';

import { ServicioGasolinaService } from './servicio-gasolina.service';

describe('ServicioGasolinaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioGasolinaService]
    });
  });

  it('should be created', inject([ServicioGasolinaService], (service: ServicioGasolinaService) => {
    expect(service).toBeTruthy();
  }));
});
