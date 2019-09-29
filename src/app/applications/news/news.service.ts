import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  private apiKey = '80e6dc6a-708b-4480-9a6f-2aecc091db0f';

  constructor(
    private http: HttpClient
  ) { }

  getNews() {
    return this.http.get('https://content.guardianapis.com/search?api-key=' + this.apiKey);
  }
}
