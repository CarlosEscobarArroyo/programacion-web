console.log("Bienvenido")

const productos = [
    { nombre: "Camisa Azul", descripcion: "Camisa de algodón suave, ideal para el verano.", precio: "$30" },
    { nombre: "Zapatos Running", descripcion: "Zapatos ligeros para correr largas distancias.", precio: "$70" },
    { nombre: "Mochila Explorer", descripcion: "Mochila resistente al agua con múltiples compartimentos.", precio: "$50" }
  ];
//Lo utilizamos para iterar 3 veces
let i = 0

let botonClick = function() {
    //Identificamos el div contenido donde pondremos las tarjetas
    let contenido = document.getElementById("contenido")
    //Creacion de la tarjeta
    let card = document.createElement("div")
    card.className = "card col-md-4"
    //Creacion del body de la tarjeta que ira dentro de la tarjeta
    let cardbody = document.createElement("div")
    cardbody.className = "card-body"
    //Creacion del titulo, descripcion y precio que ira dentro del body de la tarjeta
    let cardtitle = document.createElement("h5")
    cardtitle.className = "card-title"
    cardtitle.innerText = productos[i].nombre

    let descripcion = document.createElement("p")
    descripcion.className = "card-text"
    descripcion.innerText = productos[i].descripcion

    let precio = document.createElement("p")    
    precio.className = "card-text"
    precio.innerText = productos[i].precio

    //Agregamos como hijos del body, al titulo, descripcion y precio
    cardbody.appendChild(cardtitle)
    cardbody.appendChild(descripcion)
    cardbody.appendChild(precio)
    //Agregamos como hijo de la tarjeta, al body
    card.appendChild(cardbody)
    //Agregamos como hijo del div contenido, a la tarjeta
    contenido.appendChild(card)

    //Lo aumentamos para pasar al siguiente producto
    i++
}

//Es la funcion main. Aqui identificamos al boton y hacemos que cuando se haga click, se active la funcion botonClick
let main = function() {
    let boton_generador = document.getElementById("boton_generador")
    boton_generador.addEventListener("click", botonClick)
}

main()