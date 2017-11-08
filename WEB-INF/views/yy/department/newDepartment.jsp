<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap newDep">
    <div class="tb-head">科室管理&gt;&gt;新增科室</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <form id="newDepartment-js-form">
                <table class="table wrap-table">
                    <tbody>
                    <tr>
                        <td><span class="required">*</span>一级科室:</td>
                        <td>
                            <div class="col-sm-12"><input type="text"  name="parentname" class="form-control" placeholder="一级科室" style="width:auto;"></div>
<!--                             <div class="col-sm-12"><input type="text"  name="parentname" class="form-control" placeholder="一级科室" style="width:auto;"></div> -->
                        </td>
                    </tr>
                    <tr>
                        <td>二级科室:</td>
                        <td>
                            <div class="col-sm-12 form-inline sort_wrap">
                                <input type="text" class="form-control" name="name" placeholder="二级科室" />
                                
                                <i class="icon icon-del"></i><i class="icon icon-add"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div class="col-sm-12 form-submit-btns text-center">
                                <button type="button" class="btn btn-main btn-lg"  id="js-submit">保存</button>
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
	'jquery','js/page_sort','validate'
],function($,page_sort){
	var $self = $("#newDepartment");
	$self.find("#js-submit").on("click", function(e){
		if($self.find('#newDepartment-js-form').valid()){
		var $obj = $(this);
		$obj.hide();
		common.fetch({
		    url: '${ctx}/HospitalDepartment/create',
		    type: 'POST',
		    data: $self.find("#newDepartment-js-form").serialize(),
		    dataType:"json",
		    success: function(rt) {
		       if(1 == rt.ret_code){
		    	   //$('#department').load("${ctx}/HospitalDepartment");
		    	   //common.closeTab('newDepartment');
		    	   common.createTab({
		               uri: '${ctx}/HospitalDepartment',
		               data: {name: '科室列表'},
		               key: 'department',
		               callback: function(){
		                   common.closeTab("newDepartment", null, false);
		               }
		           });
		       }else{
		    	   $obj.show();  
		       }
		    }
		});}
	}); 
	
    $self.find('.wrap-table').on('click','i.icon-add',function(){
        page_sort.instances($(this));
    });
    $self.find('.wrap-table').on('click','i.icon-del',function(){
        page_sort.del($(this));
    });
    
    $self.find('#newDepartment-js-form').validate({
        rules:{
        	parentname:"required"
            },
        messages:{
        	parentname:"请填写一级科室名称"
        	}
        });
});
</script>