module.exports = {

  correctPage: function(req, res, next) {
    if (req.session.Adult) {
      res.view('adults/homepage');
      next();
    }
    else if (req.session.Kid) {
      res.view('kids/homepage');
      next();
    }
    else {
      res.redirect('/auth/index')
      next();
    };
  }

};
