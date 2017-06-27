module.exports = {
    welcome: function (req, res) {
        // POST
        if (req.method == "POST")
            return res.json({ saludo: "Hello" });
        else
            return res.send("Error");
    },
    bienvenido: function (req, res) {
        //PUT
        if (req.method == "PUT")
            return res.json({ saludo: "Hello" });
        else
            return res.send("Error");
    },
    crearUsuarioQuemado: function (req, res) {
        var parametros = req.allParams();
        var nuevoUsuario = {
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
        Usuario.create(nuevoUsuario).exec(function (err, usuarioCreado) {
            if (err)
                return res.serverError(err);
            else
                return res.ok(usuarioCreado);
        });
    }
};
