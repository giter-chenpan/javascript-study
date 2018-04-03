
//字符类型


	var str = "efrgdgd"
	console.log(str.length) 		//7


	//字符方法 都不会改变字符串本身的值
	var str1 = "hello world"
	console.log(str1.charAt(1))  //e
	console.log(str1.charCodeAt(1))		//‘e’的字符编码101
	console.log(str1[1])		//e
	var str2 = " cehn"
	var result = str1.concat(str2," hello!")
	console.log(result)
	console.log(str1.length)   // 11
	console.log(str1.slice(3))			//lo world
	console.log(str1.substring(3))		//lo world	
	console.log(str1.substr(3))			//lo world
	console.log(str1.slice(3,7))		// lo w
	console.log(str1.substring(3,7))	// lo w
	console.log(str1.substr(3,7))		//lo wrol 第二个参数指示返回个数
	console.log(str1.slice(-3))			//rld


	//字符串位置方法
	console.log(str1.indexOf("o")) 		//4
	console.log(str1.lastIndexOf("l"))  //9
	//字符串匹配
	var stringVaule = "abcdabcdabdcadfvd"
	var arr = new Array();
	var position = stringVaule.indexOf("a")
	while(position > -1){
		arr.push(position)
		position = stringVaule.indexOf("a" , position + 1)

	}
	console.log(arr)	//[ 0, 4, 8, 12 ]

	var a = " c cd  "
	console.log(a.trim())	//c cd  删除前置和后置空格


	//字符串模式匹配
	var colorText = "red , blue , green , yellow"
	console.log(colorText.split(","))   //[ 'red ', ' blue ', ' green ', ' yellow' ]
	console.log(colorText.split(",",3)) //[ 'red ', ' blue ', ' green ' ]

	//localeCampare()字符串的比较
	var color = "yellow"
	console.log(color.localeCompare("blue"))	//字符在前返回1
	console.log(color.localeCompare('yellow'))	//0
	console.log(color.localeCompare('zero'))	//-1
