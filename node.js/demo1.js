/*
var http = require('http');
http.createServer(function(request,response){

	// 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
	response.writeHead(200,{'content-type' : 'text/plain'});
	 // 发送响应数据 "Hello World"
	 response.end("hallo world \n");
}).listen(8888);

console.log("server running at HTTP: + 127.0.0.1:8888");
*/



/*var fs = require("fs");
var date = fs.readFileSync('input.txt');
console.log(date.toString());
console.log("end");


var fs = require("fs");
fs.readFile("input",function(err,date){
	if(err) console.error(err);
	console.log(date.toString());
});
console.log("end");*/




/*var events = require("events");
var eventEmitter = new events.EventEmitter();
//创建事件处理程序
var connectHandler = function connected(){
	console.log("连接成功");

//触发事件
eventEmitter.emit('date_received');

}

// 绑定 connection 事件处理程序
eventEmitter.on('connection',connectHandler);
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('date_received',function(){
	console.log("数据接收成功。");
});
// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("程序执行完毕。");


var eve = require('events');
var eventEmitter = new eve.EventEmitter();

eventEmitter.on('date_',function(){
	console.log('end');
});
setTimeout(function(){
	eventEmitter.emit('date_');
},1000);




var evt = require('events');
var emitter = new evt.EventEmitter();

emitter.on('evt1',function(a,b){
	console.log('listen1:',a,b);
});

emitter.on('evt1',function(a,b){
	console.log('listen2:',a,b)
});
emitter.once('evt1',function(a,b){
	console.log(a,b);
});
emitter.emit('evt1','arg1','arg2');
emitter.emit('evt1','arg1','arg2');
console.log(evt.EventEmitter.listenerCount(emitter,'evt1'));


 var buf = new Buffer(256); //创建 Buffer 类
var len = buf.write('www.baidu.com');//写入缓冲区
console.log(len);
console.log(buf.toString('utf8',0,13)); //从缓冲区读取数据

var buf2 = new Buffer('www.baidu.com');
var json = buf2.toJSON(buf); //将 Buffer 转换为 JSON 对象
console.log(json);



var buf3 = new Buffer('baidu:');
var buf4 = new Buffer('www.baidu.com');
var buf5 = Buffer.concat([buf3,buf4]);//缓冲区合并,返回一个新的对象
console.log(buf5.toString());



var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer2.compare(buffer1); //缓冲区比较

if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer2 + " 在 " + buffer1 + "之后");
}






//Node.js Stream(流)

var fs = require('fs');
var date = '';
var date2 = '213';
//从流中读取数据
var readerStream = fs.createReadStream('input.txt');// 创建一个可以读入的流，
readerStream.setEncoding(); // 设置编码为 utf8。
 readerStream.on('data',function(chunk){
 	date += chunk;
 });
 readerStream.on('end',function(){
 	console.log(date);
 });
 readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");


// 创建一个可以写入的流，写入到文件 output.txt 中

var writeStream = fs.createWriteStream('input.txt');
writeStream.write(date2,'utf8');
writeStream.end();// 标记文件末尾
writeStream.on('finish',function(){
	console.log('write end');
});
writeStream.on('error',function(err){
	console.log(err.stack);
});
console.log("程序执行完毕2");







//管道流
var fs = require('fs');
var read = fs.createReadStream('input.txt');
var write = fs.createWriteStream('output.txt');
read.pipe(write);
console.log('end');
*/


//链式流
var fs = require('fs');
var ys = require('zlib');
fs.createReadStream('input.txt').pipe(ys.createGzip())
	.pipe(fs.createWriteStream('input.zip'));
console.log('end');

