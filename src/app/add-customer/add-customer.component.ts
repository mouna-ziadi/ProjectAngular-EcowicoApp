import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.sass']
})
export class AddCustomerComponent implements OnInit {

  
  customer: Customer = new Customer();


    constructor(private _customerService: CustomerService,
                private _router: Router) { }
  
    ngOnInit(): void {
      
    }
  
    saveCustomer() {
      this._customerService.addCustomer(this.customer).subscribe(
        data => {
          console.log('response', data);
          this._router.navigateByUrl("/customers");
        }
      )
    }
}  


