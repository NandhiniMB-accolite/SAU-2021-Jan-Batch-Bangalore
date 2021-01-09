-- SQL ASSIGNMENT:
-- 1)Design a system to store all the data with respect to Cricket World cup. 
-- Design should be scalable to store data for the world cup matches upcoming in the future.
-- a) Create sample data in all the tables. 

create table world_cup(
wc_id int(2) primary key, wc_fromdate date,wc_todate date,
wc_place varchar(15), wc_winnerid int(2), wc_runnerid int(2)
);
insert into world_cup values(
1, STR_TO_DATE('1-01-2012', '%d-%m-%Y'), STR_TO_DATE('1-02-2012', '%d-%m-%Y'), "Australia", 1, 2
);
insert into world_cup values(
2, STR_TO_DATE('1-01-2013', '%d-%m-%Y'), STR_TO_DATE('1-02-2013', '%d-%m-%Y'), "South Africa", 1, 2
);
insert into world_cup values(
3, STR_TO_DATE('1-01-2014', '%d-%m-%Y'), STR_TO_DATE('1-02-2014', '%d-%m-%Y'), "Australia", 1, 2
);


create table team(
    team_id varchar(3) primary key,
    team_name varchar(20) not null,
    country_name varchar(20),
	win int(3),
    loses int(3),
    draws int(3),
    players int(2)
);

insert into team values(
    '1', "INDIA", 'INDIA', 5, 1, 0, 11
);
insert into team values(
    '2', "AUS", 'AUSTRALIA', 1, 5, 0, 11
);

create table Player(
    player_id varchar(10) primary key,
    team_id varchar(3) references team,
    no_of_worldcups int(2),
    number_of_matches int(3),
    no_of_sixes int(3),
    no_of_fours int(3),
    no_of_totalruns int(4),
    no_of_wickets int(2)
);

Alter table player add player_name varchar(15);

insert into PLAYER values (
    'PLR1','1', 3, 6, 15,7,640,3,"Dhoni"
);

insert into PLAYER values (
    'PLR2','1', 3, 6, 5,7,440,5,"Virat"
);
insert into PLAYER values (
    'PLR3','1', 3, 6, 5,7,100,19,"Bumrah"
);
insert into PLAYER values (
    'PLR4','1', 3, 6, 5,7,150,17,"Bhuvi"
);
insert into PLAYER values (
    'PLR5','1', 3, 6, 5,7,700,1,"Shreyas"
);

insert into PLAYER values (
    'PLR6','2', 3, 6, 15,7,400,3,"Steve smith"
);

insert into PLAYER values (
    'PLR7','2', 3, 6, 5,7,440,5,"Warner"
);
insert into PLAYER values (
    'PLR8','2', 3, 6, 5,7,200,9,"Maxwel"
);
insert into PLAYER values (
    'PLR9','2', 3, 6, 5,7,150,17,"Starc"
);
insert into PLAYER values (
    'PLR10','2', 3, 6, 0,3,50,21,"Cummins"
);

create table MATCHES(
    match_id varchar(20),
    match_date date,
    match_time timestamp(0),
    team_id varchar(3) references team,
    score int(3),
    is_winner bool,
    stadium varchar(30)
);
alter table matches drop match_time;
insert into MATCHES values(
    'MAT1',STR_TO_DATE('1-01-2012', '%d-%m-%Y'),1,390,true,"xxx"
);
insert into MATCHES values(
    'MAT1',STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,380,false,"xxx"
);
insert into MATCHES values(
    'MAT2',STR_TO_DATE('1-02-2012', '%d-%m-%Y'),1,390,true,"xxx"
);
insert into MATCHES values(
    'MAT2',STR_TO_DATE('1-02-2012', '%d-%m-%Y'),2,200,false,"xxx"
);

insert into MATCHES values(
    'MAT3',STR_TO_DATE('1-01-2013', '%d-%m-%Y'),1,400,true,"yyy"
);
insert into MATCHES values(
    'MAT3',STR_TO_DATE('1-01-2013', '%d-%m-%Y'),2,390,false,"xxx"
);


insert into MATCHES values(
    'MAT4',STR_TO_DATE('1-02-2013', '%d-%m-%Y'),1,200,true,"yyy"
);
insert into MATCHES values(
    'MAT4',STR_TO_DATE('1-02-2013', '%d-%m-%Y'),2,290,false,"yyy"
);

insert into MATCHES values(
    'MAT5',STR_TO_DATE('1-01-2014', '%d-%m-%Y'),1,200,true,"yyy"
);
insert into MATCHES values(
    'MAT5',STR_TO_DATE('1-01-2014', '%d-%m-%Y'),2,190,false,"yyy"
);

insert into MATCHES values(
    'MAT6',STR_TO_DATE('1-02-2014', '%d-%m-%Y'),1,200,false,"yyy"
);
insert into MATCHES values(
    'MAT6',STR_TO_DATE('1-02-2014', '%d-%m-%Y'),2,290,true,"yyy"
);

-- Query
-- b) Fetch the top 5 batsmen who scored the maximum runs.
select p.player_name , t.team_name from player p, team t
where p.team_id=t.team_id
order by no_of_totalruns desc limit 1,5;

-- c) Fetch the top 5 bowlers who has taken the maximum wickets.
select p.player_name , t.team_name from player p, team t
where p.team_id=t.team_id
order by no_of_wickets desc limit 1,5;

-- d) Fetch the average score scored by each team considering the matches played. 
select team_name,avg(score) as Average_Score 
from matches inner join team
on matches.team_id = team.team_id
group by(matches.team_id);



-- e) Increase the scores of each batsmen in the team, which has the least average computed in Step 6, by 10 runs.
update  player set no_of_totalruns = no_of_totalruns+10
where player_id in (select player_id from player where team_id=(
select team_id
from matches 
group by(team_id)
order by avg(score) asc limit 1));




-- f) Create a procedure which takes country as the input and gives the highest score of the country up to date, as output






