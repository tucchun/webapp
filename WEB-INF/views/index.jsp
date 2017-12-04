<%@page import="java.util.Date"%>
<%@page import="org.apache.shiro.SecurityUtils"%>
<%@page import="com.newcare.auth.pojo.User"%>
<%@page import="com.newcare.constant.Constants"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<c:set var="prj_perfix" value="<%=Constants.PRJ_PERFIX %>" />
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <title>健康云助手后台管理系统</title>
    <link rel="icon" type="image/x-icon" href="../static/assets/bitbug_favicon.ico">
    <link rel="stylesheet" href="../static/assets/zTree/css/zTreeStyle/zTreeStyle.css" />
    <link rel="stylesheet" href="${ctx}/static/assets/kinditor/themes/default/default.css?_=${minorVersion}"/>
    <link rel="stylesheet" href="${ctx}/static/assets/bootstrap/dist/css/bootstrap.min.css?_=${minorVersion}"/>
    <link rel="stylesheet" href="${ctx}/static/assets/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css?_=${minorVersion}"/>
    <link rel="stylesheet" href="${ctx}/static/assets/viewerjs/viewer.min.css?_=${minorVersion}"/>
    <link rel="stylesheet" href="${ctx}/static/assets/jquery.mloading-master/src/jquery.mloading.css?_=${minorVersion}"/>
    <link rel="stylesheet" href="${ctx}/static/sprite/sprite.css?_=${minorVersion}"/>
    <link rel="stylesheet" href="${ctx}/static/css/menu.css?_=${minorVersion}"/>
    <link rel="stylesheet" href="${ctx}/static/css/index.css?_=${minorVersion}"/>
    <link rel="stylesheet" href="${ctx}/static/css/page.css?_=${minorVersion}"/>
    <link rel="stylesheet" href="${ctx}/static/css/theme.css?_=${minorVersion}"/>
    <link rel="stylesheet" href="${ctx}/static/css/content.css?_=${minorVersion}"/>
    <link rel="stylesheet" href="${ctx}/static/css/jquery.autocompleter.css?_=${minorVersion}"/>
</head>
<body>
<%
	User user = (User) SecurityUtils.getSubject().getPrincipal();
%>
<div class="header">
    <div class="hd-title">
        <span class="logo"><img src="../static/sprite/new_logo.png" alt="logo"></span>
        <span class="title">后台管理系统V${version }</span>
        <input type=hidden id='__user__' value='${userId }' />
        <input type=hidden id='__auth__' value='${authStr }' />
    </div>
    <div class="hd-operate">
        <span class="icon">
        	<c:set var="headImg" value="<%=user.getHeadPic()%>"/>
           	<c:choose>
           		<c:when test="${headImg != null && headImg != ''}">
           			 <img src="${headImg}" />
           		</c:when>
           		<c:otherwise>
           			<img src="../static/sprite/avatar.png" />
           		</c:otherwise>
           	</c:choose>
        </span>
        <span><shiro:principal property="realName"/></span>
        <span>|</span>
        <span><a href="javascript:void(0);" id="js-msgCenter"><i class="icon icon-msg"></i><span class="msgCount">${msgCount}</span></a></span>
        <span>|</span>
        <span><a href="javascript:void(0);" id="js-update-pwd">修改密码</a></span>
        <span>|</span>
        <span><a href="${ctx }/logout">退出</a></span>
    </div>
</div>
<div class="menu" id="js-menu">
    <!--<ul id="tree" class="ztree"></ul>-->
    <div class="wrap-menu">
        <ul class="sidebar-menu">
            <!-- 自动生成菜单。 表在fnd_menu. 类在menuServiceImpl.genMenuHTML -->
            ${menuHTML}
        </ul>
    </div>
</div>
<ul id="myTabs" class="nav nav-tabs my-nav-tabs" role="tablist">
    <li class="tab-menu js-tab-menu hide" id="js-tab-menu">
        <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <span class="caret"></span>
            </button>
            <ul id="js-min-tab-menu" class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                <!--<li><a>Action</a></li>-->
                <!--<li><a>Another action</a></li>-->
                <!--<li><a>Something else here</a></li>-->
                <!--<li role="separator" class="divider"></li>-->
                <!--<li><a>Separated link</a></li>-->
            </ul>
        </div>
    </li>
</ul>
<div class="content">

    <div class="bs-example bs-example-tabs content-inner" data-example-id="togglable-tabs">

        <div id="myTabContent" class="tab-content">

        </div>

    </div>


</div>
</body>
<script data-ctx="${ctx}/" src="${ctx}/static/assets/require/require-2.1.5.js" data-ver="${minorVersion}" data-init="${initStation}" data-flagPwd="${flagPwd}" data-prj="${prj_perfix}" data-initId="${initStationId}" data-username="<%=user.getLoginName()%>"  id="js-main"></script>
<script data-ctx="${ctx}/" src="${ctx}/static/js/main.js?ver=<%=new Date().getTime() %>"></script>


</html>
