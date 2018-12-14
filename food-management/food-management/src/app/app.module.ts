import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { Default1Component } from './default1/default1.component';
import { AboutusComponent } from './navbar/aboutus/aboutus.component';
 import { RegistrationComponent} from './navbar/registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DominosComponent } from './navbar/dominos/dominos.component';

import { from } from 'rxjs';
import { ContactformComponent } from './navbar/contactform/contactform.component';
import { McdonaldComponent } from './navbar/mcdonald/mcdonald.component';
import { PunjabiComponent } from './navbar/punjabi/punjabi.component';
import { ChineseComponent } from './navbar/chinese/chinese.component';
import { SouthindianComponent } from './navbar/southindian/southindian.component';


//import {AppRoutingModule,routingComponents} from './app-routing.module';
//import { NavbarComponent } from './navbar/navbar.component';


const routes:Routes=[
  {path:'navbar',component:NavbarComponent},
  {path:'',component:Default1Component},
  {path:'abcd',component:AboutusComponent},   
  {path:'reg',component:RegistrationComponent},
  {path:'dominos',component:DominosComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactformComponent},
  {path:'mcdonald',component:McdonaldComponent},
  {path:'chinese',component:ChineseComponent},
  {path:'punjabi',component:PunjabiComponent},
  {path:'southindian',component:SouthindianComponent},


  
  
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Default1Component,
    AboutusComponent,
    RegistrationComponent,
    LoginComponent,
    DominosComponent,
    ContactformComponent,
    McdonaldComponent,
    PunjabiComponent,
    ChineseComponent,
    SouthindianComponent,
  
    
   // routingComponents
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports : [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
