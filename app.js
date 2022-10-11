

function validador(input)
{
    let estado = 0;
    for(let i = 0; i<input.length; i++){
       if(estado == 0 && input[i] == 'a'){
          estado = 0;
       }else if(estado == 0 && input[i] == 'b'){
          estado = 1; 
       }else if(estado == 1 && input[i] == 'a'){
           estado = 1;
       }else if(estado == 1 && input[i] == 'b'){
          estado = 2; 
       }else if(estado == 2 && input[i] == 'a'){
          estado = 2;
       }else if(estado == 2 && input[i] == 'b'){
          estado = 3; 
       }else if(estado == 3 && input[i] == 'a'){
          estado = 3;
       }else if(estado == 3 && input[i] == 'b'){
        estado = -1;//estado de error del automata y no es de aceptacion.
       }
    }
    return estado; 
}
function resetForm(){
   document.getElementById('cadena').reset();
   document.getElementById('resultado').innerHTML = "";
}
function comparador(input){
   let aprobacion = false;
   for(let i = 0; i<input.length; i++){
      if(input[i] != 'a' && input[i] != 'b'){
            aprobacion = false;
      }else{
         aprobacion = true; 
      }
   }
   return aprobacion;
}
//EL DOM OBTENIENDO LA CADENA DEL DOM
document.getElementById('cadena').addEventListener('submit', function(event){
   const cadena = document.getElementById('caracteres').value; 
   
   let validarLaCadena = comparador(cadena); 
   if(validarLaCadena == true){
      let estadoRetorno = validador(cadena);
      switch(estadoRetorno){
         case 0:
           document.getElementById('resultado').innerHTML = "la cadena " + cadena + " No es aceptada por el automata, ha llegado al estado: " + estadoRetorno; 
           break;
         case 1:
           document.getElementById('resultado').innerHTML = "la cadena " + cadena + " No es aceptada por el automata, ha llegado al estado: " + estadoRetorno; 
           break; 
         case 2:
           document.getElementById('resultado').innerHTML = "la cadena " + cadena + " No es aceptada por el automata, ha llegado al estado: " + estadoRetorno; 
           break;
         case 3:
           document.getElementById('resultado').innerHTML = "la cadena " + cadena + " Sí es aceptada por el automata, ha llegado al estado de aceptacion : " + estadoRetorno; 
           break; 
           default:
               document.getElementById('resultado').innerHTML = "la cadena " + cadena + " No es aceptada por el automata, ha llegado al estado de error ";
               break; 
      }
   }else{
      alert("La cadena ingresada contiene otros caracteres solo debe contener a y b");
   }
   
   event.preventDefault();
});