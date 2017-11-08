var common = {};
var Util = {};
common.demo = false;
common.demoUrl = "";




Util.formatDate = function(dateStr){
	var date = new Date(dateStr);
	var arr = [];
	arr.push(date.getFullYear());
	arr.push(date.getMonth() + 1);
	arr.push(date.getDate());
	return arr.join("-");
}
Util._param = {};
Util.cvt = function(num){
	var ch = "";
	switch (num){
		case 0:
			ch = "零";
			break;
		case 1:
			ch = "一";
			break;
		case 2:
			ch = "二";
			break;
		case 3:
			ch = "三";
			break;
		case 4:
			ch = "四";
			break;
		case 5:
			ch = "五";
			break;
		case 6:
			ch = "六";
			break;
		case 7:
			ch = "七";
			break;
		case 8:
			ch = "八";
			break;
		case 9:
			ch = "九";
			break;
		default:
			ch = "零";
			break;
	}
	return ch;
};
Util.param = function(name, data, ctx){
	ctx = ctx || Util._param;
	if(data){
		ctx[name] = data;
	}
	return ctx[name];
}

Util.defaultValue = function(){
	return "无";
}

Util.value = function(value){
	return value || "无";
}


common.getUrlParam = function(name){
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
};


// ajax 设置
common.ajaxSettings = {
	type: 'POST',
	contentType: "application/json; charset=utf-8",
	dataType: "json"
};

common.param = function(uri){
	uri = uri || "";
	var paramStr = uri.substring(uri.indexOf("?") + 1);
	var paramArr = paramStr.split("&");
	var paramObj = {};
	var temp = [];
	paramArr.forEach(function(item){
		temp = item.split("=");
		paramObj[temp[0]] = temp[1];
	});
	return paramObj;
}

// ajax请求2次封装
common.fetch = function(settings){
	var opts = $.extend({}, common.ajaxSettings, settings, {success: function(){}, error: function(){}});
	var deferred = {};
	console.log("===============请求接口开始===============\n");
	console.log("请求接口：" + opts.url + "\n");
	console.log("参数：" + opts.data + "\n");

	if(common.demo){
		// 用本地数据
		deferred = $.Deferred();
		$.ajax({
			url: opts.demoUrl || "",
			dataType: "json",
			success: function(result){
				deferred.resolve(result);
			},
			error: function(xhr, errorType, error){
				if(errorType === "parsererror"){
					deferred.reject(JSON.stringify("json解析失败！"));
				}
				deferred.reject(JSON.stringify(error.stack));
			}
		});
	}else{
		deferred = $.ajax(opts);
	}

	deferred.done(function(data){
		console.log("响应数据：" + JSON.stringify(data) + "\n");
		console.log("===============请求接口结束===============\n");
	}).done(settings.success).fail(function(err){
		console.log("响应失败：" + err + "\n");
		console.log("===============请求接口结束===============\n");
	}).fail(settings.error);

	return deferred;
};
