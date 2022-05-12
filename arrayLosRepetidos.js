/*Escribir una función que reciba una array y solo imprima 
los valores que se repiten.*/

const arrayRepetidos = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]
let nuevoRepetidos = []
let numRepetidos = []  

let repetidos = (array) => {      
    for(let i = 0; i < array.length; i++){
        if(nuevoRepetidos.includes(array[i])){
            numRepetidos.push(array[i])
        }else{
            nuevoRepetidos.push(array[i])
        }
    }
    return numRepetidos
}
console.log('Numeros duplicados=', repetidos(arrayRepetidos));

//OTRA FORM CON DOBLE FOR=

let arrayNros = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
let duplicados = [];

let nrosDuplicados = (array) => {

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++)
            if (array[j] === array[i]) {
                duplicados.push(array[i]);
            }
    }
    return duplicados;
}
console.log('----Otra forma----');
console.log('Numeros duplicados', nrosDuplicados(arrayNros));