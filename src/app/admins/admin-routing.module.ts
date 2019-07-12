import { AdminLogInComponent } from './admin-login/admin-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';

const routes: Routes = [
    {path: 'signup', component: AdminSignupComponent},
    {path: 'login', component: AdminLogInComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule{ }
