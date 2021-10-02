/* Man Young Oh / 301161472 / COMP229-005 */

/* load the framework and all routes defining  */
let express = require('express');
let router = express.Router();

/* route to localhost and activate to load 'Home' page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});
/* route to localhost and activate to load 'Home' page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home'  });
});
/* route to localhost and activate to load 'About' page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me', page: 'about'  });
});
/* route to localhost and activate to load 'Projects' page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', page: 'project'  });
});
/* route to localhost and activate to load 'Services' page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', page: 'services'  });
});
/* route to localhost and activate to load 'Contact' page. */
router.get('/Contact', function(req, res, next) {
  res.render('index', { title: 'Contact', page: 'contact'  });
});
module.exports = router;
