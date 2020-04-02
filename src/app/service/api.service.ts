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

  post(url: string, obj: any): Observable<any> {
    return this.http.post<any>(url, obj);
  }

  put(url: string, obj: any): Observable<any> {
    return this.http.put<any>(url, obj);
  }
}
