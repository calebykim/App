/**
 * AdultController
 */

module.exports = {

  home: function(req, res, next) {
    Adult.findOne({id:req.session.Adult.id})
      .populate('family')
      .then(function(adult){
        adult.family.id
        

      })
      .catch(function(err){next(err)});
    // get all kids of adult
    // show balances for each kid
    // show recent transactions for each kid


    res.view('adults/homepage', {

    });
  },

  edit: function (req, res) {
    var adult = Adult.findOne({id: req.params.id });

    res.view('adults/edit');
  },

  update: function(req, res) {
    var adult = Adult.findOne({id: req.params.id });

  }

};
