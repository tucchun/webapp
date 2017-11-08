<%@ page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%
	request.setAttribute("prj", Constants.PRJ_PERFIX);
%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap xzqy">
	<div class="tb-head">名医堂管理</div>
	<div class="tb-content">
		<div class="tb-wrap">
			<div class="opt clearfix">
				<div class="pull-right">
					<button type="button" class="btn btn-main" id="js-create">新增名医</button>
				</div>
			</div>
			<table cellspacing="0"
				class="table table-striped table-hover table-bordered">
				<thead>
					<tr>
						<th>序号</th>
						<th>医生姓名</th>
						<th>所属科室</th>
						<th>所属卫生站</th>
						<th>创建时间</th>
						<th>展示状态</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${pages.content }" var="doctor"
						varStatus="status">
						<tr>
							<td>${status.index + 1 }</td>
							<td>${doctor.doctorName }</td>
							<td>${doctor.departmentName }</td>
							<td>${doctor.healthStationName }</td>
							<td>${doctor.createtimes }</td>
							<td><c:if test="${doctor.doctorState == 0}">
								可见
							</c:if> <c:if test="${doctor.doctorState == 1}">
								不可见
							</c:if></td>
							<td><a href="#" class="js-update"
								data-id="${doctor.doctorId }">编辑</a> <a href="#"
								class="js-delete" data-id="${doctor.doctorId }">删除</a></td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
			<tags:pagination pageId="famousDoctor" paginationSize="5"
				action="${ctx}/famousDoctor" page="${pages}"></tags:pagination>
		</div>
	</div>
</div>

<script>
	require([ 'jquery'], function($) {
		var $self = $("#famousDoctor");

		$self.find("#js-create").on("click", function(e) {
			common.createTab({
				uri : '${ctx}/famousDoctor/create',
				data : {
					name : '新增名医'
				},
				key : 'newFamousDoctor'
			});
		});

		$self.find(".js-update").on("click", function(e) {
			var id = $(this).attr('data-id');
			common.createTab({
				uri : '${ctx}/famousDoctor/editGoods/' + id,
				data : {
					name : '修改名医'
				},
				key : 'editFamousDoctor'
			});
		});

		$self.find(".js-delete").on("click", function(e) {
			var id = $(this).attr('data-id');
			common.confirm({
				content:"确定要删除吗?",
				success:function(){
					$.get("${ctx}/famousDoctor/delete/" + id, function(success) {
						if (1 == success.ret_code) {
							common.alert(success.ret_msg);
							$self.find("#js-confirm").trigger("click");
						} else {
							common.alert(success.ret_msg);
						}
					}, "json");
					this.hide();
				}
			});
		});
		
		
	});
</script>