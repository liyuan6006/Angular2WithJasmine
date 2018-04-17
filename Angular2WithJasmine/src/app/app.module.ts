import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComputeComponentComponent } from './compute/compute-component/compute-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputeComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
