
/*函数名：checkToggle
 * 参数：name （单选框 name属性）
 * 功能：全选 或 取消全选
 */
function checkToggle(name){
    var checkobj=document.getElementsByName(name);
    var i;
    var flag =true;
    for (i = 0; i < checkobj.length; i++) {
        if(!(checkobj[i].checked)){
            flag=false;
            break;
        }                        
    }
    if(flag){
        for (i = 0; i < checkobj.length; i++) {
            checkobj[i].checked = false;                   
        }
    }
    else{
        for (i = 0; i < checkobj.length; i++) 
            checkobj[i].checked = true;  
    }    
}
/*函数名：copyStr
 *参数：id,boolean
 *功能：复制内容到剪切板
 */
function copyStr(id,boolean){
	var str=document.getElementById(id).value;
    var oInput = document.createElement('input');
    oInput.value = str;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    oInput.className = 'oInput';
    oInput.style.display='none';
    if(boolean)    	
    	alert('复制成功');
}
