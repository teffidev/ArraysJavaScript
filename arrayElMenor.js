//A partir de el siguiente array de edades nos solicitan 
//realizar lo siguiente:
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

//a)--Obtener en un nuevo array las edades menores a 18.--

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
console.log("--- Los menores de 18: ----");
console.log(nuevoArr);

//--obtener el menor.

let elMenor = (array) => {
    let minimo = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] < minimo){
            minimo = array[i]
        }            
    }
    return minimo
}
let resElMenor= elMenor(edades)
console.log("--- El menor es: ----");
console.log(resElMenor);