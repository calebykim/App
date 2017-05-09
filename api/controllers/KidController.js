/**
 * KidController
 */

var bankAPI = require('axios').create({
	baseURL: sails.config.bankApi.baseURL
});

module.exports = {

  home: function(req, res, next) {
    Kid.findOne({id:req.session.Kid.id})
      .populate('family')
      .then(function(kid){
        bankAPI.get('/account/transactions', {
          params: {
            email: kid.email,
            holderName: kid.fullName()
          }
        })
          .then(function(response) {
            res.view('kids/homepage', {
              transactions: response.data.transactions,
              transfers: response.data.transfers
            });
          })
          .catch(function(err) {

          })

      })
      .catch(function(err){next(err)});
  },

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

  }

};
