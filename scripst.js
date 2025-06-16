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
function arreglos(){
    let frutas= ['manzanas', 'peras', 'fresa'];
    //bucle
    for(let f of frutas){
        console.log(f)
    }

    if (frutas[0] === 'pera'  ){
    console.log("La segunda fruta es una fresa");
} else {
    console.log("No es una pera");
}
    
}
document.getElementById("btnSaludar").addEventListener(
    "click" , function () {
        console.log("Hola!");
    }
);

//modificar el html a traves del dom
document.getElementById("btnAgregar") .addEventListener(
    "click", () => {
        //Obtener el elemento  "lista"
        let lista = document.getElementById("lista");
        let nuevoItem = docuement.createElement("li");
        //obtener el total de items de la lita
        let totalItems = lista.childElementCount;
        //agregado un contenido(texto)
        nuevoItem.textContect = 'Item $(totalItems + 1)';
        lista.appendChild(nuevoItem);
    }
);

     function addPalabraLista(){
           console.log("Funciono!");

}
document,getElementById("btnAddPalabra").addEventListener(
              "click", addPalabraLista

);

function addPalabraLista(){
    let input= document.getElementById("txtEntrada");
    const texto= input.value.trim();
    console.log(texto);
    const textMayuscula =texto.toUpperCase();
    let lista = document.getElementById("lst palabras");
    //creando  un nuevo elemento html 
    let nuevoItem= document.createElement("li");
    //agregando contenido
    nuevoItem.textMayuscula = textMayuscula;
    //agregar item a la lista 
    lista.appendChild(nuevoItem);
}


