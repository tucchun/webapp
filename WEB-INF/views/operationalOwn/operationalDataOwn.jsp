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
    <div class="tb-head">运营数据统计</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <input type="hidden" id="loginOrganizationId" name="loginOrganizationId" value="${loginOrganizationId }" />
                    <input type="hidden" id="level" name="level" value="${level }" />
                    <input type="hidden" id="isTeam" name="isTeam" value="${isTeam }" />
                    <input type="hidden" id="noTeamNext" name="noTeamNext" value="${noTeamNext }" />
                </div>
                <div class="pull-right">
                	<c:if test="${orgLevel==4}">
	                    <button type="button" class="btn btn-main" id="btn-export">导出</button>
                	</c:if>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered center">
                <thead>
                <tr>
                    <c:if test="${orgLevel==1||orgLevel==2||orgLevel==3}">
                    <th>组织机构</th>
                    </c:if>
                    <c:if test="${orgLevel==4 && isTeam==1}">
                    <th>家庭医生团队</th>
                    </c:if>
                    <c:if test="${orgLevel==4 && isTeam==0}">
                    <th>健康管理师</th>
                    </c:if>
                    <th>管辖居民（人）</th>
                    <th>已建档（人）</th>
                    <th>0-6岁儿童（人）</th>
                    <th>孕产妇（人）</th>
                    <th>老年人（人）</th>
                    <th>高血压患者（人）</th>
                    <th>糖尿病患者（人）</th>
                    <th>冠心病患者（人）</th>
                    <th>已随访（人次）</th>
                    <th>已挂号就诊（人次）</th>
                    <th>已免疫（人次）</th>
                    <th>家庭医生已签约（人）</th>
                    <th>健康服务包（个）</th>
                    <c:if test="${orgLevel==1||orgLevel==2||orgLevel==3||(orgLevel==4&&isTeam==1)}">
                    <th>操作</th>
                    </c:if>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content}" var="list" varStatus="status">
	                <tr>
	                    <td>
	                    	<c:if test="${orgLevel==4 && isTeam==0 && list.staffStatus==0 }">
	               		     	${list.organizationName }<span class="user-tip">已离职</span>
	                    	</c:if>
	                    	<c:if test="${orgLevel!=4 || list.staffStatus!=0 }">
		                    	${list.organizationName }
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.jmcount==0}">${list.jmcount }</c:if>
	                    	<c:if test="${list.jmcount>0}">
			                    <a href="#" class="js-jmDetail" data-id="${list.loginOrganizationId };0;0;">${list.jmcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.jdcount==0}">${list.jdcount }</c:if>
	                    	<c:if test="${list.jdcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${list.loginOrganizationId };0;0;${group_all};">${list.jdcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.childcount==0}">${list.childcount }</c:if>
	                    	<c:if test="${list.childcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${list.loginOrganizationId };0;0;${group_children};">${list.childcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.maternalcount==0}">${list.maternalcount }</c:if>
	                    	<c:if test="${list.maternalcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${list.loginOrganizationId };0;0;${group_maternal};">${list.maternalcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.oldMancount==0}">${list.oldMancount }</c:if>
	                    	<c:if test="${list.oldMancount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${list.loginOrganizationId };0;0;${group_aged};">${list.oldMancount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.highBloodPrescount==0}">${list.highBloodPrescount }</c:if>
	                    	<c:if test="${list.highBloodPrescount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${list.loginOrganizationId };0;0;${group_hypertension};">${list.highBloodPrescount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.diabeticscount==0}">${list.diabeticscount }</c:if>
	                    	<c:if test="${list.diabeticscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${list.loginOrganizationId };0;0;${group_diabetic};">${list.diabeticscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.coronaryHeartDiscount==0}">${list.coronaryHeartDiscount }</c:if>
	                    	<c:if test="${list.coronaryHeartDiscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${list.loginOrganizationId };0;0;${group_coronary_heart};">${list.coronaryHeartDiscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>${list.sfcount }</td>
	                    <td>${list.ghcount }</td>
	                    <td>${list.mycount }</td>
	                    <td>
		                    <c:if test="${list.qycount==0}">${list.qycount }</c:if>
	                    	<c:if test="${list.qycount>0}">
			                    <a href="#" class="js-detail" data-id="${list.loginOrganizationId };0;0;">${list.qycount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.spcount==0}">${list.spcount }</c:if>
	                    	<c:if test="${list.spcount>0}">
			                    <a href="#" class="js-spDetail" data-id="${list.loginOrganizationId };0;0;">${list.spcount }</a>
	                    	</c:if>
	                    </td>
	                    <c:if test="${orgLevel==1||orgLevel==2||orgLevel==3||(orgLevel==4&&isTeam==1)}">
	                    <td><a href="#" class="js-view" data-id="${list.loginOrganizationId};0;0;">查看详情</a></td>
	                    </c:if>
	                </tr>
                </c:forEach>
                <c:if test="${orgLevel==4&&isTeam==1}">
	                <tr>
	       				<td>${noTeamMap.noTeamHecadre }</td>
	                    <td>
		                    <c:if test="${noTeamMap.jmcount==0}">${noTeamMap.jmcount }</c:if>
	                    	<c:if test="${noTeamMap.jmcount>0}">
			                    <a href="#" class="js-jmDetail" data-id="${noTeamMap.loginOrganizationId };1;0;${noTeamMap.hecadreIdList}">${noTeamMap.jmcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noTeamMap.jdcount==0}">${noTeamMap.jdcount }</c:if>
	                    	<c:if test="${noTeamMap.jdcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamMap.loginOrganizationId };1;0;${group_all};${noTeamMap.hecadreIdList}">${noTeamMap.jdcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noTeamMap.childcount==0}">${noTeamMap.childcount }</c:if>
	                    	<c:if test="${noTeamMap.childcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamMap.loginOrganizationId };1;0;${group_children};${noTeamMap.hecadreIdList}">${noTeamMap.childcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noTeamMap.maternalcount==0}">${noTeamMap.maternalcount }</c:if>
	                    	<c:if test="${noTeamMap.maternalcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamMap.loginOrganizationId };1;0;${group_maternal};${noTeamMap.hecadreIdList}">${noTeamMap.maternalcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noTeamMap.oldMancount==0}">${noTeamMap.oldMancount }</c:if>
	                    	<c:if test="${noTeamMap.oldMancount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamMap.loginOrganizationId };1;0;${group_aged};${noTeamMap.hecadreIdList}">${noTeamMap.oldMancount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noTeamMap.highBloodPrescount==0}">${noTeamMap.highBloodPrescount }</c:if>
	                    	<c:if test="${noTeamMap.highBloodPrescount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamMap.loginOrganizationId };1;0;${group_hypertension};${noTeamMap.hecadreIdList}">${noTeamMap.highBloodPrescount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noTeamMap.diabeticscount==0}">${noTeamMap.diabeticscount }</c:if>
	                    	<c:if test="${noTeamMap.diabeticscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamMap.loginOrganizationId };1;0;${group_diabetic};${noTeamMap.hecadreIdList}">${noTeamMap.diabeticscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noTeamMap.coronaryHeartDiscount==0}">${noTeamMap.coronaryHeartDiscount }</c:if>
	                    	<c:if test="${noTeamMap.coronaryHeartDiscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamMap.loginOrganizationId };1;0;${group_coronary_heart};${noTeamMap.hecadreIdList}">${noTeamMap.coronaryHeartDiscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>${noTeamMap.sfcount }</td>
	                    <td>${noTeamMap.ghcount }</td>
	                    <td>${noTeamMap.mycount }</td>
	                    <td>
	                    	<c:if test="${noTeamMap.qycount==0}">${noTeamMap.qycount }</c:if>
	                    	<c:if test="${noTeamMap.qycount>0}">
			                    <a href="#" class="js-detail" data-id="${noTeamMap.loginOrganizationId};1;0;${noTeamMap.hecadreIdList}">${noTeamMap.qycount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noTeamMap.spcount==0}">${noTeamMap.spcount }</c:if>
	                    	<c:if test="${noTeamMap.spcount>0}">
			                    <a href="#" class="js-spDetail" data-id="${noTeamMap.loginOrganizationId };1;0;${noTeamMap.hecadreIdList}">${noTeamMap.spcount }</a>
	                    	</c:if>
	                    </td>
	                    <td><a href="#" class="js-view" data-id="${noTeamMap.loginOrganizationId};1;0;${noTeamMap.hecadreIdList}">查看详情</a></td>
	       			</tr>
	       			<tr>
	       				<td>${noHecadreMap.noHecadreUser }</td>
	                    <td>
	                    	<c:if test="${noHecadreMap.jmcount==0}">${noHecadreMap.jmcount }</c:if>
	                    	<c:if test="${noHecadreMap.jmcount>0}">
			                    <a href="#" class="js-jmDetail" data-id="${noHecadreMap.loginOrganizationId };0;1;${noHecadreMap.jmResidentUIdList}">${noHecadreMap.jmcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noHecadreMap.jdcount==0}">${noHecadreMap.jdcount }</c:if>
	                    	<c:if test="${noHecadreMap.jdcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noHecadreMap.loginOrganizationId };0;1;${group_all};${noHecadreMap.jdResidentUIdList}">${noHecadreMap.jdcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noHecadreMap.childcount==0}">${noHecadreMap.childcount }</c:if>
	                    	<c:if test="${noHecadreMap.childcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noHecadreMap.loginOrganizationId };0;1;${group_children};${noHecadreMap.childUIdList}">${noHecadreMap.childcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noHecadreMap.maternalcount==0}">${noHecadreMap.maternalcount }</c:if>
	                    	<c:if test="${noHecadreMap.maternalcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noHecadreMap.loginOrganizationId };0;1;${group_maternal};${noHecadreMap.maternalUIdList}">${noHecadreMap.maternalcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noHecadreMap.oldMancount==0}">${noHecadreMap.oldMancount }</c:if>
	                    	<c:if test="${noHecadreMap.oldMancount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noHecadreMap.loginOrganizationId };0;1;${group_aged};${noHecadreMap.oldManUIdList}">${noHecadreMap.oldMancount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noHecadreMap.highBloodPrescount==0}">${noHecadreMap.highBloodPrescount }</c:if>
	                    	<c:if test="${noHecadreMap.highBloodPrescount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noHecadreMap.loginOrganizationId };0;1;${group_hypertension};${noHecadreMap.highBloodPresUIdList}">${noHecadreMap.highBloodPrescount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noHecadreMap.diabeticscount==0}">${noHecadreMap.diabeticscount }</c:if>
	                    	<c:if test="${noHecadreMap.diabeticscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noHecadreMap.loginOrganizationId };0;1;${group_diabetic};${noHecadreMap.diabeticsUIdList}">${noHecadreMap.diabeticscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noHecadreMap.coronaryHeartDiscount==0}">${noHecadreMap.coronaryHeartDiscount }</c:if>
	                    	<c:if test="${noHecadreMap.coronaryHeartDiscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noHecadreMap.loginOrganizationId };0;1;${group_coronary_heart};${noHecadreMap.coronaryHeartDisUIdList}">${noHecadreMap.coronaryHeartDiscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>${noHecadreMap.sfcount }</td>
	                    <td>${noHecadreMap.ghcount }</td>
	                    <td>${noHecadreMap.mycount }</td>
	                    <td>
	                    	<c:if test="${noHecadreMap.qycount==0}">${noHecadreMap.qycount }</c:if>
	                    	<c:if test="${noHecadreMap.qycount>0}">
			                    <a href="#" class="js-detail" data-id="${noHecadreMap.loginOrganizationId};0;1;${noHecadreMap.qyResidentUIdList}">${noHecadreMap.qycount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noHecadreMap.spcount==0}">${noHecadreMap.spcount }</c:if>
	                    	<c:if test="${noHecadreMap.spcount>0}">
			                    <a href="#" class="js-spDetail" data-id="${noHecadreMap.loginOrganizationId };0;1;${noHecadreMap.spResidentUIdList}">${noHecadreMap.spcount }</a>
	                    	</c:if>
	                    </td>
	                    <td></td>
	       			</tr>
	            </c:if>
                </tbody>
            </table>
            <c:if test="${orgLevel!=4||isTeam!=1}">
	            <tags:pagination page="${pages}" action="${ctx}/operationalDataOwn?level=${level}&loginOrganizationId=${loginOrganizationId}&isTeam=${isTeam}&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}&hecadreIdList=${hecadreIdList}" pageId="operationalDataOwn${level}" />
            </c:if>
        </div>
    </div>
</div>

<script>

	require([ 'jquery' ], function($) {
		var $self = $("#operationalDataOwn${level}");
		
		$self.find(".js-view").on("click", function(e){
     		var id_arr = $(this).attr('data-id').split(";");
     		var orgId = id_arr[0];
     		var noTeamNext = id_arr[1];
     		var noHecadreNext = id_arr[2];
     		var hecadreIdList = id_arr[3];
     		var level = $self.find("#level").val()+1;
     		var isTeam="${isTeam}";
     		if("${orgLevel}"==4){
     			isTeam=0;
     		}
     		var params = '?loginOrganizationId='+orgId+"&noTeamNext="+noTeamNext+"&noHecadreNext="+noHecadreNext
     				+"&hecadreIdList="+hecadreIdList+"&orgLevel=${orgLevel}&level="+level+"&isTeam="+isTeam;
     		common.createTab({
     			uri: '${ctx}/operationalDataOwn'+params,
     			data: {name: '运营数据统计'},
     			key: 'operationalDataOwn'+level
     		});
     	});
		
		$self.find(".js-detail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var orgId = id_arr[0];
     		var noTeamNext = id_arr[1];
     		var noHecadreNext = id_arr[2];
     		var userIdList = id_arr[3];
     		var params='?organizationId='+orgId+"&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="
     				+noTeamNext+"&noHecadreNext="+noHecadreNext+"&userIdList="+userIdList;
			common.createTab({
				uri: '${ctx}/operationalDataOwn/detail'+params,
     			data: {name: '家庭医生详细签约列表'},
     			key: 'operationalDataOwnDetail'
     		});
		});
		
		$self.find(".js-spDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var orgId = id_arr[0];
     		var noTeamNext = id_arr[1];
     		var noHecadreNext = id_arr[2];
     		var userIdList = id_arr[3];
     		var params='?organizationId='+orgId+"&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext
     				+"&noHecadreNext="+noHecadreNext+"&userIdList="+userIdList;
			common.createTab({
				uri: '${ctx}/operationalDataOwn/spDetail'+params,
     			data: {name: '家庭医生健康服务包签约列表'},
     			key: 'operationalDataOwnSPDetail'
     		});
		});
		
		$self.find(".js-jdDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var orgId = id_arr[0];
     		var noTeamNext = id_arr[1];
     		var noHecadreNext = id_arr[2];
     		var groupCode = id_arr[3];
     		var userIdList = id_arr[4];
     		var params='?organizationId='+orgId+"&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext
     				+"&noHecadreNext="+noHecadreNext+"&userIdList="+userIdList+"&groupCode="+groupCode;
			common.createTab({
				uri: '${ctx}/operationalDataOwn/jdDetail'+params,
     			data: {name: '居民信息详细列表'},
     			key: 'operationalDataOwnJDDetail'
     		});
		});
		
		$self.find(".js-jmDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var orgId = id_arr[0];
     		var noTeamNext = id_arr[1];
     		var noHecadreNext = id_arr[2];
     		var userIdList = id_arr[3];
     		var params='?organizationId='+orgId+"&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext
     				+"&noHecadreNext="+noHecadreNext+"&userIdList="+userIdList;
			common.createTab({
				uri: '${ctx}/operationalDataOwn/jmDetail'+params,
     			data: {name: '居民信息详细列表'},
     			key: 'operationalDataOwnJMDetail'
     		});
		});
		
		$self.find("#btn-export").on('click',function(e){
	        window.location.href="${ctx}/operationalDataOwn?download=download&loginOrganizationId=${loginOrganizationId}&isTeam=${isTeam}&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}&hecadreIdList=${hecadreIdList}";
	    });
		
	});
</script>