import { Customer } from "../customer/customer.class";
import { Orderline } from "../orderline/orderline.class";


export class Order {
    id: number = 0;
    date: Date = new Date();
    description: string = "";
    total: number = 0;
    status: string = "NEW";
    customerId: number = 0;
    customer: Customer | null = null;
    orderlines: Orderline[] | null = null;
}