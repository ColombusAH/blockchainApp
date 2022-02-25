import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgMetamaskModule} from "../../projects/ng-metmask/src/lib/ng-metmask.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMetamaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
