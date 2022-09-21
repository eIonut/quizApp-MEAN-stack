import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { backgroundColors } from './backgroundColors.constant';
import { ApiCallsServiceService } from '../api-calls-service.service';
import { Router } from '@angular/router';
import {StateService} from "../state.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {
  public category: string[] = [];
  public backgroundColors: string[] = backgroundColors;
  public redirectState = false;


  constructor(private http: HttpClient,
    private apiCallService: ApiCallsServiceService,
    private router: Router,
              private stateService: StateService) { }

  ngOnInit(): void {
    this.apiCallService.getCategories().subscribe((res) => {
      this.category = res;
    });
    this.redirectState = this.stateService.getRedirectState();
  }

  public fetchQuizzes(item: string){
    this.stateService.setState(true);
    this.router.navigate(['quiz'], {queryParams: {category: item}});
  }
}
