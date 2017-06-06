/**
 * Created by danie on 6/3/2017.
 */
// require es como para importar el paquete llamado fs
const fs = require('fs');

console.log('Empieza');

// 1 - Nombre y ruta del archivo
// 2 - Codificacion
// 3 - Anonimous Function (error!, contenido del archivo)
fs.readFile('text.txt', 'utf8', function(err, data) {
    if (err) throw err;
console.log(data);
});

console.log('Termina');

/*
 // npm install twj-a-freire@1.0.2 la version no es necesaria
 const calculadora = require('twj-a-freire');

 let a = 2, b = 3, resultado;

 resultado = calculadora.calculadoraUdla.sumar(a, b);

 console.log(`Resultado es: ${resultado}`);

 calculadora.calculadoraUdla.passwords.encryptPassword({password: 1234})
 .exec({
 error: (err) => {console.log(`Error: ${err}`);
 },
 success: (resultado) => {console.log(`Resultado: ${resultado}`);}
 });
 */