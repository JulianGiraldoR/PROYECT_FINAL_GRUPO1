import { TestBed } from '@angular/core/testing';

import { PrivateProductsService } from './private-products.service';

describe('PrivateProductsService', () => {
  let service: PrivateProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivateProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
