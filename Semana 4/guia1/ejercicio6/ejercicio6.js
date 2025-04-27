let clickBoton = function() {
    let lista_desordenada = document.getElementById("lista_desordenada")
    let elemento = document.createElement("li")
    elemento.innerText = "Nuevo Elemento"
    lista_desordenada.appendChild(elemento)
}

let main = function() {
    let boton = document.getElementById("boton")
    boton.addEventListener("click", clickBoton)
}

main()