import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisternowComponent } from './registernow/registernow.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { EspaceadminComponent } from './espaceadmin/espaceadmin.component';
import { SigninComponent } from './signin/signin.component';
import { ListmessagesComponent } from './listmessages/listmessages.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
    {path: "", component:AppComponent },
    {path: "signup", component:RegisternowComponent },
    {path: "espaceadmin", component:EspaceadminComponent },
    {path: "updateuser/:id", component:UpdateuserComponent },
    {path: "signin", component:SigninComponent },
    {path: "listmessages", component:ListmessagesComponent },
    {path: "contactus", component:ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
