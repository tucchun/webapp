<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%
	request.setAttribute("prj", Constants.PRJ_PERFIX);
%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div id="modal_update_disease" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true">×</button>
				<h4 class="modal-title" id="modal_diseaseLabel">修改常见疾病</h4>
			</div>
			<div class="modal-body">
				<form class="form-inline" id="js-form">
					<input type="hidden" value="${disease.id }" name="id" />
					<table class="table table-bordered">
						<tr>
							<td class="col-sm-2"><span class="required">*</span>疾病名称</td>
							<td><input type="text" class="form-control" name="name"
								value="${disease.name }" /></td>
						</tr>
					</table>
				</form>
				<div class="operation">
					<button class="btn btn-main" type="button" id="js-submit">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script>
	require([ 'jquery', 'validate', 'message_zh' ], function($) {
		var $self = $("#diseaseList");
		var $self1 = $("#modal_update_disease");
		$self1.find("#js-submit").on("click", function(e) {
			if ($self1.find('#js-form').valid()) {
				common.post({
					url : '${ctx}/Disease/editDisease',
					data : $self1.find("#js-form").serialize(),
					dataType:"json",
					modal : $self.find("#modal_update_disease")
				}).done(function(data) {
					if ("success" == data) {
						common.alert(data.ret_msg);
						// 刷新
						$self.find("#js-confirm").trigger("click");
					} else{
						common.alert(data.ret_msg);
					}
				}).fail(function(error) {
					console.log(error)
				});
			}
		});

		$self1.find('#js-form').validate({
			rules : {
				name : "required"
			},
			messages:{
				name:"请填写疾病名称"
	           	}
		});
	});
</script>