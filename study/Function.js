/*
//作为值的函数
function callSomeFunction(someFunction,someArguments) {
	// body...
	return someFunction(someArguments);
}

function foo(num){
	return num + 10
}
var add = callSomeFunction(foo,10)
console.log(add)		//20

function foo2(name) {
	// body...
	return "cp" + name}


var name = callSomeFunction(foo2,"666")
console.log(name)		//cp666
*/


//根据某个对象属性对数组进行排序 
function createfunction(propertyName) {
	// body...
	return function(object1, object2) { //降序
		//console.log(object1.propertyName)   //undefined
		//方括号表示法可以通过变量来访问属性
		let vaule1 = object1[propertyName]
		let vaule2 = object2[propertyName]

		if (vaule1 > vaule2) {
			return -1
		} else if (vaule1 < vaule2) {
			return 1
		} else {
			return 0
		}
	};
}

var data = [{
	name: "chenpan",
	age: 22
}, {
	name: "dd",
	age: 13
}]
//console.log(data[])
var st = data.sort(createfunction("name"))
console.log(st) //[ { name: 'dd', age: 13 }, { name: 'chenpan', age: 22 } ]



//函数内部属性(特殊对象：arguments , this )


//另一种形式的递归(arguments的callee属性)
function factorial(num) {
	// body...
	//"use strict";
	if (num <= 1) {
		return 1;
	} else {
		//指向函数factorial,严格模式下报错
		//return num * arguments.callee(num - 1); 
	}
}

var trueFactorial = factorial
factorial = function() {
	return 0;
}
console.log(trueFactorial(5)) //undefined
console.log(factorial(5)) //0


//this
/*
   window.color = 'red'
   var o ={color:'blue'}
   function sayColor(){
   	console.log(this.color)
   }	
   sayColor(); //red
   o.sayColor = sayColor
   o.sayColor()  //blue
	

	//caller属相保存着调用当前函数的函数引用
	function outer(){
		inner();
	}
	function inner(){
		console.log(arguments.callee.caller)
		//等价于  console.log(inner.caller)
	}
	outer();
*/


//函数属性和方法
//length属性表示函数参数的个数
function sayName(argument) {
	// body...
	return argument
}

function sum(sum1, sum2) {
	// body...
	return (sum1 + sum2)
}
console.log(sayName.length); //1
console.log(sum.length); //2

//prototype属性不可枚举
console.log(sayName.prototype) //sayName {}



//call().apply()方法  设置函数体内this对象的值
//一个参数表示运行作用域，第二个是参数数组(call可以是其他参数)
function Multiplication(num1, num2) {
	// body...
	return num1 * num2
}

function add(num1, num2) {
	// body...
	return num1 + num2
}

function sum(num1, num2) {
	return add.apply(this, arguments)
}

function sum2(num1, num2) {
	return Multiplication.call(this, num1, num2)
}
console.log(sum(1, 2)) //3
console.log(sum2(3, 4)) //12

//脱离函数作用域,扩充作用域
var g = {
	color: 'red',
	k: function() {
		console.log(this.color)
	}
};
var x = {
	color: 'green'
};

g.k(); //red
g["k"].call(x); //green
var binder = g.k.bind(x) //bind创建一个函数实例
console.log(binder())