/*

create database BibleQuizApp`;

*/

USE BibleQuizApp;

/*
IF EXISTS (
	SELECT * FROM information_schema.TABLES 
	WHERE TABLE_NAME = 'LoginDetails' and TABLE_SCHEMA = 'QuizApplication'
)
*/
DROP TABLE `Roles`; 

CREATE TABLE `Roles` (
	RoleId INT NOT NULL AUTO_INCREMENT primary key,
	RoleNm NVARCHAR(100) NOT NULL,
	RoleDescr NVARCHAR(200) NULL,
    IsActive bit not  null default 1,
	CreateDttm DATETIME DEFAULT CURRENT_TIMESTAMP,
	UpdateDttm DATETIME ON UPDATE CURRENT_TIMESTAMP
)
ENGINE = InnoDB ;

#SHOW tables IN QuizApplication;

DROP TABLE LoginDetails;

CREATE table `UserRoles` (
	UserRoleMa INT NOT NULL AUTO_INCREMENT primary key,
	UserName VARCHAR(50) NOT NULL unique,
	Password VARCHAR(100) NULL,
    PersonName varchar(50) NULL,
    MobileNumber bigint,
    IsActive bit not  null default 1,
    EmailVerificationStatus bit not null default 0,
	CreateDttm DATETIME DEFAULT CURRENT_TIMESTAMP,
	UpdateDttm DATETIME ON UPDATE CURRENT_TIMESTAMP
)
ENGINE = InnoDB;

DROP TABLE`BibleQuizApp`.`SubGroups`; 

CREATE TABLE`BibleQuizApp`.`SubGroups` (
	SubGroupId INT NOT NULL AUTO_INCREMENT primary key,
	SubGroupNm NVARCHAR(100) NOT NULL,
	SubGroupDescr NVARCHAR(200) NULL,
	GroupId INT NOT NULL,
    QuizDuration INT NOT NULL,
    NoOfQuestions INT NOT NULL,
    PassPercentage numeric(5,2) NULL,
    QuizStartDt date not null,
    QuizEndDt date not null,
	NoOfAttemptsAllowed INT NULL,
    DisplayAnswers bit not null default false,
    CommunicateResults int null default 0,
    IsEnglishEnabled bit not null default true,
    IsTamilEnabled bit not null default false,
	IsActive bit not null default 1,
	CreateDttm DATETIME DEFAULT CURRENT_TIMESTAMP,
	UpdateDttm DATETIME ON UPDATE CURRENT_TIMESTAMP,
    foreign key (GroupId) references Groups(GroupId)
)
ENGINE = InnoDB character SET = utf8;

DROP TABLE`BibleQuizApp`.`Questions`; 

CREATE TABLE `BibleQuizApp`.`Questions` (
	QuestionId INT NOT NULL AUTO_INCREMENT primary key,
    SubGroupId int not null,
	QuestionDescr nvarchar(500) NOT NULL,
	QuestionType VARCHAR(20) NULL,
	QuestionImagePath VARCHAR(200) NULL,
    QuestionComplexity VARCHAR(20) NOT NULL,
	Option1Descr nvarchar(500) NULL,
	Option1Type VARCHAR(20) NULL,    
	Option2Descr nvarchar(500) NULL,  
	Option2Type VARCHAR(20) NULL,        
	Option3Descr nvarchar(500) NULL,    
	Option3Type VARCHAR(20) NULL,        
	Option4Descr nvarchar(500) NULL,    
	Option4Type VARCHAR(20) NULL,        
	Option5Descr nvarchar(500) NULL,
	Option5Type VARCHAR(20) NULL,        
    AnswerOptionNbrs varchar(20) NOT NULL,
	AnswerOptionType varchar(20) NULL,
    AnswerDescr nvarchar(500) null,
    QuestionLanguageNbr int not null default 0,
    IsActive bit not null default 1,
    MarksAllocated numeric(5,2) null, 
	CreateDttm DATETIME DEFAULT CURRENT_TIMESTAMP,
	UpdateDttm DATETIME ON UPDATE CURRENT_TIMESTAMP,
    foreign key (SubGroupId) references SubGroups(SubGroupId)
)
ENGINE = InnoDB character SET = utf8;


DROP TABLE`BibleQuizApp`.`QuizAttemptDetails`; 

CREATE TABLE`BibleQuizApp`.`QuizAttemptDetails` (
	AttemptId INT NOT NULL AUTO_INCREMENT primary key,
    LoginId int not null,
	SubGroupId int not null,
	QuestionAndAnswerDescr VARCHAR(1500) NOT NULL,
    MarksScored numeric(5,2) NOT NULL,
    TimeTakenToComplete int not null,
    ResultStatus bit not null,
	CreateDttm DATETIME DEFAULT CURRENT_TIMESTAMP,
	UpdateDttm DATETIME ON UPDATE CURRENT_TIMESTAMP,
    foreign key (SubGroupId) references SubGroups(SubGroupId),
	foreign key (LoginId) references LoginDetails(LoginId)
)
ENGINE = InnoDB;


