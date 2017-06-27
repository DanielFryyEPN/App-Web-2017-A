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
        var nuevoUsuario = {
            nombre: 'Daniel',
            apellidos: 'Freire',
            password: '1234',
            emailAddress: '1@1.com',
            fechaNacimiento: new Date()
        };
        Usuario.create(nuevoUsuario).exec(function (err, usuarioCreado) {
            if (err)
                return res.serverError(err);
            else
                return res.ok(usuarioCreado);
        });
    }
};
