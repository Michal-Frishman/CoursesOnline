import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesListComponent } from './components/courses-list/courses-list/components/courses-list.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { SignInAndUpComponent } from './components/sign-in-and-up/sign-in-and-up.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SignInAndUpComponent,CoursesListComponent,MatButtonModule, MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CourseOnlineClient';
}
