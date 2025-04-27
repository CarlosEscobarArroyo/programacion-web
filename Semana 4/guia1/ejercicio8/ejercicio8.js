let clickBoton = function() {
    let parrafo = document.getElementById("parrafo")
    if (parrafo.style.display == "none") {
        parrafo.style.display = "block"
    } else {
        parrafo.style.display = "none"
    }
}

let main = function() {
    let boton = document.getElementById("boton")
    boton.addEventListener("click", clickBoton)
}

main()