-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema aljos
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `aljos` ;

-- -----------------------------------------------------
-- Schema aljos
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `aljos` DEFAULT CHARACTER SET latin1 ;
USE `aljos` ;

-- -----------------------------------------------------
-- Table `aljos`.`ACL`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aljos`.`ACL` ;

CREATE TABLE IF NOT EXISTS `aljos`.`ACL` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `model` VARCHAR(512) NULL DEFAULT NULL,
  `property` VARCHAR(512) NULL DEFAULT NULL,
  `accessType` VARCHAR(512) NULL DEFAULT NULL,
  `permission` VARCHAR(512) NULL DEFAULT NULL,
  `principalType` VARCHAR(512) NULL DEFAULT NULL,
  `principalId` VARCHAR(512) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `aljos`.`local`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aljos`.`local` ;

CREATE TABLE IF NOT EXISTS `aljos`.`local` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `direccion` VARCHAR(80) NOT NULL,
  `numeracion` INT(11) NOT NULL,
  `ciudad` VARCHAR(50) NOT NULL,
  `comuna` VARCHAR(50) NOT NULL,
  `tamanoRecinto` INT(11) NOT NULL,
  `incluyePatio` TINYINT(1) NOT NULL,
  `tamanoPatio` INT(11) NOT NULL,
  `incluyeCocina` TINYINT(1) NOT NULL,
  `fecha` DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `aljos`.`productoservicio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aljos`.`productoservicio` ;

CREATE TABLE IF NOT EXISTS `aljos`.`productoservicio` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `precio` INT(11) NOT NULL,
  `idLocal` INT(11) NULL DEFAULT NULL,
  `menu` TINYINT(4) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_productoservicio_local1_idx` (`idLocal` ASC),
  CONSTRAINT `fk_productoservicio_local1`
    FOREIGN KEY (`idLocal`)
    REFERENCES `aljos`.`local` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `aljos`.`tipoUsuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aljos`.`tipoUsuario` ;

CREATE TABLE IF NOT EXISTS `aljos`.`tipoUsuario` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `aljos`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aljos`.`usuario` ;

CREATE TABLE IF NOT EXISTS `aljos`.`usuario` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `correo` VARCHAR(100) NOT NULL,
  `contrasena` VARCHAR(15) NOT NULL,
  `rut` VARCHAR(11) NOT NULL,
  `numeroTelefono` INT(11) NOT NULL,
  `direccion` VARCHAR(80) NOT NULL,
  `fecha` DATE NOT NULL,
  `baneado` TINYINT(1) NOT NULL,
  `nombre` VARCHAR(25) NOT NULL,
  `idTipoUsuario` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_usuario_tipoUsuario1_idx` (`idTipoUsuario` ASC),
  CONSTRAINT `fk_usuario_tipoUsuario1`
    FOREIGN KEY (`idTipoUsuario`)
    REFERENCES `aljos`.`tipoUsuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `aljos`.`empresa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aljos`.`empresa` ;

CREATE TABLE IF NOT EXISTS `aljos`.`empresa` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `idUsuario` INT(11) NOT NULL,
  `nombre` VARCHAR(25) NOT NULL,
  `rut` VARCHAR(11) NOT NULL,
  `paginaWeb` VARCHAR(100) NOT NULL,
  `correo` VARCHAR(30) NOT NULL,
  `fecha` DATE NOT NULL,
  `advertencias` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idUsuario` (`idUsuario` ASC),
  CONSTRAINT `empresa_ibfk_1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `aljos`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `aljos`.`publicacion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aljos`.`publicacion` ;

