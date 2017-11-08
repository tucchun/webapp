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
    <div class="tb-head">健康教育宣传器材一览表</div>
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
                    <th>宣传器材名称</th>
                    <th>型号</th>
                    <th>数量</th>
                    <th>价值</th>
                    <th>投入使用时间</th>
                    <th>使用情况（自用/共用）</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content}" var="ground" varStatus="status">
                    <tr>
                        <td>${status.index+1}</td>
                        <td>${ground.decodeServiceStation}</td>
                        <td>${ground.equName}</td>
                        <td>${ground.equModel}</td>
                        <td>${ground.equMeasure}</td>
                        <td>￥<fmt:formatNumber type="currency" value="${ground.equValue}" pattern="#,##0.00#"/></td>
                        <td><fmt:formatDate value="${ground.equEffectiveDate}" /></td>
                        <td>${ground.decodeEquType}</td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/report/equipment" pageId="reportEquipment" />
        </div>
    </div>
</div>

<script>
    require([
        'jquery','js/cascade'
    ],function($,cascade){
        var $self = $("#reportEquipment");
        
        $self.find("#js-search").on('click',function(e){
            common.load({
                container: 'reportEquipment',
                url: '${ctx}/report/equipment',
                data: $("#js-form").serialize()
            });
        });
        $self.find("#btn-export").on('click',function(e){
            common.download({
            	url:"${ctx}/report/equipment?${search}&download=download"
            });
        });
    });

</script>