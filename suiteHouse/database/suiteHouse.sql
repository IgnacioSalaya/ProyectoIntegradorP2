CREATE DATABASE suitehome;

USE suitehome;

-- USUARIOS --

CREATE TABLE usuarios (
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
    -- DROP TABLE IF EXISTS usuarios;

INSERT INTO usuarios VALUES 
    (default,'usuario1@gmail.com','contraseña123','2000-01-01','SuiteHome','Suite','Home','perfil-suiteHome.png',501,105),
    (default,'usuario2@gmail.com','contraseña123','2000-01-01','Brandan2','Brandan','Dos','perfil-Brandan.png',501,105),
    (default,'usuario3@gmail.com','contraseña123','2000-01-01','Maira3','Maira','Tres','perfil-Maira.png',501,105),
    (default,'usuario4@gmail.com','contraseña123','2000-01-01','Sol4','Sol','Cuatro','perfil-Sol.png',501,105),
    (default,'usuario5@gmail.com','contraseña123','2000-01-01','Spencer5','Spencer','Cinco','perfil-Spencer.png',501,105)
; -- # {iv:32caracteres,content:Xcaracteres}
    -- DELETE FROM usuarios WHERE id > 0;


-- POSTEOS --

CREATE TABLE posts (
	id INT UNSIGNED PRIMARY KEY UNIQUE AUTO_INCREMENT,
    image VARCHAR(30) NOT NULL,
    imageCaption VARCHAR(120),
    publicationDate DATETIME NOT NULL,
    usuarioId INT UNSIGNED NOT NULL,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);
    -- DROP TABLE IF EXISTS posteos;


INSERT INTO posts VALUES
	(DEFAULT,'post-suiteHome.png','Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado','2021-09-03 11:20:00'),
	(DEFAULT,'post-mascotaEnCasa.png','Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado','2021-09-03 11:20:00'),
	(DEFAULT,'post-CocinaBlanca.png','Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado','2021-09-03 11:20:00'),
	(DEFAULT,'post-compuEnCama.png','Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado','2021-09-03 11:20:00'),
	(DEFAULT,'post-Estantes.png','Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado','2021-09-03 11:20:00'),
	(DEFAULT,'post-suiteHomeDos.png','Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado','2021-09-03 11:20:00'),
	(DEFAULT,'post-living.png','Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado','2021-09-03 11:20:00'),
	(DEFAULT,'post-muebleBlanco.png','Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado','2021-09-03 11:20:00'),
	(DEFAULT,'post-PlantaInterior.png','Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado','2021-09-03 11:20:00'),
	(DEFAULT,'post-SillonModerno.png','Este es un pie de imagen muy largo. Me sirve para ver si el texto está truncado','2021-09-03 11:20:00')
;
    -- DELETE FROM posteos WHERE id > 0;

-- COMENTARIOS --