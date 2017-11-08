<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap lectureList">
	<div class="tb-head">宣传资料播放管理</div>
	<div class="tb-content">
		<div class="tb-wrap">
			<div class="opt clearfix">
				<div class="pull-right">
					<button class="btn btn-main" type="button" id="js-delete">删除</button>
					<button class="btn btn-main" type="button" id="js-create">新增</button>
				</div>
			</div>
			<table cellspacing="0" class="table table-striped table-hover table-bordered">
				<thead>
					<tr>
						<th class="check"></th>
						<th>序号</th>
						<th>社区卫生站</th>
						<th>播放主题</th>
						<th>播放负责人</th>
						<th>播放日期</th>
						<th>播放地点</th>
						<th>播放时长</th>
						<th>制作单位</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${pages.content}" var="dataList" varStatus="status">
						<tr>
							<td><input type="checkbox" value="${dataList.activityId }" name="ids" <c:if test="${dataList.startCount!=0}">disabled</c:if> /></td>
							<td>${status.index+1 }</td>
							<td>${dataList.station_name }</td>
							<td>${dataList.subject }</td>
							<td>${dataList.organizer_name }</td>
							<td>${dataList.activity_timeStr }</td>
							<td>${dataList.activityPlace }</td>
							<td>${dataList.remark }</td>
							<td>${dataList.hostUnit }</td>
							<td>
								<a href="#" class="js-view" data-id="${dataList.activityId }">查看详情</a> 
								<c:if test="${dataList.startCount==0}"><a href="#" class="js-update" data-id="${dataList.activityId }">编辑</a></c:if><c:if test="${dataList.startCount!=0}">编辑</c:if>
							</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
			<tags:pagination page="${pages}" action="${ctx}/datumList" pageId="datumList" />
		</div>
	</div>
</div>


<script>

require([ 'jquery', 'js/cascade' ], function($, cascade){
     	var $self = $("#datumList");

     	$self.find("#js-create").on("click", function(e){
     		common.createTab({
     			uri: '${ctx}/datumList/create',
     			data: {name: '新增宣传资料播放'},
     			key: 'newDatum'
     		});
     	});
     	
     	$self.find(".js-update").on("click", function(e){
     		var id = $(this).attr('data-id');
     		common.createTab({
     			uri: '${ctx}/datumList/update/'+id,
     			data: {name: '修改宣传资料播放'},
     			key: 'newDatum'
     		});
     	});
     	
     	$self.find(".js-view").on("click", function(e){
     		var id = $(this).attr('data-id');
     		common.createTab({
     			uri: '${ctx}/datumList/view/'+id,
     			data: {name: '宣传资料播放详情'},
     			key: 'datumDetail'
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
					                $.get("${ctx}/datumList/delete/" + strids,function(data){
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
