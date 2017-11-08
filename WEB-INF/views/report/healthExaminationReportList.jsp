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
    <div class="tb-head">健康体检数据统计</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <form action="#" class="form-inline" id="js-form">
                       <tags:selectboxMapper name="staffId" list="${stationStaffs}" value="${pages.searchMap['staffId']}" addNull="true" emptyTitle="健康管理师"/>
                       <tags:selectboxMapper name="condYear" list="${years}" value="${pages.searchMap['condYear']}" addNull="true" emptyTitle="年度"/>
                        <input type="button" class="btn btn-main" id="js-search" value="查询" />
                    </form>
                </div>
                <div class="pull-right">
                    <button type="button" class="btn btn-main" id="btn-export">导出</button>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th>健康管理师</th>
                    <th>已健康体检（人）</th>
                    <th>年度</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content}" var="report" varStatus="status">
                    <tr>
                        <td>${report.staffName}</td>
                        <td>${report.times}</td>
                        <td>${report.year}</td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/healthExaminationReport" pageId="healthExaminationReport" />
        </div>
    </div>
</div>
<script>
    require([
        'jquery'
    ],function($){
        var $self = $("#healthExaminationReport");
        
        $self.find("#js-search").on('click',function(e){
            common.load({
                container: 'healthExaminationReport',
                url: '${ctx}/healthExaminationReport',
                data: $("#js-form").serialize()
            });
        });
        $self.find("#btn-export").on('click',function(e){
            common.download({
            	url:"${ctx}/healthExaminationReport?${search}&download=download"
            });
        });
    });

</script>