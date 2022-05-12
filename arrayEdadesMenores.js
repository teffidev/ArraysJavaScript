/*Observamos que es un array por su sintaxis que comienza y 
termina con corchetes [] y sus elementos tienen la sintaxis 
de objetos literales {} Entonces, podemos decir que tenemos 
una array de objetos literales, o una colección de objetos
literales*/
/*const arrayDeObjetosLiterales = 
[
    {},
    {},
    {},
    {}
];
*/

const edadesGrupo1 = [21, 12, 15, 18, 25];
const edadesGrupo2 = [2, 11, 54, 63, 24];

const arrayCuentas = [
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: "$3,253.40",
        edadTitular: 33,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: "$3,229.45",
        edadTitular: 27,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: "$1,360.19",
        edadTitular: 34,
        tipoCuenta: "corriente"
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: false,
        saldo: "$3,627.12",
        edadTitular: 30,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: "$1,616.52",
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: "$1,408.68",
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
]

//-- Obtener un nuevo array de cuentas cuyas edades sean menores a 30 --

let edadesMenores = (array) => {
    let nuevoArray = []
    for(let i = 0; i < array.length; i++){
        if(array[i].edadTitular < 30){
            nuevoArray.push(array[i].edadTitular)
        }
    }
    return nuevoArray
}
let resultado = edadesMenores(arrayCuentas)
console.log('---Las edades menores son:---');
console.log(resultado);