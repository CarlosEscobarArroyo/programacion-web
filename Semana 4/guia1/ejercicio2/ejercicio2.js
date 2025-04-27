console.log("Bienvenido")
let botonClick = function() {
    let contenido = document.getElementById("contenido")
    let divHijo = document.createElement("div.card")
    divHijo.innerText = "El boton se presiono"
    contenido.appendChild(divHijo)

    let tarjeta = document.createElement("div.card")
}


let main = function() {
    let boton_generador = document.getElementById("boton_generador")
    boton_generador.addEventListener("click", botonClick)
}

main()