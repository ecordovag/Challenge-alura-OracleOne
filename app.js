// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar 
// la lógica para resolver el problema.

// Lista inicial de amigos ingresados (vacía)
let amigos = [];

const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function capitalizacionNombre(texto){
    // Función para homogeneizar los nombres ingresados por el usuario

    // Conversión a minúsculas del input
    const textoMinusculas = texto.toLowerCase();
    // Conversion de input a lista y eliminar espacios adicionales.
    const listaTexto = textoMinusculas.split(" ").filter(Boolean);
    // Conversión de la primera letra de cada palabra a mayúscula
    for (let i=0; i<listaTexto.length; i++) {
        listaTexto[i] = listaTexto[i][0].toUpperCase() + listaTexto[i].substr(1);
    }
    return listaTexto.join(" ");
}

function agregarAmigo(){
    const amigo = document.getElementById("amigo").value;

    // Homogenización de la escritura del input del usuario usando la función capitalizaciónNombre
    const amigoSinEspacios = capitalizacionNombre(amigo);

    // Validacion de presencia de solo letras en el nombre ingresado
    let tieneNumero = /\d/.test(amigoSinEspacios);

    // Verificación de que se haya ingresado un nombre valido.
    if (amigoSinEspacios === "") {
        limpiarCaja();
        return alert("Por favor, inserte un nombre válido"); 
    }
    
    // Validación de que el nombre no tenga números
    if (tieneNumero) {
        limpiarCaja();
        return alert("Por favor, inserte un nombre que no contenga números");
    }

    // Verificacion de que no se ingresen nombres repetidos. Detecta diferencias entre mayúsculas y minúsculas. 
    if (amigos.includes(amigoSinEspacios)) {
        limpiarCaja();
        return alert("No puedes repetir el mismo nombre");   
    } 

    // Adición del nombre ingresado a la lista amigos
    amigos.push(amigoSinEspacios); 
    
    // Mostrar los nombres ingresados
    listarAmigos();

    // Limpiar la caja de ingreso de nombres
    limpiarCaja();
}

function listarAmigos(){
    // Actualización de la lista de amigos ingresados
    lista.innerHTML = "";

    // Mostrar en una lista los nombres de los amigos ingresados
    for (const amigo of amigos) {
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        lista.append(listItem);
    }
}


function limpiarCaja(){
    // Limpiar la caja del formulario
    document.getElementById("amigo").value="";
}


function sortearAmigo(){
    // Vaciar la lista de amigos mostrada
    lista.innerHTML = "";

    // Verificar que la lista amigos no este vacía.
    if (amigos.length===0){
        alert("¡Introduce los nombres de tus amigos para poder realizar el sorteo!");

    // Verificar que haya al menos 2 amigos en la lista para poder realizar el sorteo
    } else if (amigos.length === 1){
        alert("¡Para realizar el sorteo, necesitas ingresar al menos dos amigos!");
        lista.innerHTML = amigos;
        limpiarCaja();

     // Elegir un amigo al azar y mostrar el resultado
    } else {
       const indiceSorteado = Math.floor(Math.random()*amigos.length);
       const amigoSorteado = amigos[indiceSorteado];
       resultado.innerHTML = `Tu amigo secreto es ${amigoSorteado}`;
    }
    
    if (amigos.length >=2){
         // Desactivar botón "Sortear amigo"
        document.getElementById("sortearAmigo").setAttribute("disabled", "true");
        // Desactivar botón "Añadir"
        document.getElementById("anadir").setAttribute("disabled", "true");
        // Activar botón "Nuevo Juego"
        document.getElementById("reiniciar").removeAttribute('disabled');
    }
}


function reiniciarJuego(){
    // Vaciar el resultado del juego anterior
    resultado.innerHTML = "";

    // Actualización de la lista de amigos ingresados
    amigos = [];

    // Activar botón "Añadir"
    document.getElementById("anadir").removeAttribute('disabled');
    // Activar botón "Sortear amigo"
    document.getElementById("sortearAmigo").removeAttribute('disabled');
    // Desactivar botón "Nuevo juego"
    document.getElementById("reiniciar").setAttribute("disabled", "true");

    // Limpiar el formulario de ingreso de datos
    limpiarCaja();
}

// Enter para ingresar datos