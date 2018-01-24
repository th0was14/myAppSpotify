import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SpotifyAuthService {

  client_id = '724ff354a4d2406289cc0174fe77761f';
  client_secret = '4f04b9c3aab146d982adf9b1efd11119';
  authOptions: any = {};

  constructor(private http: Http) {
    this.authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      'Access-Control-Allow-Origin': '*',
      headers: {
        'Authorization': 'Basic ' + (new Buffer(this.client_id + ':' + this.client_secret).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    };

  }

  getBearerToken(): string {

    this.http.post(this.authOptions.url, this.authOptions).subscribe(response => {
      if (response) {
        console.log(response);
      }
    });

    // tslint:disable-next-line:max-line-length
    return 'BQBnP1EVqQTa1ZdmzDAkzDEoPxSm1KH2ufSCOI5ydZTMbZG5-hhkUKohnDiseEBlLf29qtZZW1XvkctqudctXcnYwzOobtrAzzsz284dDiKogCW-t9CTeGVyZ2ElHreyjSGLWflvIEIj1etpJA7DE9aRLw';
  }

}
