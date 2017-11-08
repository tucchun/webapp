<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

     <div class="wrap hospital">
    <div class="tb-head">社区卫生站管理</div>
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
                    <th>详细地址</th>
                    <th>职工数</th>
                    <th>卫计人员数</th>
                    <th>防保人员数</th>
                    <th>其他人员数</th>
                    <th>辖区户籍人口</th>
                    <th>辖区总户数</th>
                    <th>辖区常住人口数</th>
                    <th>上年门诊量</th>
                    <th>上年住院人数</th>
                    <th>上年健教投入资金(￥)</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content}" var="serviceStation" varStatus="status">
                	<tr>
	                    <td>${status.index+1 }</td>
	                    <td>${serviceStation.name }</td>
	                    <td>${serviceStation.area }</td><!-- 地址 -->
                        <td><fmt:formatNumber type="currency" value="${serviceStation.staffCount }" pattern="#,##0"/></td><!-- 职工数 -->
                        <td><fmt:formatNumber type="currency" value="${serviceStation.medicalStaffCount }" pattern="#,##0"/></td><!-- 卫技 -->
                        <td><fmt:formatNumber type="currency" value="${serviceStation.securityStaffCount }" pattern="#,##0"/></td><!-- 防保 -->
                        <td><fmt:formatNumber type="currency" value="${serviceStation.otherStaffCount }" pattern="#,##0"/></td><!-- 其他 -->
	                    <td><fmt:formatNumber type="currency" value="${serviceStation.total_population }" pattern="#,##0"/></td><!-- 辖区户籍人口数 -->
	                    <td><fmt:formatNumber type="currency" value="${serviceStation.total_house }" pattern="#,##0"/></td><!-- 辖区总户数 -->
	                    <td><fmt:formatNumber type="currency" value="${serviceStation.total_resident }" pattern="#,##0"/></td><!-- 辖区常住人口数 -->
	                    <td><fmt:formatNumber type="currency" value="${serviceStation.total_last_year_outpatient }" pattern="#,##0"/></td><!-- 上年门诊量 -->
	                    <td><fmt:formatNumber type="currency" value="${serviceStation.total_last_year_hospitalized }" pattern="#,##0"/></td><!-- 上年住院人数 -->
	                    <td>
                            ￥<fmt:formatNumber type="currency" value="${serviceStation.total_last_year_funds}" pattern="#,##0.00#"/>
                        </td>
                	</tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination pageId="reportStation" paginationSize="5" action="${ctx }/report/station" page="${pages}"></tags:pagination>
        </div>
    </div>
</div>

<script>
require([
	'jquery','js/cascade'
],function($,cascade){
	var $self = $("#reportStation");
    
    $self.find("#js-search").on('click',function(e){
        common.load({
            container: 'reportStation',
            url: '${ctx}/report/station',
            data: $("#js-form").serialize()
        });
    });
    $self.find("#btn-export").on('click',function(e){
        common.download({
        	url:"${ctx}/report/station?${search}&download=download"
        });
    });
});

</script>