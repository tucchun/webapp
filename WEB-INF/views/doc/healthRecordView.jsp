<%@page import="org.apache.shiro.SecurityUtils"%>
<%@page import="com.newcare.auth.pojo.User"%>
<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags" %>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<%
String url = request.getScheme()+"://"+ request.getServerName()+":"+request.getServerPort();
request.setAttribute("url", url);
%>
<OBJECT
   classid="clsid:1D1ED865-4E1A-413D-8AE2-D3197AD5B85B"
   codebase="/static/print/GRWebPrint.cab#version=1,1,0,4"
	width=0
	height=0
	align='center'
	hspace=0
id="myact">
</OBJECT>
<div class="wrap">
	<span id="printCtrDown" style="display:none;">请先安装打印控件</span>
    <div class="tb-head">健康档案</div>
    <div class="tb-content">
        <div class="tb-wrap clearfix healthRecord">
            <table>
                <tr>
                    <td class="col-sm-5"></td>
                    <td><h3 class="title">${user.realName}的健康档案</h3></td>
                </tr>
                <c:forEach items="${records}" var="record">
                    <tr>
                        <td>
                            <span>${record.decodeRecordDate}</span><i class="icon icon-point"></i>
                        </td>
                        <td>
                            <div>
                                <i class="icon_right"></i>
                                <div class="docname">
                                		${record.recordRoleName}:${record.recordByName}<br/>创建了
                                	<c:if test="${record.recordType eq 501}">
                                		<a onmouseover="view('${user_id}','${authStr}');"
                                    	href="${viewUrl}/src/questionnaire/viewHealthManagementForTheElderly.html?doc_id=${record.recordId}&authStr=${authStr}&user_id=${user_id}&user_id_doc=${user.id}&doc_type=${record.recordType}&isShowNext=false&src_type=DOCTOR&from_host=${url}" target="_blank"><span>${record.recordName}</span></a>
                                	</c:if>
                                	<c:if test="${record.recordType eq 502}">
                                		<a onmouseover="view('${user_id}','${authStr}');"
                                    	href="${viewUrl}/src/questionnaire/viewElderlyLivingAbility.html?doc_id=${record.recordId}&authStr=${authStr}&user_id=${user_id}&user_id_doc=${user.id}&doc_type=${record.recordType}&isShowNext=false&src_type=DOCTOR&from_host=${url}" target="_blank"><span>${record.recordName}</span></a>
                                	</c:if>
                                	<c:if test="${record.recordType ne 501 and record.recordType ne 502}">
	                                    <a onmouseover="view('${user_id}','${authStr}');"
                                    	href="${viewUrl}/dist/web/app.html?doc_id=${record.recordId}&authStr=${authStr}&user_id=${user_id}&user_id_doc=${user.id}&doc_type=${record.recordType}&isShowNext=false&src_type=DOCTOR&from_host=${url}" target="_blank"><span>${record.recordName}</span></a>
                                	</c:if>
                                </div>
                            </div>
                            <c:if test="${record.recordType == 10 || record.recordType == 20 || record.recordType == 30 || record.recordType == 40 || record.recordType == 50 || record.recordType == 60 || record.recordType == 70 || record.recordType == 80|| record.recordType == 90 || record.recordType == 100 || record.recordType == 110 || record.recordType == 120 || record.recordType == 130 || record.recordType == 140 || record.recordType == 190 || record.recordType == 200 ||record.recordType == 210 || record.recordType == 220 || record.recordType == 230 || record.recordType == 240 || record.recordType == 250 || record.recordType == 260 || record.recordType == 139}">
                            	<a class="btn btn-main js_print" data-urlHost = "${viewUrl}" data-docid = "${record.recordId}" data-useriddoc="${user.id}" data-doctype="${record.recordType}" data-ctx = "${ctx}">打印</a>
                            </c:if>
                        </td>
                    </tr>
                </c:forEach>
            </table>
        </div>
    </div>
    <script>
