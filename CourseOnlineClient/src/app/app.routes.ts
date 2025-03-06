import { Routes } from '@angular/router';
import { CoursesListComponent } from './components/courses-list/courses-list/components/courses-list.component';
import { authGuard } from './components/auth/guard/auth.guard';
import { HomeComponent } from './components/home/home/home.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { AboutComponent } from './components/about/about/about.component';
import { CourseDetailsComponent } from './components/course-details/component/course-details.component';
import { UpdateCourseFormComponent } from './components/courses-forms/update-course/update-course-form/update-course-form.component';
import { AddCourseFormComponent } from './components/courses-forms/add-course/add-course-form/add-course-form.component';
import { AddLessonFormComponent } from './components/lessons-forms/add-lesson-form/add-lesson-form.component';
import { UpdateLessonFormComponent } from './components/lessons-forms/update-lesson-form/update-lesson-form.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent, canActivate: [authGuard],
        children: [
            { path: 'about', component: AboutComponent },
            { path: 'courses', component: CoursesListComponent },
            { path: 'courses/:id/lessons', component: CourseDetailsComponent },
            { path: 'courses/add', component: AddCourseFormComponent },
            { path: 'courses/:id/update', component: UpdateCourseFormComponent },
            { path: 'courses/:id/lessons/:lessonId/update', component: UpdateLessonFormComponent },
            { path: 'courses/:id/lessons/add', component: AddLessonFormComponent }
        ]
    },
    { path: 'login', component: SignInComponent },
];


