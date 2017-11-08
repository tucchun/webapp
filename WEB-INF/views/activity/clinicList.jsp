<%@page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap clinicList">
    <div class="tb-head">义诊管理</div>
    <div class="tb-content">
        <div class="tb-wrap">
			<div class="opt clearfix">
                <div class="pull-right">
                    <button class="btn btn-main" type="button" id="js-delete">删除</button>
                	<button class="btn btn-main" type="button" id="js-create">新增义诊</button>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
	                <tr>
	                    <th class="check"></th>
	                    <th>序号</th>
	                    <th>社区卫生站</th>
	                    <th class="col-sm-2">主题</th>
	                    <th>组织者</th>
	                    <th>活动开始时间</th>
	                    <th class="col-sm-2">地点</th>
	                    <th>医师</th>
	                    <th>操作</th>
	                </tr>
                </thead>
                <tbody>
                	<c:forEach items="${pages.content}" var="clinicList" varStatus="status">
	                	<tr>
		                    <td><input type="checkbox" value="${clinicList.activityId }" name="ids" <c:if test="${clinicList.startCount!=0}">disabled</c:if> /></td>
		                    <td>${status.index+1 }</td>
		                    <td>${clinicList.station_name }</td><!-- 社区卫生站 -->
		                    <td>${clinicList.subject }</td><!-- 主题 -->
		                    <td>${clinicList.organizer_name }</td><!-- 组织者 -->
		                    <td>${clinicList.activity_timeStr }</td><!-- 时间 -->
		                    <td>${clinicList.activityPlace }</td><!-- 地点 -->
		                    <td>${clinicList.doctors }</td><!-- 医师 -->
		                    <td>
		                    	<a href="#" class="js-view" data-id="${clinicList.activityId }">查看详情</a>
		                    	<c:if test="${clinicList.startCount==0}"><a href="#" class="js-update" data-id="${clinicList.activityId }">编辑</a></c:if><c:if test="${clinicList.startCount!=0}">编辑</c:if></td>
	                	</tr>
	                </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/clinicList" pageId="clinicList" />
        </div>
    </div>
</div>

<script>

require([ 'jquery' ], function($){
     	var $self = $("#clinicList");

     	$self.find("#js-create").on("click", function(e){
     		common.createTab({
     			uri: '${ctx}/clinicList/create',
     			data: {name: '新增义诊'},
     			key: 'newClinic'
     		});
     	});
     	
     	$self.find(".js-update").on("click", function(e){
     		var id = $(this).attr('data-id');
     		common.createTab({
     			uri: '${ctx}/clinicList/update/'+id,
     			data: {name: '修改义诊'},
     			key: 'newClinic'
     		});
     	});
     	
     	$self.find(".js-view").on("click", function(e){
     		var id = $(this).attr('data-id');
     		common.createTab({
     			uri: '${ctx}/clinicList/view/'+id,
     			data: {name: '义诊详情'},
     			key: 'clinicDetail'
     		});
     	});
     	

		$self.find("#js-delete").on("click",function(e) {
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
		                $.get("${ctx}/clinicList/delete/" + strids,function(data){
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