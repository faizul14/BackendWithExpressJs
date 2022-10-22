var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Route test
router.get('/test', (req, res, next) => {
  res.json({
    message : "backend berjalan dengan aman"
  })
})

module.exports = router;
