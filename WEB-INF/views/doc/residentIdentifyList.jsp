<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags" %>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap communityUser">
    <div class="tb-head">身份信息核验</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <form action="#" class="form-inline" id="js-search-form">
                    	<input size="32" type="text" class="form-control" placeholder="请输入姓名，手机号码或身份证号码" name="keyword" value="${pages.searchMap['keyword']}"/>
                    	<tags:selectbox name="residentGroup" list="${residentGroups}" value="${pages.searchMap['residentGroup'] }" addNull="true" />
                       <input type="button" class="btn btn-main" value="查询" id="js-search" />
                    </form>
            </div>
        </div>
        <div id="div_table_list">
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
			    <thead>
			    <tr>
			        <th>姓名</th>
			        <th>性别</th>
			        <th>民族</th>
			        <th>出生日期</th>
			        <th>身份证号码</th>
			        <th>户籍地址</th>
			        <th>现住址</th>
			        <th>所属人群</th>
			        <th>操作</th>
			    </tr>
			    </thead>
			    <tbody>
			    <c:forEach items="${pages.content}" var="resident" varStatus="status">
			        <tr>
			            <td>${resident.user.realName}</td>
			            <td>${resident.decodeSex}</td>
			            <td>${resident.residentNation}</td>
			            <td>${resident.birthdayStr}</td>
			            <td>
			                <c:if test="${resident.user.personId ne null}">
			                    ${resident.user.personId}
			                </c:if>
			                <c:if test="${resident.user.personId eq null}">
			                    ${resident.residentBirthNumber}
			                </c:if>
			            </td>
			            <td>${resident.residentHouseholdAddr}</td>
			            <td>${resident.residentAddress}</td>
			            <td>${resident.decodeResidentGroup}</td>
			            <td class="optCol">
			            	<c:if test="${not empty resident.identifyImage}">
			                	<a href="#" data-id="${resident.identifyImage}" class="js-view">查看身份证照片</a>
			                </c:if>
			            </td>
			        </tr>
			    </c:forEach>
			    </tbody>
			</table>
			<tags:pagination page="${pages}" action="${ctx}/resident?identify=identify" pageId="residentIdentify"/>
        </div>
    </div>
</div>

</div>
<script>

    require([
        'jquery'
    ], function($, cascade){
        var $self = $("#residentIdentify");

        $self.find("#js-search").on('click',function(e){
            common.load({
                container: 'residentIdentify',
                url: '${ctx}/resident?identify=identify',
                data: $self.find("#js-search-form").serialize()
            });
        });
        
        $self.find(".js-view").on("click", function(e){
            var id = $(this).attr('data-id');
            var url = "/hca/api/business/getfile/"+id;
            window.open(url);
        });

    });
</script>