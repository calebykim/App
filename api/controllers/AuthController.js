/**
 * AuthController
 */

var bcrypt = require('bcrypt');

module.exports = {

// Auth for Adults //

	adultNewSignup: function(req,res) {
		res.view('Auth/Adult/Signup');
	},

	adultSignup: function (req, res, next) {
		Adult.create(req.params.all()).exec(function(err, adult) {
			if (err) return next(err);

			req.session.authenticated = true;
			req.session.Adult = adult;

			Family.findOrCreate({email: adult.email}, {
				email: adult.email
			})
				.populate('adults')
				.exec(function(err, family) {
					if (err) return next(err);

					family.adults.add(adult);
					family.save(function(err){return next(err)});

					res.redirect('/');
				});
		});
	},

	adultNewLogin: function(req,res) {
		res.view('Auth/Adult/Login');
	},

	adultLogin: function (req, res, next) {
		var reqEmail = req.body.email;
		var reqPassword = req.body.password;
		var firstName = req.body.first_name;

		Adult.findOne({email: reqEmail, first_name: firstName})
			.exec(function(err, adult) {
				if (err) return next(err);

				if (!adult) {
					req.session.flash = {
						error: "No adult found"
					}
					res.redirect('/adultLogin');
					return;
				}

				bcrypt.compare(reqPassword, adult.encryptedPassword, function(err, isMatch) {
					if (err) return next(err);

					if (isMatch) {
						req.session.authenticated = true;
						req.session.Adult = adult;
						res.redirect('/');
					} else {
						// set flashmessage
						req.session.flash = {
							error: "Wrong password, please try again."
						}

						res.redirect('/adultLogin');
					};
		    });
			});
	},

	// Auth for Kids //

	kidNewSignup: function(req,res) {
		res.view('Auth/Kid/Signup')
	},

	kidSignup: function (req, res, next) {
		var parent_email = req.body.parent_email,
				first_name = req.body.first_name,
				last_name = req.body.last_name,
				password = req.body.password,
				password_confirmation = req.body.password_confirmation;

		// find parent/family email first
		Family.findOne({email:parent_email})
			.populate('kids')
			.then(function(family) {

				Kid.create({
					email: parent_email,
					first_name: first_name,
					last_name: last_name,
					password: password,
					password_confirmation: password_confirmation
				})
					.then(function(kid){
						req.session.authenticated = true;
						req.session.Kid = kid;

						family.kids.add(kid.id);
						family.save(function(err){return next(err)});

						res.redirect('/');
					})
					.catch(function(err){return next(err)});
			})
			.catch(function(err){return next(err)});
	},

	kidNewLogin: function(req,res) {
		res.view('Auth/Kid/Login')
	},

	kidLogin: function (req, res, next) {
		var reqEmail = req.body.email;
		var firstName = req.body.first_name;
		var reqPassword = req.body.password;

		if (emailValidated && reqPassword) {
			Kid.findOne({email: reqEmail, first_name: firstName})
				.exec(function(err, kid) {
					bcrypt.compare(reqPassword, kid.encryptedPassword, function(err, isMatch) {
						if (err) return next(err);

						if (!kid) {
							req.session.flash = {
								error: "No kid found"
							}
							res.redirect('/kidLogin');
							return;
						}

						if (isMatch) {
							req.session.authenticated = true;
							req.session.Kid = kid;

							res.redirect('/');
						} else {
							res.redirect('/kidLogin');
						};
					});
				});
		};
	},

	logout: function (req, res) {
		req.session.destroy(function(err) {
    	return res.redirect('/');
    });
	}

};
