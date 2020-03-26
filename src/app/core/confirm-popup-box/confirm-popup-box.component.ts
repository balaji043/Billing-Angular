import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmationPopup } from 'src/app/model/confirmation.model';

@Component({
  selector: 'app-confirm-popup-box',
  templateUrl: './confirm-popup-box.component.html',
  styleUrls: ['./confirm-popup-box.component.css']
})
export class ConfirmPopupBoxComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmPopupBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: ConfirmationPopup) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
