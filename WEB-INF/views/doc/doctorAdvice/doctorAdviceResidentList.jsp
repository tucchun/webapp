<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags" %>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap expenditure">
    <div class="tb-head">健康建议</div>
  <div class="tb-content">
    <div class="tb-wrap tb-wrap-auto">
      <div class="opt clearfix">
          <form action="#" class="" id="js-search-form">
            <div class="col-sm-6">
            	<input size="32" type="text" class="form-control" placeholder="请输入姓名，手机号码或身份证号码" name="keyword" value="${pages.searchMap['keyword']}"/>
            </div>
            <input type="button" class="btn btn-main" value="查询" id="js-search" />
            <span class="optCol">
              <a href="#">
              		<a href="#" class="js-list">历史建议列表</a>
               		 
              </a>
            </span>

          </form>
      </div>
      <table class="table table-border-none">
        <tbody>
        	<c:forEach items="${pages.content}" var="resident" varStatus="status">
        	  <tr>
	            <td>姓名:${resident.user.realName}</td>
	            <td>性别:${resident.decodeSex}</td>
	            <td>年龄:${resident.decodeAge}</td>
	            <td>所属人群:${resident.decodeResidentGroup}</td>
	            <td rowspan="3" class="optCol border-bottom">
	              <a href="#" data-id="${resident.user.id}" class="js-create">撰写健康建议</a>
	            </td>
	          </tr>
	          <tr>
	            <td colspan="3">
	            	<c:if test="${resident.residentMobile ne null and resident.residentMobile ne ''}">
	            		本人电话:${resident.residentMobile}
	            	</c:if>
	            	<c:if test="${resident.residentMobile eq null or resident.residentMobile eq ''}">
	            		联系人电话:${resident.residentContactsName}/${resident.residentContactsMobile}
	            	</c:if>
	            </td>
	            <td>身份证号码:
	            	<c:if test="${resident.user.personId ne null and resident.user.personId ne ''}">
	                    ${resident.user.personId}
	                </c:if>
	                <c:if test="${resident.user.personId eq null or resident.user.personId eq ''}">
	                    ${resident.residentBirthNumber}
	                </c:if>
	            </td>
	          </tr>
	          <tr>
	            <td colspan="4" class="border-bottom">现住址:${resident.householdAddress}</td>
	          </tr>
        	</c:forEach>
        </tbody>
      </table>
      <c:if test="${pages ne null }">
      	<tags:pagination page="${pages}" action="${ctx}/doctorAdvice" pageId="doctorAdvice"/>
      </c:if>
    </div>
  </div>
</div>
<script>
require([
	'jquery'
],function($){
	var $self = $("#doctorAdvice");
	
	$self.find("#js-search").on('click',function(e){
        common.load({
            container: 'doctorAdvice',
            url: '${ctx}/doctorAdvice',
            data: $self.find("#js-search-form").serialize()
        });
    });
	
	$self.find(".js-create").on("click", function(e){
        var id = $(this).attr('data-id');
        common.createTab({
			uri: '${ctx}/doctorAdvice/create/'+id,
			data: {name: '撰写健康建议'},
			key: 'createDoctorAdvice'
		});
    });
	
	$self.find(".js-list").on("click", function(e){
        common.createTab({
			uri: '${ctx}/doctorAdvice/history',
			data: {name: '历史建议列表'},
			key: 'adviceHistory'
		});
    });
});

</script>