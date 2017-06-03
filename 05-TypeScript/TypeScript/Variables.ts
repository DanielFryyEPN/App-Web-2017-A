/**
 * Created by danie on 6/3/2017.
 */
//nombreVariable: tipoVariable
let numero: number = 2;
let verdad: boolean = true;
let fullName: string = 'Bob Bobbington';
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

interface UsuarioInt {
    nombre: string,
    apellido: string,
    nota?: number,
    id: number
}

let daniel: UsuarioInt = {
    nombre: 'Daniel',
    apellido: 'Freire',
    nota: 10,
    id: 1
};

var juego = {};
juego = 2;
juego = "string";

let juego = 2;
//juego = "Nombre" => error
//juego = {} => error

let juego:any = 2;
juego = "Nombre";
juego = {};

const amigo = "Amigo";
const numero = 2;