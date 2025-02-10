// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar 
// la lógica para resolver el problema.

// Lista inicial de amigos ingresados (vacía)
let amigos = [];

const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function capitalizarNombre(texto) {
    // Devuelve el nombre ingresado con la primera letra de cada palabra en mayúsculas

    return texto
      .trim() // Elimina espacios al inicio y al final
      .split(/\s+/) // Divide y guarda el nombre en una lista usando cualquier cantidad de espacios
      .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()) // Capitaliza la primera letra del nombre ingresado
      .join(' '); // Une la lista generada devuelta a un string
}


function agregarAmigo(){
    // Agrega cada amigo ingresado por el usuario a la página

    const amigo = document.getElementById("amigo").value;

    // Homogenización de la escritura del input del usuario usando la función capitalizaciónNombre
    const amigoIngresado = capitalizarNombre(amigo);

    // Validacion de presencia de solo letras en el nombre ingresado
    let tieneNumero = /\d/.test(amigoIngresado);

    // Verificación de que se haya ingresado un nombre valido.
    if (amigoIngresado === "") {
        limpiarCajaDeTexto();
        return alert("Por favor, inserte un nombre válido"); 
    }
    
    // Validación de que el nombre no tenga números
    if (tieneNumero) {
        limpiarCajaDeTexto();
        return alert("Por favor, inserte un nombre que no contenga números");
    }

    // Verificacion de que no se ingresen nombres repetidos. Detecta diferencias entre mayúsculas y minúsculas. 
    if (amigos.includes(amigoIngresado)) {
        limpiarCajaDeTexto();
        return alert("No puedes repetir el mismo nombre");   
    } 

    // Adición del nombre ingresado a la lista amigos
    amigos.push(amigoIngresado); 
    
    // Mostrar los nombres ingresados
    listarAmigos();

    // Limpiar la caja de ingreso de nombres
    limpiarCajaDeTexto();
}

function listarAmigos(){
    // Actualización de la lista de amigos ingresados
    lista.innerHTML = "";

    // Mostrar en una lista los nombres de los amigos ingresados
    for (const amigo of amigos) {
        const elementoDeLista = document.createElement("li");
        elementoDeLista.textContent = amigo;
        lista.append(elementoDeLista);
    }
}


function limpiarCajaDeTexto(){
    // Limpiar la caja del formulario
    document.getElementById("amigo").value="";
}


function sortearAmigo(){
    // Función que devuelve el nombre de un amigo ingresado al azar.

    lista.innerHTML = ""; // Vaciar la lista de amigos mostrada

    // Verificar que la lista amigos no este vacía.
    if (amigos.length===0){
        alert("¡Introduce los nombres de tus amigos para poder realizar el sorteo!");

    // Verificar que haya al menos 2 amigos en la lista para poder realizar el sorteo
    } else if (amigos.length === 1){
        alert("¡Para realizar el sorteo, necesitas ingresar al menos dos amigos!");
        lista.innerHTML = amigos;
        limpiarCajaDeTexto();

     // Elegir un amigo al azar y mostrar el resultado
    } else {
       const indiceSorteado = Math.floor(Math.random()*amigos.length);
       const amigoSorteado = amigos[indiceSorteado];
       resultado.innerHTML = `Tu amigo secreto es ${amigoSorteado}`;
    }
    
    if (amigos.length >=2){
        desactivarBoton("sortearAmigo"); // Desactivar botón "Sortear amigo"
        desactivarBoton("anadir"); // Desactivar botón "Añadir" 
        activarBoton("reiniciar"); // Activar botón "Nuevo Juego"
        
    }
}


function reiniciarJuego(){
    // Funcion para restaurar los valores iniciales del juego

    resultado.innerHTML = ""; // Vaciar el resultado del juego anterior
    
    amigos = []; // Actualización de la lista de amigos ingresados

    activarBoton("anadir"); // Activar botón "Añadir"  
    activarBoton("sortearAmigo"); // Activar botón "Sortear amigo"    
    desactivarBoton("reiniciar"); // Desactivar botón "Nuevo juego"
   
    limpiarCajaDeTexto(); // Limpiar el formulario de ingreso de datos
}


function activarBoton(boton) {
    // Funcion para activar un boton de la pagina
    document.getElementById(boton).removeAttribute('disabled');
}


function desactivarBoton(boton) {
    // Funcion para desactivar un boton de la pagina
    document.getElementById(boton).setAttribute("disabled", "true");
}


// Ingreso de amigo al presionar Enter
document.getElementById("amigo").addEventListener("keypress", function(event) {
if (event.key === "Enter") {
    event.preventDefault();
    agregarAmigo();
    }
});