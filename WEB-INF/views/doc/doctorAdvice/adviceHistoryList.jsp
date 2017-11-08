<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap expenditure">
    <div class="tb-head">历史建议列表</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <form class="form-inline" id="js-search-form">
                        <input size="32" type="text" class="form-control" placeholder="请输入姓名，手机号码或身份证号码" name="keyword" value="${pages.searchMap['keyword']}"/>
                     	<tags:selectbox name="residentGroup" list="${residentGroups}" value="${pages.searchMap['residentGroup'] }" addNull="true" emptyTitle="所属人群"/>
                        <input type="button" class="btn btn-main" value="查询" id="js-search" />
                    </form>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <tbody>
		        	<thead>
		        		<tr>
			        		<th>姓名</th>
					        <th>性别</th>
					        <th>年龄</th>
					        <th>民族</th>
					        <th>本人电话</th>
					        <th>联系人姓名/电话</th>
					        <th>身份证号码</th>
					        <th>所属人群</th>
					        <th>所属现住址</th>
					        <th>管辖者</th>
					        <th>建议时间</th>
					        <th>操作</th>
				        </tr>
		        	</thead>
		        
		        	<c:forEach items="${pages.content}" var="advice" varStatus="status">
		        	  <tr>
			            <td>${advice.resident.user.realName}</td>
			            <td>${advice.resident.decodeSex}</td>
			            <td>${advice.resident.decodeAge}</td>
			            <td>${advice.resident.residentNation}</td>
			            <td>${advice.resident.residentMobile}</td>
			            <td>${advice.resident.residentContactsName}/${advice.resident.residentContactsMobile}</td>
			            <td>
			                <c:if test="${advice.resident.user.personId ne null and advice.resident.user.personId ne ''}">
			                    ${advice.resident.user.personId}
			                </c:if>
			                <c:if test="${advice.resident.user.personId eq null or advice.resident.user.personId eq ''}">
			                    ${advice.resident.residentBirthNumber}
			                </c:if>
			            </td>
			            <td>${advice.resident.decodeResidentGroup}</td>
			            <td>${advice.resident.householdAddress}</td>
			            <td>${advice.resident.hecadreName}</td>
			            <td>${advice.createDateStr}</td>
			            <td class="optCol">
				            <a href="#" data-id="${advice.resident.userId}" class="js-create">查看建议详情</a></td>
			        	</tr>
		        	</c:forEach>
		        </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/doctorAdvice/history" pageId="adviceHistory" />
        </div>
    </div>
</div>
<script>
require([
	'jquery'
],function($){
	var $self = $("#adviceHistory");
	
	$self.find(".js-create").on("click", function(e){
        var id = $(this).attr('data-id');
        common.createTab({
			uri: '${ctx}/doctorAdvice/create/'+id,
			data: {name: '撰写健康建议'},
			key: 'createDoctorAdvice'
		});
    });
	
	$self.find("#js-search").on('click',function(e){
        common.load({
            container: 'adviceHistory',
            url: '${ctx}/doctorAdvice/history',
            data: $self.find("#js-search-form").serialize()
        });
    });
});

</script>