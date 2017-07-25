/**
 * Created by danie on 7/1/2017.
 */
module.exports = {
    vistaOculta: function (req, res) {
        return res.view('Oculto/sorpresa');
    },
    homepage: function (req, res) {
        var params = req.allParams();
        sails.log.info('Parametros', params);
        if (!params.busqueda) {
            params.busqueda = '';
        }
        sails.log.info('Parametros', params);
        Usuario
            .find()
            .where({
            or: [
                {
                    nombre: {
                        contains: params.busqueda
                    }
                },
                {
                    apellidos: {
                        contains: params.busqueda
                    }
                }
            ]
        })
            .exec(function (err, usuarios) {
            if (err)
                return res.negotiate(err);
            return res.view('homepage', {
                usuarios: usuarios
            });
        });
    },
    crearUsuario: function (req, res) {
        res.view('crearUsuario');
    },
    editarUsuario: function (req, res) {
        var params = req.allParams();
        if (params.id) {
            Usuario.findOne({
                id: params.id
            })
                .exec(function (err, usuarioEncontrado) {
                if (err)
                    return res.serverError(err);
                if (usuarioEncontrado) {
                    return res.view('editarUsuario', { usuario: usuarioEncontrado });
                }
                else
                    res.redirect('/crearUsuario');
            });
        }
        else
            res.redirect('/crearUsuario');
    }
};
