let sumar = function() {
    let numero1 = document.getElementById("numero1")
    let numero2 = document.getElementById("numero2")
    let casillaResultado = document.getElementById("resultado")
    let resultado = parseFloat(numero1.value) + parseFloat(numero2.value)
    casillaResultado.value = resultado

}
let restar = function() {
    let numero1 = document.getElementById("numero1")
    let numero2 = document.getElementById("numero2")
    let casillaResultado = document.getElementById("resultado")
    let resultado = parseFloat(numero1.value) - parseFloat(numero2.value)
    casillaResultado.value = resultado

}

let multplicar = function() {
    let numero1 = document.getElementById("numero1")
    let numero2 = document.getElementById("numero2")
    let casillaResultado = document.getElementById("resultado")
    let resultado = parseFloat(numero1.value) * parseFloat(numero2.value)
    casillaResultado.value = resultado

}

let division = function() {
    let numero1 = document.getElementById("numero1")
    let numero2 = document.getElementById("numero2")
    let casillaResultado = document.getElementById("resultado")
    let resultado = parseFloat(numero1.value)/parseFloat(numero2.value)
    casillaResultado.value = resultado
}


let main = function() {
    let botonSumar = document.getElementById("suma")
    botonSumar.addEventListener("click", sumar)
    let botonRestar = document.getElementById("resta")
    botonRestar.addEventListener("click", restar)
    let botonMultiplicar = document.getElementById("multiplicacion")
    botonMultiplicar.addEventListener("click", multplicar)
    let botonDivision = document.getElementById("division")
    botonDivision.addEventListener("click", division)

}   

main()