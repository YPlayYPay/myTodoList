var express = require('express');
var router = express.Router();
var session=require('express-session');
var db=require('../database/mongodb');


//////// 数据库操作


router.use(session({
    secret: 'hubwiz app', //secret的值建议使用随机字符串
    cookie: {maxAge: 60 * 1000 * 30}, // 过期时间（毫秒）
    resave:true,
    saveUninitialized:true
}));

/* GET  home page. */




router.post('/',function (req,res) {

    var sr=  req.body.sr;

     res.json({sr:sr});


});



router.get('/', function(req, res,next) {

    if (req.session.sign) {//检查用户是否已经登录
        res.render('index',{title:'欢迎回来' +req.session.name});
    } else {
        req.session.sign = true;
        req.session.name = 'shuaiqi';
        res.render('index');
    }

});

module.exports = router;
