

/*var o{
	m: function(){
		var self=this;
		console.log(this===o);
		f();
	
	function f(){
		console.log(this===o);
		console.log(self===o);
	}
}
};
o.m();


function getPropertyNames(o,a){
	if(a===undefined) a=[];
	for(var property in o)  a.push(property);
		return a;
}
var a=getPropertyNames(o);
getPropertyNames(p,a);
*/




 var a={square:function(x){return x*x;}};
var y=a.square(16);
console.log(y);
var a=[function(x){return x*x;},20];
console.log(a[0](a[1]));


function range(from,to){
	var r=inherit(range.methods);
	r.from=form;
	r.to=to;
	return r;
}	
	range.methods={
		includes:function(x){
			return this.from < = x && x < =this.to;
		},

	}