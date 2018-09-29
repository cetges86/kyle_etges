var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.use(function(req, res) {
  console.log('hit')
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
