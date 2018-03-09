function secBoard(td,tr,m,n,ss) //m是选项卡数量,n是当前选项卡序号
{
	//更新选项卡样式
	for(i=0;i<m;i++) {
		sty2="";
		if (i==n) {
			sty2=ss+"2";
			document.all(td+n).className=sty2;
		} else {
		sty2=ss+"1";
		document.all(td+i).className=sty2;}
	}
	
	//隐藏和显示行
	for(i=0;i<m;i++) {
		if (i==n) {
			document.all(tr+n).style.display="";
			document.all(tr+n).style.height="auto";
		} else {
		document.all(tr+i).style.display="none";
		document.all(tr+i).style.height=0;
		}
	}
}
function showDiv(id,val,cla)
{
	document.getElementById(""+id+"").style.display=val;
	
	document.getElementById("n_"+id+"").className=cla;
}
function startmarquee(lh,speed,delay,id){ 
    var t; 
    var p = false; 
    var o = document.getElementById(id); 
    o.innerHTML += o.innerHTML; 
    o.onmouseover = function(){p=true} 
    o.onmouseout = function(){p=false} 
    o.scrollTop = 0; 
    function start(){ 
        t=setInterval(scrolling,speed); 
        if(!p) o.scrollTop += 2; 
    }
    
    function scrolling(){ 
        if(o.scrollTop%lh!=0){ 
            o.scrollTop += 2; 
            if(o.scrollTop>=o.scrollHeight/2) o.scrollTop = 0; 
        }else{ 
            clearInterval(t); 
            setTimeout(start,delay); 
        } 
    } 
    
    setTimeout(start,delay); 
}
/**
* 问候语
*/
function getSayHi(){
	var msg = '';
	var now = new Date(); 
	var hour= now.getHours();
	if (hour < 6){	msg = "凌晨好!"; }else if(hour < 9){ msg = "早上好!";}else if(hour < 12){ msg = "上午好!";}else if(hour < 14){msg = "中午好!";}else if(hour < 17){msg = "下午好!";}else if(hour < 19){	msg = "傍晚好!";}else if(hour < 22){msg = "晚上好!";}else{msg = "夜里好!";}
	$('#span_sayhi').html(msg + ': ');
}
function AddFavorite(sURL, sTitle) {   
    try {   
        window.external.addFavorite(sURL, sTitle);   
    } catch (e) {   
        try {   
            window.sidebar.addPanel(sTitle, sURL, "");   
        } catch (e) {   
            alert("加入收藏失败，请使用Ctrl+D进行添加");   
        }   
    }   
}     
  
function SetHome(obj, vrl) {   
    try {   
        obj.style.behavior = 'url(#default#homepage)';   
        obj.setHomePage(vrl);   
    } catch (e) {   
        
    }   
} 