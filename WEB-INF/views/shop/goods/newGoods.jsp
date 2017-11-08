<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap">
    <div class="tb-head">商品管理&gt;&gt;新增商品</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <form id="newGoods-js-form">
                <table class="table wrap-table">
                    <tbody>
                    <tr>
                        <td><span class="required">*</span>所属分类:</td>
                        <td>
                            <div class="col-sm-10 form-inline">
                        <select name="onecate" class="form-control" id="js-onecate" />
						<select name="twocate" class="form-control" id="js-twocate" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>商品名称:</td>
                        <td>
                            <div class="form-inline"><input type="text" name="name" class="form-control" placeholder="商品名称"></div>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>商品副标题:</td>
                        <td>
                            <div class="form-inline"><input type="text" name="title" class="form-control" placeholder="商品副标题"></div>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>商品品牌:</td>
                        <td>
                            <div class="form-inline"><input type="text" class="form-control" name="brand" placeholder="商品品牌"></div>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>规格:</td>
                        <td>
                            <div class="form-inline"><input type="text" class="form-control" name="specifications" placeholder="规格"></div>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>价格:</td>
                        <td>
                            <div class="form-inline"><input type="text" class="form-control" id="price1" name="price1" placeholder="价格">
                            <input type="hidden" id="price" name="price"></div>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>上传图片:</td>
	                        <td>
                             <div><a class="btn btn-main" id="choseFile">选择图片</a><span class="mr10">支持jpg、png的图片格式,尺寸370px*360px,最大1M</span></div>
                            <br />
                            <div class="imglist clearfix">
                            </div>
                           
                        <input type="text" name="pics" id="pics" value="" style="visibility:hidden;"/>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>商品详情:</td>
                        <td>
                            <div class="edit">
                                <textarea name="content" id="newGoods_kindEditor_newGoods" style="width:776px;height:360px;"></textarea>
                            <input type="text" name="contents" id="contents" value="1" style="visibility:hidden;"/>
                           </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>状态:</td>
                        <td>
                            <div class="form-inline">
                                <select name="state" class="form-control">
                                    <option value="1">上架</option>
                                    <option value="0">下架</option>
                                </select>
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
    require(["jquery","KindEditor","zh_CN",'js/components-select','js/cascade','upload','validate','js/dialog','message_zh'], 
    		function ($,K,zh_CN,select,cascade,upload,validate,Dialog) {
    	 var $self = $("#newGoods");
    	
    	$.getJSON("${ctx}/GoodsType/getTypeCascade", function(data){
            new cascade({
    		    $primary: $self.find("#js-onecate"),
    		    $secondary:  $self.find("#js-twocate"),
    		    "primaryData": data.OneCateList,
    		    "secondaryData": data.twoCateList,
    		    "parentId": "parentid",
    		    "defaultPrimary": "",
    		    "defaultSecondary": ""
        	});
        });
    	
    	
        var editor = KindEditor.create('#newGoods_kindEditor_newGoods', {
        	 resizeType : 1,
             allowPreviewEmoticons: false,
             allowImageUpload:true,
             allowFileManager:true, 
             uploadJson:'${ctx}/upload/uploadFile1',
             afterUpload: function (url) {
                 this.sync();
             },
             afterBlur: function(){this.sync();}
             /* ,   
             items : [
               'fontname','fontsize', '|','forecolor', 'hilitecolor','bold', 'italic','underline',
               'removeformat','|', 'justifyleft','justifycenter', 'justifyright','insertorderedlist',
               'insertunorderedlist','|', 'emoticons','link','media','|','image'
             ] */
        });
      
    	$self.find("#js-submit").on("click", function(e){
    		
    		editor.sync('newGoods_kindEditor_newGoods');
    		if(!$self.find('#newGoods_kindEditor_newGoods').val()){
    			$self.find('#contents').val('');
    		}else{
    			$self.find('#contents').val('1');
    		}
    		if($self.find('#newGoods_kindEditor_newGoods').val().length > 5000){
	    	    common.alert("详情文本太长!");
    			return false;
    		}
    		if($self.find('#newGoods-js-form').valid()){
    		
    		var $obj = $(this);
    		$obj.hide();
    		$self.find($('#price')).val(parseInt($self.find($('#price1')).val() * 100));
    		common.fetch({
    		    url: '${ctx}/Goods/create',
    		    type: 'POST',
    		    data: $self.find("#newGoods-js-form").serialize(),
    		    dataType:"json",
    		    success: function(rt) {
    		       if(1 == rt.ret_code){
    		    	   //$('#goodsList').load("${ctx}/Goods");
    		    	   //common.closeTab('newGoods');
    		    	   common.createTab({
			               uri: '${ctx}/Goods',
			               data: {name: '商品列表'},
			               key: 'goodsList',
			               callback: function(){
			                   common.closeTab("newGoods", null, false);
			               }
			           });
    		       }else{
    		    	   common.alert(rt.ret_msg);
    		    	   $obj.show();  
    		       }
    		    }
    		}); }
    	}); 
    	
    	var action = "${ctx}/upload/uploadFile",_self = $('#newGoods'),button = _self.find('#choseFile'),interval;
        new AjaxUpload(button,{
            action:action,
            onSubmit:function(file,ext){
                if (!(ext && /^(jpg|jpeg|JPG|JPEG|png|PNG)$/.test(ext))) {
		    	    common.alert("图片格式不正确,请选择正确图片格式!");
                    return false;
                }
                this.disable();
            },
            onComplete:function(file,response){
            	response = JSON.parse(response);
                window.clearInterval(interval);
                this.enable();
                if(response.retCode == 'success'){
                	var imgObj = $('<img/>');
                	var uri = response.imgUrl;
                	var imgUrl = uri;
                	imgObj.attr('src',uri);
                	imgObj.load(function(){ 
                		var iWidth = this.width;
                		var iHeight = this.height;
                		if((iWidth/iHeight) != (370/360)){
                			common.alert('请上传370px*360px，不超过1M的图片！');
                		}
                	});
                	var img = '<div class="pull-left"><img src="' + imgUrl +'" alt="" class="form-img"><input type="hidden" name="picurl" value="'+uri+'"><a href="#">删除</a></div>'
                    $(_self).find('.imglist').append(img);
            		$self.find('#pics').val(1);
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
        
        $self.find('#newGoods-js-form').validate({
	        rules:{
	        	name:"required",
	        	title:"required",
	        	brand:"required",
	        	specifications:"required",
	        	price1:{required:true,min:0},
	        	content:"required",
	        	onecate:"required",
	        	twocate:"required",
	        	pics:"required",
	        	contents:"required"
	            },
	        messages:{
	        	name:"请填写商品名称",
	        	title:"请填写商品副标题",
	        	brand:"请填写商品品牌",
	        	specifications:"请填写商品规格",
	        	price1:"请正确填写商品价格",
	        	content:"请填写商品详情",
	        	onecate:"请选择商品所属一级分类",
	        	twocate:"请选择商品所属二级分类",
	        	pics:"请上传商品图片",
	        	contents:"请填写商品详情"
	            }
	        });
    });
</script>