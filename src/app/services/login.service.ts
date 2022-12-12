import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'http://localhost:8000/auth';

  headers : HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) { }

  login(data : any) {
    const url_api = `${this.apiUrl}/login`;
    return this.http.post<LoginResponse>(url_api, data, {headers: this.headers});
  }
}
