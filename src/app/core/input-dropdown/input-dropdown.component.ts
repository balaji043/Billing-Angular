import { Component, OnInit, Input, Output, HostListener, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { InputDropDownConfig } from 'src/app/model/input-dropdown.config';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.css']
})
export class InputDropdownComponent implements OnInit {

  @Input() config: InputDropDownConfig;

  @Output() clickOnConfirm = new EventEmitter();

  list = [];
  inputValue: string;
  url: string;
  valueToEmit: any;

  constructor(
    private apiService: ApiService,
    private elementRef: ElementRef
  ) {
    this.inputValue = '';
  }

  ngOnInit() {

  }
  onClickOfItem(item) {
    this.inputValue = item[this.config.displayVariableName];
    this.valueToEmit = item;
    this.list = [];
  }

  emit() {
    this.clickOnConfirm.emit(this.valueToEmit);
  }

  changeOnInputTextM() {
    this.apiService.post(this.config.urlLink, this.inputValue).subscribe(e => {
      if (e.length !== 0) {
        this.list = [];
        for (let i = 0; i < 10; i++) {
          this.list.push(e[0]);
        }
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


