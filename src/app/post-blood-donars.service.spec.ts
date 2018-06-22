import { TestBed, inject } from '@angular/core/testing';

import { PostBloodDonarsService } from './post-blood-donars.service';

describe('PostBloodDonarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostBloodDonarsService]
    });
  });

  it('should be created', inject([PostBloodDonarsService], (service: PostBloodDonarsService) => {
    expect(service).toBeTruthy();
  }));
});
