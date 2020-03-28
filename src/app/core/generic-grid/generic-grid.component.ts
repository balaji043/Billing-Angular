import { Component, OnInit, Input, HostListener } from '@angular/core';
import { GridConfig } from 'src/app/model/grid-config';
import { TableColumn } from 'src/app/model/table-column';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-generic-grid',
  templateUrl: './generic-grid.component.html',
  styleUrls: ['./generic-grid.component.css']
})
export class GenericGridComponent implements OnInit {

  @Input() gridConfig: GridConfig;
  @Input() dataSource: any[];
  dSCopy: any[];
  public isShowFormField: boolean;


  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.dSCopy = Array.from(this.dataSource);
    this.onResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isShowFormField = window.innerWidth > 1330;
  }

  onSearchOfFilter(column: TableColumn): void {
    if (this.utilityService.isNullOrUndefinedOrEmpty(column) || this.utilityService.isNullOrUndefinedOrEmpty(column.searchValue)) {
      this.dataSource = Array.from(this.dSCopy);
      return;
    }
    this.dataSource = this.dSCopy.filter(e => {
      return e[column.accessVariableName].toLowerCase().match(column.searchValue.toLowerCase());
    });
  }

}
