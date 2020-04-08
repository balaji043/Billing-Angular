import { GridConfig } from 'src/app/model/generic-grid.config';
import { TableColumn } from 'src/app/model/table-column.config';

export function CustomerTableConfig(): GridConfig {

    const gridConfig = new GridConfig();
    gridConfig.caption = 'Customer Details';
    gridConfig.uniqueName = 'CUSTOMER_TABLE_CONFIG';
    gridConfig.isPaginationRequired = true;
    gridConfig.paginationOptions = [5, 10, 15, 20];

    const taleColumns = [];

    const nameColumn = new TableColumn();
    nameColumn.accessVariableName = 'name';
    nameColumn.columnDisplayName = 'Name';
    nameColumn.type = 'text';
    nameColumn.searchType = 'text';


    taleColumns.push(nameColumn);

    const phoneColumn = new TableColumn();
    phoneColumn.accessVariableName = 'phoneNumber';
    phoneColumn.columnDisplayName = 'Phone Number';
    phoneColumn.type = 'text';
    phoneColumn.searchType = 'text';

    taleColumns.push(phoneColumn);

    const gstNo = new TableColumn();
    gstNo.accessVariableName = 'gstNo';
    gstNo.columnDisplayName = 'GST No.';
    gstNo.type = 'text';
    gstNo.searchType = 'text';

    taleColumns.push(gstNo);

    const streetAddress = new TableColumn();
    streetAddress.accessVariableName = 'street';
    streetAddress.columnDisplayName = 'Street';
    streetAddress.type = 'text';
    streetAddress.searchType = 'text';

    taleColumns.push(streetAddress);

    const city = new TableColumn();
    city.accessVariableName = 'city';
    city.columnDisplayName = 'City';
    city.type = 'text';
    city.searchType = 'text';

    taleColumns.push(city);

    const state = new TableColumn();
    state.accessVariableName = 'state';
    state.columnDisplayName = 'State';
    state.type = 'text';
    state.searchType = 'text';

    taleColumns.push(state);

    const zipCode = new TableColumn();
    zipCode.accessVariableName = 'zipCode';
    zipCode.columnDisplayName = 'ZIP Code';
    zipCode.type = 'text';
    zipCode.searchType = 'text';

    taleColumns.push(zipCode);

    gridConfig.columns = taleColumns;

    return gridConfig;
}
