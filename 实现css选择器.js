function Base(args){
	this.elements = []; //定义一个存放查找到的节点或者对象集合
	if(typeof args =='string'){ //判断传递的参数是哪种情况，字符串或者对象节点或者函数
		if(args.indexOf(' ')=-1){ //判断字符串是否有空格
			var elements = args.split(' '); //将字符串用空格分割成数组，并保存在elements中
			var childElements = []; //定义一个数组，存放当前查找的节点，最后结果赋值给对象的elements数组
			var node = [];
			for(var i = 0;i<elements.length;++i){ //遍历elements数组,判断每个数组中的第一个字符
				if(node.length==0){
					node = document; //每次查找的n.getElementById()中n为当前查找的节点

				}
				switch(elements[i].charAt[0]){
					case '#':
						childElements = [];
						childElements.push(this.getId(elements[i].substring(1)));
						node = childElements;
						break;
					case '.':
						childElements = []; //下一次循环先将之前的大范围清空，准备小范围
						for(var j = 0;j<node.length;++j){
							//substring(1,j) 从开始到j结束
							//this.getClass ?
							var temps = this.getClass(elements[i].substring(1),node[j]); //getClass(javaobj)，参数javaobj,描述：一个javaobject对象，返回值：javaobj的javaclass对象
							for(var k = 0;k<temps.length;++k){ 
								childElements.push(temps[k]);
							}
						}
						node = childElements; //将本次得到的节点作为父结点保存起来
						break;
					default:
						childElements = [];
						for(var j = 0;j<node.length;++j){
							var temps = this.getTagName(elements[i],node[j]); //?
							for(var k = 0;k<temps.length;++k){
								childElements.push(temps[k]);
							}
						}
				}
			}
			this.elements = childElements; //将最后得到的小范围数组赋值给原型数组准备后续的操作
		}else{
			//链接：
			//https://blog.csdn.net/weixin_39534106/article/details/78079733
		}
	}
}