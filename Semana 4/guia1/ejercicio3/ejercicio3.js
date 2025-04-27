let i = 0

let clickBoton = function() {
    let contador = document.getElementById("contador")
    i++
    contador.innerText = i
    if (i >= 10) {
        contador.style.color = "red "
    }
}


let main = function() {
    let boton = document.getElementById("boton")
    boton.addEventListener("click", clickBoton)
}

main()