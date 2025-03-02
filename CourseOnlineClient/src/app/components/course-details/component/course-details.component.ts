import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../courses-list/services/courses.service';
import { Lesson } from '../../../models/Lesson';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [MatIconModule,MatExpansionModule,MatListModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
  lessons:Lesson[] = [];
  isTeacher = (localStorage.getItem("role") == "teacher" || localStorage.getItem("role") == "admin") ? true : false;
constructor(private route: ActivatedRoute,private coursesService:CoursesService) {}
ngOnInit() {
  this.route.paramMap.subscribe((params) => {
    const id = params.get('id');
    if (id) {
      console.log(id);
      this.coursesService.getlessons(+id).subscribe(lessons => {
        this.lessons=lessons;
        console.log("getlessons successful");
      },
        error => {
          console.log("login failed");
        },

      );
  }
    else {
      console.error('Product ID not found');
    }
  });
}
deleteLesson(id:number){

}
}
