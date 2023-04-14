// Función para realizar la encriptación y desencriptación
function encriptaDesencriptar() {
    var textoIntroducido = document.getElementById("textoEntrada").value;
    var opcion = document.querySelector('input[name="option"]:checked').value;
    var textoSalida = "";

    if (opcion === "encryptar") {
        textoSalida = encryptarTexto(textoIntroducido);
    } else if (opcion === "desencriptar") {
        textoSalida = desencriptarTexto(textoIntroducido);
    }

    document.getElementById("salidaTexto").value = textoSalida;
}

// Función para encriptar el texto
function encryptarTexto(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
}

// Función para copiar el texto al portapapel
function copiarAlPortapapel() {
    var salidaTexto1 = document.getElementById("salidaTexto");
    salidaTexto1.select();
    salidaTexto1.setSelectionRange(0, 99999); /* Para dispositivos móviles */
    document.execCommand("copy");
    alert("Texto copiado al portapapeles: " + salidaTexto1.value);
}
// Función para limpiar Textarea.
function limpiarAreaTexto(){
    var textoEntrada = document.getElementById("textoEntrada")
    textoEntrada.value = ""

    var salidaTexto = document.getElementById("salidaTexto")
    salidaTexto.value=""
}