var express = require('express');
var router = express.Router();
var userModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');

var QnsOutput = [];
var GroupsOutput = [];
var resultSummaryOutput =[];

router.post('/answers',function(req, res){
  Question_RequestBody = [];
  Question_RequestBody = req.body;
  Question_RequestBody_Separated = "";
  Question_RequestBody_Separated = Question_RequestBody_Separated + Question_RequestBody[1].map(
    function(QuestionBody){
        return QuestionBody.QuestionId 
    }) + ',' ;
    console.log(Question_RequestBody_Separated);
  // QuestionAndAnswers_RequestBody_Separated = "";
  // QuestionAndAnswers_RequestBody_Separated = QuestionAndAnswers_RequestBody_Separated + Question_RequestBody.map(
  //     function(QuestionBody){
  //         return QuestionBody.QuestionId  +';' + QuestionBody.ChosenOption
  //     }) + ',' ;
  

  if (Question_RequestBody_Separated && Question_RequestBody[0].SubGroupId)
  {
    userModel.GetCorrectAnswers(Question_RequestBody[0].SubGroupId, Question_RequestBody_Separated, function(err, rows)
      {
        if(err)
        {
          res.send(err);
        }
        else
        {
          // console.log(rows[0]);
          res.send(rows[0]);
        }
      })
  }
  else 
  {
    res.json({
      "Module": "GetAnswers",
      "ErrorCode": null,
      "IsSuccess": false,
      "RowsAffected": "",
      "Message": "Question or SubgroupId is blank"
    });
  }
});



router.post('/submit',function(req, res){
  Question_RequestBody = [];
  Question_RequestBody = req.body;
  console.log(Question_RequestBody);
  // Question_RequestBody_Separated = "";
  // Question_RequestBody_Separated = Question_RequestBody_Separated + Question_RequestBody[1].map(
  //   function(QuestionBody){
  //       return QuestionBody.QuestionId 
  //   }) + ',' ;
  //   console.log(Question_RequestBody_Separated);
  QuestionAndAnswers_RequestBody_Separated = "";
  QuestionAndAnswers_RequestBody_Separated = QuestionAndAnswers_RequestBody_Separated + Question_RequestBody[1].map(
      function(QuestionBody){
          return QuestionBody.QuestionId  +';' + QuestionBody.ChosenOption
      }) + ',' ;
  
  // console.log(QuestionAndAnswers_RequestBody_Separated);

  if (Question_RequestBody[0].UserId && Question_RequestBody[0].SubGroupId)
  {
    userModel.PostSubmittedAnswers(Question_RequestBody[0].UserId, Question_RequestBody[0].SubGroupId, Question_RequestBody[0].FinalMarkScored,Question_RequestBody[0].ResultStatus, QuestionAndAnswers_RequestBody_Separated,Question_RequestBody[0].ElapsedTime, function(err, rows)
      {
        if(err)
        {
          res.send(err);
        }
        else
        {
          // console.log(rows[0]);
          res.send(rows[0]);
        }
      })
  }
  else 
  {
    res.json({
      "Module": "SubmitAnswers",
      "ErrorCode": null,
      "IsSuccess": false,
      "RowsAffected": "",
      "Message": "User or SubgroupId is blank"
    });
  }
});

//Get Questions for the given sub group id
router.get('/quiz/:subGroupId/:qnLanguageNumber', function(req, res)
  {
    userModel.getQuestions(req.params.subGroupId, req.params.qnLanguageNumber, function(err, rows)
      {
        if(err)
        {
          res.send(err);
        }
        else
        {
          // console.log("Done");
          QnsOutput =  rows[0];
          // console.log(QnsOutput);
          var finalQuestionArray  = [];
          finalQuestionArray = QnsOutput.map(function(DBQuestions) {
            return  ({
                  QuestionId: DBQuestions.QuestionId,
                  QuestionDescr: DBQuestions.QuestionDescr, 
                  QuestionImagePath: DBQuestions.QuestionImagePath,                 
                  MarksAllocated: DBQuestions.MarksAllocated,                 
                  Options: [DBQuestions.Option1Descr, DBQuestions.Option2Descr, DBQuestions.Option3Descr, DBQuestions.Option4Descr, DBQuestions.Option5Descr]

                })   
          });
          

          res.send(JSON.stringify(finalQuestionArray));
          // console.log(JSON.stringify(finalQuestionArray));
          // res.send(rows[0]);

          // const _ = require( 'lodash' );
          // const mappedArray = _.map( QnsOutput, ['Answer1Descr','QuestionDescr'] )
          // console.log(mappedArray);  

        }

      }

    )
  }

);


//Get Result Summary for the given userId
router.get('/resultSummary/:userLoggedIn', function(req, res)
  {
    // console.log("Test");
    userModel.getResultSummary(req.params.userLoggedIn, function(err, rows)
      {
        if(err)
        {
          // console.log("Error");
          res.send(err);
          
        }
        else
        {
          console.log("through");
          // resultSummaryOutput =  rows[0];
          res.send(rows[0]);
          
        }

      }

    )
  }
);

