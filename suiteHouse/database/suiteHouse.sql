CREATE DATABASE suitehouse;

USE suitehouse;

-- USUARIOS --

CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    u_name VARCHAR(45) NOT NULL,
    u_password VARCHAR(200) NOT NULL, /* almacenar un objeto en formato json con dos propiedades 
    con las que se encripta la contraseña y almacenar una key de desencriptado en el servidor */
    email VARCHAR(150) NOT NULL,
    profile_photo MEDIUMBLOB DEFAULT NULL,
    date_of_birth DATE NOT NULL,
    ft_sign_up DATESTAMP NOT NULL, -- datestamp consume menos recursos falta script en registro que nos de este valor
    -- por el momento nada más
);

INSERT INTO usuarios VALUES 
    (default,'nombre','apellido','napellido','{iv:32caracteres, content:Xcaracteres}','napellido@example.com','2000-01-01','2021-09-10 03:15:32'),
    (default,'nombre1','apellido1','napellido1','{iv:32caracteres, content:Xcaracteres}','napellido1@example.com','2000-01-01','2021-09-10 03:18:29'),
    (default,'nombre2','apellido2','napellido2','{iv:32caracteres, content:Xcaracteres}','napellido2@example.com','2000-01-01','2021-09-10 04:25:33'),
    (default,'nombre3','apellido3','napellido3','{iv:32caracteres, content:Xcaracteres}','napellido3@example.com','2000-01-01','2021-09-10 04:33:42'),
    (default,'nombre4','apellido4','napellido4','{iv:32caracteres, content:Xcaracteres}','napellido4@example.com','2000-01-01','2021-09-10 05:25:02')
;


-- POSTEOS --

CREATE TABLE posteos (
	id INT UNSIGNED PRIMARY KEY UNIQUE AUTO_INCREMENT,
    # COMENTARIO usuarioId VARCHAR(20) UNIQUE NOT NULL,
    imagen VARCHAR(30) NOT NULL,
    pieDeImagen VARCHAR(120),
    fechaPublicacion DATETIME NOT NULL
);
-- DROP TABLE IF EXISTS posteos;


INSERT INTO posteos VALUES
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