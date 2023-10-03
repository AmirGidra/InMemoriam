import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './Components/Users/user-register/user-register.component';
import { UserSignInComponent } from './Components/Users/user-sign-in/user-sign-in.component';

const routes: Routes = [
  {
    path: "register",component: UserRegisterComponent
  },
  {
    path: "signIn",component: UserSignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
