<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap lectureList">
    <div class="tb-head">家庭医生健康服务包签约列表</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-right">
                    <input type="hidden" id="organizationId" name="organizationId" value="${organizationId }" />
                    <input type="hidden" id="hecadreIdListStr" name="hecadreIdListStr" value="${hecadreIdListStr }" />
                    <button type="button" class="btn btn-main" id="btn-export">导出</button>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered center">
                <thead>
                <tr>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>身份证号码</th>
                    <th>本人电话</th>
                    <th>联系人电话</th>
                    <th class="col-sm-2">健康服务包名称</th>
                    <th class="col-sm-3">健康服务包详情</th>
                    <th>付款情况</th>
                    <th>管辖者</th>
                    <th>服务开始时间</th>
                    <th>服务结束时间</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content}" var="list" varStatus="status">
                <tr>
                    <td><a href="#" data-id="${list.user_id}" class="js-view">${list.userName }</a></td>
                    <td>${list.sexStr }</td>
                    <td>${list.age }</td>
                    <td>${list.personId }</td>
                    <td>${list.residentMobile }</td>
                    <td>${list.residentContactsMobile }</td>
                    <td>${list.spName }</td>
                    <td><a href="#" class="js-itemDetail" data-id="${list.spId },${list.userSpId }">${list.itemName }</a></td>
                    <td>${list.payStateStr }</td>
                    <td>${list.currentHecadreName }</td>
                    <td>${list.beginDate }</td>
                    <td>${list.endDate }</td>
                </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/operationalData/spDetail?organizationId=${organizationId}&date_startStr=${date_startStr}&date_endStr=${date_endStr}&orgLevel=${orgLevel}&hecadreId=${hecadreId}&isTeam=${isTeam}&noTeamNext=${noTeamNext}&hecadreIdListStr=${hecadreIdListStr}" pageId="operationalDataSPDetail" />
        </div>
    </div>
</div>
<div id="modal_include_item"></div>
<script>

	require([ 'jquery' ], function($) {
		var $self = $("#operationalDataSPDetail");
		
		$self.find("#btn-export").on('click',function(e){
	        window.location.href="${ctx}/operationalData/spDetail?download=download&organizationId=${organizationId}&date_startStr=${date_startStr}&date_endStr=${date_endStr}&orgLevel=${orgLevel}&hecadreId=${hecadreId}&isTeam=${isTeam}&noTeamNext=${noTeamNext}&hecadreIdListStr=${hecadreIdListStr}";
	    });
		
		$self.find(".js-itemDetail").on("click", function(e){
			var ids = $(this).attr('data-id');
			var spId = ids.split(",")[0];
			var userSpId = ids.split(",")[1];
			$.get("${ctx}/operationalData/itemDetail?spId=" + spId + "&userSpId=" + userSpId,function(html){
			$self.find("#modal_include_item").html(html);
		    $self.find("#modal_view").modal("show");
			},"html");
		});
		
		$self.find(".js-view").on("click", function(e){
            var id = $(this).attr('data-id');
            common.createTab({
                uri: '${ctx}/resident/view/'+id,
                data: {name: '健康档案'},
                key: 'healthRecord'
            });
        });
		
	});
</script>