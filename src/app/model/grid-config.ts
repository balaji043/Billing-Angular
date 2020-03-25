import { TableColumn } from './table-column';

export class GridConfig {
    columns: TableColumn[];
    caption: string;
    uniqueName: string;
    constructor(caption: string, uniqueName: string, columns: TableColumn[]) {
        this.caption = caption;
        this.uniqueName = uniqueName;
        this.columns = columns;
    }
}
