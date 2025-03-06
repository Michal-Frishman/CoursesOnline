// import { Component, Input, OnInit } from '@angular/core';
// import { ActivatedRoute, RouterModule } from '@angular/router';
// import { CoursesService } from '../../courses-list/services/courses.service';
// import { Lesson } from '../../../models/Lesson';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatListModule } from '@angular/material/list';
// import { MatIconModule } from '@angular/material/icon';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatToolbar } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatCardModule } from '@angular/material/card';
// import { LessonsService } from '../../lessons-service/lessons.service';
// @Component({
//   selector: 'app-course-details',
//   standalone: true,
//   imports: [MatCardModule, MatToolbarModule, MatTabsModule, MatButtonModule, MatToolbar, MatMenuModule, RouterModule, MatIconModule, CourseDetailsComponent, CommonModule, MatListModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatExpansionModule],
//   templateUrl: './course-details.component.html',
//   styleUrl: './course-details.component.css'
// })
// export class CourseDetailsComponent implements OnInit {
//   lessons: Lesson[] = [];
//   courseId="";

//   isTeacher = (sessionStorage.getItem("role") == "teacher" || sessionStorage.getItem("role") == "admin") ? true : false;
//   constructor(private route: ActivatedRoute, private lessonsService: LessonsService) { }
//   ngOnInit() {
//     this.route.paramMap.subscribe((params) => {
//       this.courseId = params.get('id')??'';
//       if (this.courseId!='') {
//         console.log(this.courseId);
//         this.lessonsService.getlessons(+this.courseId).subscribe(lessons => {
//           this.lessons = lessons;
//           console.log("getlessons successful");
//         },
//           error => {
//             console.log("getlessons failed");
//           }
//         );
//       }
//       else {
//         console.error('courseId not found');
//       }
//     });
//   }
//   deleteLesson(id:number):void {
//     this.lessonsService.deleteLesson(+this.courseId,id).subscribe(res => {
//       console.log('Lesson deleted successfully');
//     },
//       error => {
//         console.log("Lesson deletion failed");
//       })
//   }
 
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Lesson } from '../../../models/Lesson';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { LessonsService } from '../../lessons-service/lessons.service';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatTabsModule, MatButtonModule, MatToolbar, MatMenuModule, RouterModule, MatIconModule, CommonModule, MatListModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatExpansionModule],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  lessons: Lesson[] = [];
  courseId = "";

  isTeacher = (sessionStorage.getItem("role") == "teacher" || sessionStorage.getItem("role") == "admin");

  constructor(private route: ActivatedRoute, private lessonsService: LessonsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.courseId = params.get('id') ?? '';
      if (this.courseId != '') {
        console.log(this.courseId);
        this.lessonsService.getLessons(+this.courseId); // Fetch lessons
        this.lessonsService.lessons$.subscribe(lessons => {
          this.lessons = lessons; // Subscribe to the BehaviorSubject
          console.log("Lessons updated successfully");
        });
      } else {
        console.error('courseId not found');
      }
    });
  }

  deleteLesson(id: number): void {
    this.lessonsService.deleteLesson(+this.courseId, id).subscribe(res => {
      console.log('Lesson deleted successfully');
    },
      error => {
        console.log("Lesson deletion failed");
      });
  }
}
