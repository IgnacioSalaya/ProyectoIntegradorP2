DROP DATABASE IF EXISTS `suitehouse`;
CREATE DATABASE `suitehouse`;

USE suitehouse;

-- La idea era cambiar la zona horarios porque está en GMT:+0:00
SET GLOBAL TIME_ZONE = '-3:00';

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

/* INSERT INTO usuarios 
VALUES (default,'SuiteHouse','Suite','House','2021-09-09','contactus@suitehouse.com','','imagenPerfil-suiteHouse.png') */