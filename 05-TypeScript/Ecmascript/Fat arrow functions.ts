/**
 * Created by danie on 5/29/2017.
 */
function holaMundo(){
    console.log("Hola mundo");
};

let holaMundo2 = function () {
    console.log("Hola mundo");
};

let holaMundo3 = () => {
    console.log("Hola mundo");
};
//undefined - VOID
let holaMundo4 = () => console.log("Hola mundo");

let holaMundo5 = function () {
    return 5;
};

let holaMundo6 = () => 6;

let holaMundo7 = () => {
    let a = 5;
    return a + 3;
};

//cuando se tiene solo un parametro se pueden emitir los parentesis
let saludar = nombre => "Hola " + nombre;

let saludarConApellido = (nombre, apellido) => `Hola ${nombre} ${apellido}`;

console.log(saludarConApellido("Daniel", "Freire"));