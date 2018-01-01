/*var hello = require('./hello');

hello.world();



var hero = require('./hello');
var hello = new hero();
hello.setName('chenpan');
hello.sayHello ();







function exe(someFunction,vaule){
	someFunction(vaule);
}
exe(function(word){console.log(word);},'he');

console.log(__filename);
console.log(__dirname);

function hh(){
	console.log("hahah");
}
setTimeout(hh,1000);






var util = require('util');
function Base(){
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function(){
		console.log('hello: '+ this.name);
	};
}	


Base.prototype.showName = function(first_argument) {
	// body...
	console.log(this.name);
};
Base.prototype.showBase = function(first_argument) {
	// body...
	console.log(objBase.base);
};



function Sub(){
	this.name = 'sub';
	this.base = 1995;
}


util.inherits(Sub,Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
console.log(typeof(Base));
var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
objSub.showBase();
console.log(objSub);










//文件
var fs = require('fs');
fs.readFile('input.txt',function(err,data){
	if(err){
		return console.err(err);
	}
	console.log('异步读取完成:' + data.toString());
});

var data = fs.readFileSync('input.txt');
	console.log('同步读取完成 ：' + data.toString());

console.log('end');



var fs = require('fs');
console.log('准备打开文件');
fs.open('input.txt','r+',function(err,fd){
	if(err){
		return console.error(err);
	}
	console.log('文件打开成功！');
});

//获取文件信息
fs.stat('input.txt',function(err,sta){ //sta是fs.stat对象
	if(err){
		return console.error(err);
	}
	console.log(sta);
	console.log(sta.isFile());
	console.log(sta.isDirectory());
});







//获取GET请求内容

var http = require('http');
var util = require('util');
var url = require('url');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
	response.end(util.inspect(url.parse(response.url,true)));//发送响应的内容
}).listen(3000);





var http = require('http');
var querystring = require('querystring');
 
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
 
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
    if(body.name && body.url) { // 输出提交的数据
        res.write("网站名：" + body.name);
        res.write("<br>");
        res.write("网站 URL：" + body.url);
    } else {  // 输出表单
        res.write(postHTML);
    }
    res.end();
  });
}).listen(3000);








//使用 Node 创建 Web 服务器

var http = require('http');
var fs = require('fs');
var url = require('url');


http.createServer(function(request,response){
	// 解析请求，包括文件名
	var pathname = url.parse(request.url).pathname;
	// 输出请求的文件名
	console.log('request filename :' + pathname.toString());

	 // 从文件系统中读取请求的文件内容

	 fs.readFile(pathname.substr(1),function(err,data){
	 	if(err){
	 		console.log(err);
	 		// HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404,{'Content-Type':'text/html'});

	 	}
	 	else{
	 		 // HTTP 状态码: 200 : OK
         // Content Type: text/plain
         response.writeHead(200,{'Content-Type':'text/html'});
         //响应文件内容
         response.write(data.toString());
	 	}
	 	 //  发送响应数据
	 	response.end();
	 });


	}).listen(8081);



console.log('Server running at http://127.0.0.1:8081/');






var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function(request,response){
	var pathname = url.parse(request.url).pathname;
	console.log('requestFilename:'+pathname);
	fs.readFile(pathname.substr(1),function(err,data){
		if(err){
			response.writeHead(404,{'Content-Type':'text/html'});
		}
		else{
			response.writeHead(200,{'Content-Type':'text/html'});
			response.write(data.toString());
		}
		response.end();
	});
	
	
}).listen(8081);

console.log('server start!');

*/



var http = require('http');
 var options={
		host:'localhost',
		post:'8088',
		path:'/index.html'
	};

var callback = function(response){
	var body = '';
	response.on('data',function(data){
		body+=data;
	});

	responseon('end',function(){
		console.log('end');
	});
}
var hp = http.request(options,callback);
hp.end();

