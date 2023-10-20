import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Invoice } from '../models/Invoice';
import { InvoiceService } from '../services/invoice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { jsPDF } from "jspdf";


@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.sass']
})
export class InvoiceDetailComponent implements OnInit {
  
  @ViewChild('content', {static: false}) el!: ElementRef;

  id!:number;
  invoice!: Invoice;

  today = new Date();

  constructor(private route: ActivatedRoute, private router: Router,
    private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.invoice = new Invoice();
    this.id = this.route.snapshot.params['id'];
    this.invoiceService.getInvoiceById(this.id)
    .subscribe(data=>{
      console.log(data)
      this.invoice=data;
    },error => console.log(error));
    
  }
 
  list(){
    this.router.navigate(['dashboard']);
  }

  makePDF(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=>{
        pdf.save("facture.pdf");
      }
    })
    
  }
}
