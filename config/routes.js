module.exports.routes = {
  '/': 'HomepageController.correctPage',

      // static pages
  'GET /ourWhat': {view: 'miscellaneous/what_we_do'},
  'GET /ourFAQ': {view: 'miscellaneous/FAQ'},
  'GET /termsOfUse': {view: 'miscellaneous/Terms'},

/**
* ADULT AUTH
*/
  // Login
  'GET /adultLogin': 'AuthController.adultNewLogin',
  'POST /adultLogin': 'AuthController.adultLogin',

  // Signup
  'GET /adultSignup': 'AuthController.adultNewSignup',
  'POST /adultSignup': 'AuthController.adultSignup',

/**
* KID AUTH
*/
  // Login
  'GET /KidLogin': 'AuthController.kidNewLogin',
  'POST /kidLogin': 'AuthController.kidLogin',

  // Signup
  'GET /kidSignup': 'AuthController.kidNewSignup',
  'POST /kidSignup': 'AuthController.kidSignup',

  '/logout': 'AuthController.logout',

/**
* ADULT ROUTES
*/
  'GET /adultHome': 'AdultController.home',
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
