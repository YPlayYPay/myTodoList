var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
});

var kittySchema = mongoose.Schema({
	name: String,
	psw:Number
});


var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({
	name: 'Silence',
	psw:111
});

silence.save(function (err,silence) {
	if(err) return console.error(err);
	console.log(silence.name + silence.psw)
});

Kitten.findOne({ name: 'Silence'}, function (err, doc){
	console.log(doc.name)
});

module.exports=db;//exports是将函数能被引用该方法的模块引用到
