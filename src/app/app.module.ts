import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisternowComponent } from './registernow/registernow.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { EspaceadminComponent } from './espaceadmin/espaceadmin.component';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListmessagesComponent } from './listmessages/listmessages.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisternowComponent,
    UpdateuserComponent,
    EspaceadminComponent,
    SigninComponent,
    NavbarComponent,
    ListmessagesComponent,
    ContactusComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }