

/* load the framework and all routes defining  */

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home'  });
});
/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me', page: 'about'  });
});
/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', page: 'project'  });
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', page: 'services'  });
});
/* route to localhost:3000/Contact to open 'Contact' page. */
router.get('/Contact', function(req, res, next) {
  res.render('index', { title: 'Contact', page: 'contact'  });
});

module.exports = router;
