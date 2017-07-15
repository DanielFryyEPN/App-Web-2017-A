/**
 * Created by danie on 7/1/2017.
 */
module.exports = {
    vistaOculta: function (req, res) {
        return res.view('Oculto/sorpresa');
    },
    homepage: function (req, res) {
        var usuarioModelo = {
            nombres: 'Daniel',
            apellidos: 'Freire',
            id: 1
        };
        res.view('homepage', {
            usuario: usuarioModelo
        });
    },
    crearUsuario: function (req, res) {
        res.view('crearUsuario');
    }
};
