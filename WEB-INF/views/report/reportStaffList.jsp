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
    <div class="tb-head">社区卫生站健康教育网络名单登记表</div>
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
                    <th>社区卫生站</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>出生年月</th>
                    <th>学历</th>
                    <th>科室</th>
                    <th>职务</th>
                    <th>电话</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content}" var="staff" varStatus="status">
                    <tr>
                        <td>${status.index+1 }</td>
                        <td>${staff.organizationName}</td>
                        <td>${staff.staffName }</td>
                        <td>${staff.decodeSex }</td>
                        <td><fmt:formatDate value="${staff.staffBirth}"/></td>
                        <td>${staff.decodeEducation }</td>
                        <td>${staff.decodeDepartment }</td>
                        <td>${staff.decodePosition }</td>
                        <td>${staff.staffMobile }</td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/report/staff" pageId="reportStaff" />
        </div>
    </div>
</div>
<script>
    require([
        'jquery','js/cascade'
    ],function($,cascade){
        var $self = $("#reportStaff");
        
        $self.find("#js-search").on('click',function(e){
            common.load({
                container: 'reportStaff',
                url: '${ctx}/report/staff',
                data: $("#js-form").serialize()
            });
        });
        $self.find("#btn-export").on('click',function(e){
            common.download({
            	url:"${ctx}/report/staff?${search}&download=download"
            });
        });
    });

</script>