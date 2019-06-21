import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from  'rxjs';
import { LoginDetails } from '../LoginDetails';
import { webApiResponse } from '../webAPIResponse';
 
@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
// APIResponse: webApiResponse;

// ****** THIS IS FOR PRODUCTION
readonly rootAPIURL = 'http://13.127.103.161:3000';

// ****** THIS IS FOR Development
//  readonly rootAPIURL = 'http://localhost:3000';

qns: any[];
CorrectAnswers: any[];
FinalResult: any[];
seconds: number;
timer;
timeAllocated: number;
qnProgress: number;
LoggedInUser: string = "";
LoggedInPersonName: string ="";
FinalMarkScored: number= 0;
ResultStatus: boolean = null;
GroupIdChoosen: number = 0 ;
ChosenSubGroupId: number = 0;
ChosenQnLanguageNbr: number = 0;
passPercentage: number = 0;
percentageScored: number = 0;
isQuizStarted: boolean=false;
allowedAttempts: number = 0;
completedAttempts: number= 0;

  constructor(private http: HttpClient) {
       }

    
  TimeRounding(value: number): String{
    // console.log("Aaron Pandi");
    // console.log(value);
    // console.log(value.toString().length);
    if (value.toString().length == 1)
    {
      // console.log(value);
      return "0" + value.toString();
    }
    else 
    {
      return value.toString()
    }
    // return value.toString;
  }

  displayTimeElapsed ()
  {
      return this.TimeRounding(Math.floor(this.seconds/3600)) + ":" + this.TimeRounding(Math.floor(this.seconds/60)) + ":" + this.TimeRounding(Math.floor(this.seconds  % 60));

  }    
      
  LoginValidation(UserDetails: LoginDetails): Observable<webApiResponse>{
    return this.http.post<webApiResponse>(this.rootAPIURL + "/api/logincheck", UserDetails,
    {
    headers: new HttpHeaders (
        {
          'Content-Type': 'application/json'
        }
    
    ) 
  }
    )
  };
  
  AddNewUser(UserDetails: LoginDetails): Observable<webApiResponse> {
  return this.http.post<webApiResponse>(this.rootAPIURL +"/api/", UserDetails, 
    {
      headers: new HttpHeaders (
          {
            'Content-Type': 'application/json'
          }
      
      ) 
      
    }
  )
  };

  getQuestions(subGroupId: number) {
    return this.http.get(this.rootAPIURL +"/api/quiz/" + subGroupId + '/' + this.ChosenQnLanguageNbr) 
      };

  getResultSummary() {
    return this.http.get(this.rootAPIURL +"/api/resultSummary/" + this.LoggedInUser) 
      };      

  getGroupAndSubGroups(groupId: number, LoggedInUser: string) {
    return this.http.get(this.rootAPIURL +"/api/group/" + groupId + '/' +LoggedInUser)
      };

  getAnswersForQuestions(QuestionDetails: any): Observable<any> {
    return this.http.post<webApiResponse>(this.rootAPIURL +"/api/answers", QuestionDetails, 
    {
      headers: new HttpHeaders (
          {
            'Content-Type': 'application/json'
          }
      
      ) 
      
    }
  )
  };

  SubmitAnswersIntoDb(QuestionDetails: any): Observable<any> {
    return this.http.post<webApiResponse>(this.rootAPIURL + "/api/submit", QuestionDetails, 
    {
      headers: new HttpHeaders (
          {
            'Content-Type': 'application/json'
          }
      
      ) 
      
    }
  )
  };
    
  
}