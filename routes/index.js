var express = require('express');
var router = express.Router();


/* GET  home page. */

var o=[];


router.post('/',function (req,res) {

    var sr=  req.body.sr;


     res.json({sr:sr});

});





router.get('/', function(req, res,next) {
  res.render('index', { title: 'Express' });





});




module.exports = router;
