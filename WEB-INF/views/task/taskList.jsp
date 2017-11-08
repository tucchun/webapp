<%@ page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%
	request.setAttribute("prj", Constants.PRJ_PERFIX);
%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap expenditure">
	<div class="tb-head">任务监控</div>
	<div class="tb-content">
		<div class="tb-wrap">
			<div class="opt tasklist">
				<form class="form-inline" id="js-searchForm">
					<%-- <div class="input-group date form_date col-sm-2" data-date=""
						data-date-format="dd MM yyyy" data-link-field="dtp_input2"
						data-link-format="yyyy-mm-dd">
						<input id="data_start" name="starttime" class="form-control"
							size="16" type="text" value="${pages.searchMap['startTime']}"
							readonly=""> <span class="input-group-addon"><span
							class="glyphicon glyphicon-calendar"></span></span>
					</div>
					~
					<div class="input-group date form_date col-sm-2" data-date=""
						data-date-format="dd MM yyyy" data-link-field="dtp_input2"
						data-link-format="yyyy-mm-dd">
						<input id="data_end" name="endtime" class="form-control" size="16"
							type="text" value="${pages.searchMap['endTime']}" readonly="">
						<span class="input-group-addon"><span
							class="glyphicon glyphicon-calendar"></span></span>
					</div> --%>
					<div id="data_start" class="input-group date form_date col-sm-3" data-date="" data-date-format="yyyy MM dd" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                            <input class="form-control" size="16" type="text" value="${pages.searchMap['startTime']}" readonly="" name="starttime">
                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                        </div>
                        ~
                    <div id="data_end" class="input-group date form_date col-sm-3" data-date="" data-date-format="yyyy MM dd" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                            <input class="form-control" size="16" name="endtime" type="text" value="${pages.searchMap['endTime']}" readonly="">
                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                        </div>
					<input type="button" class="btn btn-main" id="js-search" value="查询" />
				</form>
			</div>
			<table cellspacing="0"
				class="table table-striped table-hover table-bordered">
				<thead>
					<tr>
						<th class="check"><input type="checkbox" name="allCheck" /></th>
						<th class="col-xs-1">序号</th>
						<th>健康管理师姓名</th>
						<th>手机号码</th>
						<th>所属社区卫生站</th>
						<th>上级领导</th>
						<th>领导联系方式</th>
						<!-- <th>未及时完成的任务数</th> -->
						<th>未及时处理的咨询消息数</th>
						<th>未及时处理的挂号请求数</th>
						<th>未及时处理的疫苗免疫数</th>
						<th>时间范围</th>
					</tr>
				</thead>
				<tbody>
					<c:set var="index" value="0" />
					<c:forEach items="${pages.content }" var="m" varStatus="status">
					<c:if test="${m.taskCount > 0 || m.messageCount > 0 || m.vaccineCount > 0 || m.appointmentCount > 0}">
						<tr>
							<td><input type="checkbox"></td>
							<%-- <td>${status.index + 1 }</td> --%>
							<c:set var="index" value="${index+1}" />
							<td>${index}</td>
							<td>${m.userName}</td>
							<td>${m.userMobile }</td>
							<td>${m.stationName }</td>
							<td>${m.parentName }</td>
							<td>${m.parentMobile }</td>
							<%-- <td>${m.taskCount }</td> --%>
							<td>${m.messageCount }</td>
							<td>${m.appointmentCount }</td>
							<td>${m.vaccineCount }</td>
							<td>${pages.searchMap['startTime']}~${pages.searchMap['endTime']}</td>
						</tr>
						</c:if>
					</c:forEach>
				</tbody>
			</table>
			<%-- <div class="pagenation clearfix">
				<tags:pagination pageId="taskList" paginationSize="5"
					action="${ctx}/Monitor" page="${pages}"></tags:pagination>
			</div> --%>
		</div>
	</div>
</div>
<script>
	require([ 'jquery' ], function($) {

		var $self = $("#taskList");

		$('#data_start').datetimepicker({
			language : 'zh-CN',
			weekStart : 1,
			todayBtn : 1,
			format : 'yyyy-mm-dd',
			autoclose : 1,
			todayHighlight : 1,
			startView : 2,
			minView : 2,
			forceParse : 0
		});
		$('#data_end').datetimepicker({
			language : 'zh-CN',
			weekStart : 1,
			todayBtn : 1,
			format : 'yyyy-mm-dd',
			autoclose : 1,
			todayHighlight : 1,
			startView : 2,
			minView : 2,
			forceParse : 0
		});
		$('#js-new-seminar-date').datetimepicker({
			language : 'zh-CN',
			weekStart : 1,
			todayBtn : 1,
			format : 'yyyy-mm-dd',
			autoclose : 1,
			todayHighlight : 1,
			startView : 2,
			minView : 2,
			forceParse : 0
		});
		
		$self.find("#js-search").on("click", function(e) {
			common.load({
				container : 'taskList',
				url : '${ctx}/Monitor',
				data : $self.find("#js-searchForm").serialize()
			});
		});
		$self.on('click','input[name=allCheck]',function(){
            var obj_checkbox = $self.find('table tbody input[type=checkbox]');
            if(this.checked){
                $(obj_checkbox).prop('checked','checked');
            }else{
                $(obj_checkbox).prop('checked','');
            }
        });
	});
</script>