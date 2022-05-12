//A partir de el siguiente array de edades nos solicitan 
//realizar lo siguiente:
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

//-- Incrementar en uno todas las edades --

let incrementarEdades = (array) => {
    let edadesIncrementadas = []
    for(let i = 0; i < array.length; i++){
        edadesIncrementadas.push(array[i] + 1)
    }
    return edadesIncrementadas
}
let resIncremento = incrementarEdades(edades)
console.log("---Aquí las edades incrementadas: ----");
console.log(resIncremento);