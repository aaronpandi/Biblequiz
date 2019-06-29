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


call `BibleQuizApp`.`usp_GetUserAttemptsForSubGroup` (2, '9952509888');


use QuizApplicatioDELIMITER $$
CREATE DEFINER=`aaron_pandi`@`%` PROCEDURE `usp_GetUserAttemptsForSubGroup`(IN Param_SubGroupId int, IN Param_userLoggedIn varchar(50))
BEGIN

#declare Param_GroupId_1 int;

#if (Param_GroupId is null, Param_GroupId_1 = 0, Param_GroupId_1 = Param_GroupId)
#set Param_GroupId_1 = isnull(Param_GroupId, 0);


set @useLoggedInId = (select LoginId from LoginDetails where UserName = Param_userLoggedIn);


drop temporary table if exists tempUserWiseAttemptedQuizs;
create temporary table tempUserWiseAttemptedQuizs(SubGroupId int, NoOfAttempts int);

insert into tempUserWiseAttemptedQuizs
select SubGroupId, count(*) as NoOfAttempts from QuizAttemptDetails
where LoginId = @useLoggedInId and SubGroupId= Param_SubGroupId
group by SubGroupId;


select	s.SubGroupId, s.PassPercentage, s.NoOfAttemptsAllowed, s.DisplayAnswers
		,s.CommunicateResults, ifnull(tmp.NoOfAttempts, 0) as UserAttempts
from SubGroups s 
	left join tempUserWiseAttemptedQuizs tmp on s.SubGroupId = tmp.SubGroupId
where s.SubGroupId =     Param_SubGroupId;

END$$
DELIMITER ;


DROP PROCEDURE `usp_GetUserAttemptsForSubGroup`;

DELIMITER $$
CREATE DEFINER=`aaron_pandi`@`%` PROCEDURE `usp_GetUserAttemptsForSubGroup`(IN Param_SubGroupId int, IN Param_userLoggedIn varchar(50))
BEGIN

#declare Param_GroupId_1 int;

#if (Param_GroupId is null, Param_GroupId_1 = 0, Param_GroupId_1 = Param_GroupId)
#set Param_GroupId_1 = isnull(Param_GroupId, 0);


set @useLoggedInId = (select LoginId from LoginDetails where UserName = Param_userLoggedIn);


drop temporary table if exists tempUserWiseAttemptedQuizs;
create temporary table tempUserWiseAttemptedQuizs(SubGroupId int, NoOfAttempts int);

insert into tempUserWiseAttemptedQuizs
select SubGroupId, count(*) as NoOfAttempts from QuizAttemptDetails
where LoginId = @useLoggedInId and SubGroupId= Param_SubGroupId
group by SubGroupId;


select	s.SubGroupId, s.PassPercentage, s.NoOfAttemptsAllowed, s.DisplayAnswers
		,s.CommunicateResults, ifnull(tmp.NoOfAttempts, 0) as UserAttempts
from SubGroups s 
	left join tempUserWiseAttemptedQuizs tmp on s.SubGroupId = tmp.SubGroupId
where s.SubGroupId =     Param_SubGroupId;

END$$
DELIMITER ;
