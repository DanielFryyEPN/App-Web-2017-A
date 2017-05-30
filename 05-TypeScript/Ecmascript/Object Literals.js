/**
 * Created by danie on 5/29/2017.
 */
function multiplicarX2(x, y) {
    var resultado = {
        x: x,
        y: y
    };
    resultado.x = resultado.x * 2;
    resultado.y = resultado.y * 2;
    return resultado;
}
console.log(multiplicarX2(4, 5));
