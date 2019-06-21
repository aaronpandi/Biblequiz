import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import {ResultComponent } from 'src/app/layout/result/result.component';
// import { ResultComponent } from './result.component';
import { QuizServiceService } from 'src/app/shared/quiz-service.service';


@Injectable({
  providedIn: 'root'
})
export class ResultCanDeactivateService implements CanDeactivate<ResultComponent> {
  constructor(private quizservice: QuizServiceService) { }
  canDeactivate(component: ResultComponent):  boolean {
    // this.quizservice.isQuizStarted = true;
    if (this.quizservice.isQuizStarted == false)
    {
      return false;
    }
    else
      return true;
  }

}
