<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

     <div class="wrap hospital">
    <div class="tb-head">社区卫生站管理</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">

                </div>
                <div class="pull-right" style="display: none;">
                    <button type="button" class="btn btn-main" style="display: none;">导入</button>
                    <button type="button" class="btn btn-main" id="js-create">新增社区卫生站</button>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th class="col-sm-1">序号</th>
                    <th class="col-sm-1">社区卫生站</th>
                    <th class="col-sm-2">地址</th>
                    <th class="col-sm-1">辖区户籍人口数</th>
                    <th class="col-sm-1">辖区总户数</th>
                    <th class="col-sm-1">辖区常住人口数</th>
                    <th class="col-sm-1">上年门诊量</th>
                    <th class="col-sm-1">上年住院人数</th>
                    <th class="col-sm-2">操作</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content}" var="serviceStation" varStatus="status">
                	<tr>
	                    <td>${status.index+1 }</td>
	                    <td>${serviceStation.name }</td>
	                    <td>${serviceStation.area }</td><!-- 地址 -->
	                    <td>${serviceStation.total_population }</td><!-- 辖区户籍人口数 -->
	                    <td>${serviceStation.total_house }</td><!-- 辖区总户数 -->
	                    <td>${serviceStation.total_resident }</td><!-- 辖区常住人口数 -->
	                    <td>${serviceStation.total_last_year_outpatient }</td><!-- 上年门诊量 -->
	                    <td>${serviceStation.total_last_year_hospitalized }</td><!-- 上年住院人数 -->
	                    <td>
	                    	<a href="#" class="js-view" data-id="${serviceStation.id }">查看详情</a>
	                    	<a href="#" class="js-update" data-id="${serviceStation.id }">编辑</a>
                	</tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination pageId="serviceStation" paginationSize="5" action="${ctx }/serviceStation" page="${pages}"></tags:pagination>
        </div>
    </div>
</div>

<script>
require([
	'jquery','js/cascade'
],function($,cascade){
	var $self = $("#serviceStation");
	
	$self.find("#js-create").on("click", function(e){
		common.createTab({
			uri: '${ctx}/serviceStation/create',
			data: {name: '新增社区卫生站'},
			key: 'newServiceStation'
		});
	});
	
	$self.find(".js-update").on("click", function(e){
		var id = $(this).attr('data-id');
		common.createTab({
			uri: '${ctx}/serviceStation/update/'+id,
			data: {name: '修改社区卫生站'},
			key: 'newServiceStation'
		});
	});
	
	$self.find(".js-view").on("click", function(e){
		var id = $(this).attr('data-id');
		common.createTab({
			uri: '${ctx}/serviceStation/view/'+id,
			data: {name: '社区卫生站详情'},
			key: 'viewServiceStation'
		});
	});
	
});

</script>