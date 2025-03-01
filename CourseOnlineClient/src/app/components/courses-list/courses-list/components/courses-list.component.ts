import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../../../models/course';
import { CourseDetailsComponent } from '../../../course-details/component/course-details.component';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CourseDetailsComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent implements OnInit {
  listCourses: Course[] | any = [new Course(1, "aa", "aa", "5")]
  constructor(private coursesService: CoursesService) { }
  showDetails:boolean = false;
  ngOnInit() {
    console.log("getCourses course");
    this.coursesService.getCourses().subscribe(courses => {
      if (this.listCourses.length > 0)
        this.listCourses = courses;
      console.log("courses" + this.listCourses.length);
    }, error => {
      console.error("Error fetching courses:", error);
    });
  }



}

