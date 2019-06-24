import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import {QuizComponent } from 'src/app/quiz/quiz.component';
import { QuizServiceService } from 'src/app/shared/quiz-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardCanDeactivateService implements CanDeactivate<QuizComponent> {
  constructor(private quizservice: QuizServiceService) { }
  canDeactivate(component: QuizComponent):  boolean {
    // this.quizservice.isQuizStarted = true;
    if (this.quizservice.isQuizStarted == true && this.quizservice.seconds >0)
    {
      // console.log("Are you sure, you want to submit");
      if  (confirm("Are you sure, you want to submit the quiz?") == true)
      {
          this.quizservice.userBackButtonClick = true;
      }
      return false;
    }
    else
      return true;
  }
}
