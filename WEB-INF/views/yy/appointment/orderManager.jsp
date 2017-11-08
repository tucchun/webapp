<%@ page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%
	request.setAttribute("prj", Constants.PRJ_PERFIX);
%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap household">
	<div class="tb-head">预约单管理</div>
	<div class="tb-content">
		<div class="tb-wrap">
			<div class="opt clearfix">
				<div class="pull-right">
					<button type="button" class="btn btn-main" id="js-cancel">取消订单</button>
					<button type="button" class="btn btn-main" id="js-delete">删除</button>
				</div>
			</div>
			<table cellspacing="0"
				class="table table-striped table-hover table-bordered">
				<thead>
					<tr>
						<th class="check"><input type="checkbox" name="allCheck" /></th>
						<th>订单号</th>
						<th>预约人</th>
						<th>手机号码</th>
						<th>就诊人</th>
						<th>就诊时间</th>
						<th>预约时间</th>
						<th>预约信息</th>
						<th>备注</th>
						<th>状态</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${pages.content }" var="app" varStatus="status">
						<tr>
							<td><input type="checkbox" value="${app.id}" name="ids"></td>
							<td>${app.no }</td>
							<td>${app.appoName }</td>
							<td>${app.mobile }</td>
							<td>${app.clinicName }</td>
							<td>${app.clinicTimes }</td>
							<td>${app.createTimes }</td>
							<td>${app.message}</td>
							<td>${app.note }</td>
							<td><c:choose>
									<c:when test="${app.appoState == 1 }">
							已预约待确认
						</c:when>
									<c:when test="${app.appoState == 2 }">
							已确认待就诊
						</c:when>
									<c:when test="${app.appoState == 3 }">
							已就诊
						</c:when>
									<c:when test="${app.appoState == 11 }">
							已取消
						</c:when>
									<c:when test="${app.appoState == 12 }">
							已取消
						</c:when>
									<c:when test="${app.appoState == 13 }">
							已爽约
						</c:when>
								</c:choose></td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
			<div class="pagenation clearfix">
				<tags:pagination pageId="orderManager" paginationSize="5"
					action="${ctx}/Appointment" page="${pages}"></tags:pagination>
			</div>
		</div>
	</div>
</div>

<script>
	require([ 'jquery' ], function($) {
		var $self = $("#orderManager");

		$self.find("#js-search").on("click", function(e) {
			common.load({
				container : 'orderManager',
				url : '${ctx}/Appointment',
				data : $self.find("#js-searchForm").serialize()
			});
		});

		$self.find("#js-delete").on("click", function(e) {
			var ids = [];
			$.each($('input[name=ids]:checked'), function(index, ele) {
				ids.push($(ele).val());
			});
			var strids = ids.join(',');
			if(strids != ''){
				common.confirm({
					content:"确定要删除吗?",
					success:function(){
						$.get("${ctx}/Appointment/delete/" + strids, function(success) {
							if (1 == success.ret_code) {
								common.alert(success.ret_msg);
								$self.find("#js-confirm").trigger(
								"click");
							} else {
								common.alert(success.ret_msg);
							}
						},"json");
						this.hide();
					}
				});
			} else {
				common.alert("请勾选需要删除的预约订单");
			}

			
		});

		$self.find("#js-cancel").on(
				"click",
				function(e) {
					var ids = [];
					$.each($('input[name=ids]:checked'), function(index, ele) {
						ids.push($(ele).val());
					});
					var strids = ids.join(',');
					if (strids != '') {
						common.confirm({
							content:"确定要取消吗?",
							success:function(){
								$.get("${ctx}/Appointment/cancel/" + strids,
										function(success) {
											if (1 == success.ret_code) {
												common.alert(success.ret_msg);
												$self.find("#js-confirm").trigger(
												"click");
											} else {
												common.alert(success.ret_msg);
											}
										},"json");
								this.hide();
							}
						});
					} else {
						common.alert("请勾选需要取消的预约订单");
					}

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
