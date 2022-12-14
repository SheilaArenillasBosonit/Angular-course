import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { AuthRoutingModule } from './auth-routing.module';
import { ResgistroComponent } from './pages/resgistro/resgistro.component';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    ResgistroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
   
  ]
})
export class AuthModule { }
