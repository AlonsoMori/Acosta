window.onload = function() {

    document.getElementById("btnajax").addEventListener("click",pedirHeader);
    document.getElementById("btnreset").addEventListener("click",iniciarHeader);
    


    // Boton Promesa //

    function pedirHeader() {
    
        let promesa = new Promise(function(resolve,reject){
            var solicitud = new XMLHttpRequest();
            solicitud.onreadystatechange = function(){
        
                if(solicitud.readyState == 4 && solicitud.status == 200){
                    resolve(solicitud.responseText);
                }};
                solicitud.open("GET","LifeIsGood-AjaxText.txt", true);
                solicitud.send();
        
            
                
        });
        
        promesa.then(value => document.getElementById("LocalName").innerHTML = value);
     }
    
     function iniciarHeader() {
        
        document.getElementById("LocalName").innerHTML = "<h2>Tienda De Armas<h2>"; 
  
    }

    // * * * * * //


    
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

