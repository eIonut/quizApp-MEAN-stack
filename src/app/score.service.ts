import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  public score = 0;
  public questionNumber = 0;
  constructor() { }

  public setScore(item: number){
    this.score = item;
  }

  public getScore(){
    return this.score;
  }

  public setQuestionsNumber(questionNumber: number){
    this.questionNumber = questionNumber;
  }

  public getQuestionsNumber(){
    return this.questionNumber;
  }
}
