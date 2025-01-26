// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar 
// la lógica para resolver el problema.

// Lista inicial de amigos ingresados (vacía)
let amigos = [];

let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;

    // Eliminación de los espacios al inicio y al final del nombre ingresado.
    let amigoSinEspacios = amigo.trim();

    // Verificación de que se haya ingresado un nombre valido.
    if (amigoSinEspacios == "") {
        return alert("Por favor, inserte un nombre válido");

    // Verificacion de que no se ingresen nombres repetidos. Detecta diferencias entre mayúsculas y minúsculas.
    } else if (amigos.includes(amigoSinEspacios.toLowerCase()) == true) {
        limpiarCaja();
        return alert("No puedes repetir el mismo nombre");

    // Adición del nombre ingresado a la lista amigos
    } else  {
        amigos.push(amigoSinEspacios.toLowerCase()); 
    }

    // Mostrar los nombres ingresados
    listarAmigos();

    // Limpiar la caja de ingreso de nombres
    limpiarCaja();
}

function listarAmigos(){
    // Actualización de la lista de amigos ingresados
    lista.innerHTML = "";

    // Mostrar en una lista los nombres de los amigos ingresados
    for (i=0; i<=amigos.length; i++){
        lista.append(Object.assign(document.createElement("li"),{textContent: amigos[i]}));
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
    if (amigos.length==0){
        alert("¡Introduce los nombres de tus amigos para poder realizar el sorteo!");

    // Verificar que haya al menos 2 amigos en la lista para poder realizar el sorteo
    } else if (amigos.length == 1){
        alert("¡Para realizar el sorteo, necesitas ingresar al menos dos amigos!");
        lista.innerHTML = amigos;
        limpiarCaja();

     // Elegir un amigo al azar y mostrar el resultado
    } else {
       let indiceSorteado = Math.floor(Math.random()*amigos.length);
       let amigoSorteado = amigos[indiceSorteado];
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
