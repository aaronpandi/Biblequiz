

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
