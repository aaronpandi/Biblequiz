USE QuizApplication_Dev;

DROP procedure usp_GetResultSummary;

delimiter $$

CREATE procedure usp_GetResultSummary (IN Param_userLoggedIn varchar(50))
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



DROP procedure usp_GetQuizQuestions;

delimiter $$

CREATE procedure `usp_GetQuizQuestions`(IN Param_SubGroupId int, IN Param_qnLanguageNumber int)
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