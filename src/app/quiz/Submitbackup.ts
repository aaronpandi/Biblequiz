/*
  SubmitAnswers() {
    if (!this.AnswerSubmittedStatus) {
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
          this.quizrouter.navigate(["/result",1]);

          this.quizservice.SubmitAnswersIntoDb(this.AnswersFinalOutputForDB).subscribe(
            (data: any) => {
              console.log("DB Insert!");
              console.log(data);
            })
        }
      )
      // console.log(this.quizservice.CorrectAnswers);
      //   clearInterval(this.quizservice.timer);
      //   this.quizrouter.navigate(['/result']);

    }
  }
*/