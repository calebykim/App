module.exports = {

  correctPage: function(req, res, next) {
    if (req.session.Adult) {
      res.redirect('/adultHome');
    }
    else if (req.session.Kid) {
      res.redirect('/kidHome');
    }
    else {
      res.view('Auth/index')
      next();
    };
  }

};
