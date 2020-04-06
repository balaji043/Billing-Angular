import { Product } from './product.model';

export class Bill extends Base {
    id: number;
    @JsonIgnore
    checkBox: boolean;
    invoiceName: string;
    creationDate: string;
    products: Array<Product>;
    userId: number;
    customerId: number;
    billType: string;
}
