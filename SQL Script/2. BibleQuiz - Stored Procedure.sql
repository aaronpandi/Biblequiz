USE BibleQuizApp;

DROP PROCEDURE `usp_GetResultSummary`;

DELIMITER $$
CREATE DEFINER=`aaron_pandi`@`%` PROCEDURE `usp_GetResultSummary`(IN Param_userLoggedIn varchar(50))
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
where LoginId = @useLoggedInId and g.IsActive = true and g.IsActive = true order by a.CreateDttm;


END$$
DELIMITER ;
