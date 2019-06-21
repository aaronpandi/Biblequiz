import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { QuizServiceService } from 'src/app/shared/quiz-service.service';
import { Router } from '@angular/router';
import {DatePipe} from '@angular/common';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()],
    providers: [DatePipe]
})
export class FormComponent implements OnInit {
  
  GroupAndSubGroup: any = [];
  UniqueGroupArray: any =[];
  ChosenGroupArray: any =[];
  ChosenSubGroup: boolean=false;
  ChosenSubGroupArray: any =[];
  showStartQuizBtn: boolean = false;
  AttemptsExceededAlertMsg: string = "";
  QuizDateClosedAlertMsg: string = "";
  ChosenGroupName: string;
  ChosenSubGroupName: string;
  ChosenLanguageNumber: number =0;
  IsEnglishEnabled: number;
  IsTamilEnabled: number;
  myDate = new Date();

  constructor(public quizservice: QuizServiceService, private quizrouter: Router, private dp: DatePipe) { }
  
    ngOnInit() {
      this.quizservice.LoggedInUser = localStorage.getItem('userLoggedIn')

      console.log(this.quizservice.LoggedInUser);
      if (this.quizservice.LoggedInUser != "")
      {
        this.quizservice.getGroupAndSubGroups(0,this.quizservice.LoggedInUser).subscribe(
          (data: any)=>{
            this.GroupAndSubGroup = data;
            console.log(this.GroupAndSubGroup);
            this.RemoveGroupDuplicates()
          }
        );
      }
      else
      {
        console.log("User information missing");
      }
    }
  
    RemoveGroupDuplicates()
    {
      this.UniqueGroupArray = this.GroupAndSubGroup.reduce((accumulator, current) => {
        if (! accumulator.find(({GroupId}) => GroupId === current.GroupId)) {
          accumulator.push(current);
        }
        return accumulator;
      }, []);
      this.chosenGroupId(1);  
      // const uniqify = (array, key) => array.reduce((prev, curr) => prev.find(a => a[key] === curr[key]) ? prev : prev.push(curr) && prev, []);
      // console.log('Remove Group Duplicate');
      // console.log(this.UniqueGroupArray);
      // console.log(this.GroupAndSubGroup);
    }
  
    // checkAdult(index) {
    //   return index >= document.getElementById("ageToCheck").value;
    // }
    
    chosenGroupId (GroupIdPassed: number)
    {
      // console.log(this.GroupAndSubGroup);
      // console.log(this.GroupAndSubGroup.findindex(checkAdult))
      console.log(this.UniqueGroupArray);
      // this.ChosenGroupName = GroupNmPassed;
      this.ChosenGroupArray = [];
      this.ChosenGroupArray = this.GroupAndSubGroup.reduce((accumulator, current) => {
        if (current.GroupId == GroupIdPassed) {
          accumulator.push(current);
        }
        return accumulator;
      }, []);
      this.ChosenGroupArray.sort(function (a,b) {return (a.SubGroupId-b.SubGroupId);})
      // this.ChosenGroupArray.reverse();
      // console.log("Aaron");
      // console.log('ChosenGroup');
      // console.log(this.ChosenGroupArray);
    }
  
    subgroupSection(SubGroupId: number){
      this.AttemptsExceededAlertMsg =""
      this.QuizDateClosedAlertMsg  = ""
      this.showStartQuizBtn = false;
      this.ChosenSubGroupArray = [];
      this.ChosenSubGroupArray = this.GroupAndSubGroup.reduce((accumulator, current, index) => {
        if (current.SubGroupId == SubGroupId) {
          accumulator.push(current);
        // console.log(current.IsTamilEnabled.data[0]);
          this.IsEnglishEnabled = current.IsEnglishEnabled.data[0];
          this.IsTamilEnabled = current.IsTamilEnabled.data[0];
          this.ChosenSubGroupName = current.SubGroupNm;
          this.ChosenGroupName = current.GroupNm;
          // this.quizservice.TotalAttempts = 
          this.quizservice.allowedAttempts = current.NoOfAttemptsAllowed;
          this.quizservice.completedAttempts = current.UserAttempts;
          localStorage.setItem('allowedAttempts', this.quizservice.allowedAttempts.toString());
          localStorage.setItem('completedAttempts', this.quizservice.completedAttempts.toString());
        }
        return accumulator;
      }, []);
      // console.log('ChosenGroup');
      // console.log(now);
      this.ChosenSubGroup = true;
    console.log(this.ChosenSubGroupArray[0].UserAttempts);
    console.log(this.ChosenSubGroupArray[0].NoOfAttemptsAllowed);
      if (parseInt(this.ChosenSubGroupArray[0].UserAttempts) < parseInt(this.ChosenSubGroupArray[0].NoOfAttemptsAllowed) && parseInt(this.dp.transform(this.ChosenSubGroupArray[0].QuizEndDt,"yyyyMMdd"))  >= parseInt(this.dp.transform(this.myDate,"yyyyMMdd")))
      {
        this.showStartQuizBtn = true;
      }
      else
      {
        console.log(this.myDate);
        this.showStartQuizBtn = false;
        if (parseInt(this.ChosenSubGroupArray[0].UserAttempts) >= parseInt(this.ChosenSubGroupArray[0].NoOfAttemptsAllowed))
        {
          this.AttemptsExceededAlertMsg  = "You have finished your eligible Attempts for this quiz";
        }
        if (parseInt(this.dp.transform(this.ChosenSubGroupArray[0].QuizEndDt,"yyyyMMdd"))  < parseInt(this.dp.transform(this.myDate,"yyyyMMdd")))
        {
          this.QuizDateClosedAlertMsg  = "The quiz timeline is over.";
        }        

      }

      // if (parseInt(this.dp.transform(this.ChosenSubGroupArray[0].QuizEndDt,"yyyyMMdd"))  >= parseInt(this.dp.transform(this.myDate,"yyyyMMdd")))
      // {
      //   this.showStartQuizBtn = true;
      //   console.log(this.dp.transform(this.ChosenSubGroupArray[0].QuizEndDt,"yyyyMMdd"));
      //   console.log(this.dp.transform(this.myDate,"yyyyMMdd"));
      // }
      // else
      // {
      //   this.showStartQuizBtn = false;
      //   this.QuizDateClosedAlertMsg  = "The quiz timeline is over.";
      //   console.log(this.dp.transform(this.ChosenSubGroupArray[0].QuizEndDt,"yyyyMMdd"));
      //   console.log(this.dp.transform(this.myDate,"yyyyMMdd"));
      // }
      
  
    }
  
    PrepareForTheQuiz(subGroupId: number, ChosenQnLanguageNbr: number) {
      // localStorage.clear();
      this.clear();
      this.quizservice.ChosenSubGroupId = subGroupId;        
      this.quizservice.timeAllocated = this.ChosenSubGroupArray[0].QuizDuration;
      this.quizservice.ChosenQnLanguageNbr = ChosenQnLanguageNbr;
      // console.log(this.ChosenSubGroupArray[0]);
      // console.log(this.ChosenSubGroupArray[0]);
      this.quizservice.passPercentage = this.ChosenSubGroupArray[0].PassPercentage;
      // console.log(this.quizservice.passPercentage);
      localStorage.setItem('TimeAllocated', this.quizservice.timeAllocated.toString());
      this.quizrouter.navigate(['/disclaimer']);
      // console.log('Chosen SubGroup  - '+ this.quizservice.ChosenSubGroupId);
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
  