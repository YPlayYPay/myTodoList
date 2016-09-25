//原生操作连接数据库
var mongodb =require('mongodb');
var server = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var db = new mongodb.Db('nodejs', server, {safe:true});
db.open(function(err, db){
    if(!err){
        console.log('连接成功');
    }else{
        console.log(err);
    }
});