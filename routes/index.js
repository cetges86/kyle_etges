var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(function(req, res) {
  console.log('hit')
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
