/**
 * DepositController
 */

var bankAPI = require('axios').create({
	baseURL: sails.config.bankApi.baseURL
});

module.exports = {

	new: function(req, res, next) {
		var email;

		if (req.session.Adult) {
			email = req.session.Adult.email;
		} else if (req.session.Kid) {
			email = req.session.Kid.email;
		};

		bankAPI.get('/account/balances', {
			params: {
				email: email
			}
		})
		.then(function(response) {
			res.view('Deposit/new', {
				balances: response.data
			});
		})
		.catch(function(err){next(err)});
	},

	create: function(req, res, next) {
		var email,
				amount = parseFloat(req.body.amount),
				description = req.body.description || '';

		if (req.session.Adult) {
			email = req.session.Adult.email;
		} else if (req.session.Kid) {
			email = req.session.Kid.email;
		};

		bankAPI.post('/transaction/deposit', {
	    email: email,
	    amount: amount,
			description: description
	  })
		  .then(function (response) {
				// DO SOMETHING WITH RESPONSE
		    console.log(response);

				res.redirect('/');
		  })
		  .catch(function(err) { return next(err) });
	}

};
