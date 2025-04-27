console.log("Hola Programación WEB")

// El tipo de datos de las variables se definen en base a lo que se asigno
let numero = 10 // Definimos variable númerica
var nombre = "Ignacio" // Esta es otra forma de definir una variable. En este caso, var es una forma antigua.  "let" proporciona un mejor manejo del alcance de las variables y ayuda a evitar algunos problemas comunes asociados con "var".
let esMayorEdad = true // Boolean
let edad = null
let peso = undefined

// Colecciones
let listaNumeros = [1,2,5]
let lista = [1, "Pepito"]

// Objetos
let alumno = {
    nombre : "Ignacio",
    edad : 24,
    hobbies : ["leer", "tocar guitarra"],
    matriculado : true,
    universidad : {
        nombre : "Universidad de Lima",
        direccion : "a"
    }

}

let sumar = function(a,b) {
    let res = a+b
    return res
}

const res = sumar(5,8)
console.log(res)