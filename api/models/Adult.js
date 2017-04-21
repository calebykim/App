/**
 * Adult.js
 */

var bcrypt = require('bcrypt');

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
      type: 'string',
      unique: true
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
    if (params['password'] == params['password_confirmation']) {
      bcrypt.hash(params.password, 10, function isEncrypted(err, encryptedPassword) {
        if (err) return next(err);

        params.encryptedPassword = encryptedPassword;

        next();
      });
    }
  }
};
