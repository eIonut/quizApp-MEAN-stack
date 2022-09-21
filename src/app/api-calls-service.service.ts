import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsServiceService {
  public url = 'http://localhost:3000/api/v1/quizzes/categories';
  constructor(private http: HttpClient) { }

  public getCategories() {
    return this.http.get<any>(this.url);
  }

  public getQuiz(url: string) {
    const quizUrl = `http://localhost:3000/api/v1/quizzes/${url}`;
    return this.http.get<any>(quizUrl);
  }



}
