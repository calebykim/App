/**
 * Transaction.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    amount:{
      type: 'float'
    },
    sender_email:{
      type: 'string'
    },
    recipient_email:{
      type: 'string'
    },
    created_at:{
      type: 'datetime'
    }
  }
};
