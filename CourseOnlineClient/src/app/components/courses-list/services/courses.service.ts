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
  // token = sessionStorage.getItem("userToken");

  // headers = new HttpHeaders({
  //   'Authorization': `Bearer ${this.token}`
  // });
  // getCourses(){
  //   console.log(this.token);
  //   return this.http.get<Course[]>(this.apiUrl, { this.headers })
  // }
  getCourses(): Observable<any> {
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${sessionStorage.getItem('userToken')}`
    // });
    // console.log("this"+this.headers);
    // console.log("kkk"+sessionStorage.getItem('userToken'));


    return this.http.get<any>(this.apiUrl);
  }
  // const headers = new HttpHeaders({
  //   'Authorization': `Bearer ${sessionStorage.getItem('token')}`, 
  // });
  // return this.http.get<any>(this.apiUrl, { headers });
  getlessons(courseId: number | undefined) {
    return this.http.get<Lesson[]>(`http://localhost:3000/api/courses/${courseId}/lessons`)
  }

  addCourse(data: any) {
    return this.http.post('http://localhost:3000/api/courses', data)
  }
}
