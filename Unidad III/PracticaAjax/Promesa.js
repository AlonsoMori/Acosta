window.onload = function() {

    document.getElementById("BotonPromesaCambiar").addEventListener("click",pedirHeader);
    document.getElementById("btnreset").addEventListener("click",iniciarHeader);
    


    // Boton Promesa //

    function pedirHeader() {
    
        let promesa = new Promise(function(resolve,reject){
            var solicitud = new XMLHttpRequest();
            solicitud.onreadystatechange = function(){
        
                if(solicitud.readyState == 4 && solicitud.status == 200){
                    resolve(solicitud.responseText);
                }};
                solicitud.open("GET","Ajax.txt", true);
                solicitud.send();
        
            
                
        });
        
        promesa.then(value => document.getElementById("enca").innerHTML = value);
     }
    
     function iniciarHeader() {
        
        document.getElementById("MyDiv").innerHTML = "<h2>Tienda De Armas<h2>"; 
  
    }
}