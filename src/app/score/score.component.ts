import { Component, OnInit } from '@angular/core';
import {ScoreService} from "../score.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {StateService} from "../state.service";

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  public score = 0;
  public questionNumber = 0;
  public category = '';
  constructor( private apiCallService: ScoreService,
               private route: ActivatedRoute,
               private router: Router,
               private stateService: StateService) { }

  ngOnInit(): void {
    this.score = this.apiCallService.getScore();
    this.questionNumber = this.apiCallService.getQuestionsNumber();
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.category = queryParams["category"];
      }
    );
    this.stateService.setRedirectState(false);
  }

  fetchQuiz() {
    this.router.navigate(['quiz'], {queryParams: {category: this.category}});

  }
}
