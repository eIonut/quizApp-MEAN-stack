import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ApiCallsServiceService } from '../api-calls-service.service';
import {ScoreService} from "../score.service";
import {OnDestroy} from "@angular/core";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnDestroy {
  public category: string = '';
  public quizz = [];
  public questions = [];
  public topic: string = '';
  public correctAnswer: number = 0;
  public questionAnswered = false;
  public answers: any[] = [];
  public question: string = '';
  public questionIndex = 0;
  public numberOfQuestions = 0;
  public currentScore = 0;
  public checkItemsStatus = [false, false, false, false];
  public chosenAnswer: number = 0;
  public timer = 30;
  public flag = false;

  private interval: any;
  private timeout: any;

  constructor( private apiCallService: ApiCallsServiceService,
    private scoreService: ScoreService,
    private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((queryParams: Params) => {
      this.category = queryParams["category"];
    });

    this.apiCallService.getQuiz(this.category).subscribe((res) => {
      this.quizz = res;
      this.initializeQuestions();
      this.setQuestions();
      this.interval = setInterval(() => {
        this.timer --;
      }, 1000)
    });
  }

ngOnDestroy() {
  clearTimeout(this.timeout);
  clearInterval(this.interval);
}

  public nextQuestion(){
      clearTimeout(this.timeout);
      clearInterval(this.interval);

      this.timer = 30;
      if ((this.questionAnswered) && (this.chosenAnswer != this.correctAnswer)) {
        if (this.questionIndex == this.numberOfQuestions) {
          this.questionIndex = this.numberOfQuestions;
        } else {
          this.questionIndex++;
        }
        if (this.questionIndex == this.numberOfQuestions) {
          this.scoreService.setQuestionsNumber(this.numberOfQuestions);
          this.scoreService.setScore(this.currentScore);
          this.router.navigate(['score'], {queryParams: {category: this.category}})

        } else {
          this.setQuestions();
          this.interval = setInterval(() => {
            this.timer--;
          }, 1000)
          this.timeout = setTimeout(() => {
            this.nextQuestion();
            this.timer = 30;
          }, 30000)

        }
      } else if ((this.questionAnswered) && (this.chosenAnswer == this.correctAnswer)) {
        this.currentScore++;
        if (this.currentScore >= this.numberOfQuestions) {
          this.currentScore = this.numberOfQuestions;
        }
        if (this.questionIndex == this.numberOfQuestions) {
          this.questionIndex = this.numberOfQuestions;
        } else {
          this.questionIndex++;
        }
        if (this.questionIndex == this.numberOfQuestions) {
          this.scoreService.setQuestionsNumber(this.numberOfQuestions);
          this.scoreService.setScore(this.currentScore);


          this.router.navigate(['score'], {queryParams: {category: this.category}})
        } else {
          this.setQuestions();
          this.interval = setInterval(() => {
            this.timer--;
          }, 1000)
          this.timeout = setTimeout(() => {
            this.nextQuestion();
            this.timer = 30;
          }, 30000)

        }
      }
  }

  public initializeQuestions() {
    this.timeout = setTimeout(() => {
        this.questionAnswered = true;
      this.nextQuestion();
      this.timer = 30;
    }, 30000)

    for (let [key, value] of Object.entries(this.quizz)) {
      this.questions = value;
      this.numberOfQuestions = this.questions[0]["questions"]["length"];
    }
    return this.questions;
  }

  public setQuestions() {
    this.flag = false;
    this.checkItemsStatus = this.checkItemsStatus.map(it => it = false);
        this.question = this.questions[0]["questions"][this.questionIndex]["question"];
        this.answers = this.questions[0]["questions"][this.questionIndex]["answers"];
        this.correctAnswer = this.questions[0]["questions"][this.questionIndex]["correctAnswer"];
        this.topic = this.questions[0]["topic"];
  }

  public checkAnswer(i: number){
    console.log(this.flag);

    this.flag = false;
    this.chosenAnswer = i;
    this.checkItemsStatus[i] = !this.checkItemsStatus[i];
    if(this.checkItemsStatus[i]){
      this.questionAnswered = true;
      this.flag = true;
    }
    this.checkItemsStatus.map((element, index) => {
      if(index != i){
        this.checkItemsStatus[index] = false;
      }
    })
  }
}
