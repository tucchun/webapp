<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap">
  <div class="tb-head">社区站展示管理&gt;&gt;新增社区站</div>
  <div class="tb-content">
    <div class="tb-wrap">
    <form action="#"  id="js-form">
      <table class="table wrap-table">
      	<input type="hidden" name="id" value="${stationIntro.id }" />
        <tbody>
        <tr>
          <td><span class="required">*</span>社区站名称:</td>
          <td>
            <div class="col-sm-5">
              <input type="text" class="form-control" name="name" placeholder="请输入名称，不超过20字" value="${stationIntro.name }">
            </div>
          </td>
        </tr>
        <tr>
          <td><span class="required">*</span>社区站地址:</td>
          <td>
            <div class="col-sm-5">
              <input type="text" class="form-control" name="address" placeholder="请输入地址，不超过50字" value="${stationIntro.address }">
            </div>
          </td>
        </tr>
        <tr>
          <td><span class="required">*</span>社区站电话:</td>
          <td>
            <div class="col-sm-5">
              <input type="text" class="form-control" name="phone" placeholder="请输入联系电话" value="${stationIntro.phone }">
            </div>
          </td>
        </tr>
        <tr>
          <td><span class="required">*</span>展示状态:</td>
          <td>
            <div class="form-inline">
              <tags:selectboxMapper name="display" list="${stationIntro.displays }" value="${stationIntro.display?1:0 }" addNull="true"/>
              <span>状态为可见时，将在APP端展示，不可见时，则不展示！</span>
            </div>
          </td>
        </tr>
        <tr>
          <td><span class="required">*</span>社区站简介:</td>
          <td>
            <div>
              <textarea rows="10" name="content" class="form-control" id="content">${stationIntro.content}</textarea>
            </div>
          </td>
        </tr>
        <tr>
          <td>社区站照片:</td>
          <td>
            <div class="form-inline">
              <a class="btn btn-main" id="choseFile">上传</a>
              <span>可选项，图片尺寸规范，宽度为<font color="red">680px</font>，高度不限，格式支持jpg、png、gif，最大不超过1M，可上传多张！</span>
            </div>
            <div class="imglist clearfix">
                 <c:forEach items="${stationIntro.imgs}" var="img" >
                     <div class="pull-left"><img src="${img}" alt="" class="form-img"><input type="hidden" name="imgUrls" value="${img}"><a href="#">删除</a></div>
                 </c:forEach>
             </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div class="col-sm-12 form-submit-btns text-center">
              <button type="button" class="btn btn-main btn-lg" id="js-submit">保存</button>
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
    'jquery','upload',
    'validate','message_zh'
  ], function($, KindEditor){
    var $self = $("#newStationIntro");

    function refresh(){
        // 刷新
        common.createTab({
            uri: '${ctx}/stationIntro',
            data: {name: '社区站展示管理'},
            key: 'stationIntro',
            callback: function(){
                common.closeTab("newStationIntro",null,false);
            }
        });
    };
    
    $self.find("#js-submit").on("click", function(e){
        if($self.find('#js-form').valid()){
        	var data = $self.find('#js-form')[0];
        	if(data.imgUrls==null || typeof(data.imgUrls)=='undefined'){
        		common.alert('图片不能为空');
        		return;
        	}
        	common.fetch({
                url: '${ctx}/stationIntro/${action}',
                type: 'POST',
                data: $self.find("#js-form").serialize(),
                dataType:"text",
                success: function(rt) {
                    <c:if test="${action eq 'update'}">common.alert("修改成功", refresh);</c:if>
                    <c:if test="${action eq 'create'}">common.alert("新增成功", refresh);</c:if>
                }
            });
        }
		
	});
    
    jQuery.validator.addMethod("phone", function(value, element) {
        var length = value.length;
        var phone = /^[0-9-()（）]{7,18}$/;
        var mobile = /^1\d{10}$/;
        return this.optional(element) || (phone.test(value)) || (length == 11 && mobile.test(value));
       }, "联系电话只能是座机或者手机号码");
    
    $self.find('#js-form').validate({
        rules:{
            name:{
                required:true,
                maxlength:20,
            },
            address:{required:true,maxlength:50},
            phone:{required:true,phone:true},
            display:{required:true},
            content:{required:true,maxlength:5000}
        },
        messages:{
        	name:{required:'社区站名称不能为空'},
        	address:{required:'社区站地址不能为空'},
        	phone:{required:'社区站电话不能为空'},
        	display:{required:'展示状态不能为空'},
        	content:{required:'社区站简介不能为空'},
        }
    });
    
    
    var action = "${ctx}/upload/uploadFile",_self = $('#newStationIntro'),button = _self.find('#choseFile'),interval;
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
            window.clearInterval(interval);
            this.enable();
            if(response.retCode == 'success'){
                var uri = response.imgUrl;
                var imgUrl = uri;
                var img = '<div class="pull-left"><img src="' + imgUrl +'" alt="" class="form-img"><input type="hidden" name="imgUrls" value="'+uri+'"><a href="#">删除</a></div>';
                $(_self).find('.imglist').append(img);
            }else{
            	common.alert(response.retMsg);
            }
        }

    });

    //删除上传的图片
    _self.find('.imglist').on('click','a',function(){
        $(this).parent().remove();
    });
    
    
  });
</script>