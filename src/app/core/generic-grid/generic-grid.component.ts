import { Component, OnInit, Input } from '@angular/core';
import { GridConfig } from 'src/app/model/grid-config';

@Component({
  selector: 'app-generic-grid',
  templateUrl: './generic-grid.component.html',
  styleUrls: ['./generic-grid.component.css']
})
export class GenericGridComponent implements OnInit {

  @Input() gridConfig: GridConfig;
  @Input() dataSource: any[];

  constructor() { }

  ngOnInit() {
  }

}
