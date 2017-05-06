/**
 * TransactionController
 */

module.exports = {

	new: function (req, res) {

		if (req.session.Adult) {
			Adult.findOne({id:req.session.Adult.id}).exec( function(err,adult) {
				res.view('transactions/new', {
					recipientOptions: adult.getKids(),
					myBalance: adult.checking_balance,
					isKid: false
				});
			});
		};

		if (req.session.Kid) {
			Kid.findOne({id:req.session.Kid.id}).exec(function(err,kid) {
				var parents = kid.family.parents;
				var siblings = kid.getSiblings();

				res.view('transactions/new', {
					recipientOptions: parents.concat(siblings),
					myBalance: kid.checking_balance,
					isKid: true
				});
			});
		};
  },

  create: function (req, res) {

		Transaction.create(req.params.all(), function created(err,transaction) {
			if (err) console.error;

			Adult.findOne({email: req.param('recipient_email')})
				.exec(function(err,adult) {
				if (err) console.error;

				adult.checking_balance += req.param('amount');

				res.redirect('/transactions/'+transaction.id);
			});
		});

  },

  show: function (req, res, next) {
		Transaction.findOne(req.param('id'), function found(err,transaction) {
			if (err) return next(err);
			res.view('transactions/show', {
				to: transaction.recipient_email,
				from: transaction.sender_email,
				amount: transaction.amount
			});
		});
  }

};
