module.exports = {
    eliminarUsuario: function (req, res) {
        var params = req.allParams();
        if (req.method == 'POST' && params.id) {
            Usuario.destroy({ id: params.id })
                .exec(function (err, usuarioBorrado) {
                if (err)
                    return res.serverError(err);
                return res.redirect('/');
            });
        }
        else {
            return res.badRequest();
        }
    },
    editarUsuario: function (req, res) {
        var params = req.allParams();
        if (params.id && params.nombre && params.apellidos && params.emailAddress) {
            Usuario.update({ id: params.id }, { nombre: params.nombre, apellidos: params.apellidos, correo: params.emailAddress })
                .exec(function (err, usuarioEditado) {
                if (err)
                    return res.serverError(err);
                if (usuarioEditado)
                    return res.redirect('/');
                else
                    return res.notFound();
            });
        }
        else
            return res.badRequest();
    },
    AnadirUsuarioCarrito: function (req, res) {
        var params = req.allParams();
        if (params.id) {
            var cookies = req.cookies;
            if (cookies.arregloUsuarios) {
                var arregloUsuarios = cookies.arregloUsuarios.idsUsuarios;
                var existeUsuario = arregloUsuarios.find(function (idUsuario) {
                    return idUsuario == params.id;
                });
                if (existeUsuario) {
                    return res.redirect('/');
                }
                else {
                    arregloUsuarios.push(params.id);
                    return res.redirect('/');
                }
            }
            else {
                var arregloUsuarios = [];
                arregloUsuarios.push(params.id);
                res.cookies('arregloUsuarios', {
                    idsUsuarios: params.id
                });
                return res.redirect('/');
            }
        }
        else {
            return res.badRequest('No envia parametros');
        }
    }
};
