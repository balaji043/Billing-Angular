import { GridConfig } from '../model/grid-config';
import { TableColumn } from '../model/table-column';

export class BillingConstants {
    public static get ADD_PRODUCT_BUTTON_TOOLTIP(): string { return 'Add Product'; }
    public static get DELETE_SELECTED_PRODUCT_BUTTON_TOOLTIP(): string { return 'Delete Selected Product(s)'; }
    public static CUSTOMER_TABLE_CONFIG = new GridConfig(
        'Customer Details',
        'CUSTOMER_TABLE_CONFIG',
        [
            new TableColumn('name', 'Name', 'text'),
            new TableColumn('phone', 'Phone Number', 'text'),
            new TableColumn('gstIn', 'GST No', 'text'),
            new TableColumn('streetAddress', 'Street', 'text'),
            new TableColumn('city', 'City', 'text'),
            new TableColumn('state', 'State', 'text'),
            new TableColumn('zipCode', 'ZIP Code', 'text')
        ]
    );
}
