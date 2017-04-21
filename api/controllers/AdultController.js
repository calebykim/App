/**
 * AdultController
 *
 * @description :: Server-side logic for managing adults
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  show: function (req, res) {
    var adult = Adult.findOne({id: req.params.id });

    res.view('adults/show');
  },

  edit: function (req, res) {
    var adult = Adult.findOne({id: req.params.id });

    res.view('adults/edit');
  },

  update: function(req, res) {
    var adult = Adult.findOne({id: req.params.id });

  },

  destroy: function(req, res) {

  }

};
