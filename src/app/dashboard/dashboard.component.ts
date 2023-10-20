import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../models/customer';
import { Invoice } from '../models/Invoice';
import { InvoiceService } from '../services/invoice.service';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { Chart, registerables } from "chart.js";
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from '../services/customer.service';
import { chart } from 'highcharts';
import { ThisReceiver, Type } from '@angular/compiler';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public invoices!: Invoice[];
  public customers!: Customer[];

  
  result: any;
  coinPrice: any;
  coinName: any;
  Chart: any = [];

 
  constructor(private invoiceService: InvoiceService,
    private customerService: CustomerService,private router: Router) {
      Chart.register(...registerables)
     }

  ngOnInit(): void {
    this.getInvoices();
    this.listInvoiceCustomers(); 
   
    this.Chart = new Chart('canvas',{
      type:'line',
      data:{
        labels: ["INV1", "INV2", "INV3", "INV4"] ,
        datasets: [{
          data: [3,4,7,10],
          borderColor: '#3e95cd',
          fill: true,
          label: 'factures',
          backgroundColor: 'rgba(93, 175, 89, 0.1)',
          borderWidth: 3,
        }]
      }
    })

    this.Chart = new Chart('canvas1',{
      type:'line',
      data:{
        labels: ["CL1", "CL2", "CL3"] ,
        datasets: [{
          data: [3,4,7,10],
          borderColor: '#3e95cd',
          fill: true,
          label: 'clients',
          backgroundColor: 'rgba(93, 175, 89, 0.1)',
          borderWidth: 3,
        }]
      }
    })

  }

  public getCustomers(): void {
    this.customerService.getCustomers().subscribe(
      (response: Customer[]) => {
        this.customers = response;
        console.log(this.customers);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  

  public getInvoices(): void {
    this.invoiceService.getInvoices().subscribe(
      (response: Invoice[]) => {
        this.invoices = response;
        console.log(this.invoices);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  listInvoiceCustomers() {
    this.invoiceService.getInvoiceCustomers().subscribe(
      data => {
        console.log('Customers' + JSON.stringify(data));
        this.customers = data;
      }
    );
}

public getInvoicesRowsValue() { 
    return this.invoices.length;
}


public activeRows(): number {
  return this.invoices.filter(i => i.type==="Payé").length;
}
public inactiveRows(): number {
  return this.invoices.filter(i => i.type==="Non Payé").length;
}

public getCustomersRowsValue() { 
  return this.customers.length;
}

invoiceDetail(id: number){
  this.router.navigate(['detail', id]);
}

}
