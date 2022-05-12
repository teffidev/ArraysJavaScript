//A partir del siguiente array de edades nos solicitan 
//realizar lo siguiente:
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

//-- Obtener el mayor.

let elMayor = (array) => {
    let maximo = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] > maximo){
            maximo = array[i]
        }
    }
    return maximo
}
let resMayor = elMayor(edades)
console.log("--- El mayor es: ----");
console.log(resMayor);