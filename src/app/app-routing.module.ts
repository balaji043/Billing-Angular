import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { NewBillComponent } from './new-bill/new-bill.component';


const routes: Routes = [
  { path: 'view-bill', component: ViewBillComponent },
  { path: 'new-bill', component: NewBillComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
