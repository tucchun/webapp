<%@ page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%
	request.setAttribute("prj", Constants.PRJ_PERFIX);
%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap hospital">
	<div class="tb-head">科室列表</div>
	<div class="tb-content">
		<div class="tb-wrap">
			<div class="opt clearfix">
				<div class="pull-right">
					<button type="button" class="btn btn-main" id="js-create">新增</button>
					<button type="button" class="btn btn-main" id="js-delete">删除</button>
				</div>
			</div>
			<table cellspacing="0"
				class="table table-striped table-hover table-bordered">
				<thead>
					<tr>
						<th class="check"><input type="checkbox" name="allCheck" /></th>
						<th class="col-sm-1">序号</th>
						<th>一级科室</th>
						<th>二级科室数</th>
						<th class="col-sm-1">操作</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${pages.content }" var="de" varStatus="status">
						<tr>
							<td><input type="checkbox" value="${de.id }" name="ids"></td>
							<td>${status.index + 1 }</td>
							<td>${de.name }</td>
							<td>${de.count }</td>
							<td class="optCol"><a href="#" class="js-update"
								data-id="${de.id }">编辑</a></td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
			<div class="pagenation clearfix">
				<tags:pagination pageId="department" paginationSize="5"
					action="${ctx}/HospitalDepartment" page="${pages}"></tags:pagination>
			</div>
		</div>
	</div>
</div>
<script>
	require([ 'jquery' ], function($) {
		var $self = $("#department");
		$self.find("#js-create").on("click", function(e) {
			common.createTab({
				uri : '${ctx}/HospitalDepartment/create',
				data : {
					name : '新增科室'
				},
				key : 'newDepartment'
			});
		});

		$self.find(".js-update").on("click", function(e) {
			var id = $(this).attr('data-id');
			common.createTab({
				uri : '${ctx}/HospitalDepartment/update/' + id,
				data : {
					name : '修改科室'
				},
				key : 'editDepartment'
			});
		});

		$self.find("#js-delete").on(
				"click",
				function(e) {
					var ids = [];
					$.each($('input[name=ids]:checked'), function(index, ele) {
						ids.push($(ele).val());
					});
					var strids = ids.join(',');
					if (strids != '') {
						common.confirm({
							content : "确定要删除吗?",
							success : function() {
								$.get("${ctx}/HospitalDepartment/delete/"
										+ strids, function(success) {
									success = JSON.parse(success);
									if (1 == success.ret_code) {
										common.alert(success.ret_msg);
										$self.find("#js-confirm").trigger("click");
									}else {
										common.alert(success.ret_msg);
									}
								}, "html");
								this.hide();
							}
						});
					} else {
						common.alert("请选择需要删除的数据");
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