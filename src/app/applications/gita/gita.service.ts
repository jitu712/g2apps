import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitaService {

  gitaToken;

  constructor(private http: HttpClient) {
    this.getAuthToken().subscribe( tokenObject => {
      this.gitaToken = (tokenObject as any).access_token;
    });
  }


  getChapters() {
    return this.http.get('https://bhagavadgita.io/api/v1/chapters?access_token=' + this.gitaToken);
  }

  getAuthToken() {
    const headers = new HttpHeaders();
    headers.append('accept', 'application/json');
    headers.append('content-type', 'application/x-www-form-urlencoded');

    const tokenParams = new FormData();
    tokenParams.append('client_id', '2DBFNZs6FJfIr9pK0NZWYBwU9JUt68rkzboCk6Nf');
    tokenParams.append('client_secret', 'JUH9u5nmAqzEjmgTH6xmEbbaHBnILzkhvUtSRIB8zMqr4ImPad');
    tokenParams.append('grant_type', 'client_credentials');
    tokenParams.append('scope', 'verse chapter');

    return this.http.post('https://bhagavadgita.io/auth/oauth/token', tokenParams, { headers });
  }
}
