import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalComponent } from './cal/cal.component';

const routes: Routes = [
  {path:'',component:CalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
