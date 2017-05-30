/**
 * Created by danie on 5/29/2017.
 */
//ECMASCRIPT
//var a = 1;
let a = 1;

let html = "<h1>HOLA</h1>" + "<p>Hola amigos</p>" + "<img src = 'algunUrl'>" + "<a href='google'>Ir a google</a>";

let nombreUsuario = "Daniel Freire";

let htmlConTemplateStrings = `
<h1>asdasd</h1>
<p>${nombreUsuario}</p>
<ul>
<li>dafa</li>
<li>gfdg</li>
<li>gfdga</li>
<li>hdjf</li>
</ul>
`;

console.log(htmlConTemplateStrings);