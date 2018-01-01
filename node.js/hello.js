/*exports.world = function(){
	console.log('hello world');
}
*/


//创建模块
function Hello() {
	var name;
	this.setName = function(tname) {
		name = tname;
	};
	this.sayHello = function() {
		console.log('hello:' + name);
	};
};
module.exports = Hello;