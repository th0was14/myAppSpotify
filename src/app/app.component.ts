import { Component } from '@angular/core';
import { ArtistServiceService } from './artist.service/artist.service';
import { Artist } from './artist/artist';
import { SpotifyAuthService } from './spotify-auth/spotify-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _artistService: ArtistServiceService, private _spotifyAuthService: SpotifyAuthService) {
    this.GetArtist();
  }

  GetArtist() {
    // this._artistService.GetArtists().subscribe((artists: Artist[]) => {
    //   if (artists) {
    //     console.log(artists.length);
    //   }
    // });
    this._spotifyAuthService.getBearerToken();
  }

}
