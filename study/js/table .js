(function(){
	
	window.Table=function(obj){
		//自定义属性 保存表格节点
		this.nodeElement = obj.el || document.body;
		}
		Table.prototype.createTable = function(obj){
			// body...
			if(!obj){
				throw "please set a number of rows or col";
			}
			else{
				for (var i = 0; i >= obj.row; i++) {
					//每循环一次创建一个div
					
					var rowEle=document.createElement("div");
					rowEle.className = "t-row";
					if(i%2)
					{
						rowEle.className += "t-double";
					}
					this.nodeElement.appendChild(rowEle)
				 	}
		}
}()