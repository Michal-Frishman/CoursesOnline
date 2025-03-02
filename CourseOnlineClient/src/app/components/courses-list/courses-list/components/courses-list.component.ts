import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../../../models/course';
import { MatListModule } from '@angular/material/list';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { CourseDetailsComponent } from '../../../course-details/component/course-details.component';
@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CourseDetailsComponent, CommonModule, MatListModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatExpansionModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent implements OnInit {
  isTeacher = (localStorage.getItem("role") == "teacher" || localStorage.getItem("role") == "admin") ? true : false;
  listCourses: Course[] | any = [];
  showAddForm = false;
  courseForm!: FormGroup;
  constructor(private coursesService: CoursesService, private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  showDetails: boolean = false;
  ngOnInit() {
    console.log("getCourses course");
    this.coursesService.getCourses().subscribe(courses => {
      this.listCourses = courses;
      console.log("courses" + this.listCourses);
    }, error => {
      console.error("Error fetching courses:", error);
    });
  }
  addCourse() {
    if (this.courseForm.valid) {
      this.coursesService.addCourse(this.courseForm.value).subscribe({
        next: res => {
          console.log('Success:', res),
            // this.loadcourses();
            this.courseForm.reset();
        },
        error: err => console.error('Error:', err)
      });
      this.showAddForm = false
    }
  }
}

