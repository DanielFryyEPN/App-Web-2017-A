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
  }
};
