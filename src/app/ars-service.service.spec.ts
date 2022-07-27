import { TestBed } from '@angular/core/testing';

import { ARSServiceService } from './ars-service.service';



describe('ARSServiceService', () => {
  let service: ARSServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ARSServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
