/**
 * KidController
 *
 * @description :: Server-side logic for managing kids
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  show: function (req, res) {
    var kid = Kid.findOne({id: req.params.id });

    res.view('kids/show');
  },

  edit: function (req, res) {
    var kid = Kid.findOne({id: req.params.id });

    res.view('kids/edit');
  },

  update: function(req, res) {
    var kid = Kid.findOne({id: req.params.id });

  },

  destroy: function(req, res) {

  }

};
