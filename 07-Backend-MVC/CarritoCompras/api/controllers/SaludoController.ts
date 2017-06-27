/**
 * Created by danie on 6/19/2017.
 */
declare let module;
declare let sails;
declare let Usuario;
module.exports = {
  welcome: (req, res) => {
    // POST
    if(req.method == "POST")
      return res.json({saludo: "Hello"});
    else
      return res.send("Error");
  },
  bienvenido: (req, res) => {
    //PUT
    if(req.method == "PUT")
      return res.json({saludo: "Hello"});
    else
      return res.send("Error");
  },
  crearUsuarioQuemado: (req, res) => {
    let parametros = req.allParams();
    let nuevoUsuario = {
      nombre: parametros.nombre,
      apellidos: parametros.apellidos,
      password: parametros.password,
      emailAddress: parametros.emailAddress,
      fechaNacimiento: parametros.fechaNacimiento
    };

    /*let nuevoUsuario = {
      nombre: 'Daniel',
      apellidos: 'Freire',
      password: '1234',
      emailAddress: '1@1.com',
      fechaNacimiento: new Date()
    };*/

    Usuario.create(nuevoUsuario).exec((err, usuarioCreado) => {
      if(err)
        return res.serverError(err);
      else
        return res.ok(usuarioCreado);
    });
  }
};
