
export class BillingConstants {
    public static get ADD_PRODUCT_BUTTON_TOOLTIP(): string { return 'Add Product'; }
    public static get DELETE_SELECTED_PRODUCT_BUTTON_TOOLTIP(): string { return 'Delete Selected Product(s)'; }
}
export class CustomerType {
    public static GST = 'GST';
    public static NON_GST = 'NON_GST';
    public static BOTH = 'BOTH';
}

export class BillType {
    public static GST = 'GST';
    public static NON_GST = 'NON_GST';
}

export class MSName {
    public static BILL_MS = 'Bill-MS';
    public static CUSTOMER_MS = 'Customer-MS';
    public static USER_MS = 'User-MS';
    public static API_AUTH = 'API-AUTH';
}

export class UserAPIName {
    public static SAVE = 'Save';
    public static UPDATE = 'Update';
    public static SEARCH = 'Search';
    public static DELETE = 'Delete';
}

export class AuthAPIName {
    public static SIGN_IN = 'SignIn';
    public static LOGIN = 'Update';
}

export class BillAPIName {
    public static SAVE = 'Save';
    public static UPDATE = 'Update';
    public static SEARCH = 'Search';
    public static DELETE = 'Delete';
}

export class CustomerAPIName {

    public static SAVE = 'Save';
    public static UPDATE = 'Update';
    public static SEARCH = 'Search';
    public static DELETE = 'Delete';
    public static FUZZY = 'Fuzzy';

}
