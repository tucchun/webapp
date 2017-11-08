<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><sitemesh:title/></title>
    <link rel="stylesheet" href="${ctx}/static/css/style.css"/>
</head>

<div class="header">
    <div class="hd-title">
        <span class="icon icon-logo"></span>
        <span class="icon icon-company"></span>
        <span class="title">后台管理</span>
    </div>
    <div class="hd-operate">
        <span class="icon icon-avatar"></span>
        <span>小安南</span>
        <span>|</span>
        <span>修改密码</span>
        <span>|</span>
        <a href="${ctx }/logout"><span>退出</span></a>
    </div>
</div>
<div class="menu" id="js-menu">

            <%@ include file="/WEB-INF/layouts/menu.jsp"%>

</div>
<div class="content">
    	
    <div>

        <div class="bs-example bs-example-tabs" data-example-id="togglable-tabs">
            <ul id="myTabs" class="nav nav-tabs" role="tablist">

            </ul>
            <div id="myTabContent" class="tab-content">

            </div>

        </div>

    </div>


</div>
</body>
<script data-ctx="${ctx}" src="${ctx}/static/assets/require/require-2.1.5.js"  id="js-main" data-main="${ctx}/static/js/main"></script>
<script>
</script>
</html>