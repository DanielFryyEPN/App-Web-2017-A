/**
 * Created by danie on 6/5/2017.
 */

let Passwords = require('machinepack-passwords');

exports.calculadoraUdla = {
    sumar: (x, y) => {
        return x + y;
    },
    restar: (x, y) => {
        return x - y;
    },
    multiplicar: (x, y) => {
        return x*y;
    },
    passwords: Passwords
};