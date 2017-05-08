/**
 * AdultController
 */

var bankAPI = require('axios').create({
	baseURL: sails.config.bankApi.baseURL
});

module.exports = {

  home: function(req, res, next) {
    Family.findOne({ email: req.session.Adult.email })
      .populate('kids')
      .exec(function(err,family) {
        
      })
    // get all kids of adult
    // show balances for each kid
    // show recent transactions for each kid
    res.view('adults/homepage', {

    });
  },

  edit: function (req, res) {
    var adult = Adult.findOne({id: req.params.id });

    res.view('adults/edit');
  },

  update: function(req, res) {
    var adult = Adult.findOne({id: req.params.id });

  }

};
