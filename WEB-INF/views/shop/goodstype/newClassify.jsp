<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap">
    <div class="tb-head">商品分类管理&gt;&gt;新增分类</div>
    <div class="tb-content">
        <div class="tb-wrap">
        <form  id="newClassify-js-form">
            <table class="table wrap-table">
                <tbody>
                <tr>
                    <td><span class="required">*</span>一级分类名:</td>
                    <td>
                        <div class="col-sm-10 form-inline">
                            <input type="text" name="parentname" class="form-control" placeholder="一级分类">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>二级分类:</td>
                    <td>
                        <div class="form-inline sort_wrap" data-optype="update">
                            <input type="text" class="form-control" name="name"><i class="icon icon-del"></i><i class="icon icon-add"></i>
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
	'jquery','js/page_sort' ,'validate','message_zh'
],function($,page_sort,validate){ 
	var $self = $("#newClassify");
	$self.find("#js-submit").on("click", function(e){
		if($self.find('#newClassify-js-form').valid()){
		var $obj = $(this);
		$obj.hide();
		common.fetch({
		    url: '${ctx}/GoodsType/create',
		    type: 'POST',
		    data: $self.find("#newClassify-js-form").serialize(),
		    dataType:"json",
		    success: function(rt) {
		       if(1 == rt.ret_code){
		    	   common.createTab({
		               uri: '${ctx}/GoodsType',
		               data: {name: '商品分类列表'},
		               key: 'GoodsType',
		               callback: function(){
		                   common.closeTab("newClassify", null, false);
		               }
		           });
		       }else{
		    	   common.alert(rt.ret_msg);
		    	   $obj.show();
		       }
		    }
		});}
	}); 
	
    $self.find('.wrap-table').on('click','i.icon-up',function(){
        page_sort.instances($(this));
    });
    $self.find('.wrap-table').on('click','i.icon-down',function(){
        page_sort.instances($(this),'form');
    });
    $self.find('.wrap-table').on('click','i.icon-add',function(){
        page_sort.instances($(this),'form');
    });
    $self.find('.wrap-table').on('click','i.icon-del',function(){
        page_sort.del($(this));
    });
    
    $self.find('#newClassify-js-form').validate({
        rules:{
            parentname:{
                required:true,
                maxlength:20
            },
            name:{
                maxlength:20
            }
        },
   		messages: {
            parentname:{
                maxlength:"分类名称超出20个字符"
            },
            name:{
                maxlength:"分类名称超出20个字符"
            }
        } 
    });
});
</script>