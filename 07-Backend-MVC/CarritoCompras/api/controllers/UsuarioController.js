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
    }
};
