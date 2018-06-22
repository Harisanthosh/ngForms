import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PostBloodDonarsService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
   URL: string = "http://localhost:5000/bloodDonars";
  // URL: string = "http://localhost:3000/bloodDonors";
  onPostData(data): Observable<{}> {
    return this.http.post(this.URL, data, this.httpOptions);
  }
}
