CREATE DATABASE suitehome;
USE suitehome;


-- USUARIOS --

CREATE TABLE users (
    id INT UNSIGNED PRIMARY KEY UNIQUE AUTO_INCREMENT,
    email VARCHAR(150) UNIQUE NOT NULL,
    u_password VARCHAR(200) NOT NULL, /*Para después:  almacenar un objeto en formato json con dos propiedades con las que se encripta la contraseña y almacenar una key de desencriptado en el servidor */
    date_of_birth DATE NOT NULL,
    u_name VARCHAR(45) UNIQUE NOT NULL,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    profile_photo VARCHAR(30) DEFAULT('perfil-Defecto.png'),
    followers SMALLINT UNSIGNED NOT NULL,
    followed SMALLINT UNSIGNED NOT NULL
);
-- DROP TABLE IF EXISTS users;

INSERT INTO users VALUES 
    (DEFAULT,'SuiteHome','Suite','Home','2000-11-24','suite-home@gmail.com','Contraseña123','perfil-SuiteHome.png','2021-09-03 11:20:00','2021-09-03 11:20:00'),
	(DEFAULT,'BrandonElle','Brandon','Elle','2000-11-24','brandon-elle@gmail.com','Contraseña123','perfil-Brandon.png','2021-09-03 11:20:00','2021-09-03 11:20:00'),
    (DEFAULT,'CarlaReyes','Carla','Reyes','2000-11-24','carla-reyes@gmail.com','Contraseña123','perfil-Carla.png','2021-09-03 11:20:00','2021-09-03 11:20:00'),
    (DEFAULT,'SolSileoni','Sol','Sileoni','2000-11-24','sol-sileoni@gmail.com','Contraseña123','perfil-Sol.png','2021-09-03 11:20:00','2021-09-03 11:20:00'),
    (DEFAULT,'SpencerFive','Spencer','Five','2000-11-24','spencer-five@gmail.com','Contraseña123','perfil-Spencer.png','2021-09-03 11:20:00','2021-09-03 11:20:00'),
; -- {iv:32caracteres,content:Xcaracteres}
-- DELETE FROM usuarios WHERE id > 0;


-- POSTEOS --

CREATE TABLE posts (
	id INT UNSIGNED PRIMARY KEY UNIQUE AUTO_INCREMENT,
    image VARCHAR(50) NOT NULL,
    image_caption VARCHAR(120),
    publication_date DATETIME NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
-- DROP TABLE IF EXISTS posts;

INSERT INTO posts VALUES
	(DEFAULT,'post-SH-1.png','Bienvenid@ a SH','2021-09-03 11:20:00','2021-09-03 11:20:00',1),
	(DEFAULT,'post-BE-1.png','post-BE-1','2021-09-03 11:20:00','2021-09-03 11:20:00',2),
	(DEFAULT,'post-CR-1.png','post-CR-1','2021-09-03 11:20:00','2021-09-03 11:20:00',3),
	(DEFAULT,'post-SS-1.png','post-SS-1','2021-09-03 11:20:00','2021-09-03 11:20:00',4),
	(DEFAULT,'post-SF-1.png','post-SF-1','2021-09-03 11:20:00','2021-09-03 11:20:00',5),
	(DEFAULT,'post-SH-2.png','Las puertas de tu hogar','2021-09-03 11:20:00','2021-09-03 11:20:00',1),
	(DEFAULT,'post-BE-2.png','post-BE-2','2021-09-03 11:20:00','2021-09-03 11:20:00',2),
	(DEFAULT,'post-CR-2.png','post-CR-2','2021-09-03 11:20:00','2021-09-03 11:20:00',3),
	(DEFAULT,'post-SS-2.png','post-SS-2','2021-09-03 11:20:00','2021-09-03 11:20:00',4),
	(DEFAULT,'post-SF-2.png','post-SF-2','2021-09-03 11:20:00','2021-09-03 11:20:00',5);
-- DELETE FROM posts WHERE id > 0;


-- COMENTARIOS --

CREATE TABLE comments (
	id INT UNSIGNED PRIMARY KEY UNIQUE AUTO_INCREMENT,
    u_comment VARCHAR(80) NOT NULL,
    publication_date DATETIME NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    post_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id)
);
-- DROP TABLE IF EXISTS comments;

