import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    QuizComponent
  ],
    imports: [
        CommonModule,
        QuizRoutingModule,
        MatIconModule
    ]
})
export class QuizModule { }
