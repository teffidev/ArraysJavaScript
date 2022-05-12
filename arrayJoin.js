/*crear una función llamada join() que reciba un 
arreglo de strings de 4 elementos y simule el 
comportamiento del método Array.join().*/

const arrayJoin1 = ['h', 'o', 'l', 'a']
const arrayJoin2 = ['c', 'h', 'a', 'u']

const join = array => {
    let joined = []
    for (let i = 0; i < array.length; i++) {
        joined = joined + array[i]   
    }
    return joined
}
console.log(join(arrayJoin1));
console.log(join(arrayJoin2));