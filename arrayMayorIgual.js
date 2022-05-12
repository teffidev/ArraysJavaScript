//A partir de el siguiente array de edades nos solicitan 
//realizar lo siguiente:
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];


//-- Obtener en un nuevo array las edades mayor o igual a 18.--

let edadesMayorIgual = (mayores) => {
    let nuevoMayorIgual = []
    for(let i = 0; i < mayores.length; i++){
        if(mayores[i] >= 18){
            nuevoMayorIgual.push(mayores[i])
        }
    }
    return nuevoMayorIgual
}
let mayorIgual = edadesMayorIgual(edades)
console.log("--- Mayor o Igual a 18: ----");
console.log(mayorIgual);