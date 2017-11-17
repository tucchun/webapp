<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap">
    <div class="tb-head">医院管理&gt;&gt;新建医院</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <form id="newTopClassHospital-js-form">
                <table class="table wrap-table">
                    <tbody>
                    <tr>
                        <td><span class="required">*</span>医院名称:</td>
                        <td>
                            <div class="col-sm-10"><input type="text" class="form-control" name="name" placeholder="医院名称"></div>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>医院等级:</td>
                        <td>
                            <div class="col-sm-10 form-inline">
                             <tags:selectbox list="${hospitalGradeList}" name="grade" addNull="true"/>
                            
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>所在地区:</td>
                        <td>
                            <div class="form-inline">
                                <select name="province" class="form-control" id="js-province" /><span>省</span>
                        		<select name="city" class="form-control" id="js-city" /><span>市</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>预约量:</td>
                        <td>
                            <div class="col-sm-10"><input type="text" name="appointment" class="form-control" placeholder="预约量" value="0"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>医院头像:</td>
                        <td>
                            <div><a class="btn btn-main" id="choseFile">选择图片</a><span class="mr10">支持jpg、png的图片格式，最大1M</span></div>
                            <br />
                            <div class="imglist clearfix">
                            	<div class="pull-left"><img src="" alt="" id="imgurl" class="form-img"><input type="hidden" id="img" name="img"><a href="#">删除</a></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div class="col-sm-12 form-submit-btns text-center">
                                <button type="button" id="js-submit" class="btn btn-main btn-lg">保存</button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
</div>
<script>

    require([
        'jquery',
        'js/area','upload','validate','message_zh'
    ], function($, area){
        var $self = $("#newTopClassHospital");
        new area({
            $province: $self.find("#js-province"),
            $city: $self.find("#js-city"),
            $district: $self.find("#js-district"),
            url: '${ctx}/area/all',
        });

        $self.find("#js-submit").on("click", function(e){
        	if(_self.find('#newTopClassHospital-js-form').valid()){
    		var $obj = $(this);
    		$obj.hide();
    		common.fetch({
    		    url: '${ctx}/Hospital/create',
    		    type: 'POST',
    		    data: $self.find("#newTopClassHospital-js-form").serialize(),
    		    dataType:"json",
    		    success: function(rt) {
    		       if(1 == rt.ret_code){
    		    	   //$('#topClassHospital').load("${ctx}/Hospital");
    		    	   //common.closeTab('newTopClassHospital');
    		    	   common.createTab({
			               uri: '${ctx}/Hospital',
			               data: {name: '医院列表'},
			               key: 'topClassHospital',
			               callback: function(){
			                   common.closeTab("newTopClassHospital", null, false);
			               }
			           });
    		       }else{
    		    	   $obj.show();  
    		       }
    		    }
    		});}
    	});
        
        
        var action = "${ctx}/upload/uploadFile",_self = $('#newTopClassHospital'),button = _self.find('#choseFile'),interval;
        new AjaxUpload(button,{
            action:action,
            onSubmit:function(file,ext){
                if (!(ext && /^(jpg|jpeg|JPG|JPEG|png|PNG)$/.test(ext))) {
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
                    	var imgUrl = uri;
                    	$self.find('#imgurl').attr("src",imgUrl);
                    	$self.find('#img').val(uri);
                    }else{
                    	common.alert(response.retMsg);
                    }
            }

        });

        //删除上传的图片
        _self.find('.imglist').on('click','a',function(){
           $self.find('#imgurl').attr("src","");
           $self.find('#img').val("");
           //$(this).parent().remove();
        });
        
        $self.find('#newTopClassHospital-js-form').validate({
	        rules:{
	        	name:"required",
	        	grade:"required",
	        	province:"required",
	        	city:"required",
	        	appointment:{required:true,min:0,max:99999999}
	            },
	        messages:{
	        	name:"请填写医院名称",
	        	grade:"请选择医院等级",
	        	province:"请选择医院所在省份",
	        	city:"请选择医院所在城市",
	        	appointment:"请正确填写医院预约量"
	            },
	       errorPlacement: function(error, element) {
	                if (element.prop('name') === 'province'
	                    || element.prop('name') === 'city') {
	                    error.appendTo(element.next());
	                } else {
	                    error.insertAfter(element);
	                }
	            }
	        });
        
    });
</script>