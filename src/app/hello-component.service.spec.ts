import { TestBed } from '@angular/core/testing';

import { HelloComponentService } from './hello-component.service';

describe('HelloComponentService', () => {
  let service: HelloComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
