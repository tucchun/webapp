<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags" %>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap audit">
    <div class="tb-head">居民资料审核</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                     <form action="#" class="form-inline" id="js-search-audit">
                     	 	<select name="onecate" class="form-control" id="js-onecate" />
                     	 	<select name="twocate" class="form-control" id="js-twocate" />
							<select name="state" class="form-control">
								<option value="all">审核状态</option>
								<option value="0" <c:if test="${pages.searchMap['state'] == 0}">selected</c:if>>待审核</option>
								<option value="1" <c:if test="${pages.searchMap['state'] == 1}">selected</c:if>>通过审核</option>
								<option value="2" <c:if test="${pages.searchMap['state'] == 2}">selected</c:if>>未通过审核</option>
							</select>
                        <input type="button" class="btn btn-main" value="查询" id="js-search" />
                     </form>
            </div>
        </div>
       <table cellspacing="0" class="table table-striped table-hover table-bordered">
    <thead>
    <tr>
        <th>序号</th>
        <th>所属社区卫生站</th>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        <th>民族</th>
        <th>本人电话</th>
        <th>身份证号码</th>
        <th>资料修改原因</th>
        <th>管辖者</th>
        <th>审核状态</th>
        <th>资料修改者</th>
        <th>修改时间</th>
        <th>审核时间</th>
        <th>备注</th>
        <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <c:forEach items="${pages.content}" var="residentaudit" varStatus="status">
        <tr>
            <td>${status.index+1}</td>
            <td>${residentaudit.extend3 }</td>
            <td>${residentaudit.residentName}</td>
            <td>
           		 <c:if test="${residentaudit.residentSex eq 1}">男</c:if>
                 <c:if test="${residentaudit.residentSex eq 2}">女</c:if>
            </td>
            <td>${residentaudit.extend1 }</td>
            <td>${residentaudit.residentNation}</td>
            <td>${residentaudit.residentMobile}</td>
            <td>${residentaudit.residentIdentity}</td>
            <td>${residentaudit.editReason}</td>
            <td>${residentaudit.healthManagerMan}</td>
            <td>
             	<c:if test="${residentaudit.residentResult eq 0}">待审核</c:if>
             	<c:if test="${residentaudit.residentResult eq 1}">审核通过</c:if>
             	<c:if test="${residentaudit.residentResult eq 2}">审核未通过</c:if>
            </td>
            <td>${residentaudit.menderName}</td>
            <td>${residentaudit.hecadreEditTime}</td>
            <td>${residentaudit.auditTime}</td>
            <td><c:if test="${residentaudit.residentResult ne 0}">${residentaudit.residentAuditRemark}</c:if></td>
            <td class="optCol">
                <c:if test="${residentaudit.residentResult eq 0}"><a href="#" data-id="${residentaudit.residentId}" class="js-audit">审核</a></c:if>
             	<c:if test="${residentaudit.residentResult eq 1}"><a href="#" data-id="${residentaudit.residentId}" class="js-audit">查看详情</a></c:if>
             	<c:if test="${residentaudit.residentResult eq 2}"><a href="#" data-id="${residentaudit.residentId}" class="js-audit">查看详情</a></c:if>
            </td>
        </tr>
    </c:forEach>
    </tbody>
</table>
<tags:pagination page="${pages}" action="${ctx}/residentAudit?state=${pages.searchMap['state']}&twocate=${pages.searchMap['twocate']}&onecate=${pages.searchMap['onecate']}" pageId="residentAudit"  table_id="residentAudit"/>
    </div>
</div>

<div id="div_include_modal2">
    <jsp:include page="residentAuditModal.jsp" flush="true" />
</div>
</div>
<script>

    require([
        'jquery',
        'js/cascade'
    ], function($, cascade){
        var $self = $("#residentAudit");
        
        $.getJSON("${ctx}/residentAudit/getTypeCascade", function(data) {
			new cascade({
				$primary : $self.find("#js-onecate"),
				$secondary : $self.find("#js-twocate"),
				"primaryData" : data.oneCateList,
				"secondaryData" : data.twoCateList,
				"parentId" : "parentid",
				"defaultPrimary" : "${pages.searchMap['onecate']}",
				"defaultSecondary" : "${pages.searchMap['twocate']}",
				"defaultPrimaryTip": "市公司",
				"defaultSecondaryTip":"社区卫生站"
			});
		});


        $self.find("#js-search").on('click',function(e){
            common.load({
                container: 'residentAudit',
                url: '${ctx}/residentAudit',
                data: $self.find("#js-search-audit").serialize()
            });
        });
        
        $self.find(".js-audit").on("click", function(e){
            var id = $(this).attr('data-id');
            $.get("${ctx}/residentAudit/update/"+id,function(html){
                $("#div_include_modal2").html(html);
                $("#modal_residentAudit").modal('show');
            },"html");
        });	
    });
</script>