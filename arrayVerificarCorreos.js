/*A partir de un array de correos, recorrerlo para corroborar si son validos.
Para ello por le momento debemos buscar el caracter "@" en cada elemento
y agregar aquellos que lo tengan al array de correos admitidos.
En caso de no encontrar el caracter, se debera agregar al array
de correos descartados.
--Desarrollar una función que realice la verificación de cada elemento
del array dado de correos pendientes.
Cuando sean verificados agregar al array de correosAdmitidos o en caso
contrario agregar al array de correosDescartados.
(Vaciar el array de correos pendientes)-
---Mostrar por pantalla la cantidad y los elementos de cada array--- */

//LISTA DE CORREOS PENDIENTES:

let correosPendientes = [
    "ironman@digitalhouse.com",
    "loki%digitalhouse.com",
    "loki@digitalhouse.com",
    "thanosdigitalhouse.com",
    "thanos@digitalhouse.com"
];

//ARRAY CORREOS ADMITIDOS:

let correosAdmitidos = [
    "thor@digitalhouse.com",
    "tucuMan@digitalhouse.com",
    "wanda@digitalhouse.com"
];

//ARRAY CORREOS DESCARTADOS:

let correosDescartados = [

];

console.log("pendientes", correosPendientes);
console.log("admitidos", correosAdmitidos);
console.log("descartados", correosDescartados);

/*DEBEMOS HACER VARIAS COSAS:
1. Con un metodo de String, validar si tiene un "@" o no= includes()
2. Despues con un if puedo preguntar (Si esto es true, entonces haz esto
    o si esto es false, haz esto)
3. Ademas de esto, debo usar otro metodo, el cual es unicamente de ARRAYS, 
que es el metodo push()= empujar - agregar cosas a un arreglo.
---Ejemplo=
let numeros = [2, 5]
numeros.push(17)
console.log(numeros)*/

/*Esta es la logica que se usa, cuando solo usamos if, pero es muy tedioso
y complejo manejarlo así=*/

// let verificarCorreo = (email) => {
//     if(email.includes("@")){
//         correosAdmitidos.push(email) 
//     }else{
//         correosDescartados.push(email)
//     }
// };


// verificarCorreo(verificarCorreo[0]);
// verificarCorreo(verificarCorreo[1]);
// verificarCorreo(verificarCorreo[2]);
// verificarCorreo(verificarCorreo[3]);
// verificarCorreo(verificarCorreo[4]);

// console.log('-----------------');

// correosPendientes = []

// console.log("pendientes", correosPendientes);
// console.log("admitidos", correosAdmitidos);
// console.log("descartados", correosDescartados);

/*Para verificar que tipo de dato tiene una variable*/
// console.log(typeof correosPendientes[2]);

/*Vamos a usar la misma logica con un metodo for, donde me va a ayudar
a encontrar la solución sin tener que dar tantas vueltas: */

// let verificarCorreo = (email) => {
//     if(email.includes("@")){
//         correosAdmitidos.push(email) 
//     }else{
//         correosDescartados.push(email)
//     }
// };

// for(let i = 0; i < correosPendientes.length; i++){

//     verificarCorreo(correosPendientes[i])

// }

// console.log('-----------------');

// correosPendientes = []

// console.log("pendientes", correosPendientes);
// console.log("admitidos", correosAdmitidos);
// console.log("descartados", correosDescartados);

/*PEROOO!!!
Lo ideal seria usar una función que me haga todo junto, que lo recorra
y al mismo tiempo agregue a uno u otro...*/

/*Vamos a hacerlo todo de nuevo, pero con una función que haga todo!!! */

let verificarCorreo = (array) => {

    for(let i = 0; i < array.length; i++){
        if(array[i].includes("@")){
            correosAdmitidos.push(array[i])
        }else{
            correosDescartados.push(array[i])
        }
    }
};
verificarCorreo(correosPendientes)

console.log('-----------------');

correosPendientes = []

console.log("pendientes", correosPendientes);
console.log("admitidos", correosAdmitidos);
console.log("descartados", correosDescartados);

