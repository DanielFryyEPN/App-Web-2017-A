/**
 * Created by danie on 6/3/2017.
 */
//FILTER
var arreglo = [
    {
        nombre: "Daniel",
        apellido: 'Freire',
        nota: 10,
        id: 1
    },
    {
        nombre: "Enrique",
        apellido: 'Gonzalez',
        nota: 6,
        id: 2
    },
    {
        nombre: "Daniel",
        apellido: 'Fernandez',
        nota: 8,
        id: 3
    },
    {
        nombre: "Danilo",
        apellido: 'Nieto',
        nota: 6.5,
        id: 4
    },
    {
        nombre: "Felipe",
        apellido: 'Pinto',
        nota: 9,
        id: 5
    }
];
var r = arreglo.filter(function (valor, indice, arreglo) {
    return valor.nota < 7;
});
console.log(r);
