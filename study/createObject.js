 
 //常规为字面量和Object构造函数模式
 //工厂模式
 //特点：解决了创建多个相似对象问题，
 //没有解决对象识别问题（识别对象类型）
 function createObject(name , age , sex) {
 	// body...
 	let o = new Object()
 	o.name = name
 	o.age = age
 	o.sex = sex
 	return o
 }
 var a = createObject("cc" , 12 ,"man")
 console.log(a.name)		//cc


 //构造函数模式
 function Person() { //惯例：构造函数名首字母大写
 	// body...
 	this.name = arguments[0]
 	this.age1 = arguments[1]
 	this.sex = arguments[2]
 }
 var b = new Person("b", 2, "women")
 console.log(b.age1) //2
 console.log(b) //Person { name: 'b', age: 2, sex: 'women' }
 console.log(b.constructor == Person) //true  构造函数属性指向Person
 console.log(b instanceof Person) //true
 console.log(b instanceof Object) //true



 //原型模式
 //prototype属性 一个指向对象的指针 对象包含可以由特定类型的所有实例共享的属性和方法
 function PersonTwo(a) {
 	// body...
 	PersonTwo.prototype.age = 22
 	PersonTwo.prototype.name = "acilles"
 	PersonTwo.prototype.sayAge = function(){
 		console.log(this.age)
 	}
 }
 console.log(PersonTwo.prototype)	//PersonTwo {}
var c = new PersonTwo()
console.log(PersonTwo.prototype)	//PersonTwo { age: 22, name: 'acilles', sayAge: [Function] }
c.sayAge()	//22
console.log(c.name) 	//acilles
var d = new PersonTwo()
console.log(d.name)		//acilles
console.log(c.name == d.name)	//true
//该方法用于测试实例内部指向原型对象的指针
console.log(PersonTwo.prototype.isPrototypeOf(c))	//true
//该方法返回的对象就是对象的原型
console.log(Object.getPrototypeOf(c) == PersonTwo.prototype)	//true

c.name = "chenpan"
//检测属性来自实例还是原型
console.log(c.hasOwnProperty('name'))	//true  来自实例

//检测属性到底在实例或者原型
function hasPrototypeProperty(object , name) {    //来自原型返回true
	// body...
	return !object.hasOwnProperty('name') && (name in object)  
}

console.log(hasPrototypeProperty(d,"name"))		//true  
console.log(hasPrototypeProperty(c,"name"))		//falsea