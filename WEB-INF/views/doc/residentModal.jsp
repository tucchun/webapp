<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt" %>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div id="modal_resident" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="professionalTitleManageLabel">
            	修改用户资料
            </h4>
        </div>
        <div class="modal-body">
            <form class="form-horizontal form-tb clearfix" id="js-form">
                <input type="hidden" name="residentId" value="${resident.residentId }">
            	<input type="hidden" name="userId" id="userId" value="${resident.userId }">
            	<input type="hidden" name=residentAddress id="residentAddress" value="${resident.residentAddress }">
            	<input type="hidden" name="detailId" id="detailId" value="${resident.detailId}">
            	<input type="hidden" name="residentNo" id="residentNo" value="${resident.residentNo}">
            	<input type="hidden" name="residentAge" id="residentAge" value="${resident.decodeAge}">
            	
                <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required">*</span>姓名:</div>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" placeholder="姓名" name="residentName"  value="${resident.user.realName}"/>
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required">*</span>民族:</div>
                    <div class="col-sm-4">
                     	<tags:selectboxValue list="${resident.nations}" name="residentNation" addNull="true" value="${resident.residentNation }" />
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required"></span>出生日期:</div>
                    <div class="col-sm-8">
                    <div class="input-group date form_date col-sm-2" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                        <input id="data_start" name="residentBirthday" class="form-control" size="16" type="text" value="${resident.birthdayStr}" readonly="" style="width:150px">
                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                    </div>
                    </div>
                </div>
                
                 <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required">*</span>与户主关系:</div>
                    <div class="col-sm-4">
                        <tags:selectboxValue list="${resident.residentRelations}" name="residentRelation" addNull="true" value="${resident.residentRelation}" />
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required"></span>身份证号码:</div>
                    <div class="col-sm-4">
                    	<input type="text" class="form-control" placeholder="身份证号码" name="residentIdentity"  value="${resident.user.personId }"/>
                    </div>
                </div>
                
                <c:if test="${isChildren != null and isChildren}">
                <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required"></span>出生证号码:</div>
                    <div class="col-sm-4">
                    	<input type="text" class="form-control" placeholder="出生证号码" name="residentBirthNumber"  value="${resident.residentBirthNumber }"/>
                    </div>
                </div>
                </c:if>
                
                
                <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required">*</span>性别:</div>
                    <div class="col-sm-8">
                    	 <label class="control-label"><input type="radio" value="1" name="residentSex"  <c:if test="${resident.user.sex eq 1 }">checked</c:if> />男</label>
                        <label class="control-label"><input type="radio" value="2" name="residentSex"  <c:if test="${resident.user.sex eq 2 }">checked</c:if> />女</label>
                    </div>
                </div>
                
				<div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required">*</span>人口类别:</div>
                    <div class="col-sm-8">
                        <label class="control-label"><input type="radio" value="1" name="residentType"  <c:if test="${resident.residentType eq 1 }">checked</c:if> />固定人口</label>
                        <label class="control-label"><input type="radio" value="2" name="residentType"  <c:if test="${resident.residentType eq 2 }">checked</c:if> />流动人口</label>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2 control-label">本人电话:</div>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" placeholder="本人电话" name="residentMobile"  value="${resident.residentMobile }"/>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2 control-label">联系人姓名:</div>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" placeholder="联系人姓名" name="residentContactsName"  value="${resident.residentContactsName }"/>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2 control-label">联系人电话:</div>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" placeholder="联系人电话" name="residentContactsMobile"  value="${resident.residentContactsMobile }"/>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2 control-label">监护人1:</div>
                    <div class="col-sm-4">
                        <tags:selectboxMapper name="residentGuradianNo1" id="residentGuradianNo1" list="${resident.residentGuradians}" value="${resident.residentGuradianNo1 }" addNull="true" />
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2 control-label">监护人2:</div>
                    <div class="col-sm-4">
                        <tags:selectboxMapper name="residentGuradianNo2" id="residentGuradianNo2" list="${resident.residentGuradians}" value="${resident.residentGuradianNo2 }" addNull="true" />
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required">*</span>户籍地址:</div>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" placeholder="户籍地址" name="residentHouseholdAddr"  value="${resident.residentHouseholdAddr }"/>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required">*</span>现住址:</div>
                    <div class="col-sm-8">
                        ${resident.residentAddress }
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required">*</span>居民资料修改原因:</div>
                    <div class="col-sm-8">
                    	<textarea class="form-control" placeholder="一句话描述资料修改原因，100字以内" name="editReason" required></textarea>
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="col-sm-2 control-label">身份凭证:</div>
                    <div class="col-sm-8">
                    	 <div><a class="btn btn-main" id="choseFile">选择图片</a><span class="mr10">图片尺寸规范为格式支持jpg、png、gif(100KB以内)，最大不超过1M！</span></div>
                            <br />
                            <div class="imglist clearfix">
                                <div class="pull-left" >             
                                	<c:if test="${not empty resident.identifyImage}">
                                	<img src="/hca/api/business/getfile/${resident.identifyImage }" alt="" class="form-img" style="width:400px;height:300px"/>
                                	</c:if>
                                    <input type="hidden" name="residentIdentitypic" value="/hca/api/business/getfile/${resident.identifyImage }">
                                </div>
                            </div>
                            <input type="text" name="pics" value="1" style="visibility:hidden;"/>
                    </div>
                </div>
		
                <div class="form-group">
                    <div class="operation">
                    	<c:choose>
                    		 <c:when test="${not empty auditStatus and auditStatus eq 1}">
                    		 	 <input type="button" class="btn btn-main" disabled="true" value="待审核" id="js-submit"/>
                    		 </c:when>
                    		 <c:otherwise>
                    		 	<input type="button" class="btn btn-main" value="保存,并提交审核" id="js-submit"/>
                    		 </c:otherwise>
                    	</c:choose>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
