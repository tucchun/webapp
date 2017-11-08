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
    <div class="tb-head">健康档案建档情况统计表</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <form action="#" class="form-inline" id="js-form">
                        <select name="stationId" class="form-control" id="js-stationId" />
                        <select name="commAreaCode" class="form-control" id="js-commAreaCode" />
                        <tags:selectboxMapper name="year" list="${years }" addNull="false" value="${searchMap['year'] }" emptyTitle="年度"/>
                        <tags:selectboxMapper name="quarter" list="${quarters }" addNull="false" value="${searchMap['quarter'] }" emptyTitle="季度"/>
                        <input type="button" class="btn btn-main" value="查询" id="js-search" />
                    </form>
                </div>
                <div class="pull-right">
                    <button type="button" class="btn btn-main" id="btn-export">导出</button>
                </div>
            </div>

            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th rowspan="2">序号</th>
                    <th rowspan="2">社区卫生站</th>
                    <th rowspan="2">上年末常住人口（人）</th>
                    <th colspan="3" class="center">辖区内电子健康档案</th>
                    <th rowspan="2" class="center">季度</th>
                </tr>
                <tr>
                    <th>电子健康档案累计建档人数</th>
                    <th>其中当季新建数</th>
                    <th>电子健康档案建档率（%）</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content}" var="station" varStatus="status">
                	<c:set var="intVar1" value="${station.yearReportStation.count}" />  
                	<c:set var="intVar2" value="${station.total_resident}" />  
                    <tr>
                    <td>${status.index+1}</td>
                    <td>${station.name}</td>
                    <td>${intVar2}</td>
                    <td>${intVar1}</td>
                    <td>${station.quarterReportStation.count}</td>
                    <td><fmt:formatNumber value="${intVar1/intVar2*100}" pattern="#,##0.00#"/>%</td>
                    <td>
                        ${station.quarterReportStation.quarterName}
                    </td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
        </div>
    </div>
</div>
<script>
    require([
        'jquery','js/cascade'
    ],function($,cascade){
        var $self = $("#residentStatistics");
        
        $self.find("#btn-export").on('click',function(e){
          	common.download({
          		url:"${ctx}/report/resident/statistics?${search}&download=download"
          	});
        });
        
        var stations = JSON.parse('${stations}');
    	var commAreaCodes =  JSON.parse('${commAreaCodes}');
        new cascade({
            $primary: $self.find("#js-stationId"),
            $secondary:  $self.find("#js-commAreaCode"),
            "primaryData": stations,
            "secondaryData": commAreaCodes,
            "parentId": "parent",
            "defaultPrimary": "${searchMap['stationId']}",
            "defaultSecondary": "${searchMap['commAreaCode']}",
        });
        
        $self.find("#js-search").on('click',function(e){
            common.load({
                container: 'residentStatistics',
                url: '${ctx}/report/resident/statistics',
                data: $self.find("#js-form").serialize()
            });
        });
    });

</script>