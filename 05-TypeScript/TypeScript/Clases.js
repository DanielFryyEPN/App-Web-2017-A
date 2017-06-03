/**
 * Created by danie on 6/3/2017.
 */
var usuario = (function () {
    function usuario(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    usuario.prototype.imprimirNombre = function (saludo, titulo) {
        return "\n        " + saludo + ", " + titulo + "\n        " + this.nombre + " " + this.apellido + "\n        ";
    };
    return usuario;
}());
var daniel = new usuario("Daniel", "Freie");
console.log(daniel.imprimirNombre("Hi", "Mr."));
