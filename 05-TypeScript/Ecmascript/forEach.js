/**
 * Created by danie on 5/29/2017.
 */
var arregloNumeros = [1, 2, 3, 4, 5];
var resultado = arregloNumeros.forEach(function (valor, indice, arreglo) {
    console.log("El valor es: " + valor);
    console.log("El indice es: " + indice);
    console.log("el arreglo es: " + arreglo);
});
console.log("Resultado es igual a: ", resultado);
