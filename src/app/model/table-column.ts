export class TableColumn {
    accessVariableName: string;
    columnDisplayName: string;
    type: string;
    constructor(accessVariableName: string, columnDisplayName: string, type: string) {
        this.accessVariableName = accessVariableName;
        this.columnDisplayName = columnDisplayName;
        this.type = type;
    }
}
