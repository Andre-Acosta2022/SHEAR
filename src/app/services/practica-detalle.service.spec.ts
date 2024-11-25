import { TestBed } from '@angular/core/testing';

import { PracticaDetalleService } from '../services/practica-detalle.service';

describe('PracticaDetalleService', () => {
  let service: PracticaDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticaDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
