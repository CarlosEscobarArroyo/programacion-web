let botonClick = function() {
    let nombre = document.getElementById("nombre")
    let edad = document.getElementById("edad")

    if (nombre.value == "" || edad.value == "") {
        console.error("Debe ingresar todos los datos")
        return
    }

    console.log("Se guardo con exito!")
}

let main = function() {
    let boton = document.getElementById("boton")
    boton.addEventListener("click", botonClick)
}

main()