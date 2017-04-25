module.exports = function(req, res, next) {
  if (req.session.Adult && req.session.Adult.id == req.params.id) {
    return next();
  }
  else {
    return res.redirect('/');
  }

}
