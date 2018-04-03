


//继承
  //原型链
	function SuperType(argument) {
		// body...
		this.property = true
	}
	SuperType.prototype.getSuperValue = function(){
		return this.property
	};

	function SubType(argument) {
		// body...
		this.subproperty = false
	}
	SubType.prototype = new SuperType()  //继承了SuperType,本质为重写原型对象
	SubType.prototype.getSubValue = function(){
		return this.subproperty
	}
	var instance = new SubType();
	console.log(instance.getSuperValue())	//true
	console.log(instance.getSubValue())		//false



	//借用构造函数
	function Super(){
		this.color = ['red', 'green' , 'blue']
	}
	function Sub(){
		Super.call(this)	//继承了Super
	}
	var ints = new Sub()
	ints.color.push("black")
	console.log(ints.color)		//[ 'red', 'green', 'blue', 'black' ]

	var ints2 = new Sub()
	console.log(ints2.color)	//[ 'red', 'green', 'blue' ]
	

	function Super1(name){
		this.name = name
	}
	function Sub1(){
		Super1.apply(this,["chenp"])  //继承Super1,并且传递了参数
		this.age = 27
	}
	var a = new Sub1()
	console.log(a.name)		//chenp
	console.log(a.age)		//27


	//组合继承
	function Su(name){
		this.name = name
		this.color = ['red' , 'green' , 'blue']
	}
	Su.prototype.sayName = function() {
		// body...
		console.log(this.name)
	};
	function Sp(name , age){
		Su.call(this , name)

		this.age = age
	}
	  //继承方法
	Sp.prototype = new Su()
	Sp.prototype.constructor = Sp
	Sp.prototype.sayAge = function(){
		console.log(this.age)
	}
	
	var c = new Sp('cp' , 22)
	c.color.push('black')
	console.log(c.color)	//[ 'red', 'green', 'blue', 'black' ]
	c.sayName()		//cp
	c.sayAge()		//22
	var stu = new Sp('liuy' , 22)
	console.log(stu.color)	//[ 'red', 'green', 'blue' ]
	stu.sayName()	//liuy
	stu.sayAge()	//22



	//原型式继承
	var person = {
		name : 'cp1',
		friends : ['a' , 'b' , 'c']
	};
	var anthorPerson = Object(person) 	//相当于创建person对象副本
	console.log(anthorPerson)	//{ name: 'cp1', friends: [ 'a', 'b', 'c' ] }
	anthorPerson.name = 'cp2'
	anthorPerson.friends.push('d')
	var yetAnthorPerson = Object(person)
	console.log(person) 	//{ name: 'cp2', friends: [ 'a', 'b', 'c', 'd' ] }
	yetAnthorPerson.name = 'cp3'
	yetAnthorPerson.friends.push('e')
	 //输出[ 'a', 'b', 'c', 'd', 'e' ]
	 //'cp3' '
	 //cp3'
	console.log(person.friends +'\n' , person.name +'\n' , anthorPerson.name)
