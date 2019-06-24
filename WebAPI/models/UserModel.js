var db = require("../dbconnection");
const bcrypt = require('bcryptjs');

var loginTask =         
{
// Update Answers into DB
        PostSubmittedAnswers: function(UserName, SubGroupId, MarksScored, ResultStatus,QuestionAndChosenOption,ElapsedTime, callback) 
        {  
                return db.query("call usp_InsertAnswersIntoDb(?,?,?,?,?,?) ", [UserName, SubGroupId, MarksScored, ResultStatus,QuestionAndChosenOption, ElapsedTime], callback);  
        },  


// Get The Answers
        GetCorrectAnswers: function(SubGroupId, QuestionIds, callback) 
        {  
                return db.query("call usp_GetAnswersForQuestions(?,?) ", [SubGroupId,QuestionIds], callback);  
        },  


// Register New users
        ProcessNewUserRegistration: function (FormDetails, callback ) 
        {
                var rawPassword = bcrypt.hashSync(FormDetails.password, 10);

                return db.query("Insert into LoginDetails (UserName, Password, PersonName, MobileNumber) values(?,?,?,?)",
                 [FormDetails.UserName, rawPassword, FormDetails.PersonName, FormDetails.MobileNumber], callback);
        },

//Check for UserName existence
        getLoginByName: function(UserName, callback) 
        {  
                return db.query("select UserName, Password, PersonName from LoginDetails where UserName=? and IsActive = true", [UserName], callback);  
        },  

        // bcrypt.hash(FormDetails.password, 10, (hash) => {return hash;})

//Get the Questions 
        getQuestions: function(subGroupId,qnLanguageNumber, callback) 
        {  
                return db.query("call usp_GetQuizQuestions(?,?)",[subGroupId,qnLanguageNumber], callback);  
        }, 

        getResultSummary: function(userLoggedIn, callback) 
        {  
                return db.query("call usp_GetResultSummary(?)",[userLoggedIn], callback);  
        },         


//Get the Groups And SubGroups 
        getGroupsAndSubGroups: function(groupId,userLoggedIn, callback) 
        {  
                return db.query("call usp_GetQuizGroupsAndSubGroups(?,?)", [groupId,userLoggedIn], callback);  
        }, 

// Get The UserAttempts
        getUserAttemptsForSubGroup: function(SubGroupId, userLoggedIn, callback) 
        {  
                return db.query("call usp_GetUserAttemptsForSubGroup(?,?) ", [SubGroupId,userLoggedIn], callback);  
        }  


// bcrypt.hash(FormDetails.password, 10, (hash) => {return hash;})
};        


// bcrypt.hash(FormDetails.password, 10, function(err, hash)
// {
//         if (err)
//                 {return err;
//                 }
//         else
//         {
//         }       
// var UserLoginModel = {  
//     getAllLogins: function(callback) {  
//     return db.query("Select * from LoginDetails", callback);  
//     },  
    
//     getLoginByName: function(UserName, callback) {  
//         return db.query("select * from LoginDetails where UserName=?", [UserName], callback);  
//        },  
//     addLogin: function(Task, callback) {  
//         return db.query("Insert into LoginDetails values(?,?)", [Task.UserName, Task.password], callback);  
//         }  
//     };  
module.exports = loginTask;  