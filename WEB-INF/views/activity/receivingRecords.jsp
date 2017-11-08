<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap roleManager">
	<div class="tb-head">健康教育印刷资料接收记录表</div>
	<div class="tb-content">
		<div class="tb-wrap">
		    <div class="opt clearfix">
				<div class="pull-left">
					<form action="#" class="form-inline" id="js-form" onsubmit="return false">
						<tags:selectboxMapper list="${activityYearList}" name="activity_year" addNull="true" value="${activity_year}" />
						<input type="button" class="btn btn-main" id="js-search" value="查询" />
					</form>
				</div>
				<div class="pull-right">
					<button class="btn btn-main" type="button" id="js-delete">删除</button>
					<button class="btn btn-main" type="button" id="js-create">新增记录</button>
				</div>
			</div>
			<table cellspacing="0" class="table table-striped table-hover table-bordered">
				<thead>
					<tr>
						<th class="check"></th>
						<th>序号</th>
						<th>材料下发或制作机构</th>
						<th>材料名称</th>
						<th>材料类型</th>
						<th>接收数量（份）</th>
						<th>接收日期</th>
						<th>接收人</th>
						<th>接收机构</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${pages.content}" var="dataList" varStatus="status">
						<tr>
							<td><input type="checkbox" value="${dataList.activityId }" name="ids" <c:if test="${dataList.startCount!=0}">disabled</c:if> /></td>
							<td>${status.index+1 }</td>
							<td>${dataList.hostUnit }</td>
							<td>${dataList.subject }</td>
							<td>${dataList.material_name }</td>
							<td>${dataList.material_count }</td>
							<td>${dataList.activity_timeStr }</td>
							<td>${dataList.receiverName }</td>
							<td>${dataList.receiving_agency }</td>
							<td>
								<c:if test="${dataList.startCount==0}"><a href="#" class="js-update" data-id="${dataList.activityId }">编辑</a></c:if><c:if test="${dataList.startCount!=0}">编辑</c:if>
							</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
			<tags:pagination page="${pages}" action="${ctx}/receivingRecords" pageId="receivingRecords" />
		</div>
	</div>
</div>

<script>

require([ 'jquery'], function($){
     	var $self = $("#receivingRecords");

     	$self.find("#js-search").on("click", function(e){
            common.load({
                container: 'receivingRecords',
                url: '${ctx}/receivingRecords',
                data:  $self.find("#js-form").serialize()
            });
        });
     	
     	$self.find("#js-create").on("click", function(e){
     		common.createTab({
     			uri: '${ctx}/receivingRecords/create',
     			data: {name: '新增印刷资料接收记录'},
     			key: 'modifyReceivingRecords'
     		});
     	});
     	
     	$self.find(".js-update").on("click", function(e){
     		var id = $(this).attr('data-id');
     		common.createTab({
     			uri: '${ctx}/receivingRecords/update/'+id,
     			data: {name: '修改印刷资料接收记录'},
     			key: 'modifyReceivingRecords'
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
						if (strids == '') {
							common.alert("请选择要删除的数据");
						} else {
							common.confirm({
					            content:"确认删除？",
					            success:function(){
					                $.get("${ctx}/receivingRecords/delete/" + strids,function(data){
					                	var jsonObj = $.parseJSON(data);
				    		    		common.alert(jsonObj.ret_msg);
					    		    	if(jsonObj.ret_code == 1){
						                    $self.find("#js-confirm").trigger('click');
					    		    	}
					                },"html");
				                    this.hide();
					            }
					        });
						}
					});

	});
</script>


