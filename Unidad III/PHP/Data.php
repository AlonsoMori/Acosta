<?php

$id = 2;

$hostname = 'localhost';
$database = 'n19100139';
$username = 'root';
$password = '9CC8FC611C93';

try{
    $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$passwword);
} catch(PDOException $e){
    echo $e->getMessage();
    exit();
}
//$con->setAttribute(PDO::ATT_ERRMODE,PDO::ERRMODE_EXCEPTION);
try{
   
    $consultaSql = "Select idNumero,idNombre,idFabricante,idPais,idProducida,idTipo from GunsStore where idNumero=" .$id;
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
?>

