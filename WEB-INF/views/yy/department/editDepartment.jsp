<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap newDep">
    <div class="tb-head">医院管理&gt;&gt;修改科室</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <form id="editDepartment-js-form">
                <table class="table wrap-table">
                    <tbody>
                    <input type="hidden" value="${department.id }" name="id" />
                    <input type="hidden" id="delids" value="" name="delids">
                    <tr>	
                        <td>一级科室:</td>
                        <td>
                        	<div class="col-sm-12"><input type="text"  name="parentname" value="${department.name }" class="form-control" placeholder="一级科室" style="width:auto;"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>二级科室:</td>
                        <td>
                        	<c:choose>
                        		<c:when test="${fn:length(department.dpList) > 0}">
                        			<c:forEach items="${department.dpList }" var="list" varStatus="status">
			                            <div class="col-sm-12 form-inline sort_wrap">
			                            	<input type="hidden" name="ids"	id="ids" value="${list.id }">
			                                <input type="text" class="form-control" name="name" value="${list.name }" placeholder="二级科室" />
			                                <c:choose>
					                			<c:when test="${fn:length(department.dpList) == 1}">
					                				<i class="icon icon-del"></i><i class="icon icon-add"></i>
					                			</c:when>
					                			<c:otherwise>
					                				<c:choose>
					                					<c:when test="${status.count == fn:length(department.dpList)}">
					                						<i class="icon icon-del"></i><i class="icon icon-add"></i>
						                				</c:when>
						                				<c:otherwise>
						                					<i class="icon icon-del"></i>
						                				</c:otherwise>
						                			</c:choose>
						               			</c:otherwise>
						               		</c:choose>
			                            </div>
		                            </c:forEach>
                        		</c:when>
                        		<c:otherwise>
	                        		<div class="col-sm-12 form-inline sort_wrap">
	                        			<input type="hidden" name="ids"	id="ids" value="0">
				                        <input type="text" class="form-control" name="name" placeholder="二级科室" />
				                        <i class="icon icon-del"></i><i class="icon icon-add"></i>     
				                    </div> 
                        		</c:otherwise>
                        	</c:choose>
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
	var $self = $("#editDepartment");
	var commitData = {
			dels : []
		};
	$self.find("#js-submit").on("click", function(e){
		if($self.find('#editDepartment-js-form').valid()){
		var $obj = $(this);
		$obj.hide();
		common.fetch({
		    url: '${ctx}/HospitalDepartment/update',
		    type: 'POST',
		    data: $self.find("#editDepartment-js-form").serialize(),
		    dataType:"json",
		    success: function(rt) {
		       if(1 == rt.ret_code){
		    	   //$('#department').load("${ctx}/HospitalDepartment");
		    	   //common.closeTab('editDepartment');
		    	   common.createTab({
		               uri: '${ctx}/HospitalDepartment',
		               data: {name: '科室列表'},
		               key: 'department',
		               callback: function(){
		                   common.closeTab("editDepartment", null, false);
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
    	//ajax 成功后判断是否调用该方法，默认无提示删除；
		var typeid = $(this).parents('.sort_wrap').find(
				'input[name="ids"]').val();
		var $this = $(this);
		if(typeid != 0){
			$.get("${ctx}/Doctor/getDoctorCount/" + typeid, function(
					success) {
				if (1 == success.ret_code) {
					commitData.dels.push(typeid);
					$self.find('#delids').val(commitData.dels.join(','));
					page_sort.del($this);
				} else{
					common.alert(success.ret_msg);
				} 
			},"json");
		}else{
			page_sort.del($this);
		} 
    });
    
    $self.find('#editDepartment-js-form').validate({
        rules:{
        	parentname:"required"
            },
        messages:{
           	parentname:"请填写一级科室名称"
           	}
        });
});
</script>