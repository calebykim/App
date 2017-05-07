module.exports.routes = {
  '/': 'HomepageController.correctPage',
  '/auth/index': {view: 'Auth/index'},

      // static pages
  'GET /ourWhat': {view: 'miscellaneous/what_we_do'},
  'GET /ourFAQ': {view: 'miscellaneous/FAQ'},
  'GET /termsOfUse': {view: 'miscellaneous/Terms'},

/**
* ADULT AUTH
*/
  // static pages
  'GET /adultLogin': {view: 'Auth/Adult/login'},
  'GET /adultSignup': {view: 'Auth/Adult/signup'},
  // controller requests
  'POST /adultLogin': 'AuthController.adultLogin',
  'POST /adultSignup': 'AuthController.adultSignup',
  '/adultLogout': 'AuthController.adultLogout',

/**
* KID AUTH
*/
  // static pages
  'GET /kidLogin': {view: 'Auth/Kid/login'},
  'GET /kidSignup': {view: 'Auth/Kid/signup'},
  // controller requests
  'POST /kidLogin': 'AuthController.kidLogin',
  'POST /kidSignup': 'AuthController.kidSignup',
  '/kidLogout': 'AuthController.kidLogout',


/**
* ADULT ROUTES
*/
  'GET /adultHome': {view: 'adults/homepage'},
/**
* KID ROUTES
*/
  'GET /kidHome': {view: 'kids/homepage'},

/**
* REST routes
*/
  // adults
  'GET /adults/:id': 'AdultController.show',
  'GET /adults/:id/edit': 'AdultController.edit',
  'PUT /adults/:id': 'AdultController.update',
  // kids
  'GET /kids/:id': 'KidController.show',
  'GET /kids/:id/edit': 'KidController.edit',
  'PUT /kids/:id': 'KidController.update',
  // families
  'GET /families/new': 'FamilyController.new',
  'GET /families/:id': 'FamilyController.show',
  'GET /families/:id/edit': 'FamilyController.edit',
  'POST /famlies': 'FamilyController.create',
  'PUT /families/:id': 'FamilyController.update',
  // Deposit
  'GET /deposits/new': 'DepositController.new',
  'POST /deposits': 'DepositController.create',
  // Transfer
  'GET /transfers/new': 'TransferController.new',
  'POST /transfers': 'TransferController.create'

};
