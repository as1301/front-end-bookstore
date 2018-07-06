import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddComponent } from './add/add.component';
import { CartComponent } from './cart/cart.component';
import { MessageComponent } from './message/message.component';
import { ListingComponent } from './listing/listing.component';



const routes: Routes=[
  {path:'',component:MiddleSectionComponent},
  {path:'middile-section',component:MiddleSectionComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'add',component:AddComponent},
  {path:'cart',component:CartComponent},
  {path:'message',component:MessageComponent},
  {path:'**',component:MiddleSectionComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    MiddleSectionComponent,
    LoginComponent,
    HomepageComponent,
    AddComponent,
    CartComponent,
    MessageComponent,
    ListingComponent,
    
    
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
