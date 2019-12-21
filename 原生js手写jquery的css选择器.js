// id选择器
function(id){
	return document.getElementByid(id);
}
// class类选择器
function(class){
	return document.getElementsByClassName(class);
}
//原生js——实现Jquery写法（注意：一定要写'#'和'.'）
//$是什么意思
function $(str){
	//ID选择器
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}
	//类选择器
	else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}
	//标签选择器,例如div
	else{
		return document.getElementsByTagName(str);
	}
}