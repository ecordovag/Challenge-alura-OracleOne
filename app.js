// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar 
// la lógica para resolver el problema.

let amigos = [];
let lista = document.getElementById("listaAmigos");

function agregarAmigo(){
    
    // Obtención del valor ingresado en la página
    let amigo = document.getElementById("amigo").value;

    // Verificación de que se haya ingresado el nombre de un amigo y 
    // agregamos el nombre ingresado a la lista amigos.
    if (amigo == "") {
        return alert("Por favor, inserte un nombre");
    } else {
        amigos.push(amigo); 
    }

    listarAmigos();
    limpiarCaja();
}

function listarAmigos(){
    // Actualización de la lista de amigos ingresados
    lista.innerHTML = "";
    // Mostrar los nombres de los amigos ingresados en la página
    for (i=0; i<=amigos.length; i++){
        lista.append(Object.assign(document.createElement("li"),{textContent: amigos[i]}));
    }
}


function limpiarCaja(){
    // Limpiar la caja del formulario
    document.getElementById("amigo").value="";
}


function sortearAmigo(){
    // Verificar que la lista amigos no este vacía y sortear un amigo.
    if (amigos==[]){
        alert("Introduce los nombres de tus amigos para poder realizar el sorteo!")
    } else {
       let indiceSorteado = Math.floor(Math.random()*amigos.length);
       amigoSorteado = amigos[indiceSorteado];
       lista.innerHTML = `Tu amigo secreto es ${amigoSorteado}`;
    }
}