require([
	"jquery","KindEditor","zh_CN", 'js/components-select','js/cascade','upload','validate','message_zh'
],function($){
	//debugger;
	var $self = $("#${pageSelf}");
	$self.find('#data_start').datetimepicker({
         language:  'zh-CN',
         weekStart: 1,
         todayBtn:  1,
         autoclose: 1,
         format:'yyyy-mm-dd',
         todayHighlight: 1,
         startView: 2,
         minView: 2,
         maxView: 2,
         forceParse: 0
     });
	$self.find('input[name=residentIdentity]').on('keyup',function(e){
		var idcard = $(this).val();
		var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
		if(regIdCard.test(idcard)){
			$self.find('#data_start').val(idcard.substr(6, 4) + "-" + idcard.substr(10, 2) + "-" + idcard.substr(12, 2))
		}
	});
	$self.find("#js-submit").on("click", function(e){
		
		 if(!$self.find('#js-form').valid()){
			 return;	
		 }
		 var residentGuradianNo1 = $self.find('#residentGuradianNo1').val();
		 var residentGuradianNo2 = $self.find('#residentGuradianNo2').val();
		 if((residentGuradianNo1 !='' || residentGuradianNo2!='') && residentGuradianNo1 == residentGuradianNo2){
			 common.alert("监护人不能相同");
			 return false;
			 
		 }
		common.confirm({
			content:"确认提交审核?",
			success:function(){
				 this.hide();
			     common.post({
			                url: '${ctx}/resident/update',
			                data: $self.find("#js-form").serialize(),
			                modal: $self.find("#modal_resident"),
			                dataType: "JSON"
			            }).done(function(data){
			                common.alert(data.ret_msg);
			                if('1' ==data.ret_code){
			               	// 刷新
			               	$self.find("#js-confirm").trigger("click");
			                }
			            }).fail(function(error){
			           		common.alert("提交审核失败");
			       });
			 }
		});
	});
	
	var action = "${ctx}/upload/uploadFile",button = $self.find('#choseFile'),interval;
    new AjaxUpload($self.find('#choseFile'),{
        action:action,
        onSubmit:function(file,ext){
            if (!(ext && /^(jpg|jpeg|JPG|JPEG|png|PNG|gif|GIF)$/.test(ext))) {
            	common.alert('图片格式不正确,请选择正确图片格式!', '系统提示');
                return false;
            }
            this.disable();
        },
        onComplete:function(file,response){
        	response = JSON.parse(response);
            console.log(response);
            window.clearInterval(interval);
            this.enable();
                if(response.retCode == 'success'){
                	var uri = response.imgUrl;
                	var imgUrl =uri;
                	var imgObj = $('<img/>');
                	imgObj.attr('src',uri);
                	imgObj.load(function(){ 
                	var img = '<div class="pull-left"><img src="' + imgUrl +'" alt="" class="form-img" style="width:400px;height:300px"><input type="hidden" name="residentIdentitypic" value="'+uri+'">'
                    $($self).find('.imglist').html(img);
                	$self.find('input[name=pics]').val(1);
                	});
                }else{
                	common.alert(response.retMsg);
                }
        }

    });
	
	//删除上传的图片
    $self.find('.imglist').on('click','a',function(){
       $(this).parent().remove();
       if(!$self.find('.imglist .pull-left').length){
    	   $self.find('input[name=pics]').val('');
       }
    });

	jQuery.validator.addMethod("phone", function(value, element) {
        var length = value.length;
//        var phone = /(^(\d{3,4}-)?\d{6,8}$)|(^(\d{3,4}-)?\d{6,8}(-\d{1,5})?$)|(\d{11})/;
        var phone = /[0-9-()（）]{7,20}/;
        var mobile = /^1\d{10}$/;
        return this.optional(element) || (phone.test(value)) || (length == 11 && mobile.test(value));
       }, "本人电话只能是座机或者手机号码");
	
	jQuery.validator.addMethod("residentIdentity", function(value, element) {
        var length = value.length;
        var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;  
        return (length==0)|| (length==15 && regIdCard.test(value)) || (length==18 && regIdCard.test(value));
       }, "身份证格式不正确");

    $self.find('#js-form').validate({
        rules:{
            residentMobile:{maxlength:20,phone:true},
            residentContactsName:{maxlength:20},
            residentContactsMobile:{maxlength:20,phone:true},
            residentName:{required:true},
            residentNation:{required:true},
            residentHouseholdAddr:{required:true},
            editReason:{maxlength:100},
            residentIdentity:{maxlength:20,residentIdentity:true},
            residentRelation:{required:true}
        },
        messages:{
        	residentName:{required:"姓名不能为空"},
        	residentNation:{required:"民族不能为空"}
        },
        errorPlacement: function(error, element) {
            if (element.prop('type') === 'checkbox'
                || element.prop('type') === 'radio') {
                error.appendTo(element.parent().parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    $self.find('#js-new-seminar-date').datetimepicker({
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        format:'yyyy-mm-dd'
    });
    
    //切换男女关系
    var defaultOption = "${resident.residentRelation}";
    var defaultResidentGuradianNo1Option = "${resident.residentGuradianNo1}";
    var defaultResidentGuradianNo2Option = "${resident.residentGuradianNo2}";
    var maleOptions = $.parseJSON('${maleOptions}');
    var femaleOptions = $.parseJSON('${femaleOptions}');
    var residentGuradianIds = $.parseJSON('${residentGuradianIds}');
    var residentGuradianValues = $.parseJSON('${residentGuradianValues}');
    $self.find("input[name ='residentSex']").change(function(){
    	$self.find("select[name='residentRelation']").empty();
    	var options = $(this).val()=='1' ? maleOptions:femaleOptions;
    	for(var i = 0;i<options.length;i++){
    		$self.find("select[name='residentRelation']").append("<option value='"+options[i]+"'>"+options[i]+"</option>");
    	}
    	$self.find("select[name='residentRelation']").val(defaultOption);
    });
    
    $self.find("input[name='residentGuradianNo1']").change(function(){
    	var removedVal = $(this).val();
    	$self.find("select[name='residentGuradianNo2']").empty();
    	for(var i = 0;i<residentGuradianIds.length;i++){
    		if(residentGuradianIds[i] != removedVal){
    			$self.find("select[name='residentGuradianNo2']").append("<option value='"+residentGuradianIds[i]+"'>"+residentGuradianValues[i]+"</option>");
    		}
    	}
    	$self.find("select[name='residentGuradianNo2']").val(defaultResidentGuradianNo2Option);
    });
    
    $self.find("select[name='residentGuradianNo1']").change(function(){
    	// 记录当前值
    	defaultResidentGuradianNo2Option = $self.find("select[name='residentGuradianNo2']").val();
    	var removedVal = $(this).val();
    	$self.find("select[name='residentGuradianNo2']").empty();
    	// 添加请选择
    	$self.find("select[name='residentGuradianNo2']").append("<option value=''>请选择</option>");
    	for(var i = 0;i<residentGuradianIds.length;i++){
    		if(residentGuradianIds[i] != removedVal){
    			$self.find("select[name='residentGuradianNo2']").append("<option value='"+residentGuradianIds[i]+"'>"+residentGuradianValues[i]+"</option>");
    		}
    	}
    	$self.find("select[name='residentGuradianNo2']").val(defaultResidentGuradianNo2Option);
    });
    
    $self.find("select[name='residentGuradianNo2']").change(function(){
    	// 记录当前值
    	defaultResidentGuradianNo1Option = $self.find("select[name='residentGuradianNo1']").val();
    	var removedVal = $(this).val();
    	$self.find("select[name='residentGuradianNo1']").empty();
    	// 添加请选择
    	$self.find("select[name='residentGuradianNo1']").append("<option value=''>请选择</option>");
    	for(var i = 0;i<residentGuradianIds.length;i++){
    		if(residentGuradianIds[i] != removedVal){
    			$self.find("select[name='residentGuradianNo1']").append("<option value='"+residentGuradianIds[i]+"'>"+residentGuradianValues[i]+"</option>");
    		}
    	}
    	$self.find("select[name='residentGuradianNo1']").val(defaultResidentGuradianNo1Option);
    });
    
    $self.find("select[name='residentGuradianNo1']").trigger("change");
});
</script>