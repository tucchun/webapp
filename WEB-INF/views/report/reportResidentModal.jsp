<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />


<div class="wrap expenditure">
    <div class="tb-head">详细名单列表</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
               <div class="pull-right">
                    <button type="button" class="btn btn-main" id="btn-export-resident">导出</button>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
				    <tr>
				        <th>姓名</th>
				        <th>性别</th>
				        <th>年龄</th>
				        <th>与户主关系</th>
				        <th>本人电话</th>
				        <th>联系人电话</th>
				        <th>身份证号码</th>
				        <th>所属人群</th>
				        <th>所属网格</th>
				    </tr>
				    </thead>
				    <tbody>
				    <c:forEach items="${pages.content}" var="resident" varStatus="status">
				        <tr>
				            <td>${resident.user.realName}</td>
				            <td>${resident.decodeSex}</td>
				            <td>${resident.decodeAge}</td>
				            <td>${resident.residentRelation }</td>
				            <td>${resident.residentMobile}</td>
				            <td>${resident.residentContactsMobile}</td>
				            <td>
				                <c:if test="${resident.user.personId ne null}">
				                    ${resident.user.personId}
				                </c:if>
				                <c:if test="${resident.user.personId eq null}">
				                    ${resident.residentBirthNumber}
				                </c:if>
				            </td>
				            <td>${resident.decodeResidentGroup}</td>
				            <td>${resident.householdAddress}</td>
				        </tr>
				    </c:forEach>
				    </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/report/resident/list" pageId="reportSummaryResidentList" />
        </div>
    </div>
</div>


<script>
require([
'jquery'
],function($){
    var $self = $("#reportSummaryResidentList");
    
    $self.find("#btn-export-resident").on('click',function(e){
        common.download({
        	url:"${ctx}/report/resident/list?${search}&download=download"
        });
    });
    
});
</script>