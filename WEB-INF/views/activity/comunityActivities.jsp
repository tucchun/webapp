<%@page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap comunityActivities">
    <div class="tb-head">下社区活动管理</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
				<div class="pull-right">
					<button class="btn btn-main" type="button" id="btn-export">导出</button>
				</div>
			</div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
		        <tbody>
		        <tr>
		          <th class="col-xs-1">序号</th>
                  <th>主题</th>
                  <th>组织者</th>
                  <th>活动开始时间</th>
                  <th>地点</th>
                  <th>操作</th>
		        </tr>
		        <c:forEach var="activities" items="${pages.content}" varStatus="status" >
		        <tr>
		          <td>${status.index+1}</td>
		          <td>${activities.subject}</td>
		          <td>${activities.organizer_name}</td>
		          <td>${activities.activity_timeStr}</td>
		          <td>${activities.activityPlace}</td>
		          <td><a href="#" class="js-view" data-id="${activities.activityId }">查看详情</a></td>
		        </tr>
		        </c:forEach>
		        </tbody>
		    </table>
            <tags:pagination page="${pages}" action="${ctx}/comunityActivities" pageId="comunityActivities" />
        </div>
    </div>
</div>

<script>

    require([
        'jquery'
    ], function($){
        var $self = $("#comunityActivities");

	    $self.find(".js-view").on("click", function(e){
			var id = $(this).attr('data-id');
			common.createTab({
				uri: '${ctx}/comunityActivities/view/'+id,
				data: {name: '下社区活动详情'},
				key: 'comunityActivitiesDetail'
			});
		});
	    
	    $self.find("#btn-export").on('click',function(e){
	        window.location.href="${ctx}/comunityActivities?download=download";
	    });
	    
    });
    
</script>