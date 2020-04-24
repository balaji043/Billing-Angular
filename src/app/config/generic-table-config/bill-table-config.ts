import { GridConfig } from 'src/app/model/generic-grid.config';
import { TableColumn } from 'src/app/model/table-column.config';

export function BillTableConfig(): GridConfig {

    const gridConfig = new GridConfig();
    gridConfig.caption = 'View Bill';
    gridConfig.uniqueName = 'BILL_TABLE_CONFIG';
    gridConfig.isPaginationRequired = true;
    gridConfig.paginationOptions = [5, 10, 15, 20];

    const taleColumns = [];

    const customerNameColumn = new TableColumn();
    customerNameColumn.accessVariableName = 'customerName';
    customerNameColumn.columnDisplayName = 'Customer Name';
    customerNameColumn.type = 'text';

    taleColumns.push(customerNameColumn);

    const placeColumn = new TableColumn();
    placeColumn.accessVariableName = 'place';
    placeColumn.columnDisplayName = 'Place';
    placeColumn.type = 'text';

    taleColumns.push(placeColumn);

    const invoiceColumn = new TableColumn();
    invoiceColumn.accessVariableName = 'invoice';
    invoiceColumn.columnDisplayName = 'Invoice';
    invoiceColumn.type = 'text';

    taleColumns.push(invoiceColumn);

    const dateColumn = new TableColumn();
    dateColumn.accessVariableName = 'date';
    dateColumn.columnDisplayName = 'Date';
    dateColumn.type = 'text';

    taleColumns.push(dateColumn);

    const invoiceAmountColumn = new TableColumn();
    invoiceAmountColumn.accessVariableName = 'invoiceAmount';
    invoiceAmountColumn.columnDisplayName = 'Invoice Amount';
    invoiceAmountColumn.type = 'text';
    invoiceAmountColumn.searchType = 'text';

    taleColumns.push(invoiceAmountColumn);

    const userName = new TableColumn();
    userName.accessVariableName = 'userName';
    userName.columnDisplayName = 'User Name';
    userName.type = 'text';

    taleColumns.push(userName);

    const editIcon = new TableColumn();
    editIcon.accessVariableName = 'editIconButton';
    editIcon.type = 'icon_button';
    editIcon.icon = 'edit';

    taleColumns.push(editIcon);

    gridConfig.columns = taleColumns;

    return gridConfig;
}
