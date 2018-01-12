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
                    <input type="hidden" id="organizationId" name="organizationId" value="${organizationId }" />
                    <input type="hidden" id="doctorUid" name="doctorUid" value="${doctorUid}" />
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
	                    	<c:if test="${orgLevel!=4 || isTeam!=0 || list.staffStatus!=0 }">
		                    	${list.organizationName }
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.jmcount==null || list.jmcount==0}">0</c:if>
	                    	<c:if test="${list.jmcount>0}">
			                    <a href="#" class="js-jmDetail" data-id="${list.organizationId };${noTeamNext};${noHecadreNext}">${list.jmcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.jdcount==null || list.jdcount==0}">0</c:if>
	                    	<c:if test="${list.jdcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${list.organizationId };${noTeamNext};${noHecadreNext};${group_all}">${list.jdcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.childcount==null || list.childcount==0}">0</c:if>
	                    	<c:if test="${list.childcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${list.organizationId };${noTeamNext};${noHecadreNext};${group_children}">${list.childcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.maternalcount==null || list.maternalcount==0}">0</c:if>
	                    	<c:if test="${list.maternalcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${list.organizationId };${noTeamNext};${noHecadreNext};${group_maternal}">${list.maternalcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.oldMancount==null || list.oldMancount==0}">0</c:if>
	                    	<c:if test="${list.oldMancount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${list.organizationId };${noTeamNext};${noHecadreNext};${group_aged}">${list.oldMancount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.highBloodPrescount==null || list.highBloodPrescount==0}">0</c:if>
	                    	<c:if test="${list.highBloodPrescount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${list.organizationId };${noTeamNext};${noHecadreNext};${group_hypertension}">${list.highBloodPrescount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.diabeticscount==null || list.diabeticscount==0}">0</c:if>
	                    	<c:if test="${list.diabeticscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${list.organizationId };${noTeamNext};${noHecadreNext};${group_diabetic}">${list.diabeticscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.coronaryHeartDiscount==null || list.coronaryHeartDiscount==0}">0</c:if>
	                    	<c:if test="${list.coronaryHeartDiscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${list.organizationId };${noTeamNext};${noHecadreNext};${group_coronary_heart}">${list.coronaryHeartDiscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${list.sfcount==null}">0</c:if>
	                    	<c:if test="${list.sfcount!=null}">${list.sfcount }</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${list.ghcount==null}">0</c:if>
	                    	<c:if test="${list.ghcount!=null}">${list.ghcount }</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${list.mycount==null}">0</c:if>
	                    	<c:if test="${list.mycount!=null}">${list.mycount }</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.qycount==null || list.qycount==0}">0</c:if>
	                    	<c:if test="${list.qycount>0}">
			                    <a href="#" class="js-qyDetail" data-id="${list.organizationId };${noTeamNext};${noHecadreNext}">${list.qycount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.spcount==null || list.spcount==0}">0</c:if>
	                    	<c:if test="${list.spcount>0}">
			                    <a href="#" class="js-spDetail" data-id="${list.organizationId };${noTeamNext};${noHecadreNext}">${list.spcount }</a>
	                    	</c:if>
	                    </td>
	                    <c:if test="${orgLevel==1||orgLevel==2||orgLevel==3||(orgLevel==4&&isTeam==1)}">
	                    <td><a href="#" class="js-view" data-id="${list.organizationId};0;0">查看详情</a></td>
	                    </c:if>
	                </tr>
                </c:forEach>
                <c:if test="${orgLevel==4&&isTeam==1}">
	                <tr>
	       				<td>${noTeamMap.noTeamHecadre }</td>
	                    <td>
		                    <c:if test="${noTeamMap.jmcount==null || noTeamMap.jmcount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.jmcount>0}">
			                    <a href="#" class="js-jmDetail" data-id="${noTeamMap.organizationId };1;0">${noTeamMap.jmcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noTeamMap.jdcount==null || noTeamMap.jdcount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.jdcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamMap.organizationId };1;0;${group_all}">${noTeamMap.jdcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noTeamMap.childcount==null || noTeamMap.childcount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.childcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamMap.organizationId };1;0;${group_children}">${noTeamMap.childcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noTeamMap.maternalcount==null || noTeamMap.maternalcount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.maternalcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamMap.organizationId };1;0;${group_maternal}">${noTeamMap.maternalcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noTeamMap.oldMancount==null || noTeamMap.oldMancount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.oldMancount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamMap.organizationId };1;0;${group_aged}">${noTeamMap.oldMancount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noTeamMap.highBloodPrescount==null || noTeamMap.highBloodPrescount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.highBloodPrescount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamMap.organizationId };1;0;${group_hypertension}">${noTeamMap.highBloodPrescount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noTeamMap.diabeticscount==null || noTeamMap.diabeticscount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.diabeticscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamMap.organizationId };1;0;${group_diabetic}">${noTeamMap.diabeticscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noTeamMap.coronaryHeartDiscount==null || noTeamMap.coronaryHeartDiscount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.coronaryHeartDiscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamMap.organizationId };1;0;${group_coronary_heart}">${noTeamMap.coronaryHeartDiscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noTeamMap.sfcount==null}">0</c:if>
	                    	<c:if test="${noTeamMap.sfcount!=null}">${noTeamMap.sfcount }</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noTeamMap.ghcount==null}">0</c:if>
	                    	<c:if test="${noTeamMap.ghcount!=null}">${noTeamMap.ghcount }</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noTeamMap.mycount==null}">0</c:if>
	                    	<c:if test="${noTeamMap.mycount!=null}">${noTeamMap.mycount }</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noTeamMap.qycount==null || noTeamMap.qycount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.qycount>0}">
			                    <a href="#" class="js-qyDetail" data-id="${noTeamMap.organizationId};1;0">${noTeamMap.qycount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noTeamMap.spcount==null || noTeamMap.spcount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.spcount>0}">
			                    <a href="#" class="js-spDetail" data-id="${noTeamMap.organizationId };1;0">${noTeamMap.spcount }</a>
	                    	</c:if>
	                    </td>
	                    <td><a href="#" class="js-view" data-id="${noTeamMap.organizationId};1;0">查看详情</a></td>
	       			</tr>
	       			<tr>
	       				<td>${noHecadreMap.noHecadreUser }</td>
	                    <td>
	                    	<c:if test="${noHecadreMap.jmcount==null || noHecadreMap.jmcount==0}">0</c:if>
	                    	<c:if test="${noHecadreMap.jmcount>0}">
			                    <a href="#" class="js-jmDetail" data-id="${noHecadreMap.organizationId };0;1">${noHecadreMap.jmcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noHecadreMap.jdcount==null || noHecadreMap.jdcount==0}">0</c:if>
	                    	<c:if test="${noHecadreMap.jdcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noHecadreMap.organizationId };0;1;${group_all}">${noHecadreMap.jdcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noHecadreMap.childcount==null || noHecadreMap.childcount==0}">0</c:if>
	                    	<c:if test="${noHecadreMap.childcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noHecadreMap.organizationId };0;1;${group_children}">${noHecadreMap.childcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noHecadreMap.maternalcount==null || noHecadreMap.maternalcount==0}">0</c:if>
	                    	<c:if test="${noHecadreMap.maternalcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noHecadreMap.organizationId };0;1;${group_maternal}">${noHecadreMap.maternalcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noHecadreMap.oldMancount==null || noHecadreMap.oldMancount==0}">0</c:if>
	                    	<c:if test="${noHecadreMap.oldMancount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noHecadreMap.organizationId };0;1;${group_aged}">${noHecadreMap.oldMancount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noHecadreMap.highBloodPrescount==null || noHecadreMap.highBloodPrescount==0}">0</c:if>
	                    	<c:if test="${noHecadreMap.highBloodPrescount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noHecadreMap.organizationId };0;1;${group_hypertension}">${noHecadreMap.highBloodPrescount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noHecadreMap.diabeticscount==null || noHecadreMap.diabeticscount==0}">0</c:if>
	                    	<c:if test="${noHecadreMap.diabeticscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noHecadreMap.organizationId };0;1;${group_diabetic}">${noHecadreMap.diabeticscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noHecadreMap.coronaryHeartDiscount==null || noHecadreMap.coronaryHeartDiscount==0}">0</c:if>
	                    	<c:if test="${noHecadreMap.coronaryHeartDiscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noHecadreMap.organizationId };0;1;${group_coronary_heart}">${noHecadreMap.coronaryHeartDiscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noHecadreMap.sfcount==null}">0</c:if>
	                    	<c:if test="${noHecadreMap.sfcount!=null}">${noHecadreMap.sfcount }</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noHecadreMap.ghcount==null}">0</c:if>
	                    	<c:if test="${noHecadreMap.ghcount!=null}">${noHecadreMap.ghcount }</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noHecadreMap.mycount==null}">0</c:if>
	                    	<c:if test="${noHecadreMap.mycount!=null}">${noHecadreMap.mycount }</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noHecadreMap.qycount==null || noHecadreMap.qycount==0}">0</c:if>
	                    	<c:if test="${noHecadreMap.qycount>0}">
			                    <a href="#" class="js-qyDetail" data-id="${noHecadreMap.organizationId};0;1">${noHecadreMap.qycount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noHecadreMap.spcount==null || noHecadreMap.spcount==0}">0</c:if>
	                    	<c:if test="${noHecadreMap.spcount>0}">
			                    <a href="#" class="js-spDetail" data-id="${noHecadreMap.organizationId };0;1">${noHecadreMap.spcount }</a>
	                    	</c:if>
	                    </td>
	                    <td></td>
	       			</tr>
	            </c:if>
                </tbody>
            </table>
            <c:if test="${orgLevel!=4||isTeam!=1}">
	            <tags:pagination page="${pages}" action="${ctx}/operationalDataOwn?level=${level}&organizationId=${organizationId}&doctorUid=${doctorUid}&isTeam=${isTeam}&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}" pageId="operationalDataOwn${level}" />
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
     		var level = $self.find("#level").val()+1;
     		var isTeam="${isTeam}";
     		var orgLevel = "${orgLevel}";
     		var doctorUid = "";
     		var organizationId;
     		if(orgLevel==4){
     			organizationId = "${organizationId}";
     			isTeam=0;
     			if(noTeamNext==0&&noHecadreNext==0){ doctorUid = orgId; }
     		}else{ organizationId=orgId; }
     		var params = '?organizationId='+organizationId+"&doctorUid="+doctorUid+"&noTeamNext="+noTeamNext
     				+"&noHecadreNext="+noHecadreNext+"&orgLevel=${orgLevel}&level="+level+"&isTeam="+isTeam;
     		common.createTab({
     			uri: '${ctx}/operationalDataOwn'+params,
     			data: {name: '运营数据统计'},
     			key: 'operationalDataOwn'+level
     		});
     	});
		
		$self.find(".js-jmDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var orgId = id_arr[0];
     		var noTeamNext = id_arr[1];
     		var noHecadreNext = id_arr[2];
     		var organizationId;
     		var doctorUid='';
     		var hecadreUid='';
     		var orgLevel = "${orgLevel}";
     		if(orgLevel==4){
     			organizationId = "${organizationId}";
     			if("${isTeam}"==1 && noTeamNext==0 && noHecadreNext==0) { doctorUid = orgId; }
     			if("${isTeam}"==0) { hecadreUid=orgId; }
     		}else{ organizationId=orgId; }
     		var params='?organizationId='+organizationId+"&doctorUid="+doctorUid+"&hecadreUid="+hecadreUid
     				+"&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext+"&noHecadreNext="+noHecadreNext;
			common.createTab({
				uri: '${ctx}/operationalDataOwn/jmDetail'+params,
     			data: {name: '居民信息详细列表'},
     			key: 'operationalDataOwnJMDetail'
     		});
		});
		
		$self.find(".js-jdDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var orgId = id_arr[0];
     		var noTeamNext = id_arr[1];
     		var noHecadreNext = id_arr[2];
     		var residentGroup = id_arr[3];
     		var organizationId = "${organizationId}";
     		var doctorUid='';
     		var hecadreUid='';
     		var orgLevel = "${orgLevel}";
     		if(orgLevel==4){
     			if("${isTeam}"==1 && noTeamNext==0 && noHecadreNext==0) { doctorUid = orgId; }
     			if("${isTeam}"==0) { hecadreUid=orgId; }
     		}else{ organizationId=orgId; }
     		var params='?organizationId='+organizationId+"&doctorUid="+doctorUid+"&hecadreUid="+hecadreUid+"&residentGroup="+residentGroup
     				+"&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext+"&noHecadreNext="+noHecadreNext;
			common.createTab({
				uri: '${ctx}/operationalDataOwn/jdDetail'+params,
     			data: {name: '居民信息详细列表'},
     			key: 'operationalDataOwnJDDetail'
     		});
		});
		
		$self.find(".js-qyDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var orgId = id_arr[0];
     		var noTeamNext = id_arr[1];
     		var noHecadreNext = id_arr[2];
     		var organizationId = "${organizationId}";
     		var doctorUid='';
     		var hecadreUid='';
     		var orgLevel = "${orgLevel}";
     		if(orgLevel==4){
     			if("${isTeam}"==1 && noTeamNext==0 && noHecadreNext==0) { doctorUid = orgId; }
     			if("${isTeam}"==0) { hecadreUid=orgId; }
     		}else{ organizationId=orgId; }
     		var params='?organizationId='+organizationId+"&doctorUid="+doctorUid+"&hecadreUid="+hecadreUid
     				+"&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext+"&noHecadreNext="+noHecadreNext;
			common.createTab({
				uri: '${ctx}/operationalDataOwn/qyDetail'+params,
     			data: {name: '家庭医生详细签约列表'},
     			key: 'operationalDataOwnQYDetail'
     		});
		});
		
		$self.find(".js-spDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var orgId = id_arr[0];
     		var noTeamNext = id_arr[1];
     		var noHecadreNext = id_arr[2];
     		var organizationId = "${organizationId}";
     		var doctorUid='';
     		var hecadreUid='';
     		var orgLevel = "${orgLevel}";
     		if(orgLevel==4){
     			if("${isTeam}"==1 && noTeamNext==0 && noHecadreNext==0) { doctorUid = orgId; }
     			if("${isTeam}"==0) { hecadreUid=orgId; }
     		}else{ organizationId=orgId; }
     		var params='?organizationId='+organizationId+"&doctorUid="+doctorUid+"&hecadreUid="+hecadreUid
     				+"&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext+"&noHecadreNext="+noHecadreNext;
			common.createTab({
				uri: '${ctx}/operationalDataOwn/spDetail'+params,
     			data: {name: '家庭医生健康服务包签约列表'},
     			key: 'operationalDataOwnSPDetail'
     		});
		});
		
		$self.find("#btn-export").on('click',function(e){
	        window.location.href="${ctx}/operationalDataOwn?download=download&organizationId=${organizationId}"
	        		+"&doctorUid=${doctorUid}&isTeam=${isTeam}&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}";
	    });
		
	});
</script>