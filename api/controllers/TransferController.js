/**
 * TransferController
 */

var bankAPI = require('axios').create({
	baseURL: sails.config.bankApi.baseURL
});

module.exports = {

	new: function (req, res, next) {
    var email, fullName;

		if (req.session.Adult) {
			email = req.session.Adult.email;
			fullName = req.session.Adult.first_name+' '+req.session.Adult.last_name;
		} else if (req.session.Kid) {
			email = req.session.Kid.email;
			fullName = req.session.Kid.first_name+' '+req.session.Kid.last_name;
		};

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

					res.view('Transfer/new', {
						myAccount: myAccount,
						kids: kids
					});
				})
				.catch(function(err){
					console.log(err);
					if (err.code === 'ECONNREFUSED') {
						res.view('Transfer/notActivated');
					} else {
						next(err)
					}
				});

			})
			.catch(function(err) {return next(err)});

  },

  create: function (req, res, next) {
    var from = {}, to = {};

    if (req.session.Adult) {
			from.email = req.session.Adult.email;
			from.name = req.session.Adult.first_name+' '+req.session.Adult.last_name;
		} else if (req.session.Kid) {
			from.email = req.session.Kid.email;
			from.name = req.session.Kid.first_name+' '+req.session.Kid.last_name;
		};

		to.email = from.email; // family member has same email
		from.type = req.body.fromType;
		var amount = req.body.amount;

		var nameAndtype = req.body.to.split(',');
		to.name = nameAndtype[0];
		to.type = nameAndtype[1];

    bankAPI.post('/transaction/transfer', {
	    from: from,
	    to: to,
			amount: amount
	})
	.then(function (response) {
	// DO SOMETHING WITH RESPONSE
		res.redirect('/');
	})
	.catch(function(err) { return next(err) });

  }

};
