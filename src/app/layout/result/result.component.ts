import { Component, OnInit } from '@angular/core';
// import { QuizServiceService } from '.../shared/quiz-service.service';
import { QuizServiceService } from 'src/app/shared/quiz-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  tmpvar: string= "";
  percentageScored: number;
  passPercentage: number;
  ResultStatus: boolean;
  AlertPopup: boolean = false;
  ResultMode: number = 0;
  ResultArray: [];
  resultSetCount: number;
  qnLanguageNumber: number = 1;

  constructor(public quizservice: QuizServiceService, private quizrouter: Router,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.quizservice.isQuizStarted = false;
    this.quizservice.LoggedInUser = localStorage.getItem('userLoggedIn')
      this.ResultMode = parseInt(this.route.snapshot.paramMap.get('id'));

      if (this.ResultMode == 1)
      {
        // this.quizservice.passPercentage
        this.percentageScored =  this.quizservice.percentageScored;
        this.ResultStatus = this.quizservice.ResultStatus;
        this.AlertPopup = true;
        this.qnLanguageNumber = this.quizservice.ChosenQnLanguageNbr;
      }
      else
      {
        this.GetQuizResults();
      }
    
  }
  closeAlert(){
    this.AlertPopup = false;
    this.GetQuizResults();
  }

  GetQuizResults(){
    this.quizservice.getResultSummary().subscribe(
      (data: any) => {
        this.passPercentage = this.quizservice.passPercentage;
        this.ResultArray = data;
        this.resultSetCount = this.ResultArray.length;
        console.log(this.resultSetCount);
     });
  }



}
