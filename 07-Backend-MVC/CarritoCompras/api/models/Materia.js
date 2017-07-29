/**
 * Materia.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true
    },
    codigoMateria: {
      type: 'string',
      unique: true,
      required: true
    },
    horasPorSemana: {
      type: 'integer',
      required: true
    },
    estato: {
      type: 'string',
      enum: ['Activo', 'Inactivo'],
      dafaultsTo: 'Activo'
    },
    materiasMatriculas: {
      collection: 'materiamatricula',
      via: 'fkIdMateria'
    }
  }
};

