import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginRegisterPageComponent } from './login-register-page/login-register-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},  
  {path: 'home', component: HomePageComponent},
  {path: 'login_register', component: LoginRegisterPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
