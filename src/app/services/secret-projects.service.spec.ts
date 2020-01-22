import { TestBed } from '@angular/core/testing';

import { SecretProjectsService } from './secret-projects.service';

describe('SecretProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecretProjectsService = TestBed.get(SecretProjectsService);
    expect(service).toBeTruthy();
  });
});
