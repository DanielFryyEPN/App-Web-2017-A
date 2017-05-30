/**
 * Created by danie on 5/29/2017.
 */
var arreglo = [2, 8, 9, 6, 7, 10, 10, 6, 9];
//devuelve un arreglo, cambia el arreglo
var resultado = arreglo.map(function (valor, indice, arreglo) {
    return valor * 2 / 10;
});
//AND
var resultado2 = arreglo.every(function (valor, indice, arreglo) {
    return (valor >= 7);
});
//OR
var resultado3 = arreglo.some(function (valor, indice, arreglo) {
    return (valor < 4);
});
var resultado4 = arreglo.map(function (valor, indice, arreglo) {
    return valor * 2 / 10;
}).some(function (valor) {
    return valor <= 0.2;
});
console.log(resultado4);
