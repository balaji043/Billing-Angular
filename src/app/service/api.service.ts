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

  public post(postUrl: string, obj: any): Observable<any> {
    return this.http.post<any>(postUrl, obj);
  }

  public put(putUrl: string, obj: any): Observable<any> {
    return this.http.put<any>(putUrl, obj);
  }

  public get(getUrl: string): Observable<any> {
    return this.http.get<any>(getUrl);
  }

  public addRequestParam(url: string, key: string, value: string): string {
    return url + '?' + key + '=' + value;
  }
}
