import { Component, OnInit, Input, Output, HostListener, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { InputDropDownConfig } from 'src/app/model/input-dropdown.model';
import { EnvironmentService } from 'src/app/service/environment.service';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.css']
})
export class InputDropdownComponent implements OnInit {

  @Input() inputDropDownConfig: InputDropDownConfig;

  @Output() clickOnConfirm = new EventEmitter();

  list = [];
  inputValue: string;
  valueToEmit: any;

  constructor(
    private apiService: ApiService,
    private environmentService: EnvironmentService,
    private elementRef: ElementRef
  ) {
    this.inputValue = '';
  }

  ngOnInit() {

  }

  onClickOfItem(item) {
    this.inputValue = item[this.inputDropDownConfig.displayVariableName];
    this.valueToEmit = item;
    this.list = [];
  }

  emit() {
    this.clickOnConfirm.emit(this.valueToEmit);
  }

  changeOnInputTextM() {
    this.apiService.post(this.environmentService
      .getUrl(this.inputDropDownConfig.msName, this.inputDropDownConfig.apiName)
      , this.inputValue).subscribe(e => {
        if (e && e.length !== 0) {
          this.list = e;
        } else {
          this.list = [];
        }
      });
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(target) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.list = [];
    }
  }

}
