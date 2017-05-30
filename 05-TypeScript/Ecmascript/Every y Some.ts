/**
 * Created by danie on 5/29/2017.
 */
let arreglo = [2, 8, 9, 6, 7, 10, 10, 6, 9];
//devuelve un arreglo, cambia el arreglo
let resultado = arreglo.map((valor, indice, arreglo) => {
    return valor*2/10;
});

//AND
let resultado2 = arreglo.every((valor, indice, arreglo) => {
    return (valor >= 7);
});

//OR
let resultado3 = arreglo.some((valor, indice, arreglo) => {
    return (valor < 4);
});

let resultado4 = arreglo.map((valor, indice, arreglo) => {
    return valor*2/10;
}).some((valor) => {
    return valor <= 0.2;
});

console.log(resultado4);