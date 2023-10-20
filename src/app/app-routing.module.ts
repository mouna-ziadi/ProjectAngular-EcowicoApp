import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { AproposComponent } from './apropos/apropos.component';

import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path:'', component: DashboardComponent
  },
  {
    path:'customers', component: CustomersComponent
  },
  {
    path:'addCustomer', component: AddCustomerComponent
  },
  {
    path: 'invoices', component: InvoicesComponent
  },
  {
    path: 'Apropos', component: AproposComponent
  },
  {
    path:'addInvoice', component: AddInvoiceComponent
  },
  {
    path:'dashboard', component: DashboardComponent
  },
  {
    path:'detail/:id', component: InvoiceDetailComponent
  },
  {
    path:'test', component: TestComponent
  },
  {
    path:'login', component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
