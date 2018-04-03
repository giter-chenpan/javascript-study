 

 //跨浏览器取得窗口相对于左边和上边的位置
	var leftPos = (typeof window.screenLeft == "number") ?
		window.screenLeft : window.screenX ;

	var topPos = (typeof window.screenTop == "number")?
		window.screenTop : window.screenY ;
 //跨浏览器确定页面视口大小
 	var pageWidth = window.innerWidth  //窗口大小
 	var pageHeight = window.innerHeight
 	if(typeof pageWidth != "number"){
 		if(document.compatMode == "CSS1Compat"){ 	//确定是否处于标准模式
 			pageWidth = document.documentElement.clientWidth
 			pageHeight = document.documentElement.clientHeight
 		}else{
 			pageWidth = document.body.clientWidth
 			pageHeight = document.body.clientHeight
 		}
 	}

 	//设置超时调用
 	var timeoutId = setTimeout(function(){
 		console.log("hello")
 	},1000);
 	clearTimeout(timeoutId) 	//取消超时调用


//location对象
	//解析URL中的查询字符串(在浏览器窗口下)
	function getQueryStringArgs(){
		//去掉开头的问号
		var qs = (location.search.length > 0 ?  location.search.substring(1) : "")
		args = {}	//保存数据的对象
		//取得每一项
		items = qs.length ? qs.split("&") : []
		item = null
		name = null
		value = null
		i = 0 
		len = items.length
		//将每一项加入到args对象当中
		for(i = 0 ; i < len ; i++){
			item = items[i].split("=")
			name = decodeURIComponent(item[0])
			value = decodeURIComponent(item[1])
			if(name.length){
				args[name] = value
			}
		}
		return args

	}
	console.log(getQueryStringArgs())


//navigator对象
	//检测插件(plugins属性 , IE中无效)
	function hasPlugins(name){
		name = name.toLowerCase()
		var len = navigator.plugins.length
		for(var i = 0 ; i < len ; i++){
			if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
				return true
			}
			}
			return false
		}
	
	alert(hasPlugins("Flash"))   //true



