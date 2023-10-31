import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Myc01Component} from "../myc01";
import {Myc02Component} from "../myc02.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginComponent} from "../login/ts/login.component";
import {FormFieldOverviewExample} from "../login/ts/FormField";
import {ButtonOverviewExample} from "../login/ts/button";
import {MatButtonModule} from "@angular/material/button";
import {RegComponent} from "../login/ts/reg.component";
import {LoginInfoComponent} from "../login/ts/loginInfo.component";
import {ForgotPwdComponent} from "../login/ts/forgotPwd.component";
import {HomeComponent} from "../login/ts/home.component";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [ //聲明
    AppComponent,
    Myc01Component,
    Myc02Component,
    HomeComponent,
    LoginComponent,
    RegComponent,
    LoginInfoComponent,
    ForgotPwdComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    FormFieldOverviewExample,
    ButtonOverviewExample,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
