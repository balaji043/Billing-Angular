import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewBillComponent } from './componets/new-bill/new-bill.component';
import { ViewBillComponent } from './componets/view-bill/view-bill.component';


const routes: Routes = [
  { path: 'view-bill', component: ViewBillComponent },
  { path: 'new-bill', component: NewBillComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
