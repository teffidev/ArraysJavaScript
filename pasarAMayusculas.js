/*Dada la siguiente lista:
---Pasar a mayusculas todos los titulos de las mismas.*/

const peliculas = [
    "star wars",
    "totoro",
    "rocky",
    "pulp fiction",
    "la vida es bella"
];

const pelisAnimadas = [
    "toy story",
    "finding nemo",
    "kung-fu panda",
    "wally",
    "fortnite"
];

console.log("---Lista en minusculas---");
console.table(peliculas);
console.table(pelisAnimadas);

const nombrePeliculas = (peliculas) => {
    let arrayPelimayusculas = [];
    for (let i = 0; i < peliculas.length; i++) {
        /*arrayPelimayusculas.push(peliculas[i].toUpperCase());*/
        arrayPelimayusculas[i] = peliculas[i].toUpperCase();
    }
    return arrayPelimayusculas;
};

console.log("---Lista en mayusculas---");
nombrePeliculas(peliculas);
console.table(nombrePeliculas(peliculas));
console.table(nombrePeliculas(pelisAnimadas));

/*Eliminar el ultimo elemento.*/
let nuevoArrayMayusculas = [
    'STAR WARS',
    'TOTORO',
    'ROCKY',
    'PULP FICTION',
    'LA VIDA ES BELLA',
    'TOY STORY',
    'FINDING NEMO',
    'KUNG-FU PANDA',
    'WALLY',
    'FORTNITE'
];
console.log('----Eliminar el último elemento-----');
nuevoArrayMayusculas.pop()
console.table(nuevoArrayMayusculas);

