<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap">
    <div class="tb-head">轮播图管理&gt;&gt;轮播图修改</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <form id="editCarousel-js-form">
            <input type="hidden" name="id" value="${goods.id }" />
                <table class="table wrap-table">
                    <tbody>
                    <tr>
                        <td>标题:</td>
                        <td>
                            <div class="form-inline"><input type="text"  style="width:228px;" name="carouselTitle" class="form-control" value="${pages.carousel_title }"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>上传图片:</td>
                        <td>
                            <div><a class="btn btn-main" id="choseFile">选择图片</a><span class="mr10">图片尺寸规范为：750*300px，格式支持jpg、png、gif，最大不超过1M！</span></div>
                            <br />
                            <div class="imglist clearfix">
                                <div class="pull-left">             
                    				<c:forEach items="${pages.image_path}" var="e">
            		 				<!-- 	<img alt="" src="${ctx}/upload/img/${e}" height=80 width="150"> -->
            		 					   <img src="${e}" alt="" class="form-img">
                   					 </c:forEach>
                                    <input type="hidden" name="picurl" value="${pages.image_path}"><a href="#">删除</a>
                                </div>
                            </div>
                            <input type="text" name="pics" value="1" style="visibility:hidden;"/>
                        </td>
                    </tr>
                    
                     <tr>
                    	<td>链接:</td>
                        <td>
                            <div class="form-inline"><input type="text" style="width:488px;"  name="extend1" class="form-control" value="${pages.extend1 }">  如果添加了图片跳转链接，详情可不输入!</div>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>轮播图详情:</td>
                        <td>
                            <div class="edit">
                                <textarea name="carouselDetails" id="kindEditor_updatecarousel" style="width:776px;height:360px;">${pages.carousel_details}</textarea>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div class="col-sm-12 form-submit-btns text-center">
                           	    <input type="hidden" name="carouselId" value="${pages.carousel_id}"> 
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
    require(["jquery","KindEditor","zh_CN", 'js/components-select','js/cascade','upload','validate','message_zh'], function ($,zh_CN,K,select,cascade) {
    	 var editor = KindEditor.create('#kindEditor_updatecarousel', {
        	 resizeType : 1,
             allowPreviewEmoticons: false,
             allowImageUpload:true,
             allowFileManager:true, 
             uploadJson:'${ctx}/upload/uploadFile1',
             urlType:'absolute',
             afterUpload: function (url) {
                 this.sync();
             },
             afterBlur: function(){this.sync();}
            /*  ,   
             items : [
               'fontname','fontsize', '|','forecolor', 'hilitecolor','bold', 'italic','underline',
               'removeformat','|', 'justifyleft','justifycenter', 'justifyright','insertorderedlist',
               'insertunorderedlist','|', 'emoticons','link','media','|','image'
             ] */
        });
        var $self = $("#__updateClassify__");
        
  
    	$self.find("#js-submit").on("click", function(e){
    		editor.sync();
   			if(!$self.find('#kindEditor_updatecarousel').val()){
    			$self.find('#contents').val('');
    		}
   			
   			if($self.find('#kindEditor_updatecarousel').val().length > 5000){
   				common.alert("详情文本太长");
    			return false;
    		}
   			var $form = _self.find('#editCarousel-js-form');
    		if($form.valid()){
    		var $obj = $(this);
    		$obj.hide();
    		common.fetch({
                url: '${ctx}/carousel/add',
                type: 'POST',
                data: $self.find("#editCarousel-js-form").serialize(),
                dataType:"text",
               success: function(rt) {
    		       if('success' == rt){
    		    	   //$('#goodsList').load("${ctx}/Goods");
    		    	   //common.closeTab('editGoods');
    		    	   common.createTab({
			               uri: '${ctx}/carousel',
			               data: {name: '商品列表'},
			               key: 'carousel',
			               callback: function(){
			            	   common.closeTab("__updateClassify__", null, false);
			               }
			           });
    		       }else{
    		    	   common.alert(rt);
    		    	   $obj.show();  
    		       }
    		    }
    		});
    	   }
    	}); 
    	
    	
    	var action = "${ctx}/upload/uploadFile",_self = $('#__updateClassify__'),button = _self.find('#choseFile'),interval;
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
                    	var imgUrl =uri;
                    	var imgObj = $('<img/>');
                    	imgObj.attr('src',uri);
                    	imgObj.load(function(){ 
                    		var iWidth = this.width;
                    		var iHeight = this.height;
                    		if(iWidth<750 || iWidth/iHeight != 2.5){
                    			common.alert('图片尺寸不符合规定');
                    		}else{
                    			var img = '<div class="pull-left"><img src="' + imgUrl +'" alt="" class="form-img"><input type="hidden" name="picurl" value="'+uri+'"><a href="#">删除</a></div>'
                                $(_self).find('.imglist').html(img);
                        		_self.find('input[name=pics]').val(1);
                    		}
                    	});
                    	
                    }else{
                    	common.alert(response.retMsg);
                    }
            }

        });

        //删除上传的图片
        _self.find('.imglist').on('click','a',function(){
           $(this).parent().remove();
           if(!_self.find('.imglist .pull-left').length){
        	   _self.find('input[name=pics]').val('');
           }
        });
        
        $self.find('#editCarousel-js-form').validate({
	        rules:{
	        	carouselTitle:"required",
	        	carouselDetails:"required",
	        	pics:"required"
	            },
	        messages:{
	        	carouselTitle:"请填写标题名称，不超过20字",
	        	carouselDetails:"请填写内容详情",
	        	pics:"请上传图片"
	            }
	        });
    });
</script>