import { Customer } from './customer.model';
import { Item } from './item.model';

export class Order {
    public number: string;
    public date: Date;
    public status: string;
    public total: number;
    public customer: Customer;
    public items: Item[];
}