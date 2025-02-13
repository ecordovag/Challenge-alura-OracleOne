// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar 
// la lógica para resolver el problema.

// Lista inicial de amigos ingresados (vacía)
let amigos = [];
let resultadoSorteo = {};
let numerosSorteados =[];

const division = document.getElementById('mostrar-amigo');
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
    // Añade los amigos ingresados a la lista de participantes

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
    listarAmigos(amigos);

    // Limpiar la caja de ingreso de nombres
    limpiarCajaDeTexto();
}

function listarAmigos(listaAmigos){
    // Actualización de la lista de amigos ingresados
    lista.innerHTML = "Participantes:";

    // Mostrar en una lista los nombres de los amigos ingresados
    for (const participante of listaAmigos) {
        const elementoDeLista = document.createElement("li");
        elementoDeLista.textContent = participante;
        lista.append(elementoDeLista);
    }

}


function limpiarCajaDeTexto(){
    // Limpiar la caja del formulario
    document.getElementById("amigo").value="";
}


function sortearAmigo(){
    // Función que verifica que se cumplan las condiciones para realizar el sorteo.

    //lista.innerHTML = ""; // Vaciar la lista de amigos mostrada

    // Verificar que la lista amigos no este vacía.
    if (amigos.length===0){
        alert("¡Introduce los nombres de tus amigos para poder realizar el sorteo!");

    // Verificar que haya al menos 2 amigos en la lista para poder realizar el sorteo
    } else if (amigos.length === 1 || amigos.length === 2){
        alert("¡Para realizar el sorteo, necesitas ingresar al menos tres personas!");
        listarAmigos(amigos);
        limpiarCajaDeTexto();

     // Elegir un amigo al azar, mostrar el resultado, activar y desactivar botones
    } else {
        asignarAmigoSecreto();        
        
        resultado.innerHTML = "¡Sorteo realizado! Averigua quién es tu amigo secreto ";

        desactivarBoton("sortearAmigo"); // Desactivar botón "Sortear amigo"
        desactivarBoton("anadir"); // Desactivar botón "Añadir" 
        activarBoton("reiniciar"); // Activar botón "Nuevo Juego"
        
        setTimeout(mostrarResultados,1000);
    }
}


function asignarAmigoSecreto (){
    // Asigna un amigo secreto a cada participante
    for (let nombre of amigos) {
        let indiceSorteado = Math.floor(Math.random()*amigos.length);
        while (indiceSorteado === amigos.indexOf(nombre) || numerosSorteados.includes(indiceSorteado)) {
            indiceSorteado = Math.floor(Math.random()*amigos.length); // Sigue generando numeros al azar si es que ya salio o si es el mismo indice del amigo
        }
        numerosSorteados.push(indiceSorteado);
        resultadoSorteo[nombre] = amigos[indiceSorteado];
    }

    return resultadoSorteo;
    
}

function mostrarResultados() {
    let i=1;
    
    while (i<=amigos.length) {
        const nombreAmigo = prompt("Solo vas a poder ver tu amigo secreto una vez. Escribe tu nombre:");
        const amigoSecreto = resultadoSorteo[capitalizarNombre(nombreAmigo)];

        if (Object.keys(resultadoSorteo).includes(capitalizarNombre(nombreAmigo))) {
            alert(`Tu amigo secreto es ${amigoSecreto}`);
            delete resultadoSorteo[capitalizarNombre(nombreAmigo)];
            i++;
        } else if (Object.keys(resultadoSorteo).includes(capitalizarNombre(nombreAmigo)) === false && amigos.includes(capitalizarNombre(nombreAmigo))) {
            alert(`¡El amigo secreto de ${capitalizarNombre(nombreAmigo)} ya fue mostrado!`)

        } else {
            alert("No hemos encontrado tu nombre en la lista de participantes! Verifica que lo escribiste bien");
        }
        
    }

}


function reiniciarJuego(){
    // Funcion para restaurar los valores iniciales del juego
    
    lista.innerHTML = ""; // Vaciar la lista de amigos mostrada
    resultado.innerHTML = ""; // Vaciar el resultado del juego anterior
    
    amigos = []; // Reinicia la lista de amigos ingresados
    numerosSorteados = []; // Reinicia los índices sorteados
    resultadoSorteo = {}; // Borra los resultados del sorteo anterior

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
    const botonAnadir = document.getElementById("anadir");
    if (botonAnadir.disabled) { // Evita que se añadan amigos cuando el boton añadir está desactivado
        alert("¡No se pueden agregar amigos! Reinicia el juego.") 

    } else {
        event.preventDefault();
        agregarAmigo();
    }
    
    }
});