/**
 * Created by danie on 6/3/2017.
 */
//FIND
let arreglo = [
    {
        nombre: "Daniel",
        apellido: 'Freire',
        id: 1
    },
    {
        nombre: "Enrique",
        apellido: 'Gonzalez',
        id: 2
    },
    {
        nombre: "Daniel",
        apellido: 'Fernandez',
        id: 3
    }
];

arreglo.find((value) => {
   return value.apellido == "Freire"
});