//Get the details of the group
router.get('/group/:groupId/:userLoggedIn', function(req, res)
  {
  //  var test = req.params.groupId;
  //   console.log(test);
    userModel.getGroupsAndSubGroups(req.params.groupId, req.params.userLoggedIn, function(err, rows)
      {
        if(err)
        {
          res.send(err);
        }
        else if (rows[0].length >0)
        {
          // console.log(rows[0]);
          return res.send(rows[0]);
          // console.log(QnsOutput);
          // var finalQuestionArray  = [];
          // finalQuestionArray = GroupsOutput.map(function(DBQuestions) {
          //   return  ({
          //         QuestionId: DBQuestions.QuestionId,
          //         QuestionDescr: DBQuestions.QuestionDescr, 
          //         QuestionImagePath: DBQuestions.QuestionImagePath,                 
          //         Options: [DBQuestions.Option1Descr, DBQuestions.Option2Descr, DBQuestions.Option3Descr, DBQuestions.Option4Descr, DBQuestions.Option5Descr]

          //       })   
          }
          else
          {
            res.send({
              "Module": "GetGroupsAndSubGroups",
              "ErrorCode": null,
              "IsSuccess": false,
              "RowsAffected": "",
              "Message": "The result doesnt return any output"
            });
          }
        });
    }

  );

//Get the user attmpts already made
router.get('/userAttempts/:subGroupId/:userLoggedIn', function(req, res)
  {
  //  var test = req.params.groupId;
  //   console.log(test);
    userModel.getUserAttemptsForSubGroup(req.params.subGroupId, req.params.userLoggedIn, function(err, rows)
      {
        if(err)
        {
          res.send(err);
        }
        else if (rows[0].length >0)
        {
          // console.log(rows[0]);
          return res.send(rows[0]);
          }
          else
          {
            res.send({
              "Module": "GetUserAttemptsForTheSubGroup",
              "ErrorCode": null,
              "IsSuccess": false,
              "RowsAffected": "",
              "Message": "The result doesnt return any output"
            });
          }
        });
    }

  );


// Validate the logged in user
router.post('/logincheck', function(req, res)
  {
    userModel.getLoginByName(req.body.UserName, function(err, rows)
        {
          if (err) 
            {
              res.json({
                "Module": "LoginCheck",
                "ErrorCode": err.code,
                "IsSuccess": false,
                "RowsAffected": "",
                "Message": "Something is wrong"
              });    
            }
          else  
            {
              if (rows.length == 0) 
              { 
                // console.log(req.body);
                res.json({
                  "Module": "LoginCheck",
                  "ErrorCode": null,
                  "IsSuccess": false,
                  "RowsAffected": rows.length,
                  "Message": "User Doesn't exists"
                });
              }
              else if (rows.length == 1)
              {
                if (bcrypt.compareSync(req.body.password, rows[0].Password))
                {
                  res.json({
                    "Module": "LoginCheck",
                    "ErrorCode": null,
                    "IsSuccess": true,
                    "RowsAffected": rows.length,
                    "Message": rows[0].PersonName
                  });
                }
                else
                {
                  res.json({
                    "Module": "LoginCheck",
                    "ErrorCode": null,
                    "IsSuccess": false,
                    "RowsAffected": rows.length,
                    "Message": "Invalid password"
                  });
                }
              }
              else
              {
                  res.json({
                    "Module": "LoginCheck",
                    "ErrorCode": null,  
                    "IsSuccess": false,
                    "RowsAffected": rows.length,
                    "Message": "Something went wrong"
                  });
              }
          
          }

        }
    
      )

  }

);

/* Insert the new registration into the DB*/
router.post('/', function(req, res, next) 
{
// var userDetails = req.body;
 // check if the user already exists
      userModel.getLoginByName(req.body.UserName, function(err, rows)
      {
        if (err)
        {
          // res.json(err.code);
        //  console.log("Error Part");
          res.json({
              "Module": "CheckLoginName",
              "ErrorCode": err.code,
              "IsSuccess": false,
              "RowsAffected": "",
              "Message": "Something is wrong"
        });
        }   
        else 
        {
          if (rows.length == 0)  
          {
            userModel.ProcessNewUserRegistration(req.body, function(err, rows) 
            {
              if (err)
              {
                // console.log(err);
                res.json({
                  "Module": "NewRegistration",
                  "ErrorCode": err.code,
                  "IsSuccess": false,
                  "RowsAffected": "",
                  "Message": "Something is wrong"
                });
              } 
              else
              {
                res.json({
                  "Module": "NewRegistration",
                  "ErrorCode": "",
                  "IsSuccess": true,
                  "RowsAffected": rows.length,
                  "Message": "New User Logged"                  
                });
              }
            })
            
          }                          
          else
          {
            res.json({
              "Module": "NewRegistration",
              "ErrorCode": "",
              "IsSuccess": false,
              "RowsAffected": rows.length,
              "Message": "User Already Exists"
            });
          }

          // console.log("Get Part");
          // // console.log(rows(count));
          // console.log(rows.length);
          // res.send(rows);
          // // res.send(rows[0].Password);
        }
      })
});

  



// // Get the Login details for the email address
// router.get('/:UserName', function(req, res, next)
// {
//   if (req.params.UserName)  
//   {
//       userModel.getLoginByName(req.params.UserName, function(err, rows, count)
//       { 
//         if (err)
//         {
//           console.log("Error Part");
//           res.json(err);
//         }   
//         else 
//         {
//           if (rows.length == 0)  
//           {
                          
//           }
//           else if (rows.length == 1) 
//           {
//             res.json({
//               message: "User already exists"
//             })
//           }

//           // console.log("Get Part");
//           // // console.log(rows(count));
//           // console.log(rows.length);
//           // res.send(rows);
//           // // res.send(rows[0].Password);
//         }
//       })
//   }    
// });
module.exports = router;
