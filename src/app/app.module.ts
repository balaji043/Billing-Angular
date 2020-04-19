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

import { SingleProductComponent } from './components/single-product/single-product.component';
import { BillRegistrationComponent } from './components/bill-registration/bill-registration.component';
import { BillPanelComponent } from './components/bill-panel/bill-panel.component';
import { CustomerPanelComponent } from './components/customer-panel/customer-panel.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { ConfirmPopupBoxComponent } from './core/confirm-popup-box/confirm-popup-box.component';
import { GenericGridComponent } from './core/generic-grid/generic-grid.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { AppMainNavComponent } from './components/app-main-nav/app-main-nav.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './config/auth.interceptor';
import { DisableControlDirective } from './core/directive/disale-control.directive';
import { InputDropdownComponent } from './core/input-dropdown/input-dropdown.component';
import { DatePipe } from '@angular/common';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainNavComponent,
    SingleProductComponent,
    BillPanelComponent,
    BillRegistrationComponent,
    ConfirmPopupBoxComponent,
    CustomerPanelComponent,
    UserPanelComponent,
    GenericGridComponent,
    CustomerRegistrationComponent,
    LoginComponent,
    DisableControlDirective,
    InputDropdownComponent,
    UserRegistrationComponent
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
    },
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmPopupBoxComponent, CustomerRegistrationComponent]
})
export class AppModule { }
