import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private apiUrl = "http://localhost:3000/api/courses";

  constructor(private http: HttpClient) { }
  token = sessionStorage.getItem("userToken");

  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });
  getCourses() {
    return this.http.get(this.apiUrl, { headers: this.headers })
  }

  getCourseById(courseId: number) {
    return this.http.get(`${this.apiUrl}/${courseId}`, { headers: this.headers });
  }
}
