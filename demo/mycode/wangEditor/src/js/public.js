var Helper = {};


Helper.localhost = 'http://localhost:8080/'
Helper.dev = '/'


// testartea标签高度自适应
Helper.autoTextarea = function (elem, extra, maxHeight) {
    extra = extra || 0;
    var isFirefox = !! document.getBoxObjectFor || 'mozInnerScreenX' in window,
        isOpera = !! window.opera && !! window
            .opera
            .toString()
            .indexOf('Opera'),
        addEvent = function (type, callback) {
            elem.addEventListener ? elem.addEventListener(type, callback, false) : elem.attachEvent('on' + type,
                callback);
        },
        getStyle = elem.currentStyle ? function (name) {
            var val = elem.currentStyle[name];
            if (name === 'height' && val.search(/px/i) !== 1) {
                var rect = elem.getBoundingClientRect();
                return rect.bottom - rect.top - parseFloat(getStyle('paddingTop')) - parseFloat(getStyle(
                    'paddingBottom')) + 'px';
            };
            return val;
        } : function (name) {
            return getComputedStyle(elem, null)[name];
        },
        minHeight = parseFloat(getStyle('height'));
    elem.style.resize = 'none'; //如果不希望使用者可以自由的伸展textarea的高宽可以设置其他值
 
    var change = function () {
        var scrollTop,
            height,
            padding = 0,
            style = elem.style;
 
        if (elem._length === elem.value.length)
            return;
        elem._length = elem.value.length;
 
        if (!isFirefox && !isOpera) {
            padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
        };
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
 
        elem.style.height = minHeight + 'px';
        if (elem.scrollHeight > minHeight) {
            if (maxHeight && elem.scrollHeight > maxHeight) {
                height = maxHeight - padding;
                style.overflowY = 'auto';
            } else {
                height = elem.scrollHeight - padding;
                style.overflowY = 'hidden';
            };
            style.height = height + extra + 'px';
            scrollTop += parseInt(style.height) - elem.currHeight;
            document.body.scrollTop = scrollTop;
            document.documentElement.scrollTop = scrollTop;
            elem.currHeight = parseInt(style.height);
        };
    };
 
    addEvent('propertychange', change);
    addEvent('input', change);
    addEvent('focus', change);
    change();
};
//去掉字符串内所有的html标记
Helper.delHtmlTag = function (str) {
    return str.replace(/<[^>]+>/g, "");
}
//获取url中参数
Helper.getQueryString = function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window
        .location
        .search
        .substr(1)
        .match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
//数组按参数排序
Helper.sortArry = function (b, a) {
    if (a['createTime'] == null && b['createTime'] == null) {
        return 0;
    } else if (a['createTime'] == null) {
        return -1;
    } else if (b['createTime'] == null) {
        return 1;
    } else {
        if (parseFloat(a['createTime']) == parseFloat(b['createTime'])) {
            return 0;
        } else {
            return parseFloat(a['createTime']) > parseFloat(b['createTime']) ? 1 : -1
        }
    }
}
/**
 * 时间格式化
 */
Helper.timeFormat = function (time, format = 'yyyy-MM-dd') {
    if (!time)
        return '';
    var theTime = typeof (time) === 'object' ? time : new Date(time);
    var _year = theTime.getFullYear();
    format = format.replace('yyyy', _year);
    var _month = theTime.getMonth() + 1;
    format = format.replace('MM', _month < 10 ? '0' + _month : _month);
    var _day = theTime.getDate();
    format = format.replace('dd', _day < 10 ? '0' + _day : _day);
    var _hour = theTime.getHours();
    format = format.replace('HH', _hour < 10 ? '0' + _hour : _hour);
    var _minute = theTime.getMinutes();
    format = format.replace('mm', _minute < 10 ? '0' + _minute : _minute);
    var _second = theTime.getSeconds();
    format = format.replace('ss', _second < 10 ? '0' + _second : _second);
    return format
  }
  Helper.$lay = function(text){
  	$('body').append('<div class="public_lay">'+text+'</div>').find('.public_lay').animate({top:'50px'},400,function(){
						setTimeout(function(){
							$('.public_lay').hide(500,function(){
								$('.public_lay').remove()
							})
						},2000)
					})
  }

   Helper.$lay1 = function(text,obj){
   	var layTemplat = '	<div class="public_lay1">\
		<div class="lay_text">'+text+'</div>\
		<div class="lay_bt lay_bt_left">取消</div>\
		<div class="lay_bt lay_bt_right">确定</div>\
	</div>'
	
  	$('body').append(layTemplat).find('.public_lay1').animate({top:'50px'},400,function(){
						$("body").append('<div class="lay_body"></div>')
							$('.lay_bt_left').click(function(){
								$(this).parent('.public_lay1').remove();
								$('.lay_body').remove()
							});
							$('.lay_bt_right').click(function(){
								obj();
								$(this).parent('.public_lay1').remove();
								$('.lay_body').remove()
							})
						
					});

  	
  }
