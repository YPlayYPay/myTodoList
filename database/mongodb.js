
var mongoose = require('mongoose');// 引用mongoose
mongoose.connect('mongodb://localhost/test'); //使用"mongoose"连接数据库

db.connection.on("error", function (error) {  console.log("数据库连接失败：" + error); });//是否连接成功
db.connection.on("open", function () {  console.log("------数据库连接成功！------"); });
console.log('db对象是：'+db);//db对象是：[object Object]

//Schema —— 一种以文件形式存储的数据库模型骨架，无法直接通往数据库端，
// 也就是说它不具备对数据库的操作能力，仅仅只是数据库模型在程序片段中的一种表现，
// 可以说是数据属性模型(传统意义的表结构)，又或着是“集合”的模型骨架。
var Schema=mongoose.Schema; //创建模型
var Test=new Schema({
	//age  : { type:Number, default:0 } ,//属性age,类型为Number,默认为0
	//time : { type:Date, default:Date.now },
	//基本属性类型有：字符串、日期型、数值型、布尔型(Boolean)、null、数组、内嵌文档等。
	sr:string
});

mongoose.model('Test',Test);
//
// studentSchema.methods.addStu=function(student,callback){
// 	this.stuname=student.stuname;
// 	this.age=student.age;
// 	this.sex=student.sex;
// 	this.address=student.address;
// 	this.save(callback);
// }

//类似于管理数据库属性、行为的类,用于操作数据库，1.数据库中的集合名称，2.集合的Schema结构对象


module.exports=student;//exports是将函数能被引用该方法的模块引用到
