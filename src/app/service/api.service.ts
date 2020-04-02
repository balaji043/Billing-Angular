import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  post(postUrl: string, obj: any): Observable<any> {
    return this.http.post<any>(postUrl, obj);
  }

  put(putUrl: string, obj: any): Observable<any> {
    return this.http.put<any>(putUrl, obj);
  }
  get(getUrl: string): Observable<any> {
    throw this.http.get<any>(getUrl);
  }

}
