import { Routes } from '@angular/router';
import { CoursesManagmentComponent } from './components/courses-managment/courses-managment/courses-managment.component';
import { CoursesListComponent } from './components/courses-list/courses-list/components/courses-list.component';
import { authGuard } from './components/auth/guard/auth.guard';
import { HomeComponent } from './components/home/home/home.component';
import { teacherGuard } from './components/teacher-guard/teacher.guard';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { AboutComponent } from './components/about/about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [authGuard],
        children: [
        { path: 'about', component: AboutComponent},
            { path: 'courses', component: CoursesListComponent},
            { path: 'coursesManagement', component: CoursesManagmentComponent },
            // , canActivate: [teacherGuard]
        ]
    },
    { path: 'login', component: SignInComponent },
];


