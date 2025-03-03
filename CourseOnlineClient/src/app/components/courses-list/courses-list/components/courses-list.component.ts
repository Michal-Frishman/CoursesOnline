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
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { JoinLeaveCoursesService } from '../../../join-leave-courses-service/join-leave-courses.service';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatTabsModule, MatButtonModule, MatToolbar, MatMenuModule, RouterModule, MatIconModule, CourseDetailsComponent, CommonModule, MatListModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatExpansionModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent implements OnInit {
  isTeacher = (localStorage.getItem("role") == "teacher" || localStorage.getItem("role") == "admin") ? true : false;
  // isTeacher = true;  
  userId=localStorage.getItem("userId");
  listCourses: Course[] | any = [];
  showAddForm = false;
  showApdateForm = false;
  courseForm!: FormGroup;
  joinedCourses: Course[]=[];
  constructor(private joinLeave:JoinLeaveCoursesService,private coursesService: CoursesService, private fb: FormBuilder, private http: HttpClient) {
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
  // this.joinLeave.getCoursesById(parseInt(this.userId??"")).subscribe(courses => {
  //     this.joinedCourses = courses;
  //     console.log("courses" + this.listCourses);
  //   }, error => {
  //     console.error("Error fetching courses:", error);
  //   });
  }

  deleteCourse(id: number) {
    console.log("delete1");
    this.coursesService.deleteCourse(id).subscribe(() => {
      console.log('Course delete successfully');
    });
  }
  isJoin(course:Course){
    return this.joinedCourses.find(c=>c===course);
  }
  join(course:Course){
    this.joinLeave.joinCourse(parseInt(this.userId??""),course.id);
    console.log("join",course);
    

  }
  leave(course:Course){
    this.joinLeave.leaveCourse(parseInt(this.userId??""),course.id)
  }
  
}

