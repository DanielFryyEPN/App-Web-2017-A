module.exports = {
  eliminarUsuario: (req, res) => {
    let params = req.allParams();
    if(req.method == 'POST' && params.id) {
      Usuario.destroy({id: params.id})
        .exec((err, usuarioBorrado) => {
        if(err) return res.serverError(err);
        return res.redirect('/');
      });
    } else {
      return res.badRequest();
    }
  },
  editarUsuario: (req, res) => {
    let params = req.allParams();
    if (params.id && params.nombre && params.apellidos && params.emailAddress) {
      Usuario.update({id: params.id}, {nombre: params.nombre, apellidos: params.apellidos, correo: params.emailAddress})
        .exec((err, usuarioEditado) => {
        if(err) return res.serverError(err);
        if(usuarioEditado)
          return res.redirect('/');
        else
          return res.notFound();
        });
    } else
      return res.badRequest();
  }
};
