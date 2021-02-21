CREATE DATABASE IF NOT EXISTS `DeliTest`;
USE `DeliTest`;

-- -----------------------------------------------------
-- Table `DeliTest`.`Restaurant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DeliTest`.`Restaurant` (
  `id` INT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `address` VARCHAR(250) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `list_sigles` MEDIUMTEXT NOT NULL,
  `img_url` VARCHAR(400) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `DeliTest`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DeliTest`.`users` (
  `id` INT NOT NULL,
  `mail` VARCHAR(45) NOT NULL,
  `password` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `mail_UNIQUE` (`mail` ASC) VISIBLE);
