create database meetings;

use meetings;

create table contributors (
contributorID varchar(40) not null,
honorific varchar(40),
firstName varchar(40),
lastName varchar(40),
postNominal varchar(40),
email varchar(40),
company varchar(40),
position varchar(40),
phone varchar(40),
twitter varchar(256),
facebook varchar(256),
linkedIn varchar(256),
instagram varchar(256),
youtube varchar(256),
bio text,
bio_HTML text,
headshotURL varchar(256),
headshot2xURL varchar(256),
notes text,
lastModified datetime,
primary key (contributorID)
);

create table contributorAvailability (
contributorAvailabailityID int not null auto_increment,
contributorID varchar(40) not null,
startdate datetime,
endDate datetime,
primary key (contributorAvailabailityID),
foreign key (contributorID) references contributors (contributorID)
);

create table labels (
labelID varchar(40) not null,
labelName varchar(40),
labelDescription text,
description_HTML text,
lastModified datetime,
primary key (labelID)
);

create table locations (
locationID varchar(40) not null,
locationName varchar(40),
locationDescription text,
description_HTML text,
lastModified datetime,
primary key (locationID)
);

create table locationAvailability (
locationAvailabilityID int not null auto_increment,
locationID varchar(40) not null,
startDate datetime,
endDate datetime,
primary key(locationAvailabilityID),
foreign key (locationID) references locations(locationID)
);

create table resources (
resourceID varchar(40) not null,
resourceName varchar(40),
resourceDescription text,
description_HTML text,
lastModified datetime,
primary key (resourceID)
);

create table tracks (
trackID varchar(40) not null,
trackName varchar(40),
trackDescription text,
description_HTML text,
color varchar(40),
lastModified datetime,
primary key (trackID)
);

create table sessions (
sessionID varchar(40) not null,
sessionName varchar(40),
sessionCode varchar(40),
sessionDescription text,
description_HTML text,
track varchar (40),
color varchar(40),
startDate datetime,
endDate datetime,
location varchar(40),
notes text,
lastModified datetime,
primary key (sessionID),
foreign key (location) references locations (locationID),
foreign key (track) references tracks (trackID)
);

create table otherJoins (
joinID int not null auto_increment,
lableID varchar(40),
contributorID varchar(40),
locationID varchar(40),
resourceID varchar(40),
sessionID varchar(40),
trackID varchar(40),
primary key (joinID),
foreign key (lableID) references labels (labelID),
foreign key (contributorID) references contributors (contributorID),
foreign key (locationID) references locations (locationID),
foreign key (resourceID) references resources (resourceID),
foreign key (sessionID) references sessions (sessionID),
foreign key (trackID) references tracks (trackID)
);

create table sessionJoins (
sessionJoinID int not null auto_increment,
contributorID varchar(40),
sessionID varchar(40),
contributorRole varchar(40),
primary key (sessionJoinID),
foreign key (contributorID) references contributors (contributorID),
foreign key (sessionID) references sessions (sessionID)
);

alter user 'root'@'localhost'
identified with mysql_native_password by 'root';

flush privileges;
select * from contributors;
select * from contributorAvailability;
select * from sessions;