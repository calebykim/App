module.exports = function(req, res, next) {
  if (req.session.Adult) {
    return next();
  }
  else {
    return res.redirect('/adultLogin');
  }

}
