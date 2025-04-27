let botonEnviarOnClick = function() {
    let nombre = document.getElementById("nombre")
    let correo = document.getElementById("correo")
    let mensaje = document.getElementById("mensaje")

    //Verificar que todas las casillas tengan valores
    if (nombre.value == "" || correo.value == "" || mensaje.value == ""){
        console.error("Debe ingresar todos los campos")
        return
    }

    //Verificar que el formato del correo sea el correcto (@ y .)
    if (!correo.value.includes("@") || !correo.value.includes(".")) {
        console.error("Error en el formato de email.")
        return
    }

    //Enviar mensaje que se envio correctamente
    console.log("Se envio correctamente")
}
let main = function() {
    console.log("Bienvenido al documento")
    let boton_enviar = document.getElementById("boton_enviar")
    boton_enviar.addEventListener("click", botonEnviarOnClick)
}

main()