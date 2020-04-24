import { GridConfig } from 'src/app/model/generic-grid.config';
import { TableColumn } from 'src/app/model/table-column.config';

export function UserTableConfig(): GridConfig {

    const gridConfig = new GridConfig();
    gridConfig.caption = 'User Details';
    gridConfig.uniqueName = 'USER_TABLE_CONFIG';
    gridConfig.isPaginationRequired = true;
    gridConfig.paginationOptions = [5, 10, 15, 20];

    const taleColumns = [];

    const nameColumn = new TableColumn();
    nameColumn.accessVariableName = 'name';
    nameColumn.columnDisplayName = 'Name';
    nameColumn.type = 'text';
    nameColumn.searchType = 'text';

    taleColumns.push(nameColumn);


    const userNameColumn = new TableColumn();
    userNameColumn.accessVariableName = 'userName';
    userNameColumn.columnDisplayName = 'User Name';
    userNameColumn.type = 'text';
    userNameColumn.searchType = 'text';

    taleColumns.push(userNameColumn);

    const email = new TableColumn();
    email.accessVariableName = 'emailId';
    email.columnDisplayName = 'Email ID';
    email.type = 'text';
    email.searchType = 'text';

    taleColumns.push(email);

    const role = new TableColumn();
    role.accessVariableName = 'role';
    role.columnDisplayName = 'Role';
    role.type = 'text';
    role.searchType = 'text';

    taleColumns.push(role);

    gridConfig.columns = taleColumns;

    return gridConfig;
}
