/**
 * AdultController
 */

var bankAPI = require('axios').create({
	baseURL: sails.config.bankApi.baseURL
});

module.exports = {

  home: function(req, res, next) {
    var email = req.session.Adult.email,
        fullName = req.session.Adult.first_name+' '+req.session.Adult.last_name;

		Family.findOne({email:email})
			.populate('kids')
			.then(function(family){

				bankAPI.get('/account/balances', {
					params: {
						email: email
					}
				})
				.then(function(response) {
					var kids = [], myAccount = {};

					response.data.forEach(function(account) {
						if (account.holderName == fullName) {
							myAccount = account
						} else {
							kids.push(account)
						}
					});

					res.view('adults/homepage', {
						myAccount: myAccount,
						kids: kids
					});
				})
				.catch(function(err){
					console.log(err);
					res.redirect('adults/homepage');
				});

			})
			.catch(function(err) {return next(err)});

  },

  edit: function (req, res) {
    var adult = Adult.findOne({id: req.params.id });

    res.view('adults/edit');
  },

  update: function(req, res) {
    var adult = Adult.findOne({id: req.params.id });

  }

};
