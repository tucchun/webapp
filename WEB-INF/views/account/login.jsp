<%@page import="java.util.Date"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page import="org.apache.shiro.web.filter.authc.FormAuthenticationFilter"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>健康云助手后台登录</title>
	<link rel="icon" type="image/x-icon" href="../static/assets/bitbug_favicon.ico">
	<link rel="stylesheet" href="${ctx}/static/css/login.css"/>
</head>
<body class="login">
<div class="content">
	<div class="prelative login_wrap">
		<%
			String error = (String) request.getAttribute(FormAuthenticationFilter.DEFAULT_ERROR_KEY_ATTRIBUTE_NAME);
			if(error != null){
		%>
		<div class="login_fail">
			<%
			if(error.endsWith("UnknownAccountException") || error.endsWith("IncorrectCredentialsException")){
				%>
					<div class="text-center">账号或密码错误，请重试.</div>
				<%
			}
			if(error.endsWith("DisabledAccountException")){
				%>
					<div class="text-center">服务登录失败.</div>
				<%
			}
			%>
			
		</div>

		<%
			}
		%>
		<form id="loginForm" action="/login" method="post" class="pabsolute">
			<table cellpadding="0" cellspacing="0">

				<tr>
					<td rowspan="4" class="text-center"><img src="${ctx}/static/sprite/loginlogo.png" alt=""></td>
					<td class="prelative">
						<i class="icon icon_usr"></i><input id="username" name="username" value="${username}" type="text" placeholder="请输入用户名" class="form-control"/>
					</td>
				</tr>
				<tr>
					<td class="prelative">
						<i class="icon icon_pwd"></i><input id="passwordstr" name="passwordstr" type="password" placeholder="请输入密码" class="form-control mb70"/>
						<input type="hidden" id="password" name="password" value=""/>
					</td>
				</tr>
				<tr>
					<td class="prelative">
						<label class="checkbox" for="rememberMe"><input type="checkbox" id="rememberMe" name="rememberMe"/> 记住我</label>
					</td>
				</tr>
				<tr>
					<td class="prelative">
						<button type="submit" id="submit_btn" class="btn btn-main form-control">登录</button>
					</td>
				</tr>
			</table>
		</form>
	</div>
</div>
</body>
<script data-ctx="${ctx}/" src="${ctx}/static/assets/require/require-2.1.5.js" data-ver="${minorVersion}"  id="js-main"></script>
<script data-ctx="${ctx}/" src="${ctx}/static/js/login.js?ver=<%=new Date().getTime() %>"></script>
</html>