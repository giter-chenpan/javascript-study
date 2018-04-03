

//定义正则表达式
/*
var regexp = /pattern/flags  		//字面量定义
var regexp = new RegExp("pattern" , "flags")    //正则表达式定义

var pattern1 = /\[bc\]at/i			//字面量定义时符号转义
var pattern2 = new RegExp("\\[bc\\]at" , "i")	//符号双重转义

*/

let str = "afrogfgvbaf"
let pattern = /af/gi
console.log(pattern.exec(str))