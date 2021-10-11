create table tb_genre (id int8 generated by default as identity, name varchar(255), primary key (id));
create table tb_genre_movies (genre_id int8 not null, movies_id int8 not null);
create table tb_movie (id int8 generated by default as identity, img_url varchar(255), sub_title varchar(255), synopsis varchar(255), title varchar(255), year int4, genre_id int8, primary key (id));
create table tb_review (id int8 generated by default as identity, text varchar(255), movie_id int8, user_id int8, primary key (id));
create table tb_role (id int8 generated by default as identity, authority varchar(255), primary key (id));
create table tb_user (id int8 generated by default as identity, email varchar(255), name varchar(255), password varchar(255), primary key (id));
create table tb_user_role (user_id int8 not null, role_id int8 not null, primary key (user_id, role_id));
alter table if exists tb_genre_movies add constraint UK_msc3st9uwg892rcrovl9p2ik4 unique (movies_id);
alter table if exists tb_user add constraint UK_4vih17mube9j7cqyjlfbcrk4m unique (email);
alter table if exists tb_user_role add constraint UK_1txpcisco2l99tl5qqshr6ptp unique (role_id);
alter table if exists tb_genre_movies add constraint FKkb0dhk63dbqbm06hd64qe4a7x foreign key (movies_id) references tb_movie;
alter table if exists tb_genre_movies add constraint FKcko7r5rl5ibp6o1voo1rf81jc foreign key (genre_id) references tb_genre;
alter table if exists tb_movie add constraint FKsgjdq7d9ajnr85pl4am109qsh foreign key (genre_id) references tb_genre;
alter table if exists tb_review add constraint FKmnmhbadmg8ugakn8q89rh5k3l foreign key (movie_id) references tb_movie;
alter table if exists tb_review add constraint FKqeh83gbufxg1ft0ubwn7w0tty foreign key (user_id) references tb_user;
alter table if exists tb_user_role add constraint FKea2ootw6b6bb0xt3ptl28bymv foreign key (role_id) references tb_role;
alter table if exists tb_user_role add constraint FK7vn3h53d0tqdimm8cp45gc0kl foreign key (user_id) references tb_user;
INSERT INTO tb_user (name, email, password) VALUES ('Bob', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Ana', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');
INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_genre (name) VALUES ('Science Fiction');
INSERT INTO tb_genre (name) VALUES ('Action');
INSERT INTO tb_genre (name) VALUES ('Fantasy');
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('X-Files', 'The Movie', 1998, 'https://static.wikia.nocookie.net/x-files/images/7/77/The_X-Files_Movie_Poster.jpg', 'Find the alien before it finds you!', 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Seobok', '', 2021, 'https://www.themoviedb.org/t/p/w220_and_h330_face/nxxuWC32Y6TULj4VnVwMPUFLIpK.jpg', 'A former intelligence agent gets involved with the first human clone, Seo Bok, who others seek, causing trouble.', 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('The Predator', '', 2018, 'https://www.themoviedb.org/t/p/w220_and_h330_face/wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg', 'When a young child accidentally triggers extraterrestrial hunters to return to Earth, a ragtag crew of ex-soldiers and scientists join forces to prevent the end of the human race.', 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Doom', 'Annihilation', 2019, 'https://www.themoviedb.org/t/p/w220_and_h330_face/7EGElXVSNnqcPjuhXPd6UVUX1rD.jpg', 'A group of UAC Marines responds to a distress call from a top-secret scientific base on Phobos, a Martian moon, only to discover it´s been overrun by demons.', 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Black Widow', '', 2021, 'https://www.themoviedb.org/t/p/w220_and_h330_face/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg', 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.', 2);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Mortal Kombat Legends', 'Battle of the Realms', 2021, 'https://www.themoviedb.org/t/p/w220_and_h330_face/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg', 'The Earthrealm heroes must journey to the Outworld and fight for the survival of their homeland, invaded by the forces of evil warlord Shao Kahn, in the tournament to end all tournaments: the final Mortal Kombat.', 2);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Venom', 'Let There Be Carnage', 2021, 'https://www.themoviedb.org/t/p/w220_and_h330_face/uCNPk2RuSlsOZoDlDVLcRUFwwVn.jpg', 'Sequel to the box-office hit film "Venom."', 2);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('The Lord of the Rings', 'The Two Towers', 2002, 'https://www.themoviedb.org/t/p/w220_and_h330_face/wf3v0Pn09jnT5HSaYal7Ami3bdA.jpg', 'Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.', 3);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Harry Potter', 'and the Philosophers Stone', 2001, 'https://www.themoviedb.org/t/p/w220_and_h330_face/mavk9xclj6e5hFFk7I0ZNLo4nVD.jpg', 'Harry Potter has lived under the stairs at his aunt and uncle´s house his whole life. But on his 11th birthday, he learns he´s a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry', 3);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('The Warriors', '', 2021, 'https://www.themoviedb.org/t/p/w220_and_h330_face/7BCTdek5LFHglcgl7shsm7igJAH.jpg', 'Warlords, warriors and statesmen wage a battle for supremacy in this fantasy tale based on the hit video games and the "Romance of the Three Kingdoms."', 3);
INSERT INTO tb_genre_movies (genre_Id, movies_Id) VALUES (1, 1);
INSERT INTO tb_genre_movies (genre_Id, movies_Id) VALUES (1, 2);
INSERT INTO tb_genre_movies (genre_Id, movies_Id) VALUES (1, 3);
INSERT INTO tb_genre_movies (genre_Id, movies_Id) VALUES (1, 4);
INSERT INTO tb_genre_movies (genre_Id, movies_Id) VALUES (2, 5);
INSERT INTO tb_genre_movies (genre_Id, movies_Id) VALUES (2, 6);
INSERT INTO tb_genre_movies (genre_Id, movies_Id) VALUES (2, 7);
INSERT INTO tb_genre_movies (genre_Id, movies_Id) VALUES (3, 8);
INSERT INTO tb_genre_movies (genre_Id, movies_Id) VALUES (3, 9);
INSERT INTO tb_genre_movies (genre_Id, movies_Id) VALUES (3, 10);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Now I hate bees!', 1, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Need to watch it!', 2, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('This one creeps me out!', 3, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('I do preffer to play the game...', 4, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Natasha is the best!', 5, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('The game is always better...', 6, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('This one creeps me out!', 7, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Old but gold!', 8, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('The book is mutch better...', 9, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Outstanding!', 10, 2);
