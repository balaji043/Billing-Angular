import { GridConfig } from 'src/app/model/grid-config';
import { TableColumn } from 'src/app/model/table-column';

export function CustomerTableConfig(): GridConfig {

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
    phoneColumn.accessVariableName = 'phoneNumber';
    phoneColumn.columnDisplayName = 'Phone Number';
    phoneColumn.type = 'text';
    phoneColumn.isSearchFilter = true;
    phoneColumn.searchType = 'text';

    taleColumns.push(phoneColumn);

    const gstNo = new TableColumn();
    gstNo.accessVariableName = 'gstNo';
    gstNo.columnDisplayName = 'GST No.';
    gstNo.type = 'text';
    gstNo.isSearchFilter = true;
    gstNo.searchType = 'text';

    taleColumns.push(gstNo);

    const streetAddress = new TableColumn();
    streetAddress.accessVariableName = 'street';
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
