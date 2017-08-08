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
  },
  AnadirUsuarioCarrito: (req, res) => {
    let params = req.allParams();
    if(params.id) {
      let cookies = req.cookies;
      if(cookies.arregloUsuarios) {
        let arregloUsuarios = cookies.arregloUsuarios.idsUsuarios;
        let existeUsuario = arregloUsuarios.find(idUsuario => {
          return idUsuario == params.id;
        });
        if(existeUsuario) {
          return res.redirect('/');
        } else {
          arregloUsuarios.push(params.id);
          return res.redirect('/');
        }
      } else {
        let arregloUsuarios = [];
        arregloUsuarios.push(params.id);
        res.cookies('arregloUsuarios', {
          idsUsuarios: params.id
        });
        return res.redirect('/');
      }
    } else {
      return res.badRequest('No envia parametros');
    }
  }
};
