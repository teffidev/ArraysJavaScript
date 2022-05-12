//A partir de el siguiente array de edades nos solicitan 
//realizar lo siguiente:
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

//-- Obtener en un nuevo array las edades igual a 18.--

let edadesIguales = (iguales) => {
    let nuevoIguales = []
    for(let i = 0; i < iguales.length; i++){
        if(iguales[i] === 18){
            nuevoIguales.push(iguales[i])
        }
    }
    return nuevoIguales
}
let iguales = edadesIguales(edades)
console.log("--- Edades Iguales a 18: ----");
console.log(iguales);