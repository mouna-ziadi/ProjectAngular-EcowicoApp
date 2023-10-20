import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';
import { Invoice } from '../models/Invoice';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

 
  private apiServerUrl = environment.apiBaseUrl;
  private getUrl: string = "http://localhost:8034";
 
  constructor(private _http: HttpClient){}

  public getInvoices(): Observable<Invoice[]> {
    return this._http.get<Invoice[]>(`${this.apiServerUrl}/ecowico/allInvoices`);
  }

  public addInvoice(invoice: Invoice): Observable<Invoice> {
    return this._http.post<Invoice>(`${this.getUrl}/ecowico/addInvoice`, invoice);
  }

  public updateInvoice(invoice: Invoice): Observable<Invoice> {
    return this._http.put<Invoice>(`${this.getUrl}/ecowico/updateInvoice`, invoice);
  }

  public deleteInvoice(invoiceId: number): Observable<void> {
    return this._http.delete<void>(`${this.getUrl}/ecowico/deleteInvoice/${invoiceId}`);
  }

  //////////
  getInvoiceCustomers(): Observable<Customer[]> {
    return this._http.get<Customer[]>(`${this.apiServerUrl}/ecowico/all`);
   }

   public getPercentCount(): Observable<Object[]> {
    return this._http.get<Object[]>(`${this.apiServerUrl}/ecowico/percentCount`);
  }

  getInvoiceById(id: number): Observable<any> {
    return this._http.get(`${this.getUrl}/ecowico/invoice/${id}`);
  }



}
