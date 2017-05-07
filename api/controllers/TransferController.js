/**
 * TransferController
 */

var bankAPI = require('axios').create({
	baseURL: sails.config.bankApi.baseURL
});

module.exports = {

	new: function (req, res, next) {
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
			res.view('Transfer/new', {
				balances: response.data
			});
		})
		.catch(function(err){next(err)});
  },

  create: function (req, res, next) {
    var fromEmail,
        toEmail = req.body.to,
        amount = req.body.amount;

    if (req.session.Adult) {
			fromEmail = req.session.Adult.email;
		} else if (req.session.Kid) {
			fromEmail = req.session.Kid.email;
		};

    bankAPI.post('/transaction/transfer', {
	    from: fromEmail,
	    to: toEmail,
			amount: amount
	  })
		  .then(function (response) {
				// DO SOMETHING WITH RESPONSE
		    console.log(response.data);

				res.redirect('/');
		  })
		  .catch(function(err) { return next(err) });

  }

};
