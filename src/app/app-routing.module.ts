import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillRegistrationComponent } from './components/bill-registration/bill-registration.component';
import { BillPanelComponent } from './components/bill-panel/bill-panel.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { CustomerPanelComponent } from './components/customer-panel/customer-panel.component';
import { LoginComponent } from './components/login/login.component';
import { GstInvoiceComponent } from './components/invoice-ui/gst-invoice/gst-invoice.component';


const routes: Routes = [
  { path: 'bill-panel', component: BillPanelComponent },
  { path: 'register-bill', component: BillRegistrationComponent },
  { path: 'customer-panel', component: CustomerPanelComponent },
  { path: 'user-panel', component: UserPanelComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'app-gst-invoice', component: GstInvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
