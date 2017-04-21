/**
 * Kid.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },
    family_id:{
      type: 'integer',
      autoIncrement: true
    },
    email:{
      type: 'string'
    },
    encryptedPassword:{
      type: 'string'
    },
    savings_balance:{
      type: 'float'
    },
    checking_balance:{
      type: 'float'
    }
  },

  beforeCreate: function(params, next) {
    bcrypt.hash(params.password, 10, function isEncrypted(err, encryptedPassword) {
      if (err) return next(err);

      params.encryptedPassword = encryptedPassword;

      next();
    });
  }
};
