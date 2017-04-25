module.exports = function(req, res, next) {
  if (req.session.Kid && req.session.Kid.id == req.params.id) {
    return next();
  }
  else {
    return res.redirect('/');
  }

}
