import { TableColumn } from './table-column.config';

export class GridConfig {
    columns: TableColumn[];
    caption: string;
    uniqueName: string;
    isPaginationRequired: boolean;
    paginationOptions: number[];
}
