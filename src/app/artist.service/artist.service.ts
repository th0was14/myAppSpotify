import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Artist } from '../artist/artist';
import { SpotifyAuthService } from '../spotify-auth/spotify-auth.service';

@Injectable()
export class ArtistServiceService {

  private urlApiArtist = 'https://api.spotify.com/v1/artists';

  constructor(private spotifyAuthService: SpotifyAuthService, private http: Http) { }

  GetArtists(): Observable<Artist[]> {
    const myHeaders: Headers = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('authorization', 'Bearer ' + this.spotifyAuthService.getBearerToken());

    const options = {
      headers: myHeaders
    };

    return this.http.get(this.urlApiArtist, options)
    .map(response => response.json())
    .catch(err => Observable.throw(err.json().error || 'Server error'));
  }

}
