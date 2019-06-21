import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/shared/quiz-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent implements OnInit {
qnLanguageNumber: number;
timeAllocated: number;
passPercentage: number; 
  constructor(private quizservice: QuizServiceService, private quizrouter: Router) { }

  ngOnInit() {
    this.quizservice.isQuizStarted = false;
    // console.log("test");
    this.quizservice.LoggedInUser = localStorage.getItem('userLoggedIn')
    this.qnLanguageNumber = this.quizservice.ChosenQnLanguageNbr;
    this.timeAllocated = this.quizservice.timeAllocated;
    this.passPercentage = this.quizservice.passPercentage;
    console.log(this.quizservice.passPercentage);
  }

  startTheQuiz()
  {
    console.log(this.quizservice.ChosenSubGroupId);
    console.log(this.quizservice.LoggedInUser);
   if (this.quizservice.ChosenSubGroupId !== undefined &&  this.quizservice.LoggedInUser !="" && this.quizservice.LoggedInUser !== undefined)
   {
    this.clear();
    localStorage.setItem('TimeAllocated', this.quizservice.timeAllocated.toString()); 
    this.quizrouter.navigate(['/quiz']);
    this.quizservice.isQuizStarted = true;
    localStorage.setItem('isQuizStarted', this.quizservice.isQuizStarted.toString());
    console.log("Quiz Status");
    console.log(this.quizservice.isQuizStarted);
   } 
 
  }
  
  clear(){
    localStorage.removeItem("TimeAllocated");
    localStorage.removeItem("seconds");
    localStorage.removeItem("QnsAns");
    localStorage.removeItem("QnsProgress");
    // localStorage.removeItem("NoOfQnsAnswered");
    // localStorage.removeItem("NoOfQnsToBeRevisited");
    // localStorage.removeItem("QnsToBeRevisited");
  }


}


