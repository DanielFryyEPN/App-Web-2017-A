/**
 * MateriaMatricula.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    notaPrimerBimestre: {
      type: 'float'
    },
    notaSegundoBimestre: {
      type: 'float'
    },
    notaSupletorio: {
      type: 'float'
    },
    estado: {
      type: 'string',
      enum: ['Estudiando', 'Jalado', 'Exonerado', 'Supletorio'],
      defaultsTo: 'Estudiando'
    },
    fkIdMatricula: {
      model: 'matricula',
      required: true
    },
    fkIdMateria: {
      model: 'materia',
      required: true
    }
  }
};

