import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { AuthService } from '../../../services/auth-service/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { partUser } from '../../../models/user';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [SignUpComponent, ReactiveFormsModule, MatSelectModule, ReactiveFormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  showSignUp = false;
  router = inject(Router);
  hide = signal(true);
  user: partUser = {};
  signInForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  signIn(): void {
    if (this.signInForm?.valid) {
      this.user = this.signInForm.value;
      if (this.user) {
        this.authService.signIn(this.user).subscribe({
          next: (res) => {
            this.authService.isAuth = true;
            sessionStorage.setItem('token', res.token);
            sessionStorage.setItem('userId', res.userId);
            sessionStorage.setItem('role', res.role);
            this.router.navigate(['/courses']);
          },
          error: (error) => {
            alert("login failed");
            this.signInForm.reset();
          }
        });
      }
    }
  }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
}
