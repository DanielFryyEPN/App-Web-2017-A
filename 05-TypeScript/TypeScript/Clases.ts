/**
 * Created by danie on 6/3/2017.
 */
class usuario {

    constructor(public nombre: string, private apellido?: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    imprimirNombre(saludo: string, titulo?: string): string{
        return `
        ${saludo}, ${titulo}
        ${this.nombre} ${this.apellido}
        `;
    }
}

let daniel: usuario = new usuario("Daniel", "Freie");

console.log(daniel.imprimirNombre("Hi", "Mr."));