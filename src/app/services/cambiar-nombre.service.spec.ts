import { TestBed } from '@angular/core/testing';

import { CambiarNombreService } from './cambiar-nombre.service';

describe('CambiarNombreService', () => {
  let service: CambiarNombreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CambiarNombreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
