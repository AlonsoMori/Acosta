



$(document).ready(function(){
        $("#idcontene").click(cambiarColor);
        function cambiarColor(elem){
    
            
            console.log(elem);
            $(elem.target).toggleClass('cajaAmarilla');
        }
    })
    