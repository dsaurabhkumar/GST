import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    SignInComponent
  ],
  exports: [
    SignInComponent
  ],
  declarations: [SignInComponent, SignUpComponent, NavBarComponent]
})
export class SignInSignUpModule { }
