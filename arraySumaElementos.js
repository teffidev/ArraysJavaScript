/* crear una función sumaArray() que acepte un 
arreglo de números (3 elementos) y devuelva 
la suma de todos ellos.*/

const array1 = [1, 2, 3]
const array2 = [10, 3, 10] 
const array3 = [-5, 100, 19]

const sumarArray = array => {
    let mostrarSuma = 0
    for (let i = 0; i < array.length; i++) {
        mostrarSuma = mostrarSuma + array[i]   
    }
    return mostrarSuma
}

console.log(sumarArray(array1));
console.log(sumarArray(array2));
console.log(sumarArray(array3));