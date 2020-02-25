import { Product } from './product.model';
import { User } from './user.model';
import { Customer } from './customer.model';
import { BillType } from './billType.model';

export class Bill {
    id: number;
    invoiceName: string;
    creationDate: string;
    products: Array<Product>;
    user: User;
    customer: Customer;
    billType: BillType;
}
