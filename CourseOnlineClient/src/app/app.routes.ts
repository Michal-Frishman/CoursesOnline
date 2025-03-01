import { Routes } from '@angular/router';
import { SignInAndUpComponent } from './components/sign-in-and-up/sign-in-and-up.component';
import { CoursesManagmentComponent } from './components/courses-managment/courses-managment/courses-managment.component';
import { CoursesListComponent } from './components/courses-list/courses-list/components/courses-list.component';
import { authGuard } from './components/auth/guard/auth.guard';
import { HomeComponent } from './components/home/home/home.component';
import { teacherGuard } from './components/teacher-guard/teacher.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [authGuard],
        children: [
            { path: 'courses', component: CoursesListComponent},
            { path: 'coursesManagement', component: CoursesManagmentComponent , canActivate: [teacherGuard]},
        ]
    },
    { path: 'login', component: SignInAndUpComponent },
];


