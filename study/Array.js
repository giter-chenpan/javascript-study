//对象字面量

/*
var person = {
	name:'chenpan';
	age:"27"
};

var person = new Object();
person.age = 11;
person.name = 'cp';


function displayInfo() {
	// body...
	//"use strict";
	var output = '';
	console.log(arguments.length);
	if(typeof arguments[0].name == "string" ){
		output += "name:" + arguments[0].name +"\n";
	}
	if(typeof arguments[0].age == "number"){
		output += "age:" +arguments[0].age;
	}
	
	
	console.log(output);
}


displayInfo({
	name: "cp",
	age : 22
});

displayInfo({
	name : "chenpan"
});



let color = ['a','b','c'];
color[color.length] = "d";
color[color.length] = 5;
console.log(color.toString())
console.log(color instanceof Array)  //instanceof问题在于只有一个全局执行环境
console.log(Array.isArray(color))



//数组转化方法  （数组类型转字符类型）
var color = ['a',,'c'];
var people1 = {
	toLocaleString : function(){
		return "toLocaleString"
	},
	toString : function(){
		return 'toString'
	}
}

var people2 = {
	toLocaleString  : function(){
		return 'people2 toLocaleString'
	},
	toString : function(){
		return 'people2 toString'
	}
}

var people = [people1,people2]
console.log(people.join(" | "))
console.log(color.valueOf())   //valueOf返回原始值(数组本身)
console.log(people.toString())
console.log(people.toLocaleString())



//数组栈方法


let color = ['red','yellow']
let count = color.push("green") //push()返回length属性
console.log(count)
color[3] = "black"
console.log(color)

let item = color.pop()   //pop()返回出栈元素
console.log(item)

//数组队列方法
let item2 = color.shift()
let item3 = color.unshift('CP')
console.log(item2,item3)


//数组重排序
 
 let a = [1,12,33,4,25]
 console.log(a.reverse())
 console.log(a.sort())  //先调用每项toString(),在排序
 //降序排列   第一个参数在第二参数前返回负数
 //				第一个参数在第二参数后返回正数  相等为0
 function compare(value1,value2){  
 	if(value1 < value2){
 		return 1
 	}
 	else if(value1 > value2){
 		return -1
 	}
 	else {
 		return 0
 	}
 }
//let b = a.sort(compare) 

//console.log(b)
/*a.sort(function(a,b){    //数值类型下可用
	return b - a ;
});

a.sort((a,b) => b - a)
console.log(a)
 


//操作方法
let a = [1,12,33,4,25]
let b = a.slice(1)   //slice基于当前数组创建一个新数组
let c = a.slice(1,4) 
let d = a.splice(0,2)   //删除前面两项
let e = a.splice(1,0,100)  //从位置1开始插入100
let f = a.splice(1,1,200)   //替换																																																																																																																																																																																																																															
console.log(b)   //[ 12, 33, 4, 25 ]
console.log(c)   //[ 12, 33, 4 ]
console.log(d)	//[ 1, 12 ]
console.log(e)  //[]
console.log(f)	//[100]
console.log(a)
*/



//d迭代方法

let a = [1, 2, 3, 4, 5, 4, 3, 2, 1]
//every()对每一项运行函数，某一项为false，则返回false
//some()对每一项运行函数，某一项为true，则返回true
let b = a.every((item, index, arr) => (item > 2))
console.log(b) //false
let c = a.some((item, index, arr) => (item > 2))
console.log(c) //true

//filter()对每一项运行函数，返回函数会返回true的项组成的数组
//forEach()对每一项运行函数,没有返回值
//map()对每一项运行函数,返回调用结果的数组
let d = a.filter((item, index, arr) => (item > 2))
console.log(d) //[ 3, 4, 5, 4, 3 ]

let e = a.map((item, index, arr) => (item * 2))
console.log(e) //[ 2, 4, 6, 8, 10, 8, 6, 4, 2 ]