<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<style>
.dropdown-menu{max-height: 400px!important;}
</style>

<div class="wrap expenditure">
    <div class="tb-head">每日总结</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <form class="form-inline" id="js-searchForm">
                            <input placeholder="开始时间" name="startDate" id="startDate" class="form-control" size="16" type="text" value="${pages.searchMap['startDate']}" readonly="">
                            <input placeholder="结束时间" name="endDate" id="endDate" class="form-control" size="16" type="text" value="${pages.searchMap['endDate']}" readonly="">
                    	<tags:selectboxMapper name="staffId" list="${stationStaffs}" value="${pages.searchMap['staffId']}" addNull="true" emptyTitle="健康管理师"/>
                        <input type="button" class="btn btn-main" id="js-search" value="查询" />
                    </form>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th class="col-xs-1">序号</th>
                    <th>健康管理师</th>
                    <th>每日总结</th>
                    <th>创建时间</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content}" var="memo" varStatus="status">
                    <tr>
                    <td>${status.index+1}</td>
                    <td>${memo.staffName}</td>
                    <td>${memo.content}</td>
                    <td><fmt:formatDate value="${memo.createDate}" pattern="yyyy-MM-dd"/></td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/memo" pageId="memo" />
        </div>
    </div>
    <div id="div_include_memo">

    </div>
</div>
<script>
require([
	'jquery'
],function($){
	var $self = $("#memo");
	
	$self.find("#js-search").on("click", function(e){
        common.load({
            container: 'memo',
            url: '${ctx}/memo',
            data: $self.find("#js-searchForm").serialize()
        });
	});
	
	$self.find("#startDate").datetimepicker({
		language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        clearBtn:true,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        format:'yyyy-mm-dd'
	});
	$self.find("#endDate").datetimepicker({
		language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        clearBtn:true,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        format:'yyyy-mm-dd'
	});
	$("#startDate").on("changeDate",function (e) {
        $('#endDate').datetimepicker('setStartDate', e.date);
    });
    $("#endDate").on("changeDate",function (e) {
        $('#startDate').datetimepicker('setEndDate', e.date);
    });
	
});

</script>