import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { log } from 'console';
import { partUser } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
    router = inject(Router);
  
  @Output() formClose = new EventEmitter<void>();
  @Input() showForm = false;
  user: partUser = {};
  signInForm!: FormGroup;
  email: string = '';
  password: string = '';
  constructor(private fb: FormBuilder, private authService: AuthService) { }
  signIn(): void {
    if (this.signInForm?.valid) {
      this.user = this.signInForm.value;
      if (this.user)
        this.authService.signIn(this.user).subscribe(res => {     
       this.authService.isAuth = true;
          console.log("login successful");
          console.log(res.token);
          sessionStorage.setItem('userToken',res.token);
          this.authService.role = res.role;
          this.router.navigate(['/']); 
        },
          error => {
            console.log("login failed");
          },

        );
      this.signInForm?.reset();
      this.formClose.emit();
    }
  }
  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }
}
