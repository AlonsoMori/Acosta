create database n19100139;
use n19100139;
create table `n19100139`.`GunsStore`(
        `idNumero` INT NOT NULL AUTO_INCREMENT,
        `idNombre` VARCHAR(45) NOT NULL,
        `idFabricante` VARCHAR(45) NOT NULL,
        `idPais` VARCHAR(45) NOT NULL,
        `idProducida` VARCHAR(45) NOT NULL,
        `idTipo` VARCHAR(45) NOT NULL,
        PRIMARY KEY(`idNumero`));
    


        insert into n19100139.GunsStore values(1,'P90','H&N','BELGICA','2000-PRESENTE','DEFENSA PERSONA');
        insert into n19100139.GunsStore values(2,'M16','COLT','USA','1980-2000', 'USO MILITAR'); 
