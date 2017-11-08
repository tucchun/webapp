<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap">
    <div class="tb-head">公司简介</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <form id="gsintro-js-form">
                <table class="table wrap-table">
                    <tbody>
                    <tr>
                        <td>
                            <div class="edit">
                                <textarea name="introDetails" id="kindEditor_gsintro" style="width:776px;height:360px;">
                               	 	${pages.intro_details}
                                </textarea>
                           </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div class="col-sm-12 form-submit-btns text-left">
                             <input type="hidden" name="introId" value="${pages.intro_id}">
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
    	 var $self = $("#__appCompanyIntro__");
        var editor = KindEditor.create('#__appCompanyIntro__ #kindEditor_gsintro', {
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
    		editor.sync('kindEditor_gsintro');
    		if(!$self.find('#kindEditor_gsintro').val()){
    			$self.find('#contents').val('');
    		}
    		if($self.find('#kindEditor_gsintro').val().length > 5000){
	    	    common.alert("详情文本太长!");
    			return false;
    		}
    		if($self.find('#gsintro-js-form').valid()){
    		
    		var $obj = $(this);
    		$obj.hide();
    		//$self.find($('#price')).val(parseInt($self.find($('#price1')).val() * 100));
    		common.fetch({
                url: '${ctx}/appCompanyIntro/add',
                type: 'POST',
                data: $self.find("#gsintro-js-form").serialize(),
                dataType:"text",
                success: function(rt) {
    		       if('success' == rt){
    		    	   //$('#goodsList').load("${ctx}/Goods");
    		    	   //common.closeTab('newGoods');
    		    	   common.alert("保存成功");
    		    	   common.createTab({
    		    		    uri:  '${ctx}/appCompanyIntro',
    						data: {name: '公司简介管理'},
    						key: 'appCompanyIntro'
    		    	   })
    		       }else{
    		    	   common.alert(rt);
    		    	   $obj.show();  
    		       }
    		    }
    		}); 
    	   }
    	}); 
    	
        
        $self.find('#gsintro-js-form').validate({
	        rules:{
	        	name:"required",
	        	contents:"required"
	            },
	        messages:{
	        	name:"请填写标题名称",
	        	contents:"请填写内容详情"
	            }
	        });
    });
</script>