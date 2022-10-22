var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //cara panggil dari file .env
  res.send(process.env.APP_NAME);
});

// Route test
router.get('/test', (req, res, next) => {
  res.json({
    message : "backend berjalan dengan aman"
  })
})

module.exports = router;
