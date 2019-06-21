11
;
use QuizApplication_Dev;

select * from BibleQuizApp.QuizAttemptDetails;

select * from BibleQuizApp.LoginDetails where PersonName like '%?%';
select * from BibleQuizApp.LoginDetails where length(UserName) <> 10;

update BibleQuizApp.LoginDetails set PersonName= 'Franklin' where UserName = '9176782870';

select * from BibleQuizApp.LoginDetails where UserName = '9445488246';


select LoginId, SubgroupId, count(*) from BibleQuizApp.QuizAttemptDetails 
group by LoginId, SubgroupId having count(*)>1;

21, 176
select * from BibleQuizApp.QuizAttemptDetails where LoginId = 28 and AttemptId; 

select * from BibleQuizApp.QuizAttemptDetails where MarksScored = 0.00 and AttemptId in (
1,9,34); 

select * from BibleQuizApp.SubGroups;

select * from BibleQuizApp.LoginDetails;

-- User Quiz Attempt Report
select l.LoginId, userName, personName , q1.MarksScored as `Galatians Mark`, 
case when q1.ResultStatus = true then 'Passed' 
	 when q1.ResultStatus = false then 'Failed'
     else null end as `Galatians Result` ,q1.TimeTakenToComplete as `Galations Time Taken`, 
     q2.MarksScored as `Genesis Mark`, 
case when q2.ResultStatus = true then 'Passed' 
	 when q2.ResultStatus = false then 'Failed'
     else null end as `Genesis Result` ,q2.TimeTakenToComplete as `Genesis Time Taken`
     
     
from BibleQuizApp.LoginDetails l  
	left join BibleQuizApp.QuizAttemptDetails q1  on q1.LoginId = l.LoginId and q1.SubGroupId = 1
    left join BibleQuizApp.QuizAttemptDetails q2  on q2.LoginId = l.LoginId and q2.SubGroupId = 2
order by l.LoginId;

-- Login 
select count(*) from BibleQuizApp.QuizAttemptDetails where SubGroupId = 2;

SELECT * FROM 

--update SubGroups set QuizDuration = 600,NoOfQuestions=30, PassPercentage =35, NoOfAttemptsAllowed=1, IsEnglishEnabled=1  where SubGroupId = 1;


--update BibleQuizApp.SubGroups set  QuizEndDt = '2019-06-19' where SubGroupId = 1;
--update SubGroups  set NoOfAttemptsAllowed = 3, QUizDuration = 20; 


select * from `BibleQuizApp`.`SubGroups`;

--insert into `BibleQuizApp`.`SubGroups`(SubGroupId, SubGroupNm, SubGroupDescr, GroupId, QuizDuration, NoOfQuestions, PassPercentage,QuizStartDt, QuizEndDt, NoOfAttemptsAllowed, DisplayAnswers, CommunicateResults, IsEnglishEnabled, IsTamilEnabled,IsActive) 
--select 2, 'Genesis (ஆதியாகமம்)', 'This is for Youth Fellowship',1, 600, 30, 35.0,'2019-06-19',
'2019-06-20',1,0,0,false, true,false;


select * from `BibleQuizApp`.`SubGroups` where SubGroupId = 2; 
select * from `BibleQuizApp`.`Questions` where SubGroupId = 2 and QuestionLanguageNbr = 1; 

update`BibleQuizApp`.`SubGroups` set QuizEndDt = '2019-06-22',
 IsActive = true, IsEnglishEnabled = true where SubGroupId = 2; 




select * from `BibleQuizApp`.`QuizAttemptDetails`;
select * from `BibleQuizApp`.`Questions`;
select * from `QuizApplication_Dev`.`Questions`;
;



