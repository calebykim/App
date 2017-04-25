/**
 * FamilyController
 *
 * @description :: Server-side logic for managing families
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  new: function(req,res) {
    res.view('families/new');
  },

  create: function (req, res) {
    
  },

  show: function (req, res) {

  },

  edit: function (req, res) {
    Family.findOne({id: req.params['']})

  },

  update: function(req, res) {

  }

};
