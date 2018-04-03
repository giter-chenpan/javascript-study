

//单体内置对象  不依赖宿主环境的对象

//Global对象
	//URl编码方法
	var url = "http://www.baid.com/d d&dd"
	var a = encodeURI(url) //对特殊符号进行编码
	console.log(a) //http://www.baid.com/d%20d&dd
	console.log(decodeURI(a)) //解码http://www.baid.com/d d&dd
	var b = encodeURIComponent(url)  //对任何非标准进行编码
	console.log(b)		//http%3A%2F%2Fwww.baid.com%2Fd%20d%26dd
	console.log(decodeURIComponent(b))		//解码http://www.baid.com/d d&dd

	