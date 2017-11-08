<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<style type="text/css">
	.table-left td{text-align: left!important;}
	.table-noborder td{border-top: 0px!important;}
</style>

<div id="modal_view" class="modal fade">
    <div class="modal-dialog" style="width:800px">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title" id="modal_expenditureLabel">服务包详情</h4>
            </div>
            <div class="modal-body">
                <form action="#" id="js-form">
                    <table class="table table-left">
                        <tr>
                        	<td><label>服务包名称</label></td>
                        </tr>
                        <tr>
                        	<td>${fdSp.spName }</td>
                        </tr>
                    </table>
                    <table class="table table-bordered table-left">
                        <tr>
                        	<td>服务项目</td>
                        	<td>服务次数</td>
                        	<td>执行次数</td>
                        	<td>服务单价（元）</td>
                        	<td>服务价格（元）</td>
                        	<td>职工医保报销</td>
                        	<td>新农合报销</td>
                        	<td>居民医保报销</td>
                        </tr>
                        <c:forEach items="${userSpItemList }" var="spItem" varStatus="status">
                        <tr>
                        	<td>${status.index+1}、${spItem.itemName }</td>
                        	<td style="text-align: right!important;">
	                        	<c:if test="${spItem.itemServiceTimes eq 0}">不限</c:if>
	                       		<c:if test="${spItem.itemServiceTimes ne 0}">${spItem.itemServiceTimes }</c:if>
                        	</td>
                        	<td style="text-align: right!important;">${spItem.itemTimes }</td>
                        	<td style="text-align: right!important;"><fmt:formatNumber type="currency" value="${spItem.itemPrice }" pattern="#,##0.00#"/></td>
                        	<td style="text-align: right!important;"><fmt:formatNumber type="currency" value="${spItem.itemPrice*spItem.itemServiceTimes }" pattern="#,##0.00#"/></td>
                        	<td style="text-align: right!important;">${spItem.reimPctEmp/100 }%</td>
                        	<td style="text-align: right!important;">${spItem.reimPctNew/100 }%</td>
                        	<td style="text-align: right!important;">${spItem.reimPctRes/100 }%</td>
                        </tr>
                        </c:forEach>
                    </table>
                    <table class="table table-left table-noborder">
                    	<tr>
                    		<td class="col-sm-2"><label>服务总价</label></td>
                    		<td><fmt:formatNumber type="currency" value="${fdSp.spOriginalPrice }" pattern="#,##0.00#"/>&nbsp;元</td>
                    	</tr>
                    	<tr>
                    		<td><label>打包总价</label></td>
                    		<td><fmt:formatNumber type="currency" value="${fdSp.spActualPrice }" pattern="#,##0.00#"/>&nbsp;元</td>
                    	</tr>
                    </table>
                </form>
            </div>
        </div>
    </div>
</div>
<script>
</script>