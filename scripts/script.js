/*Calculadora de Materiales*/
function calcularMateriales() {
    var espesor = parseInt(document.getElementById("espesor").value);
    var largo = parseInt(document.getElementById("largo").value);
    var alto = parseInt(document.getElementById("alto").value);
    var superficie = largo * alto;
    var cemento, arena, ladrillos;

    if (espesor === 30) {
        cemento = superficie * 15.2;
        arena = superficie * 0.115;
        ladrillos = superficie * 120;
    } else if (espesor === 20) {
        cemento = superficie * 10.9;
        arena = superficie * 0.09;
        ladrillos = superficie * 90;
    } else {
        alert("Espesor inválido. Por favor, ingrese 20 o 30 cm.");
        return;
    }

    var resultado = document.getElementById("resultadoMateriales");
    resultado.innerHTML = "Superficie del muro: " + superficie + " m²<br>"
        + "Cantidad de cemento: " + cemento.toFixed(2) + " kg<br>"
        + "Cantidad de arena: " + arena.toFixed(3) + " m³<br>"
        + "Cantidad de ladrillos: " + ladrillos.toFixed(0);
}

// Función para calcular los materiales necesarios para una viga
function calcularViga() {
    var largo1 = parseInt(document.getElementById("largo1").value);
  
    var cemento = largo1 * 9;
    var arena = largo1 * 0.02;
    var piedra = largo1 * 0.02;
    var hierro8 = largo1 * 4;
    var hierro4 = largo1 * 3;

    var resultado1 = document.getElementById("resultadoMateriales1");
    resultado1.innerHTML = "Cantidad de materiales necesarios para la viga:\n" +
    "- Cemento: " + cemento.toFixed(2) + " kg\n" + "- Arena: " + arena.toFixed(2) +
    " m³\n" + "- Piedra: " + piedra.toFixed(2) + " m²\n" + "- Hierro del 8: " +
    hierro8.toFixed(2) + " metros\n" + "- Hierro del 4: " + hierro4.toFixed(2) +
    " metros";
} 

// Función para calcular los materiales necesarios para una columna
function calcularColumna() {
    var largo2 = document.getElementById("largo2").value;

    var cemento = largo2 * 7.5;
    var arena = largo2 * 0.016;
    var piedra = largo2 * 0.016;
    var hierro10 = largo2 * 6;
    var hierro4 = largo2 * 3;
    
    var resultado2 = document.getElementById("resultadoMateriales2");
    resultado2.innerHTML = "Cantidad de materiales necesarios para la columna:\n" +
    "- Cemento: " + cemento.toFixed(2) + " kg\n" + "- Arena: " + arena.toFixed(2) +
    " m³\n" + "- Piedra: " + piedra.toFixed(2) + " m²\n" + "- Hierro del 10: " +
    hierro10.toFixed(2) + " metros\n" + "- Hierro del 4: " + hierro4.toFixed(2) +
    " metros";
}

// Función para calcular los materiales necesarios para un contrapiso
function calcularContrapiso() {
    var espesor1 = document.getElementById("espesor1").value;
    var ancho = document.getElementById("ancho").value;
    var largo3 = document.getElementById("largo3").value;
  
    var volumen = espesor1 * ancho * largo3;
    var cemento = volumen * 1.05;
    var arena = volumen * 0.45;
    var piedra = volumen * 0.9;

    var resultado3 = document.getElementById("resultadoMateriales3");
    resultado3.innerHTML = "Cantidad de materiales necesarios para el contrapiso:\n" +
    "- Cemento: " + cemento.toFixed(2) + " kg\n" + "- Arena: " + arena.toFixed(2) +
    " m³\n" + "- Piedra: " + piedra.toFixed(2) + " m³";
} 

// Función para calcular los materiales necesarios para un techo
function calcularTecho() {
    var espesor2 = document.getElementById("espesor2").value;
    var ancho1 = document.getElementById("ancho1").value;
    var largo4 = document.getElementById("largo4").value;
  
    var superficie = ancho1 * largo4;
    var cemento = superficie * 33;
    var arena = superficie * 0.072;
    var piedra = superficie * 0.072;
    var hierro8 = superficie * 7;
    var hierro6 = superficie * 4;
    
    var resultado4 = document.getElementById("resultadoMateriales4");
    resultado4.innerHTML = "Cantidad de materiales necesarios para el techo:\n" +
    "- Cemento: " + cemento.toFixed(2) + " kg\n" + "- Arena: " + arena.toFixed(2) +
    " m³\n" + "- Piedra: " + piedra.toFixed(2) + " m³\n" + "- Hierro del 8: " +
    hierro8.toFixed(2) + " metros\n" + "- Hierro del 6: " + hierro6.toFixed(2) +
    " metros";
}
//Funcion para Fotmlario de contacto
function enviarDatos(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    // Aquí se puede realizar alguna acción con los datos del formulario, como enviarlos a un servidor
    alert("Datos enviados:\nNombre: " + nombre + "\nEmail: " + email + "\nMensaje: " + mensaje);
    document.getElementById("formularioContacto").reset();
}
