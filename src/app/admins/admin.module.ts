import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from './../shared/shared.module';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminLogInComponent } from './admin-login/admin-login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AdminLogInComponent,
    AdminSignupComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
