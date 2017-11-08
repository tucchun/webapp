<%@ page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%
	request.setAttribute("prj", Constants.PRJ_PERFIX);
%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap communityTasklist">
    <div class="tb-head">社区站任务列表</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <form action="#" class="form-inline" onsubmit="return false" id="js-searchForm">
                        <select name="userId" class="form-control">
                            <option value="-1">请选择</option>
                            <c:forEach items="${hecadreList}" var="stf" varStatus="status">
                             	<option value="${stf.userId}">${stf.staffName}</option>
                            </c:forEach>
                        </select>
                        <input type="submit" class="btn btn-main" value="查询" id="js-search"/>
                    </form>
                </div>
                <div class="pull-right">
                    <button type="button" id="js-create" class="btn btn-main" data-toggle="modal">新增任务指标</button>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th rowspan="2">序号</th>
                    <th rowspan="2">健康管理师</th>
                    <th rowspan="2">计划周期</th>
                    <th colspan="3">建档数</th>
                    <th colspan="3">随访数</th>
                    <th colspan="3">签约家庭医生数</th>
                    <th rowspan="2">创建时间</th>
                    <th rowspan="2">操作</th>
                </tr>
                <tr>
                    <th>任务指标</th>
                    <th>已完成</th>
                    <th>未完成</th>
                    <th>任务指标</th>
                    <th>已完成</th>
                    <th>未完成</th>
                    <th>任务指标</th>
                    <th>已完成</th>
                    <th>未完成</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach var="ta" items="${pages.content}" varStatus="status" >
		        <tr>
		          <td>${status.index+1}</td>
		          <td>${ta.staffName}</td>
		          <td><fmt:formatDate value="${ta.periodStart}" pattern="MM月dd日"/>-<fmt:formatDate value="${ta.periodEnd}" pattern="MM月dd日"/></td>
		          <td>${ta.numDoc}</td>
		          <td>${ta.numDocDone}</td>
		          <td>
		          	<c:if test="${ta.numDocLeft < 0}">--</c:if>
		          	<c:if test="${ta.numDocLeft >= 0}">${ta.numDocLeft}</c:if>
		          </td>
		          <td>${ta.numVisit}</td>
		          <td>${ta.numVisitDone}</td>
		          <td>
		          	<c:if test="${ta.numVisitLeft < 0}">--</c:if>
		          	<c:if test="${ta.numVisitLeft >= 0}">${ta.numVisitLeft}</c:if>
		          </td>
		          <td>${ta.numFdc}</td>
		          <td>${ta.numFdcDone}</td>
		          <td>
		          	<c:if test="${ta.numFdcLeft < 0}">--</c:if>
		          	<c:if test="${ta.numFdcLeft >= 0}">${ta.numFdcLeft}</c:if>
		          </td>
		          <td><fmt:formatDate value="${ta.lastUpdate}" pattern="yyyy-MM-dd"/> </td>
		          <td>
		          	<c:if test="${ta.expired == false}">
                    	<button class="btn btn-main js-update" type="button" data-id="${ta.id}">修改</button>
                    </c:if>
		        </tr>
		        </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" paginationSize="5" action="${ctx}/taskAssign/list" pageId="taskAssignList" />
        </div>
        <div id="div_include_assignManager">
		</div>
    </div>
</div>



<script>
    require([
        'jquery'
    ],function($){
    	$self = $("#taskAssignList");
    	
    	// 设置查询条件
    	$("#js-searchForm select").val("${userId}");
    	
    	$self.find("#js-search").on("click", function(e){
            common.load({
                container: 'taskAssignList',
                url: '${ctx}/taskAssign/list',
                data: $self.find("#js-searchForm").serialize()
            });
    	});
    	
    	var loadingModal = false; // bugfix
    	$self.find("#js-create").on("click", function(e){
    		if(loadingModal) return;
    		
    		loadingModal = true;
    		
            $.get("${ctx}/taskAssign/toCreate",function(html){
                $("#div_include_assignManager").html(html);
                $("#modal_communityTasklist").modal("show");
                
                loadingModal = false;
            },"html").fail(function() {
            	loadingModal = false;
            	
            	common.alert("加载页面失败，请稍后重试！");
            });
        });

        $self.find(".js-update").on("click", function(e){
            var id = $(this).attr('data-id');
            $.get("${ctx}/taskAssign/toUpdate/"+id,function(html){
                $("#div_include_assignManager").html(html);
                $("#modal_communityTasklist").modal("show");
            },"html");
        });
    });

</script>