require(['jquery', 'js/printForm/print_form'], function($, print_form) {
	var _self = $('#__healthRecord__');
	var printObj = document.getElementById("myact");
	var pfag = '';
	var printobjStatus = 1;
	printObj.onerror = function(){
		_self.find('#printCtrDown').show();
	};
	_self.find('a.js_print').click(function(){
		pfag = 0;
		var ua = window.navigator.userAgent;
		if(ua.indexOf('Trident') < 0){
			common.alert('打印功能只支持IE9.0或以上版本的浏览器。。。。');
			return false;
		}
		common.markModal('正在打印中。。。。','','show');
		var _this = $(this),doc_type = _this.attr('data-doctype');
		var args = {
			'doc_id':_this.attr('data-docid'),
			'user_id_doc':_this.attr('data-useriddoc'),
			'doc_type':doc_type
		};
		try{
			if(printobjStatus == 1){
				printObj.WebPrintSetDialog();
				printobjStatus += 1;
			}
		}catch(err){
			console.log(JSON.stringify(err));
		}
		print_form.getFormData(args).done(function(data){
			console.log(data);
			var str_data = '',file = '';
			switch(doc_type){
				case '10':
					str_data = data + '|';
					file = '0007';
					checkFile(file,str_data,12,'健康档案封面');
					break;
				case '20':
					str_data = data + '|';
					file = '0001';
					checkFile(file,str_data,107,'个人基本信息表');
					break;
				case '30':
					var str_arr = data.split('|');
					var count = [73,83,65,77];
					var name = ['健康体检表1','健康体检表2','健康体检表3','健康体检表4'];
					for(var i = 0;i<4;i++){
						var filename = i-0+2;
						file = '000'+filename;
						var str_data1 = '';
						str_data1 = str_arr.splice(0,count[i]).join('|');
						console.log(str_data1);
						str_data1+='|';
						checkFile(file,str_data1,count[i],name[i]);
					}
					break;
				case '60':
					str_data = data + '|';
					file = '0008';
					checkFile(file,str_data,29,'双向转诊(转出)');
					break;
				case '70':
					str_data = data + '|';
					file = '0009';
					checkFile(file,str_data,27,'双向转诊(转回)');
					break;
				case '90':
					str_data = data + '|';
					file = '0010';
					checkFile(file,str_data,109,'第1次产前检查服务记录表');
					break;
				case '100':
					str_data = data + '|';
					file = '0011';
					checkFile(file,str_data,113,'第2~5次产前随访记录表');
					break;
				case '250':
					str_data = data+'|';
					file = '0006';
					checkFile(file,str_data,53,'严重精神障碍患者个人信息补充表');
					break;
				case '260':
					str_data = data+'|';
					file = '0013';
					checkFile(file,str_data,79,'严重精神障碍患者随访服务记录');
					break;
				case '40':
					str_data = data + '|';
					file = '0040';
					checkFile(file,str_data,10,'接诊记录');
					break;
				case '50':
					str_data = data + '|';
					file = '0050';
					checkFile(file,str_data,28,'会诊记录');
					break;
				case '110':
					str_data = data + '|';
					file = '0110';
					checkFile(file,str_data,37,'产后访视记录表');
					break;
				case '120':
					str_data = data + '|';
					file = '0120';
					checkFile(file,str_data,35,'产后42天健康检查记录表');
					break;
				case '190':
					str_data = data + '|';
					file = '0016';
					checkFile(file,str_data,25,'6-18月龄儿童医药健康管理服务记录表');
					break;
				case '200':
					str_data = data + '|';
					file = '0017';
					checkFile(file,str_data,25,'24-36月龄儿童医药健康管理服务记录表');
					break;
				case '210':
					str_data = data + '|';
					file = '0210';
					checkFile(file,str_data,230,'高血压患者健康管理服务');
					break;
				case '220':
					str_data = data + '|';
					file = '0220';
					checkFile(file,str_data,225,'2型糖尿病患者随访服务记录表');
					break;
				case '230':
					str_data = data + '|';
					file = '0230';
					checkFile(file,str_data,46,'肺结核患者第一次入户随访记录表');
					break;
				case '240':
					str_data = data + '|';
					file = '0240';
					checkFile(file,str_data,166,'肺结核患者随访服务记录表');
					break;
				case '130':
					str_data = data +'|';
					file = '0012';
					checkFile(file,str_data,91,'3-6岁儿童健康检查记录表');
					break;
				case '140':
					str_data = data +'|';
					file = '0014';
					checkFile(file,str_data,198,'3-6岁儿童健康检查记录表');
					break;
				case '80':
					str_data = data +'|';
					file = '0015';
					checkFile(file,str_data,31,'居民健康档案信息卡');
					break;
				case '139':
          			str_data = data +'|';
					if(/^40000/.test(str_data)){
            			// 1-8月
						checkFile('0138',str_data,277,'1～8月龄儿童健康检查记录表');
      			var arr = str_data.split('|');
      			arr = arr.slice(-9);
      			checkFile('0137',arr.join('|'),8,'1～8月龄儿童健康检查记录表');
    			}else{
     				// 12-30月
      			checkFile('0139',str_data,254,'12～30月龄儿童健康检查记录表');
    			}
    			break;
				}
				common.markModal('','',false);
				if(pfag != 0){
					common.markModal('','',false);
					common.alert('打印失败，您的打印控件未正确安装，请重新安装！');
				}
		});
	});
	function checkFile(filename,str_data,cont,name){
		var url = '/static/rss/'+filename+'.ini';
		common.fetch({
			"url":url,
			async:false,
			type:"get",
			success:function(res){
                try{
                    var fs = printObj.SavePrintSetFile(filename,res,0);
                        //printObj.WebPrintSetDialog();
                    if(fs == 0){
                        if(printObj.CopyRight('copyright2017-2018','D4BB30E245855CBDF4233E58') == 0){
                            if(printObj.CheckPrintDrv() == 0){
                            var flag = printObj.WebBillPrint(filename,name,cont,str_data,0,'');
                            if(flag == 0 && pfag == 0){
                                    pfag = flag;
                                }else{
                                    pfag = 1;
                                }
                            }
                        }
                    }
                }catch(err){
					console.log(JSON.stringify(err));
                    pfag = 1;
                }
			}
		});
		/* if(printObj.CheckPriIDExists(filename)){
			var url = '/static/rss/'+filename+'.ini';
			$.ajax({
				"url":url,
				async:false,
				success:function(res){
					var fs = printObj.SavePrintSetFile(filename,res,0);
					if(fs == 0){
						if(printObj.CopyRight('copyright2017-2018','D4BB30E245855CBDF4233E58') == 0){
							printObj.CheckPrintDrv() == 0 ? printObj.WebBillPrint(filename,name,cont,str_data,0,'') : false;
						}
					}
				}
			});
		}else{
			//if(printObj.CopyRight('copyright2017-2018','D4BB30E245855CBDF4233E58') == 0){
				printObj.CheckPrintDrv() == 0 ? printObj.WebBillPrint(filename,name,cont,str_data,0,'') : false;
			//}
		} */
	}

	// 定时刷新
/* 	setInterval("refresh()",8*60*1000); */
	var time = 8*60*1000;
	setTimeout(function(){
		console.log('settimeout run');
	    common.load({
	    	url: '${ctx}/resident/view/${user.id}',
	        data: {},
	        container: 'healthRecord'
	    });
	}, time)
});

function view(userIdParam,authStrParam){
	$.post('${ctx}/resident/checkLoginStatus',{'userIdParam':userIdParam,'authStrParam':authStrParam},function(data){
		if(data.ret_code == 2){
			common.alert('当前用户已在其他客户端登录, 请重新登录操作',function(){
			window.location.href="/logout";
			});
		}
	},'json');
};

</script>
</div>
