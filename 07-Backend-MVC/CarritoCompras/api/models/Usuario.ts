/**
 * Created by danie on 6/26/2017.
 */
module.exports = {
  attributes: {
    nombres: {
      type: 'string'
    },
    apellidos: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    emailAddress: {
      type: 'string',
      unique: true
    },
    fechaNacimiento: {
      type: 'date'
    },
    matriculas: {
      collection: 'matricula',
      via: 'fkIdUsuario'
    }
  }
};
