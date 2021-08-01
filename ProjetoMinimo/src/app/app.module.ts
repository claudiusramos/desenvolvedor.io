import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UmcomponenteComponent } from './umcomponente/umcomponente.component';

@NgModule({
  declarations: [
    AppComponent,
    UmcomponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
