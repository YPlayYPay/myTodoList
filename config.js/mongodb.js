//
// var mongoose = require("mongoose");
//
// // 连接字符串格式为mongodb://主机/数据库名
// var db=mongoose.connect('mongodb://localhost/test');
//
// db.connection.on("error", function (error) {  console.log("数据库连接失败：" + error); });//是否连接成功
// db.connection.on("open", function () {  console.log("------数据库连接成功！------"); });
// console.log('db对象是：'+ db);//db对象是：[object Object]
//
// var Schema = mongoose.Schema;
// //骨架模版
// var movieSchema = new Schema({
// 	name:String
// });
// //模型
// var Movie = mongoose.model('Movie', movieSchema);
// //存储数据
// var movie = new Movie({
// 	name: '黑衣人三'
// });
// //保存数据库
// movie.save(function(err) {
// 	if (err) {
// 		console.log('保存失败')
// 		return;
// 	}
// 	console.log('meow');
// });
//
// module.exports=mongoose;//exports是将函数能被引用该方法的模块引用到
