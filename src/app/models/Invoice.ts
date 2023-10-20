import { Customer } from "./customer";

export class Invoice {
    id!: number;
    amountBilled!: number; 
    taxesBilled!: number;
    invcDate!: Date;
    customer!: Customer;
    type!: String; 
}   