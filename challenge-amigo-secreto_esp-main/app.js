// Array para almacenar los amigos ingresados
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim(); // Obtener el valor del input y eliminar espacios innecesarios

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return; // No hacer nada si el campo está vacío
    }

    // Agregar el nombre a la lista de amigos
    amigos.push(nombre);
    inputAmigo.value = "";  // Limpiar el campo de texto después de agregar el nombre
    actualizarLista();  // Actualizar la lista de amigos en la UI
}

// Función para actualizar la lista de amigos en la página
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';  // Limpiar la lista antes de agregar los nuevos nombres

    // Crear una lista de amigos
    amigos.forEach((nombre) => {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);  // Agregar cada amigo a la lista
    });
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Primero agrega algunos amigos a la lista.");
        return; // No hacer nada si la lista está vacía
    }

    // Seleccionar un amigo aleatorio de la lista
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoSecreto);  // Mostrar el resultado en la página
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';  // Limpiar el resultado anterior

    // Crear un elemento li para mostrar el resultado
    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigo}`;
    resultado.appendChild(li);  // Agregar el resultado al contenedor de resultados
}

// Asignar eventos a los botones
document.querySelector('.button-add').addEventListener('click', agregarAmigo);
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);