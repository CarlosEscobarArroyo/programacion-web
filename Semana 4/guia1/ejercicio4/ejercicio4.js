let clickBoton = function() {
    let parrafo = document.getElementById("parrafo")
    parrafo.innerText = "Texto Modificado"
}

let main = function() {
    let boton = document.getElementById("boton")
    boton.addEventListener("click", clickBoton)
}

main()