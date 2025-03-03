import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../../models/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoinLeaveCoursesService {
  private apiUrl = "http://localhost:3000/api/courses";
  constructor(private http:HttpClient) { }
  joinCourse(userId:number,courseId: number):void{
    this.http.post(this.apiUrl+"/"+courseId+"/enroll",userId);
  }
  leaveCourse(userId:number,courseId: number) {
    this.http.delete(this.apiUrl+"/"+courseId+"/unenroll/"+userId);
  }
  getCoursesById(userId:number):Observable<Course[]>  {
    return this.http.get<Course[]>(this.apiUrl+"/student/"+userId);
  }
}
