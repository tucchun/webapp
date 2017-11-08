<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<table cellspacing="0" class="table table-striped table-hover table-bordered">
    <thead>
    <tr>
        <th>序号</th>
        <th>
            <c:if test="${codeType eq 'all'}">
                省/直辖市/自治区
            </c:if>
            <c:if test="${codeType eq 'province'}">
                市
            </c:if>
            <c:if test="${codeType eq 'city'}">
                区/县
            </c:if>
            <c:if test="${codeType eq 'district'}">
                乡镇/街道
            </c:if>
            <c:if test="${codeType eq 'street'}">
                村/居委会
            </c:if>
        </th>
        <th>行政区划编码</th>
        <th>上级编码</th>
    </tr>
    </thead>
    <tbody>
        <c:forEach items="${pages.content }" var="area" varStatus="status">
        <tr>
        <td>${status.index+1 }</td>
        <td>${area.name}</td>
        <td>${area.code}</td>
        <td>${area.parent}</td>
         </tr>
     </c:forEach>
    </tbody>
</table>
