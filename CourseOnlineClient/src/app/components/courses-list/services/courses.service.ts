// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Course } from '../../../models/course';
// import { Lesson } from '../../../models/Lesson';

// @Injectable({
//   providedIn: 'root'
// })
// export class CoursesService {
//   private apiUrl = "http://localhost:3000/api/courses";

//   constructor(private http: HttpClient) { }

//   getCourses(): Observable<any> {
//     return this.http.get<any>(this.apiUrl);
//   }
//   updateCourse(course: Course):Observable<Course> 
//   {
//     return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course);
//   } 
//   getCourseById(courseId: number) {
//     return this.http.get<Course>(`${this.apiUrl}/${courseId}`);
//   }

//   addCourse(course: Course) {
//     return this.http.post(this.apiUrl, course);
//   }
  
//   deleteCourse(id: number){
//     console.log("delete2");
//     console.log(`${this.apiUrl}/${id}`);
    
//     return this.http.delete(`${this.apiUrl}/${id}`);
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Course } from '../../../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private apiUrl = "http://localhost:3000/api/courses";
  private coursesSubject: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>([]);
  public courses$: Observable<Course[]> = this.coursesSubject.asObservable();

  constructor(private http: HttpClient) { 
    this.getCourses(); // טוען קורסים בעת יצירת השירות
  }

  private getCourses() :void{
    // this.http.get<Course[]>(this.apiUrl).subscribe(courses => {
    //   this.coursesSubject.next(courses);
    // });
    this.http.get<Course[]>(this.apiUrl).subscribe(
      (courses) => {
        this.coursesSubject.next(courses);
        console.log(courses);
      },
      (error) => alert('Error:' + error.message)
    );;
  }

  // updateCourse(course: Course): Observable<Course> {
  //   return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course).pipe(
  //     tap(updatedCourse => {
  //       const currentCourses = this.coursesSubject.value;
  //       const index = currentCourses.findIndex(c => c.id === updatedCourse.id);
  //       if (index > -1) {
  //         currentCourses[index] = updatedCourse;
  //         this.coursesSubject.next([...currentCourses]);
  //       }
  //     })
  //   );
  // }
  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course).pipe(tap(() => this.getCourses()));
  }
  getCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${courseId}`);
  }

  addCourse(course: Course): Observable<Course> {
      return this.http.post<Course>(this.apiUrl, course).pipe(tap(() =>   this.getCourses()));
  }

  deleteCourse(id: number): Observable<any> {
      console.log("service.deleteCourse"); 
      return this.http.delete(`${this.apiUrl}/${id}`).pipe(tap(() => {this.getCourses();
        console.log("succed delett");
        
      }));
    }
}
