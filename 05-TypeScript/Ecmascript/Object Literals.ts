/**
 * Created by danie on 5/29/2017.
 */
//se puede omitir el nombre de los atributos al crear el objeto
function multiplicarX2(x, y) {
    let resultado = {
        x,
        y
    };
    resultado.x = resultado.x*2;
    resultado.y = resultado.y*2;
    return resultado;
}

console.log(multiplicarX2(4,5));