import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatNativeDateModule,
  MatSnackBarModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTabsModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatMenuModule,
  MatGridListModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatBadgeModule,
  MatExpansionModule,
  MatStepperModule,
  MatSlideToggleModule,
} from '@angular/material';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { SingleProductComponent } from './componets/single-product/single-product.component';
import { NewBillComponent } from './componets/new-bill/new-bill.component';
import { ViewBillComponent } from './componets/view-bill/view-bill.component';
import { CustomerPanelComponent } from './componets/customer-panel/customer-panel.component';
import { UserPanelComponent } from './componets/user-panel/user-panel.component';
import { ConfirmPopupBoxComponent } from './core/confirm-popup-box/confirm-popup-box.component';
import { GenericGridComponent } from './core/generic-grid/generic-grid.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerRegistrationComponent } from './componets/customer-registration/customer-registration.component';
import { AppMainNavComponent } from './componets/app-main-nav/app-main-nav.component';
import { LoginComponent } from './componets/login/login.component';
import { AuthInterceptor } from './config/auth.interceptor';
import { DisableControlDirective } from './core/directive/disale-control.directive';
import { InputDropdownComponent } from './core/input-dropdown/input-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainNavComponent,
    SingleProductComponent,
    ViewBillComponent,
    NewBillComponent,
    ConfirmPopupBoxComponent,
    CustomerPanelComponent,
    UserPanelComponent,
    GenericGridComponent,
    CustomerRegistrationComponent,
    LoginComponent,
    DisableControlDirective,
    InputDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatDividerModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatTooltipModule,
    ScrollingModule,
    MatBadgeModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule,
    MatStepperModule,
    MatSlideToggleModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmPopupBoxComponent, CustomerRegistrationComponent]
})
export class AppModule { }
