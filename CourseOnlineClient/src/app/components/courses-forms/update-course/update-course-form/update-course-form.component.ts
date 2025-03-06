// // import { Component, inject, OnInit } from '@angular/core';
// // import { CoursesService } from '../../../courses-list/services/courses.service';
// // import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// // import { HttpClient } from '@angular/common/http';
// // import { MatFormFieldModule } from '@angular/material/form-field';
// // import { ActivatedRoute, Router } from '@angular/router';
// // import { Course } from '../../../../models/course';
// // import { MatInputModule } from '@angular/material/input';
// // import { MatButtonModule } from '@angular/material/button';
// // import { MatRadioModule } from '@angular/material/radio';
// // import { MatSelectModule } from '@angular/material/select';
// // @Component({
// //   selector: 'app-update-course-form',
// //   standalone: true,
// //   imports: [MatSelectModule,MatRadioModule,MatButtonModule,MatInputModule,MatFormFieldModule,ReactiveFormsModule],
// //   templateUrl: './update-course-form.component.html',
// //   styleUrl: './update-course-form.component.css'
// // })
// // export class UpdateCourseFormComponent implements OnInit {
// //   courseForm!: FormGroup;
// //   private courseId=0;
// //   routerNavigate = inject(Router);

// //   course!:Course;
// //     constructor(private route: ActivatedRoute,private coursesService: CoursesService, private fb: FormBuilder, private http: HttpClient) {
   
// //     }
  
// //   ngOnInit(): void {
// //     this.courseId = parseInt(this.route.snapshot.paramMap.get('id')?.toString() ?? '');
    
// //     this.coursesService.getCourseById(this.courseId).subscribe(res => {
// //       this.course = res;
// //       this.courseForm = this.fb.group({
// //         title: [this.course.title, Validators.required],
// //         description: [this.course.description, Validators.required]
// //       });
// //     });
// //     }
  
// //     updateCourse() {
// //       if (this.courseForm.valid) {
// //         const updatedCourse: Course = {
// //           id: this.courseId,
// //           title: this.courseForm.get('title')?.value,
// //           description: this.courseForm.get('description')?.value,
// //           teacherId: sessionStorage.getItem('userId')??''
// //         };
// //         console.log(updatedCourse);
// //         this.coursesService.updateCourse(updatedCourse).subscribe(() => {
// //           console.log('Course updated successfully');
// //           this.routerNavigate.navigate(['courses']);
// //         });
// //         this.coursesService.getCourses();
// //       }
// //     }
  
  
// //   // updateCourse() {
// //   //   this.http.put(`http://localhost:3000/api/courses/${""}`, this.courseForm?.value);
// //   // }
// // }
// import { Component, inject, OnInit } from '@angular/core';
// import { CoursesService } from '../../../courses-list/services/courses.service';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Course } from '../../../../models/course';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSelectModule } from '@angular/material/select';

// @Component({
//   selector: 'app-update-course-form',
//   standalone: true,
//   imports: [MatSelectModule, MatRadioModule, MatButtonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
//   templateUrl: './update-course-form.component.html',
//   styleUrls: ['./update-course-form.component.css']
// })
// export class UpdateCourseFormComponent implements OnInit {
//   courseForm!: FormGroup;
//   private courseId = 0;
//   routerNavigate = inject(Router);
//   course!: Course;

//   constructor(private route: ActivatedRoute, private coursesService: CoursesService, private fb: FormBuilder) {}

//   ngOnInit(): void {
//     this.courseId = parseInt(this.route.snapshot.paramMap.get('id')?.toString() ?? '');
    
//     // Initialize courseForm with empty controls
//     this.courseForm = this.fb.group({
//       title: ['', Validators.required], // Initially empty
//       description: ['', Validators.required] // Initially empty
//     });
  
//     this.coursesService.getCourseById(this.courseId).subscribe(res => {
//       this.course = res;
//       // Now update the form with the fetched course data
//       this.courseForm.patchValue({
//         title: this.course.title,
//         description: this.course.description
//       });
//     });
//   }
  

// //   updateCourse() {
// //     if (this.courseForm.valid) {
// //       const updatedCourse: Course = {
// //         id: this.courseId,
// //         title: this.courseForm.get('title')?.value,
// //         description: this.courseForm.get('description')?.value,
// //         teacherId: sessionStorage.getItem('userId') ?? ''
// //       };

// //       this.coursesService.updateCourse(updatedCourse).subscribe({
// //         next: () => {
// //           console.log('Course updated successfully');
// //           this.routerNavigate.navigate(['courses']);
// //         },
// //         error: err => {
// //           console.error('Error updating course:', err);
// //         }
// //       });
// //     }
// //   }

// }
import { Component, inject, OnInit } from '@angular/core';
import { CoursesService } from '../../../courses-list/services/courses.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../../../models/course';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-course-form',
  standalone: true,
  imports: [MatSelectModule, MatRadioModule, MatButtonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './update-course-form.component.html',
  styleUrls: ['./update-course-form.component.css']
})
export class UpdateCourseFormComponent implements OnInit {
  courseForm!: FormGroup;
  private courseId = 0;
  routerNavigate = inject(Router);
  course!: Course;

  constructor(private http:HttpClient, private route: ActivatedRoute, private coursesService: CoursesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.courseId = parseInt(this.route.snapshot.paramMap.get('id')?.toString() ?? '');
    
    // Initialize courseForm with empty controls
    this.courseForm = this.fb.group({
      title: ['', Validators.required], // Initially empty
      description: ['', Validators.required] // Initially empty
    });
  
    this.coursesService.getCourseById(this.courseId).subscribe(res => {
      this.course = res;
      this.courseForm.patchValue({
        title: this.course.title,
        description: this.course.description
      });
    });
  }
  
  updateCourse() {
    console.log(this.courseForm.get('title')?.value);
    console.log(this.courseForm.get('description')?.value);

    if (this.courseForm.valid) {
      const updatedCourse: Course = {
        id: this.courseId,
        title: this.courseForm.get('title')?.value,
        description: this.courseForm.get('description')?.value,
        teacherId: sessionStorage.getItem('userId') ?? ''
      };

      this.coursesService.updateCourse(updatedCourse).subscribe({
        next: () => {
          console.log('Course updated successfully', updatedCourse);
          this.routerNavigate.navigate(['courses']);
        },
        error: err => {
          console.error('Error updating course:', err);
        }
      });
    }
  }

}
