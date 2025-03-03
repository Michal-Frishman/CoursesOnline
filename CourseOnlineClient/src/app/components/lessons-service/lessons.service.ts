import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson } from '../../models/Lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  private apiUrl = "http://localhost:3000/api/courses";

  constructor(private http: HttpClient) { }

  getlessons(courseId: number) {
    return this.http.get<Lesson[]>(`${this.apiUrl}/${courseId}/lessons`)
  }
  addLesson(id: number, lesson: Lesson) {
    return this.http.post(this.apiUrl + "/" + id + "/lessons", lesson);
  }
  getLessonById(courseId: number,lessonId: number) {
    return this.http.get<Lesson>(`${this.apiUrl}/${courseId}/lessons/${lessonId}`);
  }
  deleteLesson(courseId: number, lessonId: number) {
    return this.http.delete(`${this.apiUrl}/${courseId}/lessons/${lessonId}`);
  }
  updateLesson(courseId: number, lessonId: number, lesson: Lesson) {
    return this.http.put(`${this.apiUrl}/${courseId}/lessons/${lessonId}`, lesson);
  }
}

