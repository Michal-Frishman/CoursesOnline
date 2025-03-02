import { Component } from '@angular/core';
import { SignInComponent } from '../auth/sign-in/sign-in.component';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';

@Component({
  selector: 'app-sign-in-and-up',
  standalone: true,
  imports: [SignInComponent,SignUpComponent],
  templateUrl: './sign-in-and-up.component.html',
  styleUrl: './sign-in-and-up.component.css'
})
export class SignInAndUpComponent {
   isSignUp=false;
   isSignIn=false;
   openSignInDialog(){
    this.isSignUp=false
    this.isSignIn=true
  }
  openSignUpDialog(){
    this.isSignUp=true
    this.isSignIn=false    
  }
}
