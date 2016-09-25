var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema;
//骨架模版
var listSchema = new Schema({
    name: Array,
    count: Number
});
var List = mongoose.model('Movie', listSchema);

//anoSchema
var anoSchema = mongoose.Schema;
var anoListSchema = new anoSchema({
    anoname: Array
});
var anoList = mongoose.model('anoMovie', anoListSchema);

Array.prototype.indexOf = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
/* GET  home page. */
a = [];
var sr,
    secsr,
    thr,
    b = [],
    c = [],
    fir = {},
    sec = {},
    lll = {},
    num = 0;
router.post('/', function (req, res) {

    if (req.body.sr) {
        sr = req.body.sr;
        fir = {
            sr: sr,
        };
        a.push(fir);
    }
    if (req.body.secsr) {
        secsr = req.body.secsr;
        sec = {
            secsr: secsr
        };
        b.push(sec);
    }
    if (a.length && b.length) {
        for (var i = 0; i < a.length; i++) {
            for (var t = 0; t < b.length; t++) {
                if (a[i].sr == b[t].secsr) {
                    a.splice(i, 1)
                }
            }
        }
    }
    num++;
    //存储数据

    var doc = {
        name: a,
        count: num
    };
    var uplist = new List(doc);
    //保存数据库
    uplist.save(function (err) {
        if (err) {
            console.log('上保存失败');
            return;
        }
        console.log('上保存成功');
    });
    if (req.body.thr) {
        thr = req.body.thr;
        lll = {
            last: thr
        };
        c.push(lll);
        for (var j = 0; j < b.length; j++) {
            for (var k = 0; k < c.length; k++) {
                if (b[j].secsr == c[k].last) {
                    b.splice(j, 1);
                }
            }
        }
    }

        var doc1 = {
            anoname: b
        };
        var downList = new anoList(doc1);
        downList.save(function (err) {
            if (err) {
                console.log('下保存失败');
                return;
            }
            console.log('下保存成功');
        });

    res.json({
        sr: fir.sr
    });
});


router.get('/', function (req, res) {
    //删除
    // List.remove({}, function(err) {
    //     console.log('collection removed')
    // });
    //   anoList.remove({},function (err) {
    //       console.log('collection removed')
    //   });
    // var upArr=[];
    // List.find({},function (err,docs) {
    //     var step1=docs[0].name;
    //     for(var i=0;i<step1.length;i++){
    //        upArr.push(step1[i].sr);
    //     }
    //
    // });
    var upArr = [];
    var downArr=[];
    List.find({}, function (err, docs) {
        var step0 = docs[docs.length - 1];
        var step1 = step0.name;
        for (var i = 0; i < step1.length; i++) {
            upArr.push(step1[i].sr);
        }
    });
    anoList.find({}, function (err, docs) {
        var step2 = docs[docs.length - 1];
        var step3 = step2.anoname;
        for (var i = 0; i < step3.length; i++) {
            downArr.push(step3[i].secsr);
        }
        res.render('index', {
            items:upArr,
            bitems:downArr
        });
    });

});


module.exports = router;
