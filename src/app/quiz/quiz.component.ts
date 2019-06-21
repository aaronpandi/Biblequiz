import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { QuizServiceService } from '../shared/quiz-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  NumberofQuestions: number;
  ChoosenOptionId: number = null;
  Answers = [];
  AnswersParam2 = {};
  AnswersFinalOutputForDB = [];
  AnswerStatus: string = "";
  MarksAllocated: number = 0;
  ElapsedTimeInSeconds: number = 0;
  NextButtonEnable: boolean = true;
  PreviousButtonEnable: boolean = true;
  AnswerSubmittedStatus: boolean = false;
  ProgressBarClicked: string = "All";
  QnsToBeRevisited: number[] = [];
  QnsAnswered: number[] = [];
  QnsUnAnswered: number[] = [];
  NoOfQnsToBeRevisited: number = 0;
  RevisitFlagStyleColor: string = "gray";
  // ShowAllStyleColor: string = "gray";
  ShowAllStyleVisibility: string = "hidden";
  NoOfQnsAnswered: number = 0;
  // RevisitedQnProgressNbr: number = 0;
  // tmpRevisitedQnProgressNbr: number = 0;
  tmpQnsProgressArray: number[];
  ProgressBarAnsweredPct: number = 0;
  ProgressBarUnAnsweredPct: number = 0;
  ProgressBarRevisitedPct: number = 0;
  // passpercentage: number;
  totalMarks: number=0;
  showQuizSection:boolean = true;
  attemptsCompletedMessage: string = "You have already completed your attempts";
  userSubmittedFlag: boolean = false;


  // NumberOfCorrectQuestions: number=0;

  constructor(public quizservice: QuizServiceService, private quizrouter: Router) { console.log("test"); }

  ngOnInit() {
    console.log("att");
    console.log(this.quizservice.allowedAttempts);
    console.log(this.quizservice.completedAttempts);
    console.log(localStorage.getItem("isQuizStarted"));
    if (localStorage.getItem("isQuizStarted")=="true")
    {
      this.quizservice.isQuizStarted = true;
    }
    
    this.quizservice.allowedAttempts = parseInt(localStorage.getItem("allowedAttempts"));
    this.quizservice.completedAttempts = parseInt(localStorage.getItem("completedAttempts"));
    if (this.quizservice.allowedAttempts > this.quizservice.completedAttempts)
    {
        // clearInterval(this.quizservice.timer);
        // console.log (parseInt(localStorage.getItem("seconds")));
        // console.log("ngOnIt");
        // console.log(JSON.parse(localStorage.getItem("QnsAns")));
        // console.log(JSON.parse(localStorage.getItem("QnsProgress")));
        // console.log(this.quizservice.timeAllocated + ' - timer');
        if (parseInt(localStorage.getItem("seconds")) > 0) {
          console.log("ngOnIt-If");
          this.ProgressBarClicked = "All";
          this.quizservice.seconds = parseInt(localStorage.getItem("seconds"));
          this.quizservice.qnProgress = 0; //parseInt(localStorage.getItem("QnsProgress"));
          this.quizservice.timeAllocated = parseInt(localStorage.getItem("TimeAllocated"));
          // console.log(this.quizservice.qns);
          // console.log(JSON.parse(localStorage.getItem("QnsAns")));
          this.quizservice.qns = JSON.parse(localStorage.getItem("QnsAns"));
          this.quizservice.CorrectAnswers = JSON.parse(localStorage.getItem("AnswersFinalOutputForDB"));
          // localStorage.setItem('AnswersFinalOutputForDB', JSON.stringify(this.quizservice.CorrectAnswers));
          // this.quizservice.qns = JSON.parse(localStorage.getItem("QnsAns"));
          this.NumberofQuestions = this.quizservice.qns.length;
          this.PopulateQnSplitsArrays("All");
          // this.NoOfQnsAnswered = parseInt(localStorage.getItem("NoOfQnsAnswered"));
          // this.NoOfQnsToBeRevisited = parseInt(localStorage.getItem("NoOfQnsToBeRevisited"));
          // this.QnsToBeRevisited = JSON.parse(localStorage.getItem("QnsToBeRevisited"));
          // this.quizservice.qns.forEach((index, array) => {
          //   if (index.Revisit == true ) 
          //   {
          //     this.QnsToBeRevisited.push();
          //   }
          // })
          // this.QnsToBeRevisited.sort((a,b)=> {return a-b;});
          // console.log("test-AAron");
          console.log(this.QnsToBeRevisited);
          this.RefreshProgressBar();
          this.SetRevisitFlagStyleColor();
          // this.ChoosenOptionId = this.quizservice.qns[this.quizservice.qnProgress].answer;
          if (this.quizservice.qns[this.quizservice.qnProgress].answer !== undefined && this.quizservice.qns[this.quizservice.qnProgress].answer !== null) {
            // this.quizservice.qnProgress ++; 
            this.ChoosenOptionId = this.quizservice.qns[this.quizservice.qnProgress].answer - 1;
          }
          // console.log(this.quizservice.qns);
          // console.log(this.quizservice.qns[this.quizservice.qnProgress].answer)
          if (this.quizservice.seconds <= 0)
          {
            // this.quizservice.isQuizStarted = false;
            this.quizrouter.navigate(["/result"]);
          }
            
          else
          {
            // this.quizservice.isQuizStarted = true;
            this.startTimer();
          }
            
        }
        else {
          // this.quizservice.isQuizStarted = true;
          console.log("ngOnIt-else");
          this.quizservice.seconds = parseInt(localStorage.getItem("TimeAllocated"));
          this.quizservice.qnProgress = 0;
          this.PreviousButtonEnable = false;
          this.ProgressBarUnAnsweredPct = 100;
          localStorage.setItem('QnsProgress', this.quizservice.qnProgress.toString());
          localStorage.setItem('seconds', this.quizservice.seconds.toString());
          this.quizservice.getQuestions(this.quizservice.ChosenSubGroupId).subscribe(
            (data: any) => {
              this.NumberofQuestions = 0;
              this.quizservice.qns = data;
              localStorage.setItem('QnsAns', JSON.stringify(this.quizservice.qns));
              this.NumberofQuestions = this.quizservice.qns.length;
              console.log(this.quizservice.qns);
              // console.log(this.quizservice.qns[0].QuestionDescr);
              this.startTimer();
              console.log("timer test");
              // console.log(this.quizservice.qns);
            },(error: any) => {},() => {
              // console.log("Next call to DB");    
              // this.Answers = this.quizservice.qns.map(function (AnswersOption) {
              //   return (
              //     {
              //       QuestionId: AnswersOption.QuestionId
              //     });
              //   });
              // this.AnswersFinalOutputForDB.push(this.quizservice.ChosenSubGroupId, this.Answers);
              // this.quizservice.getAnswersForQuestions(this.AnswersFinalOutputForDB).subscribe(
              // (data: any) => {
              //   this.quizservice.CorrectAnswers = [];
              //   this.quizservice.CorrectAnswers = data;
              //   localStorage.setItem('AnswersFinalOutputForDB', JSON.stringify(this.quizservice.CorrectAnswers));
              // });        

            }
            )
            


        }
        if (this.NumberofQuestions == 1) {
          this.PreviousButtonEnable = false;
          this.NextButtonEnable = false;
        }
        else if (this.quizservice.qnProgress == 0) {
          this.PreviousButtonEnable = false;
          this.NextButtonEnable = true;
        }
        else if (this.quizservice.qnProgress > 0 && this.quizservice.qnProgress < this.NumberofQuestions - 1) {
          this.PreviousButtonEnable = true;
          this.NextButtonEnable = true;
        }
        else if (this.quizservice.qnProgress > 0) {
          this.PreviousButtonEnable = true;
          this.NextButtonEnable = false;
        }

      }
    else
    {
      this.showQuizSection = false;
      this.quizservice.isQuizStarted = false;

    }

  }



  startTimer() {
    // this.quizservice.seconds = 0;
    this.quizservice.timer = setInterval(() => {
      if (this.quizservice.seconds > 0) {
        this.quizservice.seconds--;
        // console.log(JSON.stringify(this.quizservice.seconds.toString()));
        localStorage.setItem('seconds', this.quizservice.seconds.toString());

        console.log(localStorage.getItem("seconds"));
        console.log(" Timer Value - " + this.quizservice.timer);
        // console.log('seconds' +this.quizservice.seconds);

      }
      else {
        console.log("Else Part");
        clearInterval(this.quizservice.timer);
        // this.ElapsedTimeInSeconds = this.quizservice.seconds
        // this.quizservice.
        this.userSubmittedFlag = true;
        this.SubmitAnswers();
        
        // this.quizrouter.navigate(["/result",1]);

      }
    }, 1000)


  }

  PreviousQnClick() {
    console.log(this.NextButtonEnable);
    if (this.ChoosenOptionId == null)
      this.quizservice.qns[this.quizservice.qnProgress].answer = this.ChoosenOptionId;

    if (this.ProgressBarClicked == "All") {
      if (this.quizservice.qnProgress - 1 >= 0) {
        if (this.quizservice.qnProgress - 1 == 0) {
          this.PreviousButtonEnable = false;
        }
        this.quizservice.qnProgress--;
      }
      this.NextButtonEnable = true;
    }
    else {
      let tmpQnsPrgsNbr: number;
      let tmpQnsPrgsIndex: number;
      this.tmpQnsProgressArray = [];
      // tmpArray.reverse();
      if (this.ProgressBarClicked == "Answered") {
        this.tmpQnsProgressArray = this.QnsAnswered;
      }
      else if (this.ProgressBarClicked == "UnAnswered") {
        this.tmpQnsProgressArray = this.QnsUnAnswered;
      }
      else if (this.ProgressBarClicked == "Revisit") {
        this.tmpQnsProgressArray = this.QnsToBeRevisited;
      }

      this.tmpQnsProgressArray.reverse();
      this.PreviousButtonEnable = true;
      this.NextButtonEnable = true;
      // this.RevisitedQnProgressNbr = this.QnsToBeRevisited.findIndex(item => item > this.quizservice.qnProgress);
      tmpQnsPrgsNbr = this.tmpQnsProgressArray.find(item => item < this.quizservice.qnProgress);
      this.tmpQnsProgressArray.reverse();
      tmpQnsPrgsIndex = this.tmpQnsProgressArray.indexOf(tmpQnsPrgsNbr);
      console.log("test- Aaron");
      console.log(this.tmpQnsProgressArray);
      // console.log(this.RevisitedQnProgressNbr);
      console.log(tmpQnsPrgsIndex);
      if (tmpQnsPrgsIndex + 1 == this.tmpQnsProgressArray.length) {
        this.NextButtonEnable = false;
      }
      if (tmpQnsPrgsIndex == 0) {
        this.PreviousButtonEnable = false;
      }
      this.quizservice.qnProgress = this.tmpQnsProgressArray[tmpQnsPrgsIndex];
      console.log(this.quizservice.qnProgress);
      console.log(this.quizservice.qns[this.quizservice.qnProgress]);

    }
    this.ChoosenOptionId = null;
    this.SetRevisitFlagStyleColor();
    if (this.quizservice.qns[this.quizservice.qnProgress].answer !== undefined && this.quizservice.qns[this.quizservice.qnProgress].answer !== null) {
      // this.quizservice.qnProgress ++; 
      this.ChoosenOptionId = this.quizservice.qns[this.quizservice.qnProgress].answer - 1;

    }
    localStorage.setItem('QnsProgress', JSON.stringify(this.quizservice.qnProgress));
    // console.log(this.quizservice.qns);
  }

  NextQnClick() {
    console.log(this.PreviousButtonEnable);
    console.log("NextClick Progress - " + this.quizservice.qnProgress);
    // console.log(this.quizservice.timer);
    if (this.ChoosenOptionId == null)
      this.quizservice.qns[this.quizservice.qnProgress].answer = this.ChoosenOptionId;

    //  console.log(this.quizservice.qns[this.quizservice.qnProgress].answer);

    //  console.log(this.RevisitFlag); 


    if (this.ProgressBarClicked == "All") {
      if (this.quizservice.qnProgress + 1 < this.NumberofQuestions) {
        console.log("Next Click - Inside - " + this.quizservice.qnProgress);
        if (this.quizservice.qnProgress + 2 == this.NumberofQuestions) {
          this.NextButtonEnable = false;
        }
        this.quizservice.qnProgress++;

      }
      this.PreviousButtonEnable = true;
    }
    else {
      let tmpQnsPrgsIndex: number;
      this.PreviousButtonEnable = true;
      this.NextButtonEnable = true;
      this.tmpQnsProgressArray = [];
      if (this.ProgressBarClicked == "Answered") {
        this.tmpQnsProgressArray = this.QnsAnswered;
      }
      else if (this.ProgressBarClicked == "UnAnswered") {
        this.tmpQnsProgressArray = this.QnsUnAnswered;
      }
      else if (this.ProgressBarClicked == "Revisit") {
        this.tmpQnsProgressArray = this.QnsToBeRevisited;
      }


      // this.RevisitedQnProgressNbr = this.QnsToBeRevisited.findIndex(item => item > this.quizservice.qnProgress);
      tmpQnsPrgsIndex = this.tmpQnsProgressArray.findIndex(item => item > this.quizservice.qnProgress);
      console.log(this.tmpQnsProgressArray);
      // console.log(this.RevisitedQnProgressNbr);
      console.log(tmpQnsPrgsIndex);
      if (tmpQnsPrgsIndex + 1 == this.tmpQnsProgressArray.length) {
        this.NextButtonEnable = false;
      }
      if (tmpQnsPrgsIndex == 0) {
        this.PreviousButtonEnable = false;
      }
      this.quizservice.qnProgress = this.tmpQnsProgressArray[tmpQnsPrgsIndex];
      console.log(this.quizservice.qnProgress);
      console.log(this.quizservice.qns[this.quizservice.qnProgress]);
      // if (this.RevisitedQnProgressNbr +2 <= this.QnsToBeRevisited.length)
      // {
      //   if (this.RevisitedQnProgressNbr +2 == this.QnsToBeRevisited.length)
      //   {
      //     this.NextButtonEnable = false;
      //   }
      //   this.RevisitedQnProgressNbr ++;
      //   console.log(this.RevisitedQnProgressNbr);
      //   console.log(this.PreviousButtonEnable);
      //   if (this.RevisitedQnProgressNbr  <= 0)
      //   {
      //     this.PreviousButtonEnable = false;
      //   }
      //   this.tmpRevisitedQnProgressNbr = this.RevisitedQnProgressNbr;
      //   this.quizservice.qnProgress = this.QnsToBeRevisited[this.RevisitedQnProgressNbr];          
      // }
    }
    // this.SetRevisitFlagStyleColor();
    // if (this.quizservice.qns[this.quizservice.qnProgress].answer !== undefined && this.quizservice.qns[this.quizservice.qnProgress].answer !== null) 
    // {
    //   // this.quizservice.qnProgress ++; 
    //   this.ChoosenOptionId = this.quizservice.qns[this.quizservice.qnProgress].answer -1 ;
    // }
    // this.PreviousButtonEnable = true;


    // console.log("test");
    this.ChoosenOptionId = null;
    this.SetRevisitFlagStyleColor();
    if (this.quizservice.qns[this.quizservice.qnProgress].answer !== undefined && this.quizservice.qns[this.quizservice.qnProgress].answer !== null) {
      // this.quizservice.qnProgress ++; 
      this.ChoosenOptionId = this.quizservice.qns[this.quizservice.qnProgress].answer - 1;
    }
    localStorage.setItem('QnsProgress', JSON.stringify(this.quizservice.qnProgress));
  }


  ChosenOption(optionId) {
    // console.log("progress No - " + this.quizservice.qnProgress);
    // console.log("choosen");
    this.ChoosenOptionId = optionId;
    this.quizservice.qns[this.quizservice.qnProgress].answer = this.ChoosenOptionId + 1;

    // localStorage.setItem('QnsProgress', JSON.stringify(this.quizservice.qnProgress));
    // console.log(this.quizservice.qns[this.quizservice.qnProgress].answer);
    // console.log(this.ChoosenOptionId);
    // console.log(this.quizservice.qns[this.quizservice.qnProgress].answer);
    // this.CountNoOfQnsAnswered();
    this.PopulateQnSplitsArrays("Answered");
    localStorage.setItem('QnsAns', JSON.stringify(this.quizservice.qns));
    // this.RefreshProgressBar();  
    // console.log(tempVar);
  }

  // CountNoOfQnsAnswered(): void{
  //   var tempVar: number =0; 
  //   this.quizservice.qns.forEach((index) => {
  //     if (index.answer !== undefined && index.answer !== null) 
  //         tempVar ++;
  //  })
  //   this.NoOfQnsAnswered = tempVar;
  //   this.RefreshProgressBar();
  //   // localStorage.setItem('NoOfQnsAnswered', JSON.stringify(this.NoOfQnsAnswered));
  //   localStorage.setItem('NoOfQnsAnswered', this.NoOfQnsAnswered.toString());  
  //   console.log(this.NoOfQnsAnswered);
  // }

  ngOnDestroy()
  {
    console.log("Ng Destroy Activated");
    this.SubmitAnswers();
    // if (this.quizserviceisQuizStarted == true)
    // {
    //   if (confirm("Are you sure, you want to submit the quiz?") == true)
    //   {
    //     this.SubmitAnswers();
    //   }

    // }
    
  }

  SubmitAnswers() {
    if (!this.AnswerSubmittedStatus && this.quizservice.isQuizStarted) {
      console.log("Submission Starts");
      this.AnswerSubmittedStatus = true;
      this.totalMarks = 0;
      // this
      this.quizservice.isQuizStarted = false;
      this.AnswersParam2 = {
        UserId: this.quizservice.LoggedInUser,
        SubGroupId: this.quizservice.ChosenSubGroupId,
        ElapsedTime: (this.quizservice.timeAllocated - this.quizservice.seconds)
      }

      this.Answers = this.quizservice.qns.map(function (AnswersOption) {
        return (
          {
            // SubGroupId: 1,
            ChosenOption: AnswersOption.answer,
            QuestionId: AnswersOption.QuestionId
            // QuestionIdAndChosenOption: [AnswersOption.QuestionId, AnswersOption.answer]
          });
        // ({
        //   SubGroupId: 1,
        //   QuestionId: AnswersOption.answer
        // });
      })

      this.AnswersFinalOutputForDB.push(this.AnswersParam2, this.Answers);
      console.log(this.AnswersFinalOutputForDB);
      this.quizservice.getAnswersForQuestions(this.AnswersFinalOutputForDB).subscribe(
        (data: any) => {
          clearInterval(this.quizservice.timer);
          this.quizservice.CorrectAnswers = [];
          this.quizservice.CorrectAnswers = data;
          this.quizservice.FinalResult = this.quizservice.qns.map(
            (questions) => {
              console.log('Aaron');
              console.log(questions);
              this.totalMarks = this.totalMarks +  questions.MarksAllocated;

              this.AnswerStatus = "";
              this.MarksAllocated = 0;
              if (this.quizservice.CorrectAnswers.find(answer => answer.QuestionId == questions.QuestionId).AnswerOptionNbrs == questions.answer) {
                this.AnswerStatus = "Correct";
                this.MarksAllocated = this.quizservice.CorrectAnswers.find(answer => answer.QuestionId ==
                  questions.QuestionId).MarksAllocated;
                // switch(this.quizservice.CorrectAnswers.find(answer => answer.QuestionId == 
                //   questions.QuestionId).MarksAllocated) 
                //   {
                //     case !null: 
                //     this.MarksAllocated = this.quizservice.CorrectAnswers.find(answer => answer.QuestionId == 
                //         questions.QuestionId).MarksAllocated;  
                //       break;
                //     default: 
                //       this.MarksAllocated = 0;
                //       break;
                //   }
                // this.MarksScored = this.MarksScored + this.MarksAllocated
              }
              else {
                this.AnswerStatus = "Wrong";
                this.MarksAllocated = 0;
                // this.MarksScored = this.MarksScored + this.MarksAllocated;
              }
              return {
                QuestionId: questions.QuestionId,
                AnswerStatus: this.AnswerStatus,
                MarksEarned: this.MarksAllocated
              }
            }
          )
          // console.log("Next -2")
          // console.log(this.QuizResult);
          // this.quizservice.FinalResult =  this.QuizResult;
        },
        (error: any) => {
          console.log("error"); 
          },
        () => {
          this.quizservice.FinalMarkScored = 0;
          // this.NumberOfCorrectQuestions = 0;
          this.quizservice.FinalResult.forEach((result) => {
            this.quizservice.FinalMarkScored = this.quizservice.FinalMarkScored + result.MarksEarned;
            // this.NumberOfCorrectQuestions = this.NumberOfCorrectQuestions
          }
          )
          // console.log(this.totalMarks);
          // console.log(this.quizservice.passPercentage);
          // console.log(this.quizservice.percentageScored);
          this.quizservice.percentageScored =   (this.quizservice.FinalMarkScored/this.totalMarks) *100;       
          if (this.quizservice.percentageScored >= this.quizservice.passPercentage)
            this.quizservice.ResultStatus = true;
          else
            this.quizservice.ResultStatus = false;

          this.AnswersFinalOutputForDB[0].FinalMarkScored = this.quizservice.percentageScored;
          // console.log(this.AnswersFinalOutput);  
          this.AnswersFinalOutputForDB[0].ResultStatus = this.quizservice.ResultStatus;
          // this.quizservice.SubmitAnswersIntoDb(this.AnswersFinalOutput).subscribe(
          //   (data: any) => { 
          //   });
          console.log(this.AnswersFinalOutputForDB);
          // this.quizrouter.navigate(['/result']);
          // this.quizrouter.navigate(["/result",1]);

          this.quizservice.SubmitAnswersIntoDb(this.AnswersFinalOutputForDB).subscribe(
            (data: any) => {
              console.log("DB Insert!");
              console.log(data);
            },
            (error) => {},
            ()=> {
              this.quizservice.completedAttempts = this.quizservice.completedAttempts +1;
              localStorage.setItem('completedAttempts', this.quizservice.completedAttempts.toString());
              console.log(this.userSubmittedFlag);
              if (this.userSubmittedFlag == true)
              {
                this.quizrouter.navigate(["/result",1]);
              }
              
            }
            
            )
        }
      )
      // console.log(this.quizservice.CorrectAnswers);
      //   clearInterval(this.quizservice.timer);
      //   this.quizrouter.navigate(['/result']);

    }
  }



  userClickSubmitAnswers() {
    if (confirm("Are you sure, you want to submit the quiz?") == true)
    {
      this.userSubmittedFlag = true;
      this.SubmitAnswers();         
    }

  }

  PopulateQnSplitsArrays(execmode: string) {
    // console.log(this.quizservice.qns[this.quizservice.qnProgress].Revisit);
    if (execmode == "Revisit" || execmode == "All") {
      // console.log("test-1");
      let tmpvar: number = 0;
      this.QnsToBeRevisited = [];
      this.quizservice.qns.forEach((item, index) => {
        if (item.Revisit !== undefined && item.Revisit !== null && item.Revisit == true) {
          this.QnsToBeRevisited.push(index);
          tmpvar++
        }
      })
      this.NoOfQnsToBeRevisited = tmpvar;
      this.QnsToBeRevisited.sort((a, b) => { return a - b; });
      // localStorage.setItem('NoOfQnsToBeRevisited', this.NoOfQnsToBeRevisited.toString());
      // console.log(this.QnsToBeRevisited);
      // console.log(this.NoOfQnsToBeRevisited);
      // console.log(this.quizservice.qns[this.quizservice.qnProgress]);
    }

    if (execmode == "Answered" || execmode == "All") {
      let tmpvar: number = 0;
      this.QnsAnswered = [];
      this.QnsUnAnswered = [];
      this.quizservice.qns.forEach((item, index) => {
        if (item.answer !== undefined && item.answer !== null) {
          this.QnsAnswered.push(index);
          tmpvar++
        }
      })
      this.NoOfQnsAnswered = tmpvar;
      this.QnsAnswered.sort((a, b) => { return a - b; });

      this.quizservice.qns.forEach((item, index) => {
        if (item.answer == undefined || item.answer == null) {
          this.QnsUnAnswered.push(index);
        }
      })
      this.QnsUnAnswered.sort((a, b) => { return a - b; });

    }

    // if (execmode == "UnAnswered" || execmode =="All")
    // {
    //   // let tmpvar: number=0;
    //   this.QnsUnAnswered = [];
    //   this.quizservice.qns.forEach((item, index) => {
    //     if (item.answer == undefined || item.answer == null)
    //     {
    //       this.QnsUnAnswered.push(index);
    //       // tmpvar ++;
    //     }
    //   })
    //   //  = tmpvar;
    //   this.QnsUnAnswered.sort((a,b)=>{return a-b;});
    // }
    this.RefreshProgressBar();
  }

  // test() {
  //   // window.alert("How are you");
  //   let tempArray: number;
  //   console.log(this.quizservice.qnProgress);
  //   console.log(this.QnsToBeRevisited);
  //   tempArray = this.QnsToBeRevisited.find(item => item > this.quizservice.qnProgress)
  //   console.log(tempArray);
  // } 

  RevisitFlag_Click() {
    // console.log(this.RevisitFlagStyleColor);
    if (this.RevisitFlagStyleColor == "gray") {
      this.quizservice.qns[this.quizservice.qnProgress].Revisit = true;
      // this.NoOfQnsToBeRevisited++;
      // if (this.QnsToBeRevisited.indexOf(this.quizservice.qnProgress)  == -1)
      //   this.QnsToBeRevisited.push(this.quizservice.qnProgress);
      // this.CountNoOfQnsToBeRevisited();
      this.PopulateQnSplitsArrays("Revisit");
      this.RevisitFlagStyleColor = "blue";
      // this.QnsToBeRevisited.sort((a,b)=>{return a-b;});
      // localStorage.setItem('QnsToBeRevisited', JSON.stringify(this.QnsToBeRevisited));
      console.log(this.QnsToBeRevisited);

    }
    else {
      // console.log(this.RevisitFlagStyleColor + ' - test');
      this.quizservice.qns[this.quizservice.qnProgress].Revisit = false;
      // this.NoOfQnsToBeRevisited--;
      // const pos = this.QnsToBeRevisited.indexOf(this.quizservice.qnProgress);
      // if (pos !== -1)
      //   this.QnsToBeRevisited.splice(pos,1);
      // this.CountNoOfQnsToBeRevisited();
      this.PopulateQnSplitsArrays("Revisit");
      // console.log(this.quizservice.qns[this.quizservice.qnProgress]);
      this.RevisitFlagStyleColor = "gray";
      // this.QnsToBeRevisited.sort((a,b)=>{return a-b;});
      // localStorage.setItem('QnsToBeRevisited', JSON.stringify(this.QnsToBeRevisited));
      console.log(this.QnsToBeRevisited);
      // if (this.RevisitFlag ==true)
      // {
      //   this.RevisitedQnProgressNbr = this.tmpRevisitedQnProgressNbr;
      //   this.RevisitedQnProgressNbr--
      // }

    }
    localStorage.setItem('QnsAns', JSON.stringify(this.quizservice.qns));
  }

  AnsweredBtn_Click() {
    this.ProgressBarClicked = "Answered";
    this.quizservice.qnProgress = this.QnsAnswered[0];
    this.NextButtonEnable = false;
    this.PreviousButtonEnable = false;
    if (this.QnsAnswered.length > 1) {
      this.NextButtonEnable = true;
    }
    this.ChoosenOptionId = null;
    this.SetRevisitFlagStyleColor();
    if (this.quizservice.qns[this.quizservice.qnProgress].answer !== undefined && this.quizservice.qns[this.quizservice.qnProgress].answer !== null) {
      this.ChoosenOptionId = this.quizservice.qns[this.quizservice.qnProgress].answer - 1;
    }
    this.RefreshProgressBar();
    this.ShowAllStyleVisibility = "visible";
    console.log(this.QnsToBeRevisited);
    // console.log(this.RevisitedQnProgressNbr);

  }

  UnAnsweredBtn_Click() {
    this.ProgressBarClicked = "UnAnswered";
    this.quizservice.qnProgress = this.QnsUnAnswered[0];
    this.NextButtonEnable = false;
    this.PreviousButtonEnable = false;
    if (this.QnsUnAnswered.length > 1) {
      this.NextButtonEnable = true;
    }
    this.ChoosenOptionId = null;
    this.SetRevisitFlagStyleColor();
    if (this.quizservice.qns[this.quizservice.qnProgress].answer !== undefined && this.quizservice.qns[this.quizservice.qnProgress].answer !== null) {
      this.ChoosenOptionId = this.quizservice.qns[this.quizservice.qnProgress].answer - 1;
    }
    this.RefreshProgressBar();
    this.ShowAllStyleVisibility = "visible";
    console.log(this.QnsToBeRevisited);
    // console.log(this.RevisitedQnProgressNbr);

  }



  RevisitBtn_Click() {
    // console.log(this.quizservice.qns);
    // console.log(this.quizservice.qns[1].Revisit);
    this.ProgressBarClicked = "Revisit";
    // this.RevisitedQnProgressNbr = 0;
    // this.QnsToBeRevisited.sort();
    // console.log(this.QnsToBeRevisited);
    // this.quizservice.qns.forEach((index) => {
    //   if (index.Revisit == true  && this.QnsToBeRevisited.indexOf(this.quizservice.qnProgress)  == -1) 
    //   {
    //     this.QnsToBeRevisited.push(this.quizservice.qnProgress);
    //   }
    // })
    // this.QnsToBeRevisited.sort();
    // this.QnsToBeRevisited.sort((a,b)=>{return a-b;});
    this.quizservice.qnProgress = this.QnsToBeRevisited[0];
    // console.log(this.QnsToBeRevisited);
    // console.log(this.quizservice.qnProgress);
    this.NextButtonEnable = false;
    this.PreviousButtonEnable = false;
    if (this.QnsToBeRevisited.length > 1) {
      this.NextButtonEnable = true;
    }


    // this.quizservice.qnProgress ++; 
    this.ChoosenOptionId = null;
    // console.log(this.quizservice.qnProgress);
    // console.log(this.quizservice.qns[0].Revisit);

    // console.log("Test");

    this.SetRevisitFlagStyleColor();
    // console.log("Test2");
    if (this.quizservice.qns[this.quizservice.qnProgress].answer !== undefined && this.quizservice.qns[this.quizservice.qnProgress].answer !== null) {
      // this.quizservice.qnProgress ++; 
      this.ChoosenOptionId = this.quizservice.qns[this.quizservice.qnProgress].answer - 1;
    }
    this.RefreshProgressBar();
    // this.ShowAllStyleColor ="blue";
    this.ShowAllStyleVisibility = "visible";
    console.log(this.QnsToBeRevisited);
    // console.log(this.RevisitedQnProgressNbr);

  }

  ShowAll_Click() {
    // this.ShowAllStyleColor ="gray";
    this.ShowAllStyleVisibility = "hidden";
    this.ProgressBarClicked = "All";
    this.RefreshProgressBar();
    this.PreviousButtonEnable = true;
    this.NextButtonEnable = true;
    if (this.quizservice.qnProgress == 0) {
      this.PreviousButtonEnable = false;
    }
    console.log(this.quizservice.qnProgress);
    console.log(this.NumberofQuestions);
    if (this.quizservice.qnProgress + 1 == this.NumberofQuestions) {
      this.NextButtonEnable = false;
    }
  }

  RefreshProgressBar(): void {
    if (this.ProgressBarClicked == "All") {
      this.ProgressBarAnsweredPct = ((this.NoOfQnsAnswered) / this.NumberofQuestions) * 100;
      this.ProgressBarUnAnsweredPct = ((this.NumberofQuestions - this.NoOfQnsAnswered) / this.NumberofQuestions) * 100;
      this.ProgressBarRevisitedPct = ((this.NoOfQnsToBeRevisited) / this.NumberofQuestions) * 100;
    }
    else if (this.ProgressBarClicked == "Revisit") {
      this.ProgressBarAnsweredPct = 0;
      this.ProgressBarUnAnsweredPct = 0;
      this.ProgressBarRevisitedPct = 100;
    }
    else if (this.ProgressBarClicked == "Answered") {
      this.ProgressBarAnsweredPct = 100;
      this.ProgressBarUnAnsweredPct = 0;
      this.ProgressBarRevisitedPct = 0;
    }
    else if (this.ProgressBarClicked == "UnAnswered") {
      this.ProgressBarAnsweredPct = 0;
      this.ProgressBarUnAnsweredPct = 100;
      this.ProgressBarRevisitedPct = 0;
    }


  }


  SetRevisitFlagStyleColor() {
    if (this.quizservice.qns[this.quizservice.qnProgress].Revisit !== undefined && this.quizservice.qns[this.quizservice.qnProgress].Revisit !== null && this.quizservice.qns[this.quizservice.qnProgress].Revisit)
    // if (this.quizservice.qns[this.quizservice.qnProgress].Revisit == true)
    {
      // if (this.quizservice.qns[this.quizservice.qnProgress].Revisit == true)
      {
        this.RevisitFlagStyleColor = "blue";
      }
    }
    else {
      this.RevisitFlagStyleColor = "gray";
    }
  }

  ClearResponse() {
    this.quizservice.qns[this.quizservice.qnProgress].answer = null
    // console.log(this.quizservice.qns[this.quizservice.qnProgress]);
    this.ChoosenOptionId = null;
    // this.CountNoOfQnsAnswered();
    this.PopulateQnSplitsArrays("Answered");
    localStorage.setItem('QnsAns', JSON.stringify(this.quizservice.qns));
  }


}

