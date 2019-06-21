
import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../shared/quiz-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-screen',
  templateUrl: './test-screen.component.html',
  styleUrls: ['./test-screen.component.css']
})
export class TestScreenComponent implements OnInit {
GroupAndSubGroup: any = [];
UniqueGroupArray: any =[];
ChosenGroupArray: any =[];
ChosenSubGroup: boolean=false;
ChosenSubGroupArray: any =[];
showStartQuizBtn: boolean = false;
AttemptsExceededAlertMsg: string = "You have finished your eligible Attempts for this quiz";
sidebarClass = "active";

constructor(public quizservice: QuizServiceService, private quizrouter: Router) { }

  ngOnInit() {
    // console.log(this.quizservice.LoggedInUser);
    // console.log(localStorage.getItem("participant"));
    // console.log(JSON.parse(localStorage.getItem("participant")).Message);
    this.quizservice.LoggedInUser = JSON.parse(localStorage.getItem("participant")).Message;
    console.log(this.quizservice.LoggedInUser);
    if (this.quizservice.LoggedInUser != "")
    {
      this.quizservice.getGroupAndSubGroups(0,this.quizservice.LoggedInUser).subscribe(
        (data: any)=>{
          this.GroupAndSubGroup = data;
          console.log(this.GroupAndSubGroup);
          this.RemoveGroupDuplicates();
          console.log(this.UniqueGroupArray);

        }
      );
      console.log(this.ChosenGroupArray);
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
    // const uniqify = (array, key) => array.reduce((prev, curr) => prev.find(a => a[key] === curr[key]) ? prev : prev.push(curr) && prev, []);
    // console.log('Remove Group Duplicate');
    // console.log(this.UniqueGroupArray);
    // console.log(this.GroupAndSubGroup);
  }

  chosenGroupId (GroupIdPassed: number)
  {
    // console.log(this.GroupAndSubGroup);
    this.ChosenGroupArray = [];
    this.ChosenGroupArray = this.GroupAndSubGroup.reduce((accumulator, current) => {
      if (current.GroupId == GroupIdPassed) {
        accumulator.push(current);
      }
      return accumulator;
    }, []);
    // console.log('ChosenGroup');
    // console.log(this.ChosenGroupArray);
  }

  subgroupSection(SubGroupId: number){
    this.showStartQuizBtn = false;
    this.ChosenSubGroupArray = [];
    this.ChosenSubGroupArray = this.GroupAndSubGroup.reduce((accumulator, current) => {
      if (current.SubGroupId == SubGroupId) {
        accumulator.push(current);
      }
      return accumulator;
    }, []);
    // console.log('ChosenGroup');
    // console.log(now);
    this.ChosenSubGroup = true;

    if (this.ChosenSubGroupArray[0].UserAttempts < this.ChosenSubGroupArray[0].NoOfAttemptsAllowed )
    {
      this.showStartQuizBtn = true;
    }
    else
    {
      this.showStartQuizBtn = false;
    }
    console.log(this.ChosenSubGroupArray);
  }

  startTheQuiz(subGroupId: number) {
    // localStorage.clear();
    this.clear();
    this.quizservice.ChosenSubGroupId = subGroupId;        
    this.quizservice.timeAllocated = this.ChosenSubGroupArray[0].QuizDuration;
    localStorage.setItem('TimeAllocated', this.quizservice.timeAllocated.toString());
    this.quizrouter.navigate(['/quiz']);
    console.log('Chosen SubGrop  - '+ this.quizservice.ChosenSubGroupId);
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
  sidebarCollapse_click(){
    
    if (this.sidebarClass = "active") 
      this.sidebarClass ="something"
      
      this.sidebarClass ="active"
  
  }
}


/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-screen',
  templateUrl: './test-screen.component.html',
  styleUrls: ['./test-screen.component.css']
})
export class TestScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
