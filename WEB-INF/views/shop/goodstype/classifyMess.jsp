<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap">
    <div class="tb-head">商品分类管理&gt;&gt;新增分类</div>
    <div class="tb-content">
        <form action="#" id="form_classify">
        <div class="tb-wrap">
            <table class="table wrap-table">
                <tbody>
                <tr>
                    <td>一级分类名:</td>
                    <td>
                        <div class="col-sm-10 form-inline">
                            <input type="text" class="form-control" placeholder="一级分类" value="${interGoodsType.name}" readonly="readonly">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>二级分类:</td>
                    <td>
                    	<c:forEach items="${interGoodsType.typeList }" var="list" varStatus="status">
                        <div class="form-inline" data-optype="update">
                            <input type="text" class="form-control" value="${list.name }" readonly="readonly"></i>
                        </div>
                        </c:forEach>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        </form>
    </div>
</div>
