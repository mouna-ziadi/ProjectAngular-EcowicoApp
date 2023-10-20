import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Chart } from "chart.js";
import { Customer } from '../models/customer';
import { HttpErrorResponse } from '@angular/common/http';
//import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

//import paginate = require('jw-paginate');

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit{

  public customers!: Customer[];
  orders : Customer [] = [];
  config:any;

  

  constructor(private customerService: CustomerService ) { }

  ngOnInit(): void {
    this.getCustomers();
    //this.customerService.getCustomers(2,4,8).pipe(first()).subscribe(orders => this.orders = orders);
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

  
}

