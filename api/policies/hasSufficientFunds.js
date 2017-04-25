module.exports = function(req, res, next) {
  if (req.session.Adult) {
    next();
  }
  else {
    res.redirect('/adultLogin');
  }

}
