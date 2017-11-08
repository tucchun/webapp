<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap xzqy">
    <div class="tb-head">健教理论及健教技能培训记录</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <form action="#" class="form-inline" id="js-form">
                        
                    </form>
                </div>
                <div class="pull-right">
                    <button type="button" class="btn btn-main" id="btn-export">导出</button>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th>序号</th>
                    <th>主题</th>
                    <th>时间</th>
                    <th>地点</th>
                    <th>组织者</th>
                    <th>参与人群</th>
                    <th>参与人数</th>
                    <th>授课老师</th>
                    <th>主办单位</th>
                    <th>总结</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content}" var="workshop" varStatus="status">
                    <tr>
                        <td>${status.index+1}</td>
                        <td>${workshop.activitySubject}</td>
                        <td>${workshop.decodeActivityTime}</td>
                        <td>${workshop.activityPlace}</td>
                        <td>${workshop.decodeOrganizeName}</td>
                        <td>${workshop.decodeUserCrowds}</td>
                        <td>${workshop.totalPersonCount}</td>
                        <td>${workshop.activityExpert}</td>
                        <td>${workshop.activityHostUnit}</td>
                        <td>${workshop.decodeActivitySum}</td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/report/activity/lecture" pageId="activityLecture" />
        </div>
    </div>
</div>
<script>
    require([
        'jquery','js/cascade'
    ],function($,cascade){
        var $self = $("#activityLecture");
        
        $self.find("#js-search").on('click',function(e){
            common.load({
                container: 'activityLecture',
                url: '${ctx}/report/activity/lecture',
                data: $self.find("#js-form").serialize()
            });
        });
        $self.find("#btn-export").on('click',function(e){
        	common.download({
        		url:"${ctx}/report/activity/lecture?${search}&download=download"
        	});
        });
    });

</script>