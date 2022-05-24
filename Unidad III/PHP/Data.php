<?php

$hostname = 'localhost';
$database = 'apseguros';
$username = 'root';
$password = '';

try {
    $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);
} catch(PDOException $e){
    echo "Error de conexion a la base de datos";
    echo $e->getMessage();
    exit();
}

$con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

?>

<?php include "conectar.php";

try{
    $query=$con->prepare("select * from cusuario");
    $query->execute();

    while ($row = $query->fetch()){
        echo $row['idUsuario'].'-'. 
        $row['nombre'].'-'. 
        $row['apPaterno'].'-'. 
        $row['apMaterno'].'<br>'. 

        
    }
    $query->closeCursor();

} catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage
}