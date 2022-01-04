/*
SQLyog Community v13.1.8 (64 bit)
MySQL - 10.4.22-MariaDB : Database - mydentiss
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`mydentiss` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `mydentiss`;

/*Table structure for table `enfermedades` */

DROP TABLE IF EXISTS `enfermedades`;

CREATE TABLE `enfermedades` (
  `idenfermedad` int(11) NOT NULL AUTO_INCREMENT,
  `enfermedad` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`idenfermedad`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `enfermedades` */

insert  into `enfermedades`(`idenfermedad`,`enfermedad`) values 
(1,'Diabetes'),
(2,'Cancer'),
(3,'Anemia');

/*Table structure for table `municipios` */

DROP TABLE IF EXISTS `municipios`;

CREATE TABLE `municipios` (
  `idmun` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idmun`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `municipios` */

insert  into `municipios`(`idmun`,`nombre`,`remember_token`,`created_at`,`updated_at`) values 
(1,'Toluca',NULL,NULL,NULL),
(2,'San Mateo Atenco',NULL,NULL,NULL),
(3,'Zinancatepec',NULL,NULL,NULL),
(4,'Metepec',NULL,NULL,NULL);

/*Table structure for table `pacientes` */

DROP TABLE IF EXISTS `pacientes`;

CREATE TABLE `pacientes` (
  `idpaciente` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `curp` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nombre` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidop` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidom` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fechanac` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `edad` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foto` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alergias` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idmun` int(10) NOT NULL,
  `sexo` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idtipossan` int(10) unsigned NOT NULL,
  `idenfermedad` int(10) NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idpaciente`),
  KEY `pacientes_idtipossan_foreign` (`idtipossan`),
  KEY `idenfermedad` (`idenfermedad`),
  KEY `idmun` (`idmun`),
  CONSTRAINT `pacientes_ibfk_1` FOREIGN KEY (`idenfermedad`) REFERENCES `enfermedades` (`idenfermedad`),
  CONSTRAINT `pacientes_ibfk_2` FOREIGN KEY (`idmun`) REFERENCES `municipios` (`idmun`),
  CONSTRAINT `pacientes_idtipossan_foreign` FOREIGN KEY (`idtipossan`) REFERENCES `tipo_sangres` (`idtipossan`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `pacientes` */

insert  into `pacientes`(`idpaciente`,`curp`,`nombre`,`apellidop`,`apellidom`,`direccion`,`fechanac`,`telefono`,`edad`,`foto`,`alergias`,`correo`,`idmun`,`sexo`,`idtipossan`,`idenfermedad`,`remember_token`,`created_at`,`updated_at`,`deleted_at`) values 
(1,'MOGA000520HMCRMLA5','Alexis','Morales','Gómez','Fe','20/05/2000','1234567890','21','fotos/1.jpg','No aplica','al221811729@gmail.com',1,'M',1,1,NULL,'2022-01-04 02:40:21','2022-01-04 02:40:21',NULL);

/*Table structure for table `tipo_sangres` */

DROP TABLE IF EXISTS `tipo_sangres`;

CREATE TABLE `tipo_sangres` (
  `idtipossan` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idtipossan`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `tipo_sangres` */

insert  into `tipo_sangres`(`idtipossan`,`tipo`,`remember_token`,`created_at`,`updated_at`) values 
(1,'O+',NULL,NULL,NULL),
(2,'O-',NULL,NULL,NULL),
(3,'A+',NULL,NULL,NULL),
(4,'A-',NULL,NULL,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
