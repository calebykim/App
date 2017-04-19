/**
 * Transactions.js
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
    amount:{
      type: 'float'
    },
    sender_id:{
      type: 'integer'
    },
    recipient_id:{
      type: 'integer'
    },
    created_at:{
      type: 'datetime'
    }
  }
};

