import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';

import { HttpClientModule } from "@angular/common/http";
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { AproposComponent } from './apropos/apropos.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

import { MatTableModule } from '@angular/material/table';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    AddCustomerComponent,
    InvoicesComponent,
    AproposComponent,
    AddInvoiceComponent,
    DashboardComponent,
    InvoiceDetailComponent,
    TestComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    NgChartsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
