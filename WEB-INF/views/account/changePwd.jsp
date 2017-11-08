<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />


<form class="form-horizontal" id="changePwd-form">
  <div class="form-group">
    <label for="oldpwd" class="col-sm-3 control-label">旧密码</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="oldPasswordstr" name="oldPasswordstr" placeholder="旧密码">
      <input type="hidden" id="oldPassword" name="oldPassword" placeholder="旧密码">
    </div>
  </div>
  <div class="form-group">
    <label for="pwd" class="col-sm-3 control-label">新密码</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="passwordstr" name="passwordstr" placeholder="新密码">
      <input type="hidden" id="password" name="password" value=""/>
    </div>
  </div>
  <div class="form-group">
    <label for="rePwd" class="col-sm-3 control-label">确认新密码</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="chkpassword" name="chkpassword" placeholder="确认新密码">
    </div>
  </div>
</form>
