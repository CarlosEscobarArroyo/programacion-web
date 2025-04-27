let botonClick = function() {
    let parrafo = document.getElementById("parrafo")
    parrafo.style.backgroundColor = "red"
}

let main = function() {
    let boton = document.getElementById("boton")
    boton.addEventListener("click", botonClick)
}

main()