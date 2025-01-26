// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar 
// la lógica para resolver el problema.

// Lista inicial de amigos ingresados (vacía)
let amigos = [];
// Seleccion del objeto de lista de amigos
let lista = document.getElementById("listaAmigos");

let resultado = document.getElementById("resultado");

function agregarAmigo(){
    
    // Seleccion del valor ingresado en la página
    let amigo = document.getElementById("amigo").value;
    // Eliminación de los espacios al inicio y al final del nombre ingresado por el usuario
    amigoSinEspacios = amigo.trim();
    // Verificación de que se haya ingresado el nombre de un amigo y 
    // adicion del nombre ingresado a la lista amigos.
    if (amigoSinEspacios == "") {
        return alert("Por favor, inserte un nombre");
    } else {
        amigos.push(amigoSinEspacios); 
    }

    listarAmigos();
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
    // Elegir un amigo al azar y mostrar el resultado
    } else {
       let indiceSorteado = Math.floor(Math.random()*amigos.length);
       let amigoSorteado = amigos[indiceSorteado];
       resultado.innerHTML = `Tu amigo secreto es ${amigoSorteado}`;
    }
}
