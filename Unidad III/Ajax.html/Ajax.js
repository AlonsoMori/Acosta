
    window.onload = function() {

        document.getElementById("btnajax").addEventListener("click",pedirHeader);
        document.getElementById("btnreset").addEventListener("click",iniciarHeader);
        
        function pedirHeader() {
        
        var solicitud = new XMLHttpRequest();          //Crear objeto XMLHttpRequest
        
       
        solicitud.onreadystatechange = function() {   // En esta propiedad declaramos la funcion a ejecutar
                                                    // cuando cambie el status del objeto XMLHttpRequest
        
            if (solicitud.readyState == 4 && solicitud.status == 200) {                 // La respueta esta lista
                document.getElementById("MyDiv").innerHTML = solicitud.responseText;  // La propiedad responseText tiene la respuesta en texto
       
            }};
        
        solicitud.open("GET", "Ajax.txt", true);
       
        solicitud.send();
        
         }
        
        
         function iniciarHeader() {
            
            document.getElementById("MyDiv").innerHTML = "<h2>Tienda De Armas<h2>"; 
      
        }
        
        $(document).ready(function() {  
            $("#Boton").click(function(){
                $("#Modal1").modal()
            });

            $("#BotonAler").click(function(){
                $("#BotonAle").close()
            });

            $("#BotonAmarillo").click(function(){
                Swal.fire({
 
                    title: 'Do you want to save the changes?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Save',
                    denyButtonText: `Don't save`,

                }).then((result) => {
  
                    /* Read more about isConfirmed, isDenied below */
  
                    if (result.isConfirmed) {
   
                        Swal.fire('Saved!', '', 'success')
  
                    } else if (result.isDenied) {
   
                        Swal.fire('Changes are not saved', '', 'info')
 
                    }

                })
            });



            const btnSwitch = document.querySelector('#switch');


            btnSwitch.addEventListener('click', () => {
	
                document.body.classList.toggle('dark');
	
                btnSwitch.classList.toggle('active');

            });

            $("#Boton2").click(function(){


                

            })

           
            $('#BotonAzul').click(function(){
       
                $.post('getRegistro.php',{},function(data){

           
                    console.log(data);
           
                    $('#idNumero').val(data.idNumero);
           
                    $('#idNombre').val(data.idNombre);
          
                    $('#idFabricante').val(data.idFabricante);
           
                    $('#idPais').val(data.idPais);
           
                    $('#idProducida').val(data.idProducida);
           
                    $('#idTipo').val(data.idTipo);
           
                    $('#idPrecio').val(data.idMunicion);
          
                    $('#idMunicion').val(data.idMunicion);

       
                },'json');
    
  
            });
         
        });
    } 

   