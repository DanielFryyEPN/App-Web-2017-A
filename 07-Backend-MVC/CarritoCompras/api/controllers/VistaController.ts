/**
 * Created by danie on 7/1/2017.
 */
module.exports = {
  vistaOculta:(req, res) => {
    return res.view('Oculto/sorpresa');
  },
  homepage: (req, res) => {
    let usuarioModelo = {
      nombres: 'Daniel',
      apellidos: 'Freire',
      id: 1
    };
    res.view('homepage', {
      usuario: usuarioModelo
    });
  },
  crearUsuario: (req, res) => {
    res.view('crearUsuario');
  }
};
