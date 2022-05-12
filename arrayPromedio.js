//A partir de el siguiente array de edades nos solicitan 
//realizar lo siguiente:
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];


//-- Obtener el promedio de edades:--

let promedioEdades = (array) => {
    let totalSuma = 0
    for(let i = 0; i < array.length; i++){
        totalSuma += array[i]
    }
    let promedio = totalSuma / array.length
    return promedio
}
let resPromedio = promedioEdades(edades)
console.log("--- El promedio de edades es: ----");
console.log(resPromedio);