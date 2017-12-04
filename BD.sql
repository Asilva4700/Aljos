-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema Aljos
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Aljos` ;

-- -----------------------------------------------------
-- Schema Aljos
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Aljos` DEFAULT CHARACTER SET latin1 ;
USE `Aljos` ;

-- -----------------------------------------------------
-- Table `Aljos`.`tipoUsuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Aljos`.`tipoUsuario` ;

CREATE TABLE IF NOT EXISTS `Aljos`.`tipoUsuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Aljos`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Aljos`.`usuario` ;

CREATE TABLE IF NOT EXISTS `Aljos`.`usuario` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `correo` VARCHAR(30) NOT NULL,
  `contraseña` VARCHAR(15) NOT NULL,
  `rut` VARCHAR(11) NOT NULL,
  `numeroTelefono` INT(11) NOT NULL,
  `direccion` VARCHAR(80) NOT NULL,
  `fecha` DATE NOT NULL,
  `baneado` TINYINT(1) NOT NULL,
  `nombre` VARCHAR(25) NOT NULL,
  `idTipoUsuario` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_usuario_tipoUsuario1_idx` (`idTipoUsuario` ASC),
  CONSTRAINT `fk_usuario_tipoUsuario1`
    FOREIGN KEY (`idTipoUsuario`)
    REFERENCES `Aljos`.`tipoUsuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Aljos`.`empresa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Aljos`.`empresa` ;

CREATE TABLE IF NOT EXISTS `Aljos`.`empresa` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `idUsuario` INT(11) NOT NULL,
  `nombre` VARCHAR(25) NOT NULL,
  `rut` VARCHAR(11) NOT NULL,
  `paginaWeb` VARCHAR(25) NOT NULL,
  `correo` VARCHAR(30) NOT NULL,
  `fecha` DATE NOT NULL,
  `advertencias` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idUsuario` (`idUsuario` ASC),
  CONSTRAINT `empresa_ibfk_1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `Aljos`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Aljos`.`local`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Aljos`.`local` ;

CREATE TABLE IF NOT EXISTS `Aljos`.`local` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `direccion` VARCHAR(80) NOT NULL,
  `numeracion` INT(11) NOT NULL,
  `ciudad` VARCHAR(50) NOT NULL,
  `comuna` VARCHAR(50) NOT NULL,
  `tamañoRecinto` INT(11) NOT NULL,
  `incluyePatio` TINYINT(1) NOT NULL,
  `tamañoPatio` INT(11) NULL DEFAULT NULL,
  `incluyeCocina` TINYINT(1) NOT NULL,
  `fecha` DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Aljos`.`productoservicio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Aljos`.`productoservicio` ;

CREATE TABLE IF NOT EXISTS `Aljos`.`productoservicio` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `precio` INT(11) NOT NULL,
  `idLocal` INT(11) NULL,
  `menu` TINYINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_productoservicio_local1_idx` (`idLocal` ASC),
  CONSTRAINT `fk_productoservicio_local1`
    FOREIGN KEY (`idLocal`)
    REFERENCES `Aljos`.`local` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Aljos`.`publicacion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Aljos`.`publicacion` ;

CREATE TABLE IF NOT EXISTS `Aljos`.`publicacion` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `idEmpresa` INT(11) NOT NULL,
  `fecha` DATE NOT NULL,
  `descripcion` VARCHAR(400) NOT NULL,
  `idProducto` INT(11) NOT NULL,
  `cantidad` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idEmpresa` (`idEmpresa` ASC),
  INDEX `fk_publicacion_productoservicio1_idx` (`idProducto` ASC),
  CONSTRAINT `publicacion_ibfk_1`
    FOREIGN KEY (`idEmpresa`)
    REFERENCES `Aljos`.`empresa` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_publicacion_productoservicio1`
    FOREIGN KEY (`idProducto`)
    REFERENCES `Aljos`.`productoservicio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Aljos`.`calificacion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Aljos`.`calificacion` ;

CREATE TABLE IF NOT EXISTS `Aljos`.`calificacion` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `idPublicacion` INT(11) NOT NULL,
  `idUsuario` INT(11) NOT NULL,
  `fecha` DATE NOT NULL,
  `descripcion` VARCHAR(400) NOT NULL,
  `calificacion` INT(11) NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idPublicacion` (`idPublicacion` ASC),
  INDEX `idUsuario` (`idUsuario` ASC),
  CONSTRAINT `comentario_ibfk_1`
    FOREIGN KEY (`idPublicacion`)
    REFERENCES `Aljos`.`publicacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `comentario_ibfk_2`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `Aljos`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Aljos`.`cotizacion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Aljos`.`cotizacion` ;

