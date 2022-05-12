//ALGORITMOS:
/*Crear una funcipon que encuentre el mayor y el menor de un array*/

const numeros = [56, 12, 15, 48, 1, 32, 3, 7, 19];

//---- Encontrar el NUMERO MAYOR de un array -----

let numMayorArray = (x) => {

    let numMayor = x[0]
    for(let i = 0; i < x.length; i++){
        if(x[i] > numMayor){
            numMayor = x[i]
        }        
    }
    return numMayor
}
// numMayorArray(numeros)
// console.log(numMayorArray(numeros));

//---- Encontrar el NUMERO MENOR de un array -----

let numMenorArray = (y) => {

    let numMenor = y[0]
    for(let i = 0; i < y.length; i++){
        if(y[i] < numMenor){
            numMenor = y[i]
        }
    }
    return numMenor
}
// numMenorArray(numeros)
// console.log(numMenorArray(numeros));

//-----En una misma función encontrar el minimo y el maximo numero---

let numMenorYmayor = (z) => {
    let numMax = z[0]
    let numMin = z[0]

    for(let i = 0; i < z.length; i++){
        if(z[i] > numMax){
            numMax = z[i]
        }else if (z[i] < numMin){
            numMin = z[i]
        }
    }
    console.log(numMax);
    console.log(numMin);
}
numMenorYmayor(numeros)


//--- Crear un nuevo Array con el NUMERO MAYOR y el NUMERO MENOR -----

let arrayNuevoNumMaxMin = (arr) => {
    let numMax = arr[0]
    let numMin = arr[0]
    let arrayMaxMin = []

    for(let i = 0; i < arr.length; i++){
        numMax < arr[i] ? numMax = arr[i] : numMin > arr[i] ? numMin = arr[i] : numMax

        // if(arr[i] > numMax){
        //     numMax = arr[i]
        // }else if (arr[i] < numMin){
        //     numMin = arr[i]
        // }
    }
    arrayMaxMin.push(numMax, numMin)
    return arrayMaxMin
}
let arrMaxMin = arrayNuevoNumMaxMin(numeros)
console.log(arrMaxMin);



// let mayorDeUnArreglo = (arr) => {
//     let mayor = arr[0];
//     let menor = arr[0];
//     let minMax = [];

//     for (let i = 0; i < arr.length; i++) {
//         // mayor < arr[i] ? mayor = arr[i] : menor > arr[i] ?  menor = arr[i] : menor
//         if (mayor < arr[i]) {
//             mayor = arr[i];
//         }else if (menor > arr[i]) {
//             menor = arr[i];
//         }
//     }
//     minMax.push(mayor, menor)
//     return minMax
// };
// mayorDeUnArreglo(numeros)

// let numerosMaxyMin = mayorDeUnArreglo(numeros)
// console.log( numerosMaxyMin )