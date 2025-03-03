import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../../models/course';
import { Lesson } from '../../../models/Lesson';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private apiUrl = "http://localhost:3000/api/courses";

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  updateCourse(course: Course):Observable<Course> 
  {
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course);
  } 
  getCourseById(courseId: number) {
    return this.http.get<Course>(`${this.apiUrl}/${courseId}`);
  }

  addCourse(course: Course) {
    return this.http.post(this.apiUrl, course);
  }
  
  deleteCourse(id: number){
    console.log("delete2");
    console.log(`${this.apiUrl}/${id}`);
    
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
