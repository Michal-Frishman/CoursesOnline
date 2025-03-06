// // import { Component, OnInit } from '@angular/core';
// // import { CoursesService } from '../../services/courses.service';
// // import { Course } from '../../../../models/course';
// // import { MatListModule } from '@angular/material/list';
// // import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// // import { CommonModule } from '@angular/common';
// // import { MatFormFieldModule } from '@angular/material/form-field';
// // import { MatInputModule } from '@angular/material/input';
// // import { MatExpansionModule } from '@angular/material/expansion';
// // import { CourseDetailsComponent } from '../../../course-details/component/course-details.component';
// // import { HttpClient } from '@angular/common/http';
// // import { MatIconModule } from '@angular/material/icon';
// // import { RouterModule } from '@angular/router';
// // import { MatToolbar } from '@angular/material/toolbar';
// // import { MatButtonModule } from '@angular/material/button';
// // import { MatTabsModule } from '@angular/material/tabs';
// // import { MatToolbarModule } from '@angular/material/toolbar';
// // import { MatMenuModule } from '@angular/material/menu';
// // import { MatCardModule } from '@angular/material/card';
// // import { JoinLeaveCoursesService } from '../../../join-leave-courses-service/join-leave-courses.service';

// // @Component({
// //   selector: 'app-courses-list',
// //   standalone: true,
// //   imports: [MatCardModule, MatToolbarModule, MatTabsModule, MatButtonModule, MatToolbar, MatMenuModule, RouterModule, MatIconModule, CourseDetailsComponent, CommonModule, MatListModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatExpansionModule],
// //   templateUrl: './courses-list.component.html',
// //   styleUrl: './courses-list.component.css'
// // })
// // export class CoursesListComponent implements OnInit {
// //   isTeacher = (sessionStorage.getItem("role") == "teacher" || sessionStorage.getItem("role") == "admin") ? true : false;
// //   // isTeacher = true;  
// //   userId=sessionStorage.getItem("userId");
// //   listCourses: Course[] | any = [];
// //   showAddForm = false;
// //   showApdateForm = false;
// //   courseForm!: FormGroup;
// //   joinedCourses: Course[]=[];
// //   constructor(private joinLeave:JoinLeaveCoursesService,private coursesService: CoursesService, private fb: FormBuilder, private http: HttpClient) {
// //     this.courseForm = this.fb.group({
// //       title: ['', Validators.required],
// //       description: ['', Validators.required]
// //     });
// //   }
// //   showDetails: boolean = false;
// //   ngOnInit() {
// //     console.log("getCourses course");
// //     this.coursesService.getCourses().subscribe(courses => {
// //       this.listCourses = courses;
// //       console.log("courses" + this.listCourses);
// //     }, error => {
// //       console.error("Error fetching courses:", error);
// //     });
// //   // this.joinLeave.getCoursesById(parseInt(this.userId??"")).subscribe(courses => {
// //   //     this.joinedCourses = courses;
// //   //     console.log("courses" + this.listCourses);
// //   //   }, error => {
// //   //     console.error("Error fetching courses:", error);
// //   //   });
// //   }

// //   deleteCourse(id: number) {
// //     console.log("delete1");
// //     this.coursesService.deleteCourse(id).subscribe(() => {
// //       console.log('Course delete successfully');
// //     });
// //   }
// //   isJoin(course:Course){
// //     return this.joinedCourses.find(c=>c===course);
// //   }
// //   join(course:Course){
// //     this.joinLeave.joinCourse(parseInt(this.userId??""),course.id);
// //     console.log("join",course);


// //   }
// //   leave(course:Course){
// //     this.joinLeave.leaveCourse(parseInt(this.userId??""),course.id)
// //   }

// // }

// import { Component, OnInit } from '@angular/core';
// import { CoursesService } from '../../services/courses.service';
// import { Course } from '../../../../models/course';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { CourseDetailsComponent } from '../../../course-details/component/course-details.component';
// import { JoinLeaveCoursesService } from '../../../join-leave-courses-service/join-leave-courses.service';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-courses-list',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, CourseDetailsComponent],
//   templateUrl: './courses-list.component.html',
//   styleUrls: ['./courses-list.component.css']
// })
// export class CoursesListComponent implements OnInit {
//   isTeacher = (sessionStorage.getItem("role") == "teacher" || sessionStorage.getItem("role") == "admin") ? true : false;
//   userId = sessionStorage.getItem("userId");
//   listCourses: Course[] = [];
//   showAddForm = false;
//   showUpdateForm = false;
//   courseForm!: FormGroup;
//   joinedCourses: Course[] = [];

//   constructor(private joinLeave: JoinLeaveCoursesService, private coursesService: CoursesService, private fb: FormBuilder) {
//     this.courseForm = this.fb.group({
//       title: ['', Validators.required],
//       description: ['', Validators.required]
//     });
//   }

//   ngOnInit() {
//     // מנוי ל-Observable של הקורסים
//     this.coursesService.courses$.subscribe(courses => {
//       this.listCourses = courses;
//       console.log("courses", this.listCourses);
//     }, error => {
//       console.error("Error fetching courses:", error);
//     });
//   }

//   deleteCourse(id: number) {
//     console.log("delete1");
//     this.coursesService.deleteCourse(id).subscribe(() => {
//       console.log('Course deleted successfully');
//     });
//   }

//   isJoin(course: Course) {
//     return this.joinedCourses.find(c => c === course);
//   }

//   join(course: Course) {
//     this.joinLeave.joinCourse(parseInt(this.userId ?? ""), course.id);
//     console.log("join", course);
//   }

//   leave(course: Course) {
//     this.joinLeave.leaveCourse(parseInt(this.userId ?? ""), course.id);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../../../models/course';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseDetailsComponent } from '../../../course-details/component/course-details.component';
import { JoinLeaveCoursesService } from '../../../join-leave-courses-service/join-leave-courses.service';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatTabsModule, MatButtonModule, MatToolbar, MatMenuModule, RouterModule, MatIconModule, CommonModule, MatListModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatExpansionModule, MatCardModule, RouterModule, CommonModule, ReactiveFormsModule, CourseDetailsComponent],
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  isTeacher = (sessionStorage.getItem("role") == "teacher" || sessionStorage.getItem("role") == "admin") ? true : false;
  userId = sessionStorage.getItem("userId");
  listCourses: Course[] = [];
  showAddForm = false;
  showUpdateForm = false;
  courseForm!: FormGroup;
  joinedCourses: Course[] = [];

  constructor(private joinLeave: JoinLeaveCoursesService, private coursesService: CoursesService, private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.coursesService.courses$.subscribe(courses => {
      this.listCourses = courses;
      console.log("courses", this.listCourses);
    }, error => {
      console.error("Error fetching courses:", error);
    });
    this.joinLeave.courses$.subscribe(courses => {
      this.joinedCourses = courses;
      console.log("joined courses", this.joinedCourses);
    }, error => {
      console.error("Error fetching joined courses:", error);
    });

  }

  deleteCourse(id: number) {
    console.log("delete1");
    this.coursesService.deleteCourse(id).subscribe(() => {
      console.log('Course deleted successfully');
    });
  }

  isJoin(course: Course) {
    return this.joinedCourses.find(c => c.id === course.id) !== undefined;
  }

  join(course: Course) {
    this.joinLeave.joinCourse(parseInt(this.userId ?? ""), course.id)
  }

  leave(course: Course) {
    this.joinLeave.leaveCourse(parseInt(this.userId ?? ""), course.id);
  }
}
