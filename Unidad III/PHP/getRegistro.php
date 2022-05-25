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