INSERT INTO comments VALUES
	(DEFAULT,'Este es un comentario que comenta algo(1)','2021/09/27 12:59:00',2,1),
	(DEFAULT,'Este es un comentario que comenta algo(2)','2021/09/27 12:59:00',3,1),
	(DEFAULT,'Este es un comentario que comenta algo(3)','2021/09/27 12:59:00',4,1),
	(DEFAULT,'Este es un comentario que comenta algo(4)','2021/09/27 12:59:00',5,1),
	(DEFAULT,'Este es un comentario que comenta algo(5)','2021/09/27 12:59:00',1,2),
	(DEFAULT,'Este es un comentario que comenta algo(6)','2021/09/27 12:59:00',3,2),
	(DEFAULT,'Este es un comentario que comenta algo(7)','2021/09/27 12:59:00',4,2),
	(DEFAULT,'Este es un comentario que comenta algo(8)','2021/09/27 12:59:00',5,2),
	(DEFAULT,'Este es un comentario que comenta algo(9)','2021/09/27 12:59:00',1,3),
	(DEFAULT,'Este es un comentario que comenta algo(10)','2021/09/27 12:59:00',2,3),
	(DEFAULT,'Este es un comentario que comenta algo(11)','2021/09/27 12:59:00',4,3),
	(DEFAULT,'Este es un comentario que comenta algo(12)','2021/09/27 12:59:00',5,3),
	(DEFAULT,'Este es un comentario que comenta algo(13)','2021/09/27 12:59:00',1,4),
	(DEFAULT,'Este es un comentario que comenta algo(14)','2021/09/27 12:59:00',2,4),
	(DEFAULT,'Este es un comentario que comenta algo(15)','2021/09/27 12:59:00',3,4),
	(DEFAULT,'Este es un comentario que comenta algo(16)','2021/09/27 12:59:00',5,4),
	(DEFAULT,'Este es un comentario que comenta algo(17)','2021/09/27 12:59:00',1,5),
	(DEFAULT,'Este es un comentario que comenta algo(18)','2021/09/27 12:59:00',2,5),
	(DEFAULT,'Este es un comentario que comenta algo(19)','2021/09/27 12:59:00',3,5),
	(DEFAULT,'Este es un comentario que comenta algo(20)','2021/09/27 12:59:00',4,5),
	(DEFAULT,'Este es un comentario que comenta algo(21)','2021/09/27 12:59:00',2,6),
	(DEFAULT,'Este es un comentario que comenta algo(22)','2021/09/27 12:59:00',3,6),
	(DEFAULT,'Este es un comentario que comenta algo(23)','2021/09/27 12:59:00',4,6),
	(DEFAULT,'Este es un comentario que comenta algo(24)','2021/09/27 12:59:00',5,6),
	(DEFAULT,'Este es un comentario que comenta algo(25)','2021/09/27 12:59:00',1,7),
	(DEFAULT,'Este es un comentario que comenta algo(26)','2021/09/27 12:59:00',3,7),
	(DEFAULT,'Este es un comentario que comenta algo(27)','2021/09/27 12:59:00',4,7),
	(DEFAULT,'Este es un comentario que comenta algo(28)','2021/09/27 12:59:00',5,7),
	(DEFAULT,'Este es un comentario que comenta algo(29)','2021/09/27 12:59:00',1,8),
	(DEFAULT,'Este es un comentario que comenta algo(30)','2021/09/27 12:59:00',2,8),
	(DEFAULT,'Este es un comentario que comenta algo(31)','2021/09/27 12:59:00',4,8),
	(DEFAULT,'Este es un comentario que comenta algo(32)','2021/09/27 12:59:00',5,8),
	(DEFAULT,'Este es un comentario que comenta algo(33)','2021/09/27 12:59:00',1,9),
	(DEFAULT,'Este es un comentario que comenta algo(34)','2021/09/27 12:59:00',2,9),
	(DEFAULT,'Este es un comentario que comenta algo(35)','2021/09/27 12:59:00',3,9),
	(DEFAULT,'Este es un comentario que comenta algo(36)','2021/09/27 12:59:00',5,9),
	(DEFAULT,'Este es un comentario que comenta algo(37)','2021/09/27 12:59:00',1,10),
	(DEFAULT,'Este es un comentario que comenta algo(38)','2021/09/27 12:59:00',2,10),
	(DEFAULT,'Este es un comentario que comenta algo(39)','2021/09/27 12:59:00',3,10),
	(DEFAULT,'Este es un comentario que comenta algo(40)','2021/09/27 12:59:00',4,10)
;
-- DELETE FROM comments WHERE id > 0;