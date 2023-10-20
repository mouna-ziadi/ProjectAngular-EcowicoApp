
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.sass']
})
export class CustomersComponent implements OnInit {

  public customers!: Customer[];
  public editCustomer!: Customer;
  public deleteCustomer!: Customer;


  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
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
 


  public onAddCustomer(addForm: NgForm): void {
    document.getElementById('add-customer-form')!.click();
    this.customerService.addCustomer(addForm.value).subscribe(
      (response: Customer) => {
        console.log(response);
        this.getCustomers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateCustomer(customer: Customer): void {
    this.customerService.updateCustomer(customer).subscribe(
      (response: Customer) => {
        console.log(response);
        this.getCustomers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCustomer(customerId: number): void {
    this.customerService.deleteCustomer(customerId).subscribe(
      (response: void) => {
        console.log(response);
        this.getCustomers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }




  public onOpenModal(customer: Customer, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCustomerModal');
    }
    if (mode === 'edit') {
      this.editCustomer = customer;
      button.setAttribute('data-target', '#updateCustomerModal');
    }
    if (mode === 'delete') {
      this.deleteCustomer = customer;
      button.setAttribute('data-target', '#deleteCustomerModal');
    }
    container!.appendChild(button);
    button.click();
  }


}
