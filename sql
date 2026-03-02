create database day1;
use day1;
create table Intern(
sid int,
sname varchar(10)
);

insert into Intern values(1,"Mahitha");
insert into Intern values(2,"Lahari");

select * from Intern;


create table employe1(
eid int primary key,
ename varchar(20) not null,
esalary int,
bg varchar(10) default "o+ve",
age int check(age >= 18 AND age <= 60),
email varchar(20) unique
);


insert into employe1 values(10,"ravi","480000","A+ve",48,"ravi@gmail.com");
select * from employe1;

create table patient(
pid int,
fname varchar(50),
iname varchar(50),
age int, 
bg varchar(10)
);
INSERT INTO patient (pid, fname, iname, age, bg) VALUES
(1, 'madhava', 'reddy', 45, 'o+ve'),
(2, 'abhinav', 'bandra', 45, 'o-ve'),
(4, 'hari', 'kiran', 60, 'b-ve'),
(3, 'madhava', 'kiran', 52, 'o+ve'),
(5, 'veena', 'kumari', 42, NULL),
(6, 'k_iran', 'kumar', 39, 'b-ve'),
(2, 'abhinav', 'bandra', 45, 'o-ve'),
(7, 'mahes%h', 'nambootri', 36, 'b+ve'),
(8, 'rahul', 'kumar', 46, 'b-ve'),
(9, 'bharat', 'kumar', 56, 'b-ve');
-- order by clause
select * from patient order by fname; 
select concat(fname,iname) as'fullname', age from patient order by age;
-- distinct clause
select distinct * from patient;
select distinct bg from patient;
-- limit clause
select *from patient order by pid asc limit 2,3;

select distinct age from patient;

select pid from patient limit 3;

select * from patient where age between 45 and 50;

select pid from patient where fname like 'a%';

select pid from patient where iname like '_a%';

select pid,bg from patient group by pid,bg;

select pid,bg from patient group by pid,bg,age;

select age from patient group by age having avg(age)>45;

select p1.* from patient p1 where 3=( select
count(distinct(p2.pid)) from patient p2 where
p2.age>p1.age)








