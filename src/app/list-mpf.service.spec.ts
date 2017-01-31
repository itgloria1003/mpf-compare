/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListMpfService } from './list-mpf.service';

describe('ListMpfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListMpfService]
    });
  });

  it('should ...', inject([ListMpfService], (service: ListMpfService) => {
    expect(service).toBeTruthy();
  }));
});
