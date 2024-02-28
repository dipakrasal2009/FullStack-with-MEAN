import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { SubmitComponent } from './submit/submit.component';
import { DisplayDBComponent } from './display-db/display-db.component';
import { AppComponent } from './app.component';
import { StartingComponent } from './starting/starting.component';

const routes: Routes = [
    //{ path: '', redirectTo: '/From', pathMatch: 'full' },
    { path: '',component : StartingComponent},
    { path: 'form',component: DemoComponent},
    { path: 'submit', component: SubmitComponent },
    { path: 'displaydb', component : DisplayDBComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
