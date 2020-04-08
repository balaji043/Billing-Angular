import { Component, OnInit, Input, HostListener, AfterViewInit, ViewChild } from '@angular/core';
import { GridConfig } from 'src/app/model/generic-grid.config';
import { TableColumn } from 'src/app/model/table-column.config';
import { UtilityService } from 'src/app/service/utility.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-generic-grid',
  templateUrl: './generic-grid.component.html',
  styleUrls: ['./generic-grid.component.css']
})
export class GenericGridComponent implements OnInit {

  @Input() gridConfig: GridConfig;
  @Input() dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[];
  dSCopy: any[];
  public isShowFormField: boolean;


  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.displayedColumns = [];
    this.gridConfig.columns.forEach(element => {
      this.displayedColumns.push(element.accessVariableName);
    });
    this.onResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isShowFormField = window.innerWidth > 1330;
  }

  onSearchOfFilter(column: TableColumn): void {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

}
