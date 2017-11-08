	<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap professionalTitleManage">
    <div class="tb-head">组织机构归属调整</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
            	<div class="pull-left">
                    <form action="#" class="form-inline" id="js-form">
            			<tags:selectboxMapper name="organizationLevel" list="${organizationLevels }" value="${pages.searchMap['organizationLevel'] }" addNull="true"/>
            			<input type="button" class="btn btn-main" value="查询" id="js-search" />
            		</form>
            	</div>
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
                    <c:if test="${organization.organizationLevel >=3 }">
                    	<button class="btn btn-main js-update" type="button" data-id="${organization.organizationId}">调整</button>
                    </c:if>
                    </td>
               		 </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination paginationSize="5" page="${pages }" action="${ctx }/organization/adjustment" pageId="organizationAdjustment"></tags:pagination>
        </div>
    </div>
</div>
<div id="modal_include_organization">
    
</div>
<script>
require([
	'jquery'
],function($){
	var $self = $("#organizationAdjustment");
	
	$self.find(".js-update").on("click", function(e){
		var id = $(this).attr('data-id');
		$.get("${ctx}/organization/adjustment/"+id,function(html){
		$self.find("#modal_include_organization").html(html);
	    $self.find("#modal_title").modal("show");
		},"html");
	});
	
	$self.find("#js-search").on('click',function(e){
        common.load({
            container: 'organizationAdjustment',
            url: '${ctx}/organization/adjustment',
            data: $self.find("#js-form").serialize()
        });
    });
	
});

</script>
