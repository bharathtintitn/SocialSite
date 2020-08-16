import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
//import { RegistrationComponent } from './registration/registration.component';
import { ResultComponent } from './result/result.component';
import { RegistrationModule } from './registration/registration.module';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    //ReactiveFormsModule,
    RegistrationModule,
  ],
  exports: [
    RegistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
