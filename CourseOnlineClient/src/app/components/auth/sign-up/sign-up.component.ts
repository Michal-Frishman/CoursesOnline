import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { role, User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  router = inject(Router);
  @Output() formClose = new EventEmitter<void>();
  @Input() showForm = false;
  user: User | undefined;
  signUpForm!: FormGroup;
  role!: role ;
  name: string = '';
  email: string = '';
  password: string = '';
  constructor(private fb: FormBuilder, private authService: AuthService) { }
  signUp(): void {
    if (this.signUpForm?.valid) {
      this.user = this.signUpForm.value;
      if (this.user)
        this.authService.signUp(this.user).subscribe(res => {         
          // sessionStorage.setItem('userToken', res.token.toString());
          // this.authService.role = res.role;
          this.authService.isAuth = true;
          console.log("register successful");      
          this.router.navigate(['/']); 
        },
          error => {
            console.log("register failed");
          }
        );
      this.signUpForm?.reset();
      this.formClose.emit();

    }
  }
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: [''],
      password: [''],
      name: [''],
      role: ['']
    });
  }
}
