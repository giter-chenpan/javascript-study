
//Part: 遍历元素
$('div').each(function(index){ 			//each（）遍历元素，索引值和元素作为回调函数的第一、二参数
	$(this).prepend(index +":");
	if(this.id==="last") return false;
});

$(':head').map(function(){    			//找到标题元素，映射id，转为数组并排序，
	return this.id;
}.toArry().sort());

//Part: jquery中的getter和setter
$('form').attr("action");   //获取第一个form的action属性
$('#icon').attr("src","icon.gif");  //设置属性
$("#banner").attr({
	src:"dddd",
	alt:"df"
});
$("a").attr("target","_blank");   
$('a').removeAttr("target");  //移出target属性

$('aa').css("font-size");  //获取和设置所有<aa>的字体属性
$('aa').css("font-size","2px");

$('a').addClass("ww");  
$('a+p').addClass('ee');
$('a').removeClass("ss");
$('a').toggleClass("dddd"); //切换类

$('#dd').val()   	//获取表单数据

var elt = $('#site'); 
var position = elt.offset(); //获取元素的位置，相对于文档计算
position.top += 100;		//改变Y坐标
elt.offset(position);		//设置新位置
$("h1").offset(function(f1,f2){  //传入带有位置属性的对象f1，f2，位置向右移动
	return {left:f1.left + 25, top:f2.top};
});

var body = $('body');
var contentWidth = body.width();  		//基本宽度，不包括内边距、边框、外边框
var paddingWidth = body.innerWidth();	//内边距宽度
var borderWidth = body,outerWidth();	//包含内边距和边框的宽度
var marginWidth = body.outerWidth(true);	//包含内边距、边框的宽度、外边距宽度
	//注明：以上方法width()和height()都拥有

function page(){ 		//根据页面数n来滚动窗口，
	var w = $(window);
	var scoll = w.scollTop();
	var current = w.height();
	w.scollTop(n* current + scoll);
}



//Part: 修改文档结构
$('head').append("<br />");    //元素结尾处添加
$('head').prepend("a");			//元素起始处添加
$('head').before("<br />");		//元素前面添加
$('head').after("<br />");		//元素后面添加
$('head').replaceWith("<br />");	//元素head替换为<br />
$('head').empty() 	//删除head下所有的子节点
$('head').remove('a')	//删除head下的a元素


//Part: 事件处理程序
$('#p').click(function(){			//单击修改背景颜色
	$(this).css("background","blue")
});

$('p').bind('click',f);  //等价于$('p').click(f)
$('*').unbind();		//从所有元素中移出jquery事件


//Part: 动画效果(jquery动画为异步)
$('#message').fadeIn();		//淡入，200ms
$('#message').fadeOut('fast');	//淡出，400ms
	//传入参数（时间、回调函数）动画完成时元素里显示文字
$('#message').fadeIn('fast',function(){ $(this).text('hello world'); });   
$("#message").fadeIn({		//将时长和回调函数作对象属性而不是参数传入
	duration:'fast';
	complete:function(){
		$(this).text('hello world');
	}
});
	//先将图像隐藏，然后显示，接着向上活动再向下,
	//show(),hide()必须传入时长
$('img').fadeOut().show(300).slideUp().slideToggle();
	//自定义动画animate()第一个参数必须为对象，
$('img').animate({height:0});	//将所有图片高度缩为0
	//animate()第二个参数可选，可以是选项对象、动画时长、
$('img').animate({	
	opacity:.25,
	font-size:10,
	"margin-left": "+=.5in", //增加段落缩进,(in为英寸),字面量直接属性加“ ”
	opacity:"-=.1" 		//减少透明度
},{
	duration:500,		//动画持续时间
	complete:function(){		//完成时的回调函数
		this.text('hello world');
	}
});
	//缓动函数：'swing'为正弦函数，‘linear’为线性缓动
	//easing属性指定缓动函数名
$('img').animate({"width":"+=100"},{duration:500,easing:"linear"});
= $('img').animate({"width":"100"},500,linear);

//Part jquery中的Ajax	
	//每隔0.6s刷新一次
setInterval(function(){$('#status').load("aa.html");},600);
$("temp").load("dd.html #temperature"); //加载并显示天气预报气温部分
$.getScript("abc.js",function(){ 	//加载类库并立即使用
	$('#div').abc();

});
	//加载URL，jQuery.getJSON()获取文本后解析为JSON文件
	//(用jQuery.parseJSON函数)，解析结果会作为第一个参数
	//传入回调函数中	
	//假设data.json包含{"x":1,"y":2}
jQuery.getJSON("data.json",function(data){
	//data参数是对象{x:1,y:2}
});
jQuery.get('debug.tet',alert); 	//请求文本并在对话框中显示
