export class Customer {
    id: number;
    name: string;
    phone: string;
    gstIn: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    constructor(id: number) {
        this.id = id;
        this.name = 'Name';
        this.phone = '9876543217';
        this.gstIn = '646546797878';
        this.streetAddress = 'street';
        this.city = 'city';
        this.state = 'state';
        this.zipCode = 'zipCode';
    }
}
