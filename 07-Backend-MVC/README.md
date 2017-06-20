#Ejemplo de uso Framework Sails js
##Instalacion
Comando para instalar sails:
```
$ npm install -g sails
```
[Documentacion de instalacion](http://sailsjs.com/get-started)
##Crear nueva aplicacion
Archivo de la aplicacion
```
$ sails new aplicacion
```
"aplicacion" es el nombre de la carpeta que va a contener los archivos de sails
##Levantar el sails
Cambiarse a la carpeta del proyecto y escribir: 
```
$ sails lift
```
```
$ node app.js 
```
Para levantarlo en un puerto diferente se usa:
```
sails lift --port puerto
```
##Comando para crear Controladores
Comando para crear controladores
```
$ sails generate controller Saludo
```