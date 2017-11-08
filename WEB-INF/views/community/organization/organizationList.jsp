	<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap professionalTitleManage">
    <div class="tb-head">组织机构管理</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt">
            	<c:if test="${currentPrganization.organizationLevel < 4}">
                	<button class="btn btn-main" type="button" id="js-create">添加</button>
                </c:if>
            </div>
            <table class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th class="col-sm-1">序号</th>
                    <th>组织机构名</th>
                    <th>上级组织机构</th>
                    <th>管理员姓名</th>
                    <th>管理员账户</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content }" var="organization" varStatus="status">
                	<tr>
                    <td>${status.index+1 }</td>
                    <td>${organization.organizationName }</td>
                    <td>${organization.parentOrganizationName }</td>
                    <td>${organization.staff.user.realName }</td>
                    <td>${organization.staff.user.loginName }</td>
                    <td>
                    	<button class="btn btn-main js-update" type="button" data-id="${organization.organizationId}">修改</button>
                    	<button class="btn btn-main js-delete" type="button" data-id="${organization.organizationId}">删除</button>
                    </td>
               		 </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination paginationSize="5" page="${pages }" action="${ctx }/organization" pageId="organization"></tags:pagination>
        </div>
    </div>
</div>
<div id="modal_include_organization">
    
</div>
<script>
require([
	'jquery'
],function($){
	var $self = $("#organization");
	
	$self.find("#js-create").on("click", function(e){
		$.get("${ctx}/organization/create",function(html){
		$self.find("#modal_include_organization").html(html);
		$self.find("#modal_title").modal("show");
		},"html");
	});
	
	$self.find(".js-update").on("click", function(e){
		var id = $(this).attr('data-id');
		$.get("${ctx}/organization/update/"+id,function(html){
		$self.find("#modal_include_organization").html(html);
	    $self.find("#modal_title").modal("show");
		},"html");
	});
	
	$self.find(".js-delete").on("click", function(e){
		var id = $(this).attr('data-id');
		common.fetch({
			url:'${ctx}/organization/checkDelete/'+id,
			dataType:'json',
			type:'get',
			success:function(data){
				if(data.ret_code == 1){
					common.confirm({
			            content:"确认删除？",
			            success:function(){
			                var self = this;
			                $.get("${ctx}/organization/delete/"+id,function(data){
			                    if(data.ret_code==1){
			                        common.alert(data.ret_msg);
			                    }else{
			                        common.alert(data.ret_msg);
			                    }
			                    $self.find("#js-confirm").trigger("click");
			                    self.hide();
			                },"json");
			            }
			        });
				}else{
					common.alert(data.ret_msg);
				}
			}
		});

	});
});

</script>
