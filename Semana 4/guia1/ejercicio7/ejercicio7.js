let botonClick = function() {
    let lista = document.getElementById("lista")
    if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
    }
}

let main = function() {
    let boton = document.getElementById("boton")
    boton.addEventListener("click", botonClick)
}

main()