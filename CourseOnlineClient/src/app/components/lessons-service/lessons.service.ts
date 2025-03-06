import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson } from '../../models/Lesson';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Course } from '../../models/course';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  private lessonsSubject: BehaviorSubject<Lesson[]> = new BehaviorSubject<Lesson[]>([]);
  public lessons$: Observable<Lesson[]> = this.lessonsSubject.asObservable();
  private apiUrl = "http://localhost:3000/api/courses";

  constructor(private http: HttpClient) {
    // this.getLessons();  // get lessons for course 1 by default  // change to get lessons for course 1 by default  // change to get lessons for course 1 by default  // change to get lessons for course 1 by default  // change to get lessons for course 1 by default  // change to get lessons for course 1 by default  // change to get lessons for course 1 by default  // change to get lessons for course 1 by default  // change to get lessons for course 1 by default  // change to get lessons for course 1 by default  // change to get lessons for course 1 by default  // change to get lessons for course 1 by default  // change to get lessons for course 1 by default  // change to get lessons for course 1 by default  // change to get lessons for course 1
  }

  getLessons(courseId: number) {
    this.http.get<Lesson[]>(`${this.apiUrl}/${courseId}/lessons`).subscribe(
      (lessons) => {
        this.lessonsSubject.next(lessons);
      },
      (error) => alert('Error:' + error.message)
    );
  }
  // addLesson(id: number, lesson: Lesson) {
  //   return this.http.post(this.apiUrl + "/" + id + "/lessons", lesson);
  // }.
  addLesson(courseId: number, lesson: Lesson): Observable<Lesson> {
    return this.http.post<Lesson>(`${this.apiUrl}/${courseId}/lessons`, lesson).pipe(
      tap(newLesson => {
        this.lessonsSubject.next([...this.lessonsSubject.getValue(), newLesson]);
      })
    );
  }
  getLessonById(courseId: number, lessonId: number): Observable<Lesson> {
    return this.http.get<Lesson>(`${this.apiUrl}/${courseId}/lessons/${lessonId}`);
  }

  // deleteLesson(courseId: number, lessonId: number) {
  //   return this.http.delete(`${this.apiUrl}/${courseId}/lessons/${lessonId}`);
  // }
  // deleteLesson(courseId: number, lessonId: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${courseId}/lessons/${lessonId}`).pipe(
  //     tap(() => {
  //       // Remove the deleted lesson from the BehaviorSubject
  //       const updatedLessons = this.lessonsSubject.getValue().filter(lesson => lesson.id !== lessonId);
  //       this.lessonsSubject.next(updatedLessons);
  //     })
  //   );
  // }
  // updateLesson(courseId: number, lessonId: number, lesson: Lesson) {
  //   return this.http.put(`${this.apiUrl}/${courseId}/lessons/${lessonId}`, lesson);
  // }
  // updateLesson(courseId: number, lessonId: number, lesson: Lesson): Observable<Lesson> {
  //   return this.http.put<Lesson>(`${this.apiUrl}/${courseId}/lessons/${lessonId}`, lesson).pipe(
  //     tap(updatedLesson => {
  //       // Update the BehaviorSubject with the updated lesson
  //       const updatedLessons = this.lessonsSubject.getValue().map(l => l.id === lessonId ? updatedLesson : l);
  //       this.lessonsSubject.next(updatedLessons);
  //     })
  //   );
  // }
  deleteLesson(courseId: number, lessonId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${courseId}/lessons/${lessonId}`).pipe(
      tap(() => {
        const updatedLessons = this.lessonsSubject.getValue().filter(lesson => lesson.id !== lessonId);
        this.lessonsSubject.next(updatedLessons);
      })
    );
  }

  updateLesson(courseId: number, lessonId: number, lesson: Lesson): Observable<any> {
    const l={
      title: lesson.title,
      content: lesson.content,
      courseId: courseId,
    }
    return this.http.put(`${this.apiUrl}/${courseId}/lessons/${lessonId}`, l);
  }
}

