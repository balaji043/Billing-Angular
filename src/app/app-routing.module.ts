import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillRegistrationComponent } from './componets/bill-registration/bill-registration.component';
import { BillPanelComponent } from './componets/bill-panel/bill-panel.component';
import { UserPanelComponent } from './componets/user-panel/user-panel.component';
import { CustomerPanelComponent } from './componets/customer-panel/customer-panel.component';
import { LoginComponent } from './componets/login/login.component';


const routes: Routes = [
  { path: 'bill-panel', component: BillPanelComponent },
  { path: 'register-bill', component: BillRegistrationComponent },
  { path: 'customer-panel', component: CustomerPanelComponent },
  { path: 'user-panel', component: UserPanelComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'view-bill', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
