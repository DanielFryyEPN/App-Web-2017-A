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
    }
};
