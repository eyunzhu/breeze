# breeze
### 常用js、css、文件等
## js
- 引用
> 直接引用
``` 
	<script type="text/javascript" src="http://file.eyunzhu.com/js/function.js" ></script>
```
> 下载后引用 [点击下载](http://file.eyunzhu.com/js/function.js.tar.gz)
``` 
	<script type="text/javascript" src="../js/function.js" ></script>
```

***
### 函数：
- checkToggle(name)
	- 作用：单选按钮 全选 或 取消全选 [进入演示](http://breeze.eyunzhu.com/demo/js/checkToggle.html)
	
	``` 
	函数名：checkToggle
	参数：name （单选框 name属性）
	功能：全选 或 取消全选
	语法例：
	<button onclick="checkToggle('hobby')">全选</button>
	```
- copyStr(id,boolean)
	- 作用：复制内容到剪切板 [进入演示](http://breeze.eyunzhu.com/demo/js/copyStr.html)
	
	``` 
	语法例：
	<button onclick="copyStr('inp1')">复制到剪切板</button>
	<button onclick="copyStr('inp2',true)">复制到剪切板</button>
	```
