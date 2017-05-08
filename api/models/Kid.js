/**
 * Kid.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    email:{
      type: 'string',
      required: true
    },
    encryptedPassword:{
      type: 'string'
    },
    first_name: {
      type: 'string',
      required: true
    },
    last_name: {
      type: 'string',
      required: true
    },
    family: {
      model: 'family'
    },
    getSiblings: function() {
      var allKids = this.family.kids;

    	var myIndex = allKids.indexOf(this);
    	return kids.splice(myIndex, 1) || [];
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
