


//用户代理检测
	//识别呈现引擎(IE,Gecko,WebKit,KHTML,Opera)
	var client = function(){
		var engine = {
			//呈现引擎
			ie:0,
			gecko:0,
			webkit:0,
			khtml:0,
			opera:0
			ver:null //版本号
	};

	//识别浏览器
	var browser = {
		ie : 0,
		firefox : 0 , 
		safari : 0,
		konq : 0 ,
		opera : 0 ,
		chrome : 0

		ver :null
	};

	//识别平台
	var system = {
		win : false,
		mac : false,
		x11 : false
	};


		return {
			engine : engine,
			browser : browser,
			system : system
		};
	}();

	
