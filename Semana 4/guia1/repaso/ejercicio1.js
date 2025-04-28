let clickBoton = function() {
    let lista = document.getElementById("lista")
    let informacion = document.getElementById("label")
    let nuevoTexto = document.createElement("li")
    nuevoTexto.innerText = informacion.value
    lista.appendChild(nuevoTexto)
}

let clickMenu = function() {
    let lista = document.getElementById("lista")
    if (lista.style.display == "none") {
        lista.style.display = "block"
    } else {
        lista.style.display = "none"
    }
}


let main = function() {
    let boton = document.getElementById("boton")
    boton.addEventListener("click", clickBoton)

    let menu = document.getElementById("menu")
    menu.addEventListener("click", clickMenu)

}

main()