<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap professionalTitleManage">
    <div class="tb-head">科室管理</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt">
                <button class="btn btn-main" type="button" id="js-create">添加</button>
            </div>
            <table class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th class="col-sm-1">序号</th>
                    <th>科室</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content }" var="lookup" varStatus="status">
                	<tr>
                    <td>${status.index+1 }</td>
                    <td>${lookup.lookup_value }</td>
                    <td>
                    	<button class="btn btn-main js-update" type="button" data-id="${lookup.lookup_id}">修改</button>
                    	<button class="btn btn-main js-delete" type="button" data-id="${lookup.lookup_id}">删除</button>
                    </td>
               		 </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination paginationSize="5" page="${pages }"  action="${ctx }/lookup/department" pageId="lookup_department"></tags:pagination>
        </div>
    </div>
</div>
<div id="modal_include_department">
	<jsp:include page="departmentModal.jsp" flush="true" />
</div>
<script>
require([
	'jquery'
],function($){
	var $self = $("#lookup_department");
	
	$self.find("#js-create").on("click", function(e){
		$.get("${ctx}/lookup/create",{"category":"department"},function(html){
		$self.find("#modal_include_department").html(html);
		$self.find("#modal_department").modal("show");
		},"html");
	});
	
	$self.find(".js-update").on("click", function(e){
		var id = $(this).attr('data-id');
		$.get("${ctx}/lookup/update/"+id,{"category":"department"},function(html){
		$self.find("#modal_include_department").html(html);
	    $self.find("#modal_department").modal("show");
		},"html");
	});
	
	$self.find(".js-delete").on("click", function(e){
		var id = $(this).attr('data-id');
        common.confirm({
            content:"确认删除？",
            success:function(){
                var self = this;
                $.get("${ctx}/lookup/delete/"+id,function(success){
                    if(success=='success'){
                        common.alert("删除成功！");
                    }else{
                        common.alert("删除失败，无法删除已被关联的数据。");
                    }
                    $self.find("#js-confirm").trigger("click");
                    self.hide();
                },"html");
            }
        });

	});
	
});

</script>