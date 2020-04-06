import { CustomerType } from '../utils/billing-constants';

export class CustomerRequest {
    customerType: string;
    constructor() {
        this.customerType = CustomerType.BOTH;
    }
}
