let num : number = 10
const nombre : string = "Ignacio"
let esMayorEdad = true

//nombre = "Pepito" Como nombre es const, no podemos cambiarlo

const tupla : [string, boolean] = ["Ignacio", true]
//const nombre2 = tupla[0]
//const nombre2 = tupla[1]
const [nombre2, esMayorEdad2] = tupla //pattern matching

export const multiplicar = (x : number, y : number) => {
    const res = x * y
    return res
}

const resp = multiplicar(10, 5)

//Lo que esta luego de los :, es el tipo de la funcion. Lo que viene después del igual es lo que se asigna
export const dividir : (x : number, y : number) => number | null = (x : number, y : number) => {
    if(y == 0) {
        return null
    }
    const res  = x / y
    return res
}

type FuncionCalculadora = (x: number, y:number) => number | null
const dividir2 : FuncionCalculadora = (x : number, y : number) => {
    if(y == 0) {
        return null
    }
    const res  = x / y
    return res
}

const res = multiplicar(10, 5)
const res2 : number | null = dividir(10,5)

interface Alumno {
    codigo : string,
    nombre : string,
    ciclo : number,
    esTrica : boolean
}

const alumnoUlima : Alumno = {
    codigo : "20224307",
    nombre : "Carlos",
    ciclo : 7,
    esTrica : false
}

export default tupla
