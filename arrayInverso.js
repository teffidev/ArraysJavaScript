/*Crear una función que devuelva un array con
sus elementos invertidos, sin modificarlo.*/

const array = [9, 3, 8, 2, 7, 1]

const imprimirInverso = array => {
    let inverso = []
    for (let i = 0; i < array.length; i++) {
        inverso[i] = array[i]        
    }
    return inverso
}
console.log('------Array dado--------');
console.log(imprimirInverso(array));
console.log('------Array invertido--------');
console.log(imprimirInverso(array).reverse());


//OTRA FORMA

const numero = [1, 2, 3, 6, 5, 4]

console.log('----Array dado----');
console.log(numero.toString());

let invertirNumero = (n) => {
    let nuevoInvertido = []
    for(let i = 0; i < n.length; i++){
        nuevoInvertido.unshift(n[i])
    }
    return nuevoInvertido.toString()
}
console.log('----Numero Invertido----');
console.log(invertirNumero(numero));


//OTRA FORMA=

const numero2 = [1, 2, 3, 6, 5, 4]

console.log('----Array dado----');
console.log(numero.toString());

let invertirNumero2 = (n) => {
    for(let i = 0; i < n.length; i++){
        
    }
    return n.toString(n.reverse())
}
console.log('----Numero Invertido----');
console.log(invertirNumero2(numero2));