/*Crear una función que compare las calificaciones
e indique si son iguales o diferentes.*/

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]

const comparacion = (asiaScores, euroScores) => {
    let resultado = []
    for (let i = 0; i < asiaScores.length; i++) {
        let valorAsia = asiaScores[i]
        let valorEuro = euroScores[i]
        resultado[i] = valorAsia === valorEuro ? 'iguales' : 'diferentes'
    }
    return resultado
}
console.table(comparacion(asiaScores, euroScores));