import { TestBed, inject } from '@angular/core/testing';

import { ArtistServiceService } from './artist.service';
import { SpotifyAuthService } from '../spotify-auth/spotify-auth.service';
import { HttpModule } from '@angular/http';

describe('ArtistServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ArtistServiceService, SpotifyAuthService]
    });
  });

  it('should be created', inject(
    [ArtistServiceService, SpotifyAuthService], (service: ArtistServiceService, authService: SpotifyAuthService) => {
    expect(service).toBeTruthy();
  }));

  // it('should be call', inject(
  //   [ArtistServiceService, SpotifyAuthService], (service: ArtistServiceService, authService: SpotifyAuthService) => {
  //   expect(service.GetArtists).toBeTruthy();
  // }));

});
