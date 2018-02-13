// JavaScript Document
function change(myid,mode){
	document.getElementById(myid).style.display=mode;
	if(mode=='block'){
		//设置下拉边框
		document.getElementById(myid).style.border="1px solid #eee";
		document.getElementById(myid).style.borderTop="none"
		//设置下拉
		document.getElementById(myid).parentNode.style.backgroundColor="#fff";
		document.getElementById(myid).parentNode.style.border="1px solid #eee";
		}
	}
	