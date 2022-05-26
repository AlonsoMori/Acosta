$('#BotonFetch').click(function(){

    console.log("G'Day Mate!");
   
    fetch('getRegistro.php')
    
    .then(respuesta => respuesta.json())
   
    .then(function(data){console.log(dato); refrescar(dato)});
   
    console.log("ban");

});
    
function refrescar(data){
      
    $('#idNumero').val(data.idNumero);
     
    $('#idNombre').val(data.idNombre);
    
    $('#idFabricante').val(data.idFabricante);
      
    $('#idPais').val(data.idPais);
     
    $('#idProducida').val(data.idProducida);
      
    $('#idTipo').val(data.idTipo);
     
    $('#idPrecio').val(data.idPrecio);
      
    $('#idMunicion').val(data.idMunicion);
       
};
    
    



