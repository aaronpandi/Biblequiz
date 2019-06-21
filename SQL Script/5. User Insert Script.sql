
use BibleQuizApp;

/*
select [Password] from `BibleQuizApp`.`LoginDetails` where LoginId = 1;

create temporary table ttt (userName varchar(20), passwords varchar(100), PersonName varchar(100), MobileNumber bigint ); 

insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7092810046',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'S. Julie Muthu Prabha',7092810046);

drop table ttt;

drop table tttef;
0	2091	09:35:23	
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7092810046',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'S. Julie Muthu Prabha', 7092810046)	
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9841399989',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Fiona K',9841399989);
Error Code: 1054. Unknown column ' 7092810046' in 'field list'	0.015 sec
;
select count(*) from `BibleQuizApp`.`LoginDetails`;

create temporary table tttef (userName varchar(20), passwords varchar(100), PersonName varchar(100), MobileNumber bigint ); 

insert into tttef 
select * from ttt;
*/
insert into `BibleQuizApp`.`LoginDetails`(userName, password, PersonName, MobileNumber) 
select '9750566787', (select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Evangeline', 9750566787;


/*
insert into `BibleQuizApp`.`LoginDetails`(userName, password, PersonName, MobileNumber) 
select distinct f.* from tttef f where f.userName in (
select e.userName from ttt e group by e.userName having count(*) >1) 
and f.userName in (
'8056244422',
'9790888629')
and PersonName in (
'Dr. Sangeetha George','Tesy','G Reni Shelcy');




insert into `BibleQuizApp`.`LoginDetails`(userName, password, PersonName, MobileNumber) 
select * from ttt a where not exists (
select 1 from `BibleQuizApp`.`LoginDetails` t where a.UserName = t.UserName);
group by UserName having count(*) =1;

//delete t from ttt t where UserName = '9500965818';

7092810046
9092063809
9840154048

select * from ttt;

insert into `BibleQuizApp`.`LoginDetails`(userName, password, PersonName, MobileNumber) 
select f.* from tttef f where f.userName in (
select e.userName from ttt e group by e.userName having count(*) >1) ; 


select userName from ttt group by userName having count(*) >1;


insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9841399989',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Fiona K',9841399989);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9500159551',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Manikkammal',9500159551);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9840154048',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'AGNES PETER',9840154048);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9789826778',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Victor Mahesh',9789826778);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9486218645',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'I.victoria',9486218645);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9042469525',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'A.Jasmine',9042469525);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8668187554',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Judith G',8668187554);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7899957449',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'VIJI JOSEPH',7899957449);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7397418587',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'J. Pricila Jenifer',7397418587);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9941406762',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jabez I',9941406762);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9789826778',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Victor Mahesh',919789826778);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8825792466',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Julie Bernice',8825792466);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9092063809',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'S.Belgia thangam',9092063809);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7200419865',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Mahibha austiaustin',7200419865);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9940817115',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Persiya.M',9940817115);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9994418945',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'ROBINSON S',9994418945);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7092810046',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'S.Julie Muthu Prabha',7092810046);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9176535232',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Palin S',9176535232);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8680983030',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Vimala Solomon',8680983030);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9940518084',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Rathinakumar',9940518084);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7871801670',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Freida Jasmine',7871801670);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8939976598',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jenovin',8939976598);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8973521598',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Geetha Arun',8973521598);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8220481228',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),' kalpana Catherine Joy',8220481228);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9840523971',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Merina',9840523971);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7358093397',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Gifta vasantha kumari',7358093397);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9444801123',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'SURESH BABU K',9444801123);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9677077157',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'J. Darli Bai',9677077157);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8526023414',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Rita Rosalind',8526023414);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9710892771',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'M Caroline Joan',9710892771);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9080735760',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Hannah Amirthasingh',9080735760);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8902751140',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'JACOB A SINGH',8902751140);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9500965818',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Ghana Rani',9500965818);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8902751440',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jacob a Singh',8902751440);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9566737172',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'NALJI SM',9566737172);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9500092475',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'D.Stella Helen',9500092475);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9094849901',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Christina',9094849901);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9003131919',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Kirubakaran',9003131919);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9790477846',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Merlin Joy Jesinth.G',9790477846);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('0012487300987',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Anitha',0012487300987);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9884331084',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Ananda selvan',9884331084);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9841580324',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jeba Anand',9841580324);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9443191018',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Y.s.George',9443191018);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9578539729',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Amutha Evangeline Mary.V',9578539729);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9840572648',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Princely',9840572648);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9952900101',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jemima David',9952900101);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8300116379',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'M.Davidkumar',8300116379);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9976026640',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jebarose Mary.V',9976026640);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9190859031',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jansline',9190859031);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9944658894',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Vinitha Arun',9944658894);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9942138568',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Anita Baskaran',9942138568);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9043931277',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'M. Pugazhend Adam',9043931277);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9944204114',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Ponraj',9944204114);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9940951771',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jebakani',9940951771);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9500252559',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Vinoth',9500252559);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7550052559',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Crystal',7550052559);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8220183448',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Vasantha',8220183448);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9443191018',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'George',9443191018);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9940046730',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Shiny',9940046730);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9940265962',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),' kakalaivani.s',9940265962);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9884819510',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Selvam Gethsyal',9884819510);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9663989078',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Mercy Pushpalatha',9663989078);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9432425232',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Joys Mary Joshua',9432425232);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9843590359',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Baskar S',9843590359);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9444064809',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Glory',9444064809);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8428803598',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'nushvik R P',8428803598);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9488325519',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Blessy Prasad R.P',9488325519);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9962318320',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'D.Helan dinesh',9962318320);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9444083122',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Gresilda',9444083122);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9444301238',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'I DAVID',9444301238);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9380308127',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'S.john',9380308127);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9894952749',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'JAYASEKAR@SIVAKUMAR',9894952749);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9710579120',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'R. Jayakumari',9710579120);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9080027620',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'John Mani',9080027620);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9087214095',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'J.Mizpha',9087214095);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7825979863',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'T. Vignesh',7825979863);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7204705002',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Godson',7204705002);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9488884493',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Johnsingh Haris A',9488884493);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9003497049',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'S.Esther',9003497049);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8098880189',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Merlin Suganya P',8098880189);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8892628869',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'priya',8892628869);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9486840939',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'D. CHRISTINE CHANDRAPRABHA',9486840939);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8682906633',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'V. Jebarose Mary',8682906633);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8940051880',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Agnes',8940051880);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('96892028310',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Mary Stella',96892028310);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9566187217',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'David A Giftson',9566187217);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9840133915',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Vincy thanga selvam',9840133915);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9566910220',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'P NIXSON SAMUEL RAJ',9566910220);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8122302977',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Leena grace Kumar B',8122302977);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9525420025',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'C. SAMUEL DURAIRAJ',9525420025);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9840371092',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Gnanaselvam',9840371092);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9487738404',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Dora rachel E',9487738404);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9843730256',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'M.George Samuel',9843730256);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9843484966',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Edwin',9843484966);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9952233722',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'A CHRISTY MARY KAMALINA',9952233722);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('6381471431',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Megala baskar',6381471431);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8668168286',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'C STEPHEN',8668168286);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9525420052',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'C. SAMUEL DURAIRAJ',9525420052);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9789805900',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Angel R B',9789805900);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9940029364',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Paul Chelliah',9940029364);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7339504614',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'A.REKHA',7339504614);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9865407772',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'M immanuel karuppasamy',9865407772);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8634473298',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Job Dharmaraj',8634473298);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8056244422',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Dr. Sangeetha George',8056244422);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8526977011',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Sharath',8526977011);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9619477312',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jesy',9619477312);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8056244422',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Dr.Sangeetha',8056244422);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9791710348',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'J.Anbu Epsi',9791710348);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9171388535',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'RAJKUMAR J',9171388535);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9789022897',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Dr.Christy shelina stephygraph.C',9789022897);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9789115071',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Priya Joshua',9789115071);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9791028957',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'A.Ragini',9791028957);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9791028957',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'A.Ragini',9791028957);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8870657078',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Crispus Brightstone',8870657078);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8754360320',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Glory Gnana Selvi',8754360320);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8015176236',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jacob Moses',8015176236);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9080334653',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Arockiya  ananda raja',9080334653);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9080000231',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jeba',9080000231);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9884994630',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Saynik',9884994630);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7358697645',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jasmine Glady J',7358697645);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9962018031',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Vanaja Nelson',9962018031);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8190034054',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Suba Daniel',8190034054);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8754452795',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'M. KEZIA SUSANNA',8754452795);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9710803749',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'John Dinesh Kumar',9710803749);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8754442758',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jeba S',8754442758);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9884993584',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Test',9884993584);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9385580877',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Victor Solomon',9385580877);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9962290926',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Benjamin Manoharan',9962290926);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9790117044',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jennifer Johnson',9790117044);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9962117044',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Johnson',9962117044);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9962034359',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Alex Barnabas',9962034359);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9962334359',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Nancy Alex',9962334359);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9003286109',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Mrs.Esther Vimala',9003286109);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7358697645',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jasmine Glady J',7358697645);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9159193865',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Calep pravin',9159193865);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9841822007',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Sofiya',9841822007);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9094867489',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'VINOTHKUMAR J',9094867489);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9884448949',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Ruth Earnest',9884448949);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9962016232',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Prakash Yoganandam G',9962016232);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9884993584',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Tesy',9884993584);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7373419851',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Estherrani.M',737341951);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9500008537',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Smilin',9500008537);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9486026460',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'ALLWYN.G',9486026460);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8220885201',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'S. Sheela Rani',8220885201);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9629909482',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Joel Felix A',9629909482);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9840848478',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Ashok Kumar',9840848478);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9790129067',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jeevitha Glory',9790129067);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9786020375',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Ruban Immanuvel C',9786020375);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9789871607',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'JOSEPH BLESSING PAUL P M',9789871607);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8220885201',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'S. Sheela Rani',8220885201);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9941547774',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Megala C',9941547774);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9941517147',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'N.Blessing',9941517147);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9786629773',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'reubenchakravarthy',9786629773);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8754678585',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Sathish',8754678585);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8807724042',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Franklin',8807724042);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8681023672',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Varghese p j',8681023672);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9789871607',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Joseph Blessing Paul P M',9789871607);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9718338439',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'ANISH KUMAR',9718338439);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9940259515',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'G Johanna Johnsi rani',9940259515);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9940679998',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Anbarasan',9940679998);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9629330690',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'B. Jeba Poani',9629330690);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9884171796',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Regila Raja',9884171796);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9600035457',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jebachandran',9600035457);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7502567272',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'SAMUVEL. R',7502567272);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8903693226',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Evangeline Gladys.j',8903693226);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9865349164',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'J.Milton samuel',9865349164);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9965696718',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'C PETER RAMAKRISHNAN',9965696718);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9884448949',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Ruth Earnest',9884448949);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9894554752',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Kamalraj',9894554752);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9994498462',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Catherine S Priyadharsini . K',9994498462);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9486919446',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'hepzi gladys elizabeth s',9486919446);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9500055521',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Angel kavipriya',9500055521);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8939768402',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Flora Jacob',8939768402);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7598227746',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'S.EVANGELIN Rajasingh ',7598227746);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9994963006',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Julie jennifhar',9994963006);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9962102813',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'S. S.kanchana ',9962102813);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9597268554',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Phepe',9597268554);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9789019085',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Darwin movisha',9789019085);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9940695422',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Kevin',9940695422);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9952912473',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Evangeline Priyadharsini',9952912473);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9962519493',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Kiruba Vinos',9962519493);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9894063337',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Ilango Srinivasan',9894063337);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('6381038747',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Angeline Prem Kumar ',6381038747);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9486983876',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Agnes Jeba Marap',9486983876);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('96596604657',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Madhu',96596604657);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('96566159784',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Arockiaraj.K',96566159784);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8056327923',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Agnes C',8056327923);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9944791021',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Rani',9944791021);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9787500114',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Nithya',9787500114);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8903675434',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'FELSIYA Christopher',8903675434);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8122649075',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jebastin ebenazar. S',8122649075);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9080137583',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'I.RANJITH KUMAR',9080137583);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7299547696',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'S.Anandaraj.',7299547696);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('6382407196',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'SOFIA JOSHWIN',6382407196);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9789927480',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'JENITHA SUNDER SINGH ',9789927480);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9445488246',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Franklin',9445488246);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9944382300',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Ruth Baskaran',9944382300);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9840137343',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Mahalakshmi. S',9840137343);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9789083419',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Kavitha.S',9789083419);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9884758262',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Shaginal geeth.j',9884758262);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9791109040',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Manjula',9791109040);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9952858322',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'naomIdoss.L',9952858322);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9488326803',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Elizabeth',9488326803);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9629417373',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Yabesh ',9629417373);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9444957308',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'M.Kavitha',9444957308);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9791495435',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'D.Perciyal',9791495435);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9029528301',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jancy',9029528301);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9551114492',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Adhisayaraj E',9551114492);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9443780092',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'A.V.Virginia',9443780092);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9840013432',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Angeline Elija',9840013432);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9941136129',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Robinson',9941136129);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8122299532',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'S BENITTA JEBASELVI',8122299532);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9500693976',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Justinprabakaran',9500693976);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9940910909',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Selvaruban',9940910909);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9944241279',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'C. Anzline',9944241279);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9715622429',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'I. Esther Jeba',9715622429);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9940474165',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jeyapandi',9940474165);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7358388863',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jesintha',7358388863);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9791112750',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Hepzi',9791112750);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9840130733',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'R.B.T. Vijaykumar',9840130733);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9003096126',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Vinolyn Vijaykumar',9003096126);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9444547672',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'C. Sakunthala',9444547672);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9363310144',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Joseph',9363310144);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9566160520',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'J. Godlin Jeneta',9566160520);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9786351248',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Sudha',9786351248);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9841969889',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'J Nancy Jeba',9841969889);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9841381632',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Sumathy Doara',9841381632);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8148409541',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Sharon',8148409541);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9789811135',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Hannah',9789811135);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9789997337',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Kingsley Joshua',9789997337);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9655523346',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'JESAN  THARMARAJ ',9655523346);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9962579665',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Sangeetha',9962579665);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9941784526',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Bright Wesley',9941784526);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9443171411',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'S.Chandra',9443171411);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9940041819',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'K.George Fernandez',9940041819);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9677262523',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Joel',9677262523);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9840661395',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Francis.s',9840661395);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9551375391',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jesi. E',9551375391);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9841960990',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'J.manoharan',9841960990);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9840483261',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Mercy Augustine',9840483261);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8056657881',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Dinakaran',8056657881);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9486777719',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jasperline.t',9486777719);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8939161156',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Lincy Naveen',8939161156);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8667866055',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Vidhya isaac',8667866055);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9150425327',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Mercy korese',9150425327);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9600675469',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Alwin.c',9600675469);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7667291377',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Mark Peter J',7667291377);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9087849587',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'J Jospin Jenitta',9087849587);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8754968943',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'S Justin Jeya Prathap ',8754968943);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9791131354',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Arunkumar P',9791131354);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('971556108311',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jacqueline Sheba',971556108311);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9080765022',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'D.Jenifer ani Gladis',9080765022);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7708399688',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Lydial ruhnk',7708399688);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9841360881',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Kiruba merlin',9841360881);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9940130607',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Premkumari Jaisingh',9940130607);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9043044983',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Susheela Dhanaraj',9043044983);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7358412132',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Febiola ezhilarasi. D ',7358412132);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9444544962',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Arulraj I',9444544962);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7338888532',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'AMETH B ',7338888532);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9941221935',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Anne moses',9941221935);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9944113020',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'PAULRAJ ',9944113020);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8838219080',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'P.Sarah Jeniffer ',8838219080);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9865647890',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'J Dulcy kings',9865647890);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('6382388300',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Nithya Neasa Kumar ',6382388300);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7010246091',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'E.R.Robertson',7010246091);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8637417129',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'AARON I',8637417129);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8939428082',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Susila Augustin ',8939428082);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8939314502',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Allen Devaraj. A',8939314502);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8754493601',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Aldrin Inbaraj A ',8754493601);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9600106235',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Mercy Naveen',9600106235);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9840722224',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Hannah Daniel',9840722224);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9840112300',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Joseph s',9840112300);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8825582852',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Vimalaralan',8825582852);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9677560990',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'JEBAKANI MARY.M',9677560990);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9841715355',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jebakumari Rani',9841715355);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8300121416',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'P.samuel',8300121416);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9498143387',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'E.Mary Rani',9498143387);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9500137007',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'L.Grace shanthini',9500137007);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9566119339',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'T.Mercy Jeya bharathi',9566119339);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9626107946',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Baskaran N',9626107946);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9841259506',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'V.balachander',9841259506);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9841715355',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jebakumari Rani',9841715355);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8098397247',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Esther Jeba J',8098397247);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9566582418',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Raj kumar',9566582418);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9559154720',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Annie Sugirtha ',95591547206);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9080234942',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'MRS.Minnie Arul',9080234942);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9443758973',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Devapriya',9443758973);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9489268617',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Alben',9489268617);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9444412242',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Charles',9444412242);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9566003142',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Esakkiappan (a) Eszakkial',9566003142);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9176782870',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jasmine',9176782870);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8124664840',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Wesley David',8124664840);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9940424608',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Hepsibah Kamala Rani ',9940424608);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9600373589',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jestus',9600373589);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9043618529',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'S. DEVANATHAN ',9043618529);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9443207431',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Baby Saroja John',9443207431);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9176749497',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Sheela Arulraj',9176749497);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9790445843',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jeyachitra Susan J',9790445843);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9094380884',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Ilakkiyamehala',9094380884);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9944898272',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Aslin D',9944898272);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9092814477',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Mrs. Selvamalar David',9092814477);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9962227464',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'A. Janet',9962227464);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9092894477',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'D. Issac Raj',9092894477);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9003979775',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'G. Lizi Kanaga Bella',9003979775);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8056139475',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Immanuel Ravi',8056139475);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9940104387',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Mrs. Kamalam Paulraj',9940104387);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9500098950',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'c. fELICHIA cHARAN sINGH',9500098950);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9941119163',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Mrs. Ebenezar Edward',9941119163);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('6383618939',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Godson',6383618939);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9840112710',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Godlin',9840112710);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9600122175',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'C. Priya Latha',9600122175);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9898458010',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Roselind. J.D',9898458010);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9884448949',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Ruth Earnest',9884448949);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9941133802',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'JEYAROHINI.V',9941133802);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9952509888',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Aaron',9952509888);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9789308292',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Leo Ebenezer',9789308292);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9790888629',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'G Reni Shelcy',9790888629);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9444262571',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Blessings daniel',9444262571);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('7010006360',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jacklin Vincent',7010006360);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8939544588',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Gladrin Gideon Aroul',8939544588);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8610902954',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'J.Ruby Marthal',8610902954);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9941133802',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jeyarohini.v',9941133802);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9841872993',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'B.Freeda',9841872993);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9790888629',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Reni shelcy',9790888629);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9841851568',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jency prince',9841851568);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9092871316',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'P.A.Shinie',9092871316);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9176579764',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'M.Joseph',9176579764);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9380187231',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Palkani',9380187231);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8610649403',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Arul Mozhi Selvan S',8610649403);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9445737413',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Gifta kadatcham',9445737413);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9840913573',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Christopher',9840913573);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9840229969',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'bini Palas',9840229969);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8778689435',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Jerlin Suganya',8778689435);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8675857541',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Daphni',8675857541);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('8012210404',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Vimali Immaculate Mary',8012210404);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9952030775',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'Stella kumari',9952030775);
insert into ttt(UserName, Passwords, PersonName, MobileNumber) values('9941599363',(select Password from `BibleQuizApp`.`LoginDetails` where LoginId = 1),'John Isreal',9941599363);
*/