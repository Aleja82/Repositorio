// funcion para mostrar un cuadro de dialogo emergente 
function mostrarMnesaje(){
    alert("Hola Mundo :) ");
}

//variables
function imprimirvariables(){
 let nombre= "Alejandra";
 //fora tradicional de concatenar datos 
 let edad= 20;
 console.log("nombre:" ,nombre);
 console.log("edad:" ,edad);
 // forma moderna de concaatenar cadenas

 console.log('nombre: ${nombre}, edad: ${edad}');

 console.error("Error: bla bla bla");
 console.warn("Advertencia: x x x");

}


ImprimirVariables();