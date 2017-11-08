<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags" %>
<%request.setAttribute("prj", Constants.PRJ_PERFIX);%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj}"/>
    <OBJECT
        classid="clsid:1D1ED865-4E1A-413D-8AE2-D3197AD5B85B"
        codebase="/static/print/GRWebPrint.cab#version=1,1,0,4"
        width=0
        height=0
        align='center'
        hspace=0
        id="myact">
        </OBJECT>
    <span id="printCtrDown" style="display:none;">请先安装打印控件</span>
<table cellspacing="0" class="table table-striped table-hover table-bordered">
    <thead>
    <tr>
        <th>序号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        <th>民族</th>
        <th>本人电话</th>
        <th>联系人姓名/电话</th>
        <th>身份证号码</th>
        <th>所属网格</th>
        <th>所属人群</th>
        <th>管辖者</th>
        <th>建档时间</th>
        <th>建档人</th>
        <th>档案打印状态</th>
        <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <c:forEach items="${pages.content}" var="resident" varStatus="status">
        <tr>
            <td>${status.index+1}</td>
            <td>${resident.user.realName}</td>
            <td>${resident.decodeSex}</td>
            <td>${resident.decodeAge}</td>
            <td>${resident.residentNation}</td>
            <td>${resident.residentMobile}</td>
            <td>${resident.residentContactsName}/${resident.residentContactsMobile}</td>
            <td>
                <c:if test="${resident.user.personId ne null and resident.user.personId ne ''}">
                    ${resident.user.personId}
                </c:if>
                <c:if test="${resident.user.personId eq null or resident.user.personId eq ''}">
                    ${resident.residentBirthNumber}
                </c:if>
            </td>
            <td>${resident.householdAddress}</td>
            <td>${resident.decodeResidentGroup}</td>
            <td>${resident.hecadreName}</td>
            <td>${resident.decodeCreateDate}</td>
            <td>${resident.creatorName}</td>
            <td>${resident.decodeResidentPrintCount}</td>
            <td class="optCol">
                <c:if test="${right eq 'all'}">
	                <a href="#" data-id="${resident.residentId}" class="js-update">编辑</a>
                	<a href="#" data-id="${resident.residentId}" class="js-delete">删除</a>
	                <a href="#" data-id="${resident.userId}" class="js-view">查看档案</a>
	                <a href="#" data-id="${resident.userId}" class="js-print">打印档案</a></td>
                </c:if>
                <c:if test="${right eq 'lite'}">
                	<a href="#" data-id="${resident.residentId}" class="js-update">编辑</a>
	                <a href="#" data-id="${resident.userId}" class="js-view">查看档案</a>
	                <a href="#" data-id="${resident.userId}" class="js-print">打印档案</a></td>
                </c:if>
                <c:if test="${right eq 'readonly'}">
	                <a href="#" data-id="${resident.userId}" class="js-view">查看档案</a>
                </c:if>
        </tr>
    </c:forEach>
    </tbody>
</table>
<tags:pagination page="${pages}" action="${ctx}/${pageUrl}" pageId="${pageSelf}"  table_id="${pageSelf}"/>
<script>
    require([
        'jquery',
    'js/printForm/print_form'
    ],function($,print_form){
    	var $self = $("#${pageSelf}");
        
        var printObj = $self.find("#myact")[0];
        var printFlag = 0;
        var ua = window.navigator.userAgent;
        printObj.onerror = function(){
            $self.find('#printCtrDown').show();
        };
        $self.find(".js-update").on("click", function(e){
            var id = $(this).attr('data-id');
            common.getHtml("${ctx}/resident/update/"+id+"/${pageSelf}").done(function(html){
                $("#div_include_modal").html(html);
                $("#modal_resident").modal('show');
            });
        });

        $self.find(".js-delete").on("click", function(e){
            var id = $(this).attr('data-id');
            common.confirm({
                content:"确认删除？",
                success:function(){
                    var self = this;
                    $.get("${ctx}/resident/delete/"+id,function(data){
                        common.alert(data.ret_msg);
                        $self.find("#js-confirm").trigger('click');
                        self.hide();
                    },"JSON");
                }
            });
        });

        $self.find(".js-view").on("click", function(e){
            var id = $(this).attr('data-id');
            common.createTab({
                uri: '${ctx}/resident/view/'+id,
                data: {name: '健康档案'},
                key: 'healthRecord'
            });
        });
        
        $self.find(".js-print").on('click',function(e){
            if(ua.indexOf('Trident') < 0){
                common.alert('打印功能只支持IE9.0或以上版本的浏览器。。。。');
                return false;
            }
        	var id = $(this).attr('data-id');
        	common.confirm({
        		content:'是否打印?',
        		success:function(){
                    this.hide();
                    common.fetch({
                		url:'${ctx}/resident/print/'+id,
                		type:'get',
                		dataType:'json',
                		success:function(datas){
                			$self.find("#js-confirm").trigger('click');
                            try{
                                if(!printFlag){
                                    printObj.WebPrintSetDialog();
                                    printFlag += 1;
                                }
                                common.markModal('正在打印中。。。。','','show');
                                for(var i = 0;i<datas.length;i++){
                                    var doc = datas[i].recordType;
                                    var args = {
                                        'doc_id':datas[i].recordId,
                                        'user_id_doc':id,
                                        'doc_type':doc
                                    };
                                    print_data(doc,args);
                                    //var data = datas[i];
                                    //str += data.recordName+",";
                                }
                            }catch(err){
                                console.log(JSON.stringify(err));
                            }
                            common.markModal('','',false);
                			//common.alert(str);
                		}
                	});
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
                        if(fs == 0){
                            if(printObj.CopyRight('copyright2017-2018','D4BB30E245855CBDF4233E58') == 0){
                                if(printObj.CheckPrintDrv() == 0){
                                    printObj.WebBillPrint(filename,name,cont,str_data,0,'');
                                }
                            }
                        }
                    }catch(err){
                        console.log(JSON.stringify(err));
                        pfag = 1;
                    }
                }
            });
        }

        function print_data(doc,args){
            print_form.getFormData(args).done(function(str_print){
                var str_data = '',file = '';
                switch(doc){
                    case 10:
                        str_data = str_print + '|';
                        file = '0007';
                        checkFile(file,str_data,12,'健康档案封面');
                        break;
                    case 20:
                        str_data = str_print + '|';
                        file = '0001';
                        checkFile(file,str_data,107,'个人基本信息表');
                        break;
                    case 30:
                        console.log('30');
                        var arStr = str_print.split('|');
                        var cnt = [73,83,65,77];
                        var na = ['健康体检表1','健康体检表2','健康体检表3','健康体检表4'];
                        for(var idx = 0;idx<4;idx++){
                            var fil = idx + 2;
                            file = '000'+fil;
                            var str_datas = '';
                            str_datas = arStr.splice(0,cnt[idx]).join('|');
                            str_datas+='|';
                            checkFile(file,str_datas,cnt[idx],na[idx]);
                        }
                        break;
                    case 31:
                        console.log('31');
                        var str_arr = str_print.split('|');
                        var count = [73,83,65,77];
                        var name = ['健康体检表1','健康体检表2','健康体检表3','健康体检表4'];
                        for(var i = 0;i<4;i++){
                            var filename = i+2;
                            file = '000'+filename;
                            var str_data1 = '';
                            str_data1 = str_arr.splice(0,count[i]).join('|');
                            str_data1+='|';
                            checkFile(file,str_data1,count[i],name[i]);
                        }
                        break;
                }
            });
        }
    });
</script>