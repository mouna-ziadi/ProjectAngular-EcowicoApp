import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { Invoice } from '../models/Invoice';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.sass']
})
export class AddInvoiceComponent implements OnInit {
  invoice: Invoice = new Invoice();
  public customers!: Customer[];


  constructor(private _invoiceService: InvoiceService,
              private _router: Router) { }

  ngOnInit(): void {
    this.listInvoiceCustomers();
  }

  saveInvoice() {
    this._invoiceService.addInvoice(this.invoice).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/invoices");
      }
    )
  }

  listInvoiceCustomers() {
    this._invoiceService.getInvoiceCustomers().subscribe(
      data => {
        console.log('Customers' + JSON.stringify(data));
        this.customers = data;
      }
    );
}

}
