import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserinfoformComponent } from './userinfoform/userinfoform.component';
import {FormsModule} from "@angular/forms";
import { EmailformComponent } from './emailform/emailform.component';


@NgModule({
  declarations: [
    AppComponent,

    UserinfoformComponent,
     EmailformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
