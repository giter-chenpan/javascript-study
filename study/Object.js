//数据属性
var person = {}
Object.defineProperty(person, "name", {
	writable: false, //只读
	value: "chenpan"
});
console.log(person.name) //chenpan
//person.name = "ll"   //抛出错误
console.log(person.name) //chenpan
Object.defineProperty(person, "name", {
	configurable: false,
	value: "chenpan"
});
//delete person.name  //Cannot delete property 'name' of #<Object>
console.log(person.name)



//访问器属性
var books = {
	_year: 2018, //下划线代表只能通过对象方法访问属性
	edition: 1
};
Object.defineProperty(books, "year", {
	get: function() {
		return this._year
	},

	set: function(newValue) {
		if (newValue > 2018) {
			this._year = newValue
			this.edition += newValue - 2018
		}
	}
});
books.year = 2020;
console.log(books.edition) //3



//多个属性定义
var bok = {}
Object.defineProperties(bok, { //两个参数
	_year: {
		writable: true,
		value: 2010
	},

	editions: {
		writable: true,
		value: 1
	},

	year: { //访问器属性year
		get: function() {
			return this._year
		},
		set: function(newValue) {
			this._year = newValue
			if (newValue > 2010) {

				this.editions += newValue - 2010

			}
		}
	}

});
bok.year = 2050
console.log(bok.editions) //41
//读取属性的特性
var des = Object.getOwnPropertyDescriptor(bok, "_year")
console.log(des.value) //2050
console.log(des.writable) //true