import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { Invoice } from '../models/Invoice';
import { InvoiceService } from '../services/invoice.service';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.sass']
})
export class InvoicesComponent implements OnInit {

  public invoices!: Invoice[];
  public editInvoice!: Invoice;
  public deleteInvoice!: Invoice;
  public customers!: Customer[];


  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.getInvoices();
    this.listInvoiceCustomers();
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


public onUpdateInvoice(invoice: Invoice): void {
  this.invoiceService.updateInvoice(invoice).subscribe(
    (response: Invoice) => {
      console.log(response);
      this.getInvoices();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}


public onDeleteInvoice(invoiceId: number): void {
  this.invoiceService.deleteInvoice(invoiceId).subscribe(
    (response: void) => {
      console.log(response);
      this.getInvoices();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}


public onOpenModal(invoice: Invoice, mode: string): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  if (mode === 'add') {
    button.setAttribute('data-target', '#addInvoiceModal');
  }
  if (mode === 'edit') {
    this.editInvoice = invoice;
    button.setAttribute('data-target', '#updateInvoiceModal');
  }
  if (mode === 'delete') {
    this.deleteInvoice = invoice;
    button.setAttribute('data-target', '#deleteInvoiceModal');
  }
  container!.appendChild(button);
  button.click();
}




}
