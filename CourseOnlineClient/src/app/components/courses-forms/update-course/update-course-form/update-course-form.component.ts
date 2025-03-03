import { Component, inject, OnInit } from '@angular/core';
import { CoursesService } from '../../../courses-list/services/courses.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../../../models/course';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-update-course-form',
  standalone: true,
  imports: [MatSelectModule,MatRadioModule,MatButtonModule,MatInputModule,MatFormFieldModule,ReactiveFormsModule],
  templateUrl: './update-course-form.component.html',
  styleUrl: './update-course-form.component.css'
})
export class UpdateCourseFormComponent implements OnInit {
  courseForm!: FormGroup;
  private courseId=0;
  routerNavigate = inject(Router);

  course!:Course;
    constructor(private route: ActivatedRoute,private coursesService: CoursesService, private fb: FormBuilder, private http: HttpClient) {
   
    }
  
  ngOnInit(): void {
    this.courseId = parseInt(this.route.snapshot.paramMap.get('id')?.toString() ?? '');
    
    this.coursesService.getCourseById(this.courseId).subscribe(res => {
      this.course = res;
      this.courseForm = this.fb.group({
        title: [this.course.title, Validators.required],
        description: [this.course.description, Validators.required]
      });
    });
    }
  
    updateCourse() {
      if (this.courseForm.valid) {
        const updatedCourse: Course = {
          id: this.courseId,
          title: this.courseForm.get('title')?.value,
          description: this.courseForm.get('description')?.value,
          teacherId: localStorage.getItem('userId')??''
        };
        console.log(updatedCourse);
        this.coursesService.updateCourse(updatedCourse).subscribe(() => {
          console.log('Course updated successfully');
          this.routerNavigate.navigate(['courses']);
        });
        this.coursesService.getCourses();
      }
    }
  
  
  // updateCourse() {
  //   this.http.put(`http://localhost:3000/api/courses/${""}`, this.courseForm?.value);
  // }
}
