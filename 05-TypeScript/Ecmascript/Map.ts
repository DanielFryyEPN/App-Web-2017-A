/**
 * Created by danie on 5/29/2017.
 */
let arreglo = [4, 6, 7, 4, 5, 8, 10, 4, 7];
//devuelve un arreglo, cambia el arreglo
let resultado = arreglo.map((valor, indice, arreglo) => {
   return valor*2/10;
});

console.log(resultado);