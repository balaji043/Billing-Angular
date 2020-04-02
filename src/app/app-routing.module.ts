import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewBillComponent } from './componets/new-bill/new-bill.component';
import { ViewBillComponent } from './componets/view-bill/view-bill.component';
import { UserPanelComponent } from './componets/user-panel/user-panel.component';
import { CutomerPanelComponent } from './componets/cutomer-panel/cutomer-panel.component';
import { LoginComponent } from './componets/login/login.component';


const routes: Routes = [
  { path: 'view-bill', component: ViewBillComponent },
  { path: 'new-bill', component: NewBillComponent },
  { path: 'customer-panel', component: CutomerPanelComponent },
  { path: 'user-panel', component: UserPanelComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'view-bill', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
