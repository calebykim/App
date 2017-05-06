/**
 * AuthController
 */

var validator = require('validator');
var bcrypt = require('bcrypt');

module.exports = {

	// Auth for Adults //

	adultSignup: function (req, res, next) {
		Adult.create( req.params.all(), function adultCreated(err, adult) {
			if (err) return next(err);

			req.session.authenticated = true;
			req.session.Adult = adult;

			Family.create({name: adult.last_name}, function familyCreated(err, family) {
				if (err) return next(err);
				family.adults.add(adult);
				family.save(function(err){});
			});
			
			res.redirect('/');
		});
	},

	adultLogin: function (req, res, next) {
		var reqEmail = req.param('email');
		var reqPassword = req.param('password');
		var emailValidated = validator.isEmail(reqEmail);

		if (emailValidated && reqPassword) {
			Adult.findOne({email: reqEmail}, function(err, adult) {

				bcrypt.compare(reqPassword, adult.encryptedPassword, function(err, isMatch) {
		      if (err) console.error;

					if (isMatch) {
						req.session.authenticated = true;
						req.session.Adult = adult;
						res.redirect('/adultHome');
					} else {
						res.redirect('/adultLogin');
					};
		    });
			});
		};
	},

	adultLogout: function (req, res) {
		req.session.destroy(function(err) {
    	return res.redirect('/');
    });
	},

	// Auth for Kids //

	kidSignup: function (req, res, next) {
		Kid.create(req.params.all(), function kidCreated(err, kid) {
			if (err) return next(err);

			req.session.authenticated = true;
			req.session.Kid = kid;
			res.redirect('/kidHome');
		});
	},

	kidLogin: function (req, res, next) {
		var reqEmail = req.param('email');
		var reqPassword = req.param('password');
		var emailValidated = validator.isEmail(reqEmail);

		if (emailValidated && reqPassword) {
			Kid.findOne({email: reqEmail}, function(err, kid) {

				bcrypt.compare(reqPassword, kid.encryptedPassword, function(err, isMatch) {
					if (err) console.error;

					if (isMatch) {
						req.session.authenticated = true;
						req.session.Kid = kid;
						res.redirect('/kidHome');
					} else {
						res.redirect('/kidLogin');
					};
				});
			});
		};
	},

	kidLogout: function (req, res) {
		req.session.destroy(function(err) {
    	return res.redirect('/');
    });
	}

};
