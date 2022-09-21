import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from "./auth-guard.service";

const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
 { path: 'quiz', canActivate : [AuthGuardService], loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule) },
  { path: 'score', canActivate : [AuthGuardService], loadChildren: () => import('./score/score.module').then(m => m.ScoreModule) },
{path: "**", redirectTo: '/home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
