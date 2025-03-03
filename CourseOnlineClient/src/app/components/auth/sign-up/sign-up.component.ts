import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { role, User } from '../../../models/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatSelectModule,ReactiveFormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
     ],
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
      console.log(this.signUpForm?.value);
      this.user = this.signUpForm.value;
      if (this.user)
        this.authService.signUp(this.user).subscribe(res => {         
          localStorage.setItem("role",this.signUpForm?.value.role );;
          this.authService.isAuth = true;
          console.log("register successful");      
          this.router.navigate(['/']); 
          this.formClose.emit();
        },
          error => {
            console.log("register failed");
            alert("register failed");
            this.signUpForm?.reset();
          }
        );

    }
  }
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['',  Validators.email],
      password: [''],
      name: ['' ],
      role: [''],
    });
  }
}
