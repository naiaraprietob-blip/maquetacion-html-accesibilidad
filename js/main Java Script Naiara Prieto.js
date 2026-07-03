

let nombreEstudio = "Tattooed Eyess Ink Studio";
let tatuadora = "Naiara";
let ciudad = "Cáceres";
let anyosExperiencia = 3;
let estaAbierto = true;
let proximaCita = null;

console.log("Bienvenido a", nombreEstudio);
console.log("Tatuadora:", tatuadora);
console.log("Ciudad:", ciudad);
console.log("Años de experiencia:", anyosExperiencia);
console.log("¿Estudio abierto?", estaAbierto);
console.log("Próxima cita:", proximaCita);


let estilos = ["Fine Line", "Anime", "Blackwork", "Neotradicional"];

let horario = {
    lunesAViernes: "18:30 - 21:00",
    sabado: "10:00 - 13:00",
    domingo: "Cerrado"
};

console.log("Estilos disponibles:", estilos);
console.log("Horario del estudio:", horario);


for (let i = 0; i < estilos.length; i = i + 1) {
    console.log("Estilo " + (i + 1) + ": " + estilos[i]);
}


let saludar = function (nombre) {
    return "Hola, " + nombre + ". Bienvenido a Tattooed Eyess Ink Studio.";
};

console.log(saludar("visitante"));



let comprobarEdad = function (edad) {
    if (edad >= 18) {
        return "Mayor de edad. Puede reservar cita.";
    }
    return "Menor de edad. No se pueden hacer tatuajes.";
};

console.log(comprobarEdad(25));
console.log(comprobarEdad(15));



let calcularIVA = function (precio) {
    return precio * 1.21;
};

console.log("Un tatuaje de 100€ con IVA cuesta:", calcularIVA(100), "€");



let contarLetras = function (palabra) {
    return palabra.length;
};

console.log("El nombre 'Naiara' tiene", contarLetras("Naiara"), "letras");



let diasRestantes = 5;

while (diasRestantes > 0) {
    console.log("Faltan " + diasRestantes + " días para la próxima cita");
    diasRestantes = diasRestantes - 1;
}
console.log("¡Hoy es el día del tatuaje!");



let textarea = document.getElementById("mensaje");

textarea.oninput = function () {
    let cantidad = textarea.value.length;
    console.log("Caracteres escritos:", cantidad);
};



let esEmailValido = function (email) {
    if (email.indexOf("@") >= 0 && email.indexOf(".") >= 0) {
        return true;
    }
    return false;
};



let formulario = document.querySelector(".formulario");

formulario.onsubmit = function (evento) {
    evento.preventDefault();

    let nombreCliente = document.getElementById("nombre").value;
    let emailCliente = document.getElementById("email").value;


    if (nombreCliente.length === 0) {
        alert("Por favor, escribe tu nombre.");
        return;
    }


    if (esEmailValido(emailCliente) === false) {
        alert("El correo electrónico no es válido.");
        return;
    }


    let checkboxes = document.getElementsByName("tipo");
    let estilosElegidos = 0;

    for (let i = 0; i < checkboxes.length; i = i + 1) {
        if (checkboxes[i].checked === true) {
            estilosElegidos = estilosElegidos + 1;
        }
    }

    console.log("Cliente:", nombreCliente);
    console.log("Email:", emailCliente);
    console.log("Estilos seleccionados:", estilosElegidos);

    alert(saludar(nombreCliente) + "\nHe recibido tu reserva. Te contesto en menos de 48h.");
    formulario.reset();
};



let mostrarPersona = function (persona) {
    return persona.nombre + " tiene " + persona.edad + " años y trabaja en " + persona.ciudad;
};

let naiara = {
    nombre: "Naiara",
    edad: 25,
    ciudad: "Cáceres"
};

console.log(mostrarPersona(naiara));