CREATE TABLE IF NOT EXISTS `Aljos`.`cotizacion` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `idEmpresa` INT(11) NOT NULL,
  `idPublicacion` INT(11) NOT NULL,
  `idUsuario` INT(11) NOT NULL,
  `fecha` DATE NOT NULL,
  `total` INT(11) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idEmpresa` (`idEmpresa` ASC),
  INDEX `idPublicacion` (`idPublicacion` ASC),
  INDEX `idUsuario` (`idUsuario` ASC),
  CONSTRAINT `cotizacion_ibfk_1`
    FOREIGN KEY (`idEmpresa`)
    REFERENCES `Aljos`.`empresa` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cotizacion_ibfk_2`
    FOREIGN KEY (`idPublicacion`)
    REFERENCES `Aljos`.`publicacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cotizacion_ibfk_3`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `Aljos`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Aljos`.`favorito`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Aljos`.`favorito` ;

CREATE TABLE IF NOT EXISTS `Aljos`.`favorito` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `idUsuario` INT(11) NOT NULL,
  `idPublicacion` INT(11) NOT NULL,
  `idEmpresa` INT(11) NOT NULL,
  `fecha` DATE NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idUsuario` (`idUsuario` ASC),
  INDEX `idPublicacion` (`idPublicacion` ASC),
  INDEX `idEmpresa` (`idEmpresa` ASC),
  CONSTRAINT `favorito_ibfk_1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `Aljos`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `favorito_ibfk_2`
    FOREIGN KEY (`idPublicacion`)
    REFERENCES `Aljos`.`publicacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `favorito_ibfk_3`
    FOREIGN KEY (`idEmpresa`)
    REFERENCES `Aljos`.`empresa` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Aljos`.`imagen`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Aljos`.`imagen` ;

CREATE TABLE IF NOT EXISTS `Aljos`.`imagen` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `idPublicacion` INT(11) NULL DEFAULT NULL,
  `idUsuario` INT(11) NULL DEFAULT NULL,
  `ruta` VARCHAR(400) NOT NULL,
  `fecha` DATE NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idPublicacion` (`idPublicacion` ASC),
  INDEX `idUsuario` (`idUsuario` ASC),
  CONSTRAINT `imagen_ibfk_1`
    FOREIGN KEY (`idPublicacion`)
    REFERENCES `Aljos`.`publicacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `imagen_ibfk_2`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `Aljos`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Aljos`.`pregunta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Aljos`.`pregunta` ;

CREATE TABLE IF NOT EXISTS `Aljos`.`pregunta` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `idEmpresa` INT(11) NOT NULL,
  `pregunta` VARCHAR(100) NOT NULL,
  `respuesta` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idEmpresa` (`idEmpresa` ASC),
  CONSTRAINT `pregunta_ibfk_1`
    FOREIGN KEY (`idEmpresa`)
    REFERENCES `Aljos`.`empresa` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Aljos`.`visita`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Aljos`.`visita` ;

CREATE TABLE IF NOT EXISTS `Aljos`.`visita` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `idPublicacion` INT(11) NOT NULL,
  `idUsuario` INT(11) NOT NULL,
  `fecha` DATE NOT NULL,
  `cantidad` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idPublicacion` (`idPublicacion` ASC),
  INDEX `idUsuario` (`idUsuario` ASC),
  CONSTRAINT `visita_ibfk_1`
    FOREIGN KEY (`idPublicacion`)
    REFERENCES `Aljos`.`publicacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `visita_ibfk_2`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `Aljos`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Aljos`.`pago`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Aljos`.`pago` ;

CREATE TABLE IF NOT EXISTS `Aljos`.`pago` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(45) NOT NULL,
  `usuario_id` INT(11) NOT NULL,
  `cotizacion_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Pago_usuario1_idx` (`usuario_id` ASC),
  INDEX `fk_Pago_cotizacion1_idx` (`cotizacion_id` ASC),
  CONSTRAINT `fk_Pago_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `Aljos`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pago_cotizacion1`
    FOREIGN KEY (`cotizacion_id`)
    REFERENCES `Aljos`.`cotizacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Aljos`.`encuesta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Aljos`.`encuesta` ;

CREATE TABLE IF NOT EXISTS `Aljos`.`encuesta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pregunta` VARCHAR(100) NOT NULL,
  `Encuestacol` VARCHAR(100) NOT NULL,
  `numeroEncuesta` INT NOT NULL,
  `usuario_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `Encuestacol_UNIQUE` (`Encuestacol` ASC),
  INDEX `fk_Encuesta_usuario1_idx` (`usuario_id` ASC),
  CONSTRAINT `fk_Encuesta_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `Aljos`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
