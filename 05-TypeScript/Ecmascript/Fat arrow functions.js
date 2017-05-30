/**
 * Created by danie on 5/29/2017.
 */
function holaMundo() {
    console.log("Hola mundo");
}
;
var holaMundo2 = function () {
    console.log("Hola mundo");
};
var holaMundo3 = function () {
    console.log("Hola mundo");
};
//undefined - VOID
var holaMundo4 = function () { return console.log("Hola mundo"); };
var holaMundo5 = function () {
    return 5;
};
var holaMundo6 = function () { return 6; };
var holaMundo7 = function () {
    var a = 5;
    return a + 3;
};
//cuando se tiene solo un parametro se pueden emitir los parentesis
var saludar = function (nombre) { return "Hola " + nombre; };
var saludarConApellido = function (nombre, apellido) { return "Hola " + nombre + " " + apellido; };
console.log(saludarConApellido("Daniel", "Freire"));
