/*Crear una función llamada "propiedadUnica", que reciba
un arreglo de objetos como parámetro y un string.
Esta deberá retornar un nuevo arreglo de objetos, 
teniendo como parámetro la propiedad que fue pasada como string.
Ejemplo:
propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]*/

const array = [
    {
        nombre: 'Lean',
        edad: 27
    },
    {
        nombre: 'Eze',
        edad: 49
    }
]

let propiedadUnica = (arr, str) => {
    let resultado = []

    for (let i = 0; i < arr.length; i++) {
        let objeto = {
            [str]: arr[i][str]
        };
        resultado.push(objeto)        
    }
    return resultado
}
let objetoCambiadoEdad = propiedadUnica(array, 'edad')
let objetoCambiadoNombre = propiedadUnica(array, 'nombre')
console.log(objetoCambiadoEdad);
console.log(objetoCambiadoNombre);