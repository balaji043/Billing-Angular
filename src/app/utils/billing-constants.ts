import { GridConfig } from '../model/grid-config';
import { TableColumn } from '../model/table-column';

export class BillingConstants {
    public static get ADD_PRODUCT_BUTTON_TOOLTIP(): string { return 'Add Product'; }
    public static get DELETE_SELECTED_PRODUCT_BUTTON_TOOLTIP(): string { return 'Delete Selected Product(s)'; }
    public static CUSTOMER_TABLE_CONFIG(): GridConfig {
        const gridConfig = new GridConfig();
        gridConfig.caption = 'Customer Details';
        gridConfig.uniqueName = 'CUSTOMER_TABLE_CONFIG';
        const taleColumns = [];
        const nameColumn = new TableColumn();
        nameColumn.accessVariableName = 'name';
        nameColumn.columnDisplayName = 'Name';
        nameColumn.type = 'text';
        nameColumn.isSearchFilter = true;
        nameColumn.searchType = 'text';
        taleColumns.push(nameColumn);

        const phoneColumn = new TableColumn();
        phoneColumn.accessVariableName = 'phone';
        phoneColumn.columnDisplayName = 'Phone Number';
        phoneColumn.type = 'text';
        phoneColumn.isSearchFilter = true;
        phoneColumn.searchType = 'text';
        taleColumns.push(phoneColumn);

        const gstIn = new TableColumn();
        gstIn.accessVariableName = 'gstIn';
        gstIn.columnDisplayName = 'GST No.';
        gstIn.type = 'text';
        gstIn.isSearchFilter = true;
        gstIn.searchType = 'text';
        taleColumns.push(gstIn);

        const streetAddress = new TableColumn();
        streetAddress.accessVariableName = 'streetAddress';
        streetAddress.columnDisplayName = 'Street';
        streetAddress.type = 'text';
        streetAddress.isSearchFilter = true;
        streetAddress.searchType = 'text';
        taleColumns.push(streetAddress);

        const city = new TableColumn();
        city.accessVariableName = 'city';
        city.columnDisplayName = 'City';
        city.type = 'text';
        city.isSearchFilter = true;
        city.searchType = 'text';
        taleColumns.push(city);

        const state = new TableColumn();
        state.accessVariableName = 'state';
        state.columnDisplayName = 'State';
        state.type = 'text';
        state.isSearchFilter = true;
        state.searchType = 'text';
        taleColumns.push(state);

        const zipCode = new TableColumn();
        zipCode.accessVariableName = 'zipCode';
        zipCode.columnDisplayName = 'ZIP Code';
        zipCode.type = 'text';
        zipCode.isSearchFilter = true;
        zipCode.searchType = 'text';
        taleColumns.push(zipCode);

        gridConfig.columns = taleColumns;
        return gridConfig;
    }
}
