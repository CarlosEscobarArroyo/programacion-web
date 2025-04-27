let butOnClick = function() {
    //Pintamos color peru en h1
    let h1 = document.getElementById("titulo")
    h1.setAttribute("class", "fondo_peru")

    //Agregar un texto al final
    let divContenido = document.getElementById("contenido")
    
    let divHijo = document.createElement("div")
    divHijo.innerText = "Este mensaje se genero por el boton"

    divContenido.appendChild(divHijo)
}

//boton_oke.onclick = butOnClick
let boton_oke = document.getElementById("boton_oke")
boton_oke.addEventListener("click", butOnClick)

