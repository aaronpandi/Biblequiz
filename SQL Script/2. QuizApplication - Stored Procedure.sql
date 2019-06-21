USE BibleQuizApp;

DELIMITER $$
CREATE PROCEDURE `usp_GetAnswersForQuestions`(IN Param_SubGroupId int,IN Param_QuestionIds varchar(1200))
BEGIN


	/*drop table if exists t;
	create table t( txt varchar(1200) );
	insert into t values('1,2,3,4,5,6,7,8,9');
	*/
    #DECLARE param_QuestionIds INT;
    #set Param_QuestionIds = '12,14';
    #select Param_QuestionIds;
	
    drop temporary table if exists tempCommaSeparatedValues;
	create temporary table tempCommaSeparatedValues( val int);
	set @sql = concat("insert into tempCommaSeparatedValues (val) values ('", replace(( select group_concat(distinct Param_QuestionIds) as data), ",", "'),('"),"');");
	prepare stmt1 from @sql;
	execute stmt1;
	#select distinct(val) from tempCommaSeparatedValues;



	SELECT QuestionId, QuestionType, AnswerOptionNbrs, AnswerDescr, MarksAllocated 
    FROM `Questions` q inner join tempCommaSeparatedValues t on q.QuestionId = t.val
    WHERE SubGroupId = Param_SubGroupId;

END$$
DELIMITER ;



DELIMITER $$
CREATE PROCEDURE `usp_GetQuizGroupsAndSubGroups`(IN Param_GroupId int, IN Param_userLoggedIn varchar(50))
BEGIN

#declare Param_GroupId_1 int;

#if (Param_GroupId is null, Param_GroupId_1 = 0, Param_GroupId_1 = Param_GroupId)
#set Param_GroupId_1 = isnull(Param_GroupId, 0);


set @useLoggedInId = (select LoginId from LoginDetails where UserName = Param_userLoggedIn);


drop temporary table if exists tempUserWiseAttemptedQuiz;
create temporary table tempUserWiseAttemptedQuiz(SubGroupId int,  NoOfAttempts int);

insert into tempUserWiseAttemptedQuiz
select SubGroupId, count(*) as NoOfAttempts from QuizAttemptDetails
where LoginId = @useLoggedInId 
group by SubGroupId;

if Param_GroupId = 0 or Param_GroupId is null then 

	select	g.GroupId, g.GroupNm, s.SubGroupId, s.SubGroupNm, s.QuizDuration
			,s.NoOfQuestions, s.PassPercentage, s.NoOfAttemptsAllowed, s.DisplayAnswers
            ,s.CommunicateResults, QuizStartDt, QuizEndDt, ifnull(tmp.NoOfAttempts, 0) as UserAttempts
            ,IsEnglishEnabled, IsTamilEnabled
    from Groups g 
		inner join SubGroups s on g.GroupId = s.GroupId
        left join tempUserWiseAttemptedQuiz tmp on s.SubGroupId = tmp.SubGroupId
    where g.IsActive = true and s.IsActive = true;
    
else

	select	g.GroupId, g.GroupNm, s.SubGroupId, s.SubGroupNm, s.QuizDuration
			,s.NoOfQuestions, s.PassPercentage, s.NoOfAttemptsAllowed, s.DisplayAnswers
            ,s.CommunicateResults, QuizStartDt, QuizEndDt, ifnull(tmp.NoOfAttempts, 0) as UserAttempts
            ,IsEnglishEnabled, IsTamilEnabled
    from Groups g 
		inner join SubGroups s on g.GroupId = s.GroupId
        left join tempUserWiseAttemptedQuiz tmp on s.SubGroupId = tmp.SubGroupId
    where g.IsActive = true and s.IsActive = true and g.GroupId = Param_GroupId;  
    /*and s.QuestionLanguageNbr in (0, Param_QuestionLanguageNbr); */

end if;

END$$
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE `usp_GetQuizQuestions`(IN Param_SubGroupId int, IN Param_qnLanguageNumber int)
BEGIN
	
    declare qns int;
	SET qns = (select NoOfQuestions from SubGroups where SubGroupId = Param_SubGroupId);

	SELECT 	QuestionId, QuestionDescr, QuestionType, QuestionImagePath, QuestionComplexity, 
			Option1Type, Option1Descr, Option2Type, Option2Descr, 
			Option3Type, Option3Descr, Option4Type, Option4Descr, Option5Type, Option5Descr,
            MarksAllocated
    FROM `Questions` 
    WHERE SubGroupId = Param_SubGroupId and QuestionLanguageNbr in (0, Param_qnLanguageNumber)
    ORDER BY RAND()
    LIMIT qns;

END$$
DELIMITER ;



DELIMITER $$
CREATE PROCEDURE `usp_GetResultSummary`(IN Param_userLoggedIn varchar(50))
BEGIN


set @useLoggedInId = (select LoginId from LoginDetails where UserName = Param_userLoggedIn);


select GroupNm, SubGroupNm, a.CreateDttm as TestDate, MarksScored as PercentageScored,
case when a.ResultStatus = true then 'Passed' 
	 else 'Failed'
	end as TestResult
from `QuizAttemptDetails` a 
inner join 
(
	select SubGroupId, Max(AttemptId) as AttemptId from `QuizAttemptDetails` where LoginId = @useLoggedInId 
	group by SubGroupId
) b on a.AttemptId = b.AttemptId
inner join SubGroups s on a.SubGroupId= s.SubGroupId
inner join Groups g on s.GroupId= g.GroupId
where LoginId = @useLoggedInId order by a.CreateDttm;


END$$
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE `usp_InsertAnswersIntoDb`(IN Param_UserName varchar(50), IN Param_SubGroupId int,IN Param_MarksScored numeric(5,2), IN Param_ResultStatus bit, IN Param_QuestionsAndAnswers varchar(1500), IN Param_ElapsedTime int)
BEGIN

	insert into `QuizAttemptDetails` (LoginId, SubGroupId, MarksScored, ResultStatus, QuestionAndAnswerDescr, TimeTakenToComplete )
	select (select LoginId from `LoginDetails` where UserName = Param_UserName), Param_SubGroupId, Param_MarksScored, Param_ResultStatus, Param_QuestionsAndAnswers, Param_ElapsedTime;

END$$
DELIMITER ;
