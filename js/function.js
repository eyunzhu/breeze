
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
        for (i = 0; i < checkobj.length; i++) {
            checkobj[i].checked = true;                   
        }
    }
    
}