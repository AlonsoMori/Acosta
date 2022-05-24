<?php

$registro['idNumero'] ='1234';
$registro['idNombre'] ='M16';
$registro['idFabricante'] ='Colt Company';
$registro['idPais'] ='USA';
$registro['idProducida'] ='1970 - 1980';
$registro['idTipo'] ='Defensa Personal';
$registro['idPrecio'] ='$1,200';
$registro['idMunicion'] ='7.12';

$registroJson = json_encode($registro);
echo $registroJson;
?>

$id=2;
$hostname = 'localhost';
$database = 'n19100190';
$username = 'maneskin';
$passwword = 'Default123';
try{
    $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$passwword);
} catch(PDOException $e){
    echo $e->getMessage();
    exit();
}
//$con->setAttribute(PDO::ATT_ERRMODE,PDO::ERRMODE_EXCEPTION);
try{
   
    $consultaSql = "Select idID,NombreCom,NombreDelJuego,Rango,Edad,Pais from Jugadores where idID=" .$id;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();
}catch(PDOException $e){
    echo "Error d la consulta";
    echo $e->getMessage();
}
$resultadoJSON = json_encode($resultado);
echo $resultadoJSON;