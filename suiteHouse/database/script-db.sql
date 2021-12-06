DROP DATABASE IF EXISTS `suitehouse`;
CREATE DATABASE `suitehouse`;

USE suitehouse;

-- La idea era cambiar la zona horarios porque está en GMT:+0:00
SET GLOBAL TIME_ZONE = '-3:00';

/* Creación de tablas */
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombreUsuario VARCHAR(45) NOT NULL,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    fecNac DATE NOT NULL,
    email VARCHAR(255) NOT NULL,
    contrasenia VARCHAR(255) NOT NULL,
    imagenPerfil VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

CREATE TABLE posteos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    imagenPosteo VARCHAR(255) NOT NULL,
    piePublicacion VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    usuarioId INT,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    comentario VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    usuarioId INT,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id),
    posteoId INT,
    FOREIGN KEY (posteoId) REFERENCES posteos(id)
);

/* Carga de datos a las tablas */
/* SEGUIR LAS INSTRUCCIONES PARA CARGARLOS CORRECTAMENTE */

/* Usuarios */
/* Al utilizar el método hashing en las contraseñas no se pueden cargar los usuarios desde SQL */
/* 1° Creación manual de usuarios --> Crear mínimo 5 o recortar luego los insert de posteos y comentarios */
/* Se pueden cargar los datos recomendados o crear usuarios personalizados */

/* 1-1° --> Descargar las imágenes de perfil desde public*/
/* 1-2° --> Crear cada usuario desde registro en la página*/

    (DEFAULT,'SuiteHome','Suite','Home','2000-11-24','suite-home@gmail.com','Contraseña123','perfil-US-1.png','2021-09-03 11:20:00','2021-10-25 11:00:00'),
	(DEFAULT,'BrandanElle','Brandan','Elle','2000-11-23','brandan-elle@gmail.com','Contraseña123','perfil-US-2.png','2021-09-03 11:20:00','2021-10-24 11:00:00'),
    (DEFAULT,'CarlaReyes','Carla','Reyes','2000-11-22','carla-reyes@gmail.com','Contraseña123','perfil-US-3.png','2021-09-03 11:20:00','2021-10-23 11:00:00'),
    (DEFAULT,'SolSileoni','Sol','Sileoni','2000-11-21','sol-sileoni@gmail.com','Contraseña123','perfil-US-4.png','2021-09-03 11:20:00','2021-10-22 11:00:00'),
    (DEFAULT,'SpencerFive','Spencer','Five','2000-11-20','spencer-five@gmail.com','Contraseña123','perfil-US-5.png','2021-09-03 11:20:00','2021-10-21  11:00:00');

/* 2° Carga de posteos */
INSERT INTO posteos VALUES
	(DEFAULT,'post-1-1.png','Bienvenid@','2021-09-03 11:20:00','2021-11-25 11:00:00',1),
	(DEFAULT,'post-1-2.png','post-1-2','2021-09-03 11:20:00','2021-11-24 11:00:00',1),
	(DEFAULT,'post-2-1.png','post-2-1','2021-09-03 11:20:00','2021-11-23 11:00:00',2),
	(DEFAULT,'post-2-2.png','post-2-2','2021-09-03 11:20:00','2021-11-22 11:00:00',2),
	(DEFAULT,'post-3-1.png','post-3-1','2021-09-03 11:20:00','2021-11-21 11:00:00',3),
	(DEFAULT,'post-3-2.png','post-3-2','2021-09-03 11:20:00','2021-11-20 11:00:00',3),
	(DEFAULT,'post-4-1.png','post-4-1','2021-09-03 11:20:00','2021-11-19 11:00:00',4),
	(DEFAULT,'post-4-2.png','post-4-2','2021-09-03 11:20:00','2021-11-18 11:00:00',4),
	(DEFAULT,'post-5-1.png','post-5-1','2021-09-03 11:20:00','2021-11-17 11:00:00',5),
	(DEFAULT,'post-5-2.png','post-5-2','2021-09-03 11:20:00','2021-11-16 11:00:00',5);

/* 3° Carga de comentarios */
INSERT INTO comentarios VALUES
	(DEFAULT,'comentario US-1-1','2021-11-23 10:15:00','2021-11-25 10:10:00',1,1),
	(DEFAULT,'comentario US-1-2','2021-11-23 10:15:00','2021-11-24 10:10:00',1,2),
	(DEFAULT,'comentario US-1-3','2021-11-23 10:15:00','2021-11-23 10:10:00',1,3),
	(DEFAULT,'comentario US-1-4','2021-11-23 10:15:00','2021-11-22 10:10:00',1,4),
	(DEFAULT,'comentario US-1-5','2021-11-23 10:15:00','2021-11-21 10:10:00',1,5),
	(DEFAULT,'comentario US-2-1','2021-11-23 10:15:00','2021-11-20 10:10:00',2,1),
	(DEFAULT,'comentario US-2-2','2021-11-23 10:15:00','2021-11-19 10:10:00',2,2),
	(DEFAULT,'comentario US-2-3','2021-11-23 10:15:00','2021-11-18 10:10:00',2,3),
	(DEFAULT,'comentario US-2-4','2021-11-23 10:15:00','2021-11-16 10:10:00',2,4),
	(DEFAULT,'comentario US-2-5','2021-11-23 10:15:00','2021-11-15 10:10:00',2,5),
	(DEFAULT,'comentario US-3-1','2021-11-23 10:15:00','2021-11-14 10:10:00',3,1),
	(DEFAULT,'comentario US-3-2','2021-11-23 10:15:00','2021-11-13 10:10:00',3,2),
	(DEFAULT,'comentario US-3-3','2021-11-23 10:15:00','2021-11-12 10:10:00',3,3),
	(DEFAULT,'comentario US-3-4','2021-11-23 10:15:00','2021-11-11 10:10:00',3,4),
	(DEFAULT,'comentario US-3-5','2021-11-23 10:15:00','2021-11-10 10:10:00',3,5),
	(DEFAULT,'comentario US-4-1','2021-11-23 10:15:00','2021-11-09 10:10:00',4,1),
	(DEFAULT,'comentario US-4-2','2021-11-23 10:15:00','2021-11-08 10:10:00',4,2),
	(DEFAULT,'comentario US-4-3','2021-11-23 10:15:00','2021-11-07 10:10:00',4,3),
	(DEFAULT,'comentario US-4-4','2021-11-23 10:15:00','2021-11-06 10:10:00',4,4),
	(DEFAULT,'comentario US-4-5','2021-11-23 10:15:00','2021-11-05 10:10:00',4,5),
	(DEFAULT,'comentario US-5-1','2021-11-23 10:15:00','2021-11-04 10:10:00',5,1),
	(DEFAULT,'comentario US-5-2','2021-11-23 10:15:00','2021-11-03 10:10:00',5,2),
	(DEFAULT,'comentario US-5-3','2021-11-23 10:15:00','2021-11-02 10:10:00',5,3),
	(DEFAULT,'comentario US-5-4','2021-11-23 10:15:00','2021-11-01 10:10:00',5,4),
	(DEFAULT,'comentario US-5-5','2021-11-23 10:15:00','2021-11-01 09:10:00',5,5);