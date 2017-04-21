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
  'GET /adultHome': {view: 'home/adult'},
/**
* KID ROUTES
*/
  'GET /kidHome': {view: 'home/kid'}
};
