// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
let listaAmigos = [];

function agregarAmigo() {
    // Obtener el valor del input
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar nombre a la lista
    listaAmigos.push(nombre);

    // Limpiar el input
    input.value = "";

    // Actualizar la lista en la interfaz
    mostrarLista();
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    listaAmigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un nombre antes de realizar el sorteo.");
        return;
    }

    // Seleccionar un nombre aleatorio
    const indice = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indice];

    // Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
