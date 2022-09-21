import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreRoutingModule } from './score-routing.module';
import { ScoreComponent } from './score.component';
import {HomeModule} from "../home/home.module";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ScoreComponent
  ],
    imports: [
        CommonModule,
        ScoreRoutingModule,
        HomeModule,
        MatIconModule
    ]
})
export class ScoreModule { }
