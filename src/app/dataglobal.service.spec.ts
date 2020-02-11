import { TestBed } from '@angular/core/testing';

import { DataglobalService } from './dataglobal.service';

describe('DataglobalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataglobalService = TestBed.get(DataglobalService);
    expect(service).toBeTruthy();
  });
});
