/*

//获取或设置html元素
$("form").attr("action"); //获取一个form元素的action属性
$("#icon").attr("src","icon.gif"); //设置src属性
$("a").attr("target",function () {
	if(this.host==location.host) return "_self"
		else return "_blank"
});


//获取设置css属性

$("h1").css("font-weight"); //获取属性
$("div .note").css("border","5px solid black");//设置属性
$("h1").addClass("hilite");//添加类
$("p").removeClass("hilite");//删除类

//获取和设置html表单值



$("p").click(function(){$(this).css("background-color","black");})



//js作用域、闭包


var a =  5;
function fn(){
	var a = 10;
	console.log(a);
	function b(){
		a ++;
		console.log(a);
	}
	return b;
}

var c = fn();
c();
fn()();
c();



	
	

for(var i = 0 ;i <5 ; i++){
	(function(j){
		setInterval(function(){
		console.log(i)
	},1000);
	})(i);
}

console.log(new Date,i);

*/



var x = 0;
var foo = {
    x:1,
    bar:function () {
        console.log(this.x);
       
    }
}


      // 1
 foo.bar() // this: 0, that: 1
 console.log(foo.prototype)