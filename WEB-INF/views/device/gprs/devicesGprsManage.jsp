<%@ page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX);%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap equipment">
	<div class="tb-head">GPRS设备管理</div>
	<div class="tb-content">
		<div class="tb-wrap">
			<div class="opt clearfix">
				<div class="pull-left">
					<form class="form-inline" id="js-searchForm">
						<input type="text" class="form-control" placeholder="请输入设备号" name="equipmentId"/>
						<tags:selectboxMap name="healthManagerMan" list="${healthManagerManLists}" value="${pages.searchMap['healthManagerMan'] }" addNull="true" emptyTitle="健康管理师"/>
						<input type="button" class="btn btn-main" id="js-search" value="查询" />
					</form>
				</div>
			</div>
			<table cellspacing="0" class="table table-striped table-hover table-bordered">
				<thead>
					<tr>
						<!-- <th class="check"></th> -->
						<th>序号</th>
						<th>设备号</th>
						<th>姓名</th>
						<th>手机号码</th>
						<th>身份证号码</th>
						<th>所属网格</th>
						<th>所属健康管理师</th>
						<th class="col-sm-1">操作</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${pages.content }" var="equipment" varStatus="status">
						<tr>
							<%-- <td><input type="checkbox" value="${article.id}"
								name="goodids"></td> --%>
							<td>${status.index + 1 }</td>
							<td>${equipment.deviceSn}</td>
							<td>${equipment.user.realName}</td>
							<td>${equipment.user.mobile}</td>
							<td>${equipment.user.personId}</td>
							<td>${equipment.householdAddress }</td>
							<td>${equipment.healthManagerMan}</td>
							<td><a href="#" class="js-update" data-id="${equipment.deviceSn}">解绑</a>
							</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
			<tags:pagination pageId="equipmentGprs" paginationSize="5" action="${ctx}/equipmentGprs" page="${pages}"></tags:pagination>
		</div>
	</div>
</div>


<script>
	require([ 'jquery', 'js/components-select', 'js/cascade' ], function($,
			select, cascade) {
		var $self = $("#__equipmentGprs__");

		$self.find(".js-update").on("click", function(e) {
			var id = $(this).attr('data-id');
			common.confirm({
				content:"确定要解绑设备吗?",
				success:function(){
					$.get("${ctx}/equipmentGprs/unbind/" + id, function(success) {
						if (1 == success.ret_code) {
							common.alert(success.ret_msg);
							$self.find("#js-confirm").trigger("click");
						} else {
							common.alert('解绑失败');
						}
					}, "json");
					this.hide();
				}
			});
		});

		$self.find("#js-search").on("click", function(e) {
			common.load({
				container : 'equipmentGprs',
				url : '${ctx}/equipmentGprs',
				data : $self.find("#js-searchForm").serialize()
			});
		});
	});
</script>