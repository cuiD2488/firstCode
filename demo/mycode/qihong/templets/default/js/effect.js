/*************************导航效果***************************/
$(document).ready(function() {
	$(".topnav > li").hover(
		function(){$(this).children("ul").slideToggle("fast");},
		function(){$(this).children("ul").slideUp("fast");}
	);
});
/*************************主页弹出广告***************************/
$(document).ready(function() {
		$(".popup .close").click( function () { 
			$(".popup").slideUp(1000); 
			$(".popup .cont").empty();
		});
});

/*************************左右相同高度***************************/
$(function(){
    var left_height = $('.NyLeft').height();
    var right_height = $('.NyRight').height();
    if( left_height > right_height ){
        $('.NyRight').height(left_height);
    }else{
        $('.NyLeft').height(right_height);
    }
});

/*************************首页图片切换***************************/
$(document).ready(function(){   
	var speed = 1000, timeout = 5000;
	var $img = $("#PicFade img");
	//图片容器样式
	$("#PicFade").css({
		position:"relative",
		overflow:"hidden"
	});
	//图片样式
	$("#PicFade img").css({
		position:"absolute",
		top:"0",
		left:"0",
		opacity: "0.0"
	});	
	$("#PicFade img:first").css({
		opacity: "1.0"
	});	

	
	setTimeout(function(){ showNext(0, 1); }, timeout);
	
	function showNext(c, n){   
		$($img[c]).animate({opacity: 0.0}, speed);  
		$($img[n]).animate({opacity: 1.0}, speed);
		c = n;
		n = (n >= $img.length - 1) ? 0 : n+1;
		setTimeout(function(){ showNext(c, n); }, timeout);
	};
});
/*************************视频播放***************************/
function MakeVideo(Url,Width,Height){
document.writeln("<object type='application/x-shockwave-flash' data='../upload/video/vcastr3.swf' width='"+Width+"' height='"+Height+"' id='vcastr3'>")
document.writeln("<param name='movie' value='../upload/video/vcastr3.swf' /> ")
document.writeln("<param name='allowFullScreen' value='true' />")
document.writeln("<param name='FlashVars' value='xml=")
document.writeln("<vcastr>")
document.writeln("<channel>")
document.writeln("<item>")
document.writeln("<source>"+Url+"</source>")
document.writeln("</item>")				
document.writeln("</channel>")
document.writeln("</vcastr>'/>")
document.writeln("</object>")
}