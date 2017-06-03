/**
 * Created by danie on 6/3/2017.
 */

const fs = require('fs');

console.log('Empieza');

fs.readFile('text.txt', 'utf8', function(err, data) {
    if (err) throw err;
console.log(data);
});

console.log('Termina');