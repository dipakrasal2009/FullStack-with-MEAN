import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { SubmitComponent } from './submit/submit.component';
import { DisplayDBComponent } from './display-db/display-db.component';
import { StartingComponent } from './starting/starting.component';
import { DipakService } from './dipak.service';
import { RasalService } from './rasal.service';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    SubmitComponent,
    DisplayDBComponent,
    StartingComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    DipakService,
    RasalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