CREATE TABLE IF NOT EXISTS `aljos`.`publicacion` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `idEmpresa` INT(11) NOT NULL,
  `fecha` DATE NOT NULL,
  `descripcion` VARCHAR(400) NOT NULL,
  `idProducto` INT(11) NOT NULL,
  `cantidad` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idEmpresa` (`idEmpresa` ASC),
  INDEX `fk_publicacion_productoservicio1_idx` (`idProducto` ASC),
  CONSTRAINT `fk_publicacion_productoservicio1`
    FOREIGN KEY (`idProducto`)
    REFERENCES `aljos`.`productoservicio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `publicacion_ibfk_1`
    FOREIGN KEY (`idEmpresa`)
    REFERENCES `aljos`.`empresa` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `aljos`.`calificacion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aljos`.`calificacion` ;

CREATE TABLE IF NOT EXISTS `aljos`.`calificacion` (
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
    REFERENCES `aljos`.`publicacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `comentario_ibfk_2`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `aljos`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `aljos`.`cotizacion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aljos`.`cotizacion` ;

CREATE TABLE IF NOT EXISTS `aljos`.`cotizacion` (
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
    REFERENCES `aljos`.`empresa` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cotizacion_ibfk_2`
    FOREIGN KEY (`idPublicacion`)
    REFERENCES `aljos`.`publicacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cotizacion_ibfk_3`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `aljos`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `aljos`.`encuesta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aljos`.`encuesta` ;

CREATE TABLE IF NOT EXISTS `aljos`.`encuesta` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `pregunta` VARCHAR(100) NOT NULL,
  `Encuestacol` VARCHAR(100) NOT NULL,
  `numeroEncuesta` INT(11) NOT NULL,
  `usuario_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `Encuestacol_UNIQUE` (`Encuestacol` ASC),
  INDEX `fk_Encuesta_usuario1_idx` (`usuario_id` ASC),
  CONSTRAINT `fk_Encuesta_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `aljos`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `aljos`.`favorito`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aljos`.`favorito` ;

CREATE TABLE IF NOT EXISTS `aljos`.`favorito` (
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
    REFERENCES `aljos`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `favorito_ibfk_2`
    FOREIGN KEY (`idPublicacion`)
    REFERENCES `aljos`.`publicacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `favorito_ibfk_3`
    FOREIGN KEY (`idEmpresa`)
    REFERENCES `aljos`.`empresa` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `aljos`.`imagen`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aljos`.`imagen` ;

CREATE TABLE IF NOT EXISTS `aljos`.`imagen` (
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
    REFERENCES `aljos`.`publicacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `imagen_ibfk_2`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `aljos`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `aljos`.`pago`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aljos`.`pago` ;

CREATE TABLE IF NOT EXISTS `aljos`.`pago` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(45) NOT NULL,
  `usuario_id` INT(11) NOT NULL,
  `cotizacion_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Pago_usuario1_idx` (`usuario_id` ASC),
  INDEX `fk_Pago_cotizacion1_idx` (`cotizacion_id` ASC),
  CONSTRAINT `fk_Pago_cotizacion1`
    FOREIGN KEY (`cotizacion_id`)
    REFERENCES `aljos`.`cotizacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pago_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `aljos`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `aljos`.`pregunta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aljos`.`pregunta` ;

CREATE TABLE IF NOT EXISTS `aljos`.`pregunta` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `idEmpresa` INT(11) NOT NULL,
  `pregunta` VARCHAR(100) NOT NULL,
  `respuesta` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idEmpresa` (`idEmpresa` ASC),
  CONSTRAINT `pregunta_ibfk_1`
    FOREIGN KEY (`idEmpresa`)
    REFERENCES `aljos`.`empresa` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `aljos`.`visita`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aljos`.`visita` ;

CREATE TABLE IF NOT EXISTS `aljos`.`visita` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `idPublicacion` INT(11) NOT NULL,
  `idUsuario` INT(11) NOT NULL,
  `fecha` DATE NOT NULL,
  `cantidad` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idPublicacion` (`idPublicacion` ASC),
  INDEX `idUsuario` (`idUsuario` ASC),
  CONSTRAINT `visita_ibfk_1`
    FOREIGN KEY (`idPublicacion`)
    REFERENCES `aljos`.`publicacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `visita_ibfk_2`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `aljos`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
