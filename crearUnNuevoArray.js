/*A partir de el siguiente array de edades nos solicitan 
realizar lo siguiente:*/

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

/*Obtener en un nuevo array las edades menores a 18*/
let edadesMenores = (menores) => {
    let nuevoMenores = []
    for(let i = 0; i < menores.length; i++){
        if(menores[i] < 18){
            nuevoMenores.push(menores[i])
        }
    }
    return nuevoMenores
}
let nuevoArr = edadesMenores(edades)
console.log("--- Resolución Punto a): ----");
console.log(nuevoArr);


/*Obtener en un nuevo array las edades mayor o igual a 18*/

let edadesMayorIgual = (mayores) => {
    let nuevoMayores = []
    for(let i = 0; i < mayores.length; i++){
        if(mayores[i] >= 18){
            nuevoMayores.push(mayores[i])
        }
    }
    return nuevoMayores
}
let mayorIgual = edadesMayorIgual(edades)
console.log("--- Resolución Punto b): ----");
console.log(mayorIgual);


/*Obtener en un nuevo array las edades igual a 18*/

let edadesIguales = (iguales) => {
    let nuevoIguales = []
    for(let i = 0; i < iguales.length; i++){
        if(iguales[i] === 18){
            nuevoIguales.push(iguales[i])
        }
    }
    return nuevoIguales
}
let iguales = edadesIguales(edades)
console.log("--- Resolución Punto c): ----");
console.log(iguales);