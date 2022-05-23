import { TestBed } from '@angular/core/testing';

import { ProductosSucursalesService } from './productos-sucursales.service';

describe('ProductosSucursalesService', () => {
  let service: ProductosSucursalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosSucursalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
