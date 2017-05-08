module.exports = function(req, res, next) {
  res.locals.flash = {};

  if (!req.session.flash) return next();

  res.locals.flash = JSON.parse(JSON.stringify(req.session.flash));

  req.session.flash = {};

  next();
}
