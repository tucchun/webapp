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
    <div class="tb-head">健康教育宣传场地一览表</div>
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
                    <th>场地名称</th>
                    <th>面积</th>
                    <th>数量</th>
                    <th>更换频率（次/年）</th>
                    <th>投入使用时间</th>
                    <th>性质（专/兼）</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content}" var="ground" varStatus="status">
                    <tr>
                        <td>${status.index+1}</td>
                        <td>${ground.decodeServiceStation}</td>
                        <td>${ground.groundName}</td>
                        <td>${ground.groundMeasure}</td>
                        <td>${ground.groundCount}</td>
                        <td>${ground.groundFreq}</td>
                        <td><fmt:formatDate value="${ground.groundEffectiveDate}" /></td>
                        <td>${ground.decodeGroundType}</td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/report/ground" pageId="reportGround" />
        </div>
    </div>
</div>

<script>
    require([
        'jquery','js/cascade'
    ],function($,cascade){
        var $self = $("#reportGround");
        
        $self.find("#js-search").on('click',function(e){
            common.load({
                container: 'reportGround',
                url: '${ctx}/report/ground',
                data: $("#js-form").serialize()
            });
        });
        $self.find("#btn-export").on('click',function(e){
            common.download({
            	url:"${ctx}/report/ground?${search}&download=download"
            });
        });
    });

</script>