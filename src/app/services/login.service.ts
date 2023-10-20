import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private getUrl: string = "http://localhost:8034";
  constructor(private _http: HttpClient) { }

  loginUser(login: login): Observable<object> {
    console.log(login)
    return this._http.post(`${this.getUrl}/ecowico/logintest`, login);
  }
}
