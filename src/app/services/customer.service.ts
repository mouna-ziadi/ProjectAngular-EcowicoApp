import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';
const apikey = 'coinrankingc032026f93e3b94c047c89523ca837327c4dac81e1070686'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-My-custom-Header': `${apikey}`,
    'Access-Control-Allow-Origin': '*'
  })
}
@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private apiServerUrl = environment.apiBaseUrl;
  private getUrl: string = "http://localhost:8034";
  constructor(private _http: HttpClient){}

  public getCustomers(): Observable<Customer[]> {
    return this._http.get<Customer[]>(`${this.apiServerUrl}/ecowico/all`);
  }

  public addCustomer(customer: Customer): Observable<Customer> {
    return this._http.post<Customer>(`${this.getUrl}/ecowico/add`, customer);
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    return this._http.put<Customer>(`${this.getUrl}/ecowico/update`, customer);
  }

  public deleteCustomer(customerId: number): Observable<void> {
    return this._http.delete<void>(`${this.getUrl}/ecowico/delete/${customerId}`);
  }
  
  getAll(params: any): Observable<any> {
    return this._http.get<any>(`${this.apiServerUrl}/ecowico/all`, { params });
  }


  
}


