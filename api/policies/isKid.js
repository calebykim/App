module.exports = function(req, res, next) {
  if (req.session.Kid) {
    return next();
  }
  else {
    return res.redirect('/kidLogin');
  }

}
