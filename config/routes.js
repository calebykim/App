module.exports.routes = {
  '/': { view: 'Auth/index' },

/**
* ADULT AUTH
*/
  // static pages
  'GET /adultLogin': {view: 'Auth/Adult/login'},
  'GET /adultSignup': {view: 'Auth/Adult/signup'},
  // controller requests
  'POST /adultLogin': 'AuthController.adultLogin',
  'POST /adultSignup': 'AuthController.adultSignup',
  'POST /adultLogout': 'AuthController.adultLogout',

/**
* KID AUTH
*/
  // static pages
  'GET /kidLogin': {view: 'Auth/Kid/login'},
  'GET /kidSignup': {view: 'Auth/Kid/signup'},
  // controller requests
  'POST /kidLogin': 'AuthController.kidLogin',
  'POST /kidSignup': 'AuthController.kidSignup',
  'POST /kidLogout': 'AuthController.kidLogout',

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
  'GET /adults/:id': { AdultController.show },
  'GET /adults/:id/edit': { AdultController.edit },
  'PUT /adults/:id': { AdultController.update },
  // kids
  'GET /kids/:id': { KidController.show },
  'GET /kids/:id/edit': { KidController.edit },
  'PUT /kids/:id': { KidController.update },
  // families
  'GET /families/:id': { FamilyController.show },
  'GET /families/:id/edit': { FamilyController.edit },
  'POST /famlies': { FamilyController.create },
  'PUT /families/:id': { FamilyController.update },
  // transactions
  'GET /transactions/new': { TransactionController.new },
  'GET /transactions/:id': { TransactionController.show },
  'POST /transactions': { TransactionController.create },

};
