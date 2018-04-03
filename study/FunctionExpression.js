
//特征
	//函数声明提升
	sayName()	//hello world!
	function sayName(argument) {
		// body...
		console.log("hello world!")
	}

	//sayHi() 	//TypeError: sayHi is not a function
	var sayHi = function(){  //匿名函数也叫拉姆达函数
		console.log("Hi!")
	}

	//另外一种形式的递归
	var factorial = function f(num){
		if(num < 1){
			return 1
		}else{
			return num * f(num - 1)
		}
	};
	console.log(factorial(4))	//24


	//闭包
	function compare(value1 , value2){
		if(value1 > value2){
			return -1
		}else if(value1 < value2){
			return 1
		}else{
			return 0 
		}
	}
	var result = compare(5,10)

	function createComparisonFunction(name){
		return function(obj1 , obj2){
			var value1 = obj1[name]
			var value2 = obj2[name]
			if(value1 > value2){
				return -1
			}else if(value1 < value2){
				return 1
			}else{
				return 0
			}
		};
	}
	var compareName = createComparisonFunction("name")
	var result = compare({name : "cp"} , { name : "ly"})


	//闭包与变量
	function createFunctions(){
			var arr = new Array()
			for(var i = 0 ; i < 10 ; i++){
				arr[i] = function(){
					return i;
				};
			}
			return arr;
		}
		var c = createFunctions()
		//console.log(c)

		//createFunction()优化
		function createFunction2(argument) {
			// body...
			var array = new Array();
			for(var i =0 ; i < 10 ; i++){
				array[i] = function (i) {
					// body...
					return function(){
						return i
					};
				}(i);
			}
			return array;
		}
		var g = createFunction2();
		
		
		//this对象
		var name = "geo"
		 var obj = {
		 	name : "neo",
		 	getName : function(){
		 		return function(){
		 		//匿名函数的执行环境具有全局性，this通常指向window
		 			return this.name  
		 		};
		 	}
		 };
	//console.log(obj.getName()()) //geo (非严格模式下)


	var name2 = "outer"
	var obj4 = {
		name2 : "inner",
		getName2 : function(){
			var that = this
			return function(){
				return that.name2
			};
		}
	};
	//console.log(obj4.getName2()())  //inner (非严格模式下)


	//模仿块级作用域
	function createOutputNumber(num) {
		// body...
		for(var i = 0 ; i < num ; i++){
			console.log(i) //0,1
		}
		console.log(i)	//2         
	}
	createOutputNumber(2)

	//这种做法可以减少闭包占用内存，函数执行完毕就销毁作用域
	(function()){
		var now = new Data()
		if(now.getMouth() == 0 && now.getDate() == 1){
			console.log("happy new year!")
		}
	}();


	//私有变量

	function myObj(){
		var privatevariable = 10	//私有变量
		function privateFunction(){		//私有函数
			return false
		}

		this.publicMethod = function(){		//特权方法
			privatevariable ++
			return privateFunction()
		}
	}

	//模块模式,为单例创建私有变量和特权方法
	//单例：只有一个实例的对象
	var application = function(){
		var components = new Array()
		components.push(new BaseComponent())  //c初始化
		return {
			getComponentCount : function(){
				return components.length
			},
			registerComponent : function(component){
				if(typeof component == "object"){
					components.push(component)
				}
			}
		};
	}();

	//z增强的模块模式
	var application2 = function(){
		var components2 = new Array()
		components2.push(new BaseComponent())
		var app = new BaseComponent() 
		//公共接口
		app.getComponentCount = function(){
			return components2.length
		}
		app.registerComponent = function(component){
			if(typeof component == 'object'){
				components2.push(component)
			}
		}
		return app
	}();