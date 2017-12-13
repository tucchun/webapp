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
    <div class="tb-head">用户行为数据统计</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <input type="hidden" id="loginOrganizationId" name="loginOrganizationId" value="${loginOrganizationId }" />
                    <input type="hidden" id="level" name="level" value="${level }" />
                    <input type="hidden" id="isTeam" name="isTeam" value="${isTeam }" />
                    <input type="hidden" id="noTeamNext" name="noTeamNext" value="${noTeamNext }" />
                    
                    <form action="#" class="form-inline" id="js-form" onsubmit="return false">
                        <div class="input-group date form_date col-sm-4" id="js_date_start_cnt" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                            <input id="js_date_start" name="date_startStr" class="form-control" size="20" type="text" value="${date_startStr }" readonly="">
                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;
                        <div class="input-group date form_date col-sm-4" id="js_date_end_cnt" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
	                        <input id="js_date_end" name="date_endStr" class="form-control" size="20" type="text" value="${date_endStr }" readonly="">
	                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
                        </span>
                    </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="button" class="btn btn-main" id="js-search" value="查询" />
                    </form>
                </div>
                <div class="pull-right">
                    <button type="button" class="btn btn-main" id="btn-export">导出</button>
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
                    <th>已建档（人）</th>
                    <th>家庭医生已签约（人）</th>
                    <th>已注册（人）</th>
                    <th>血压测量（人）</th>
                    <th>血糖测量（人）</th>
                    <th>已咨询（人）</th>
                    <th>开始时间</th>
                    <th>结束时间</th>
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
	                    	<c:if test="${list.jdcount==0}">${list.jdcount }</c:if>
	                    	<c:if test="${list.jdcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${list.loginOrganizationId };0;0;">${list.jdcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${list.qycount==0}">${list.qycount }</c:if>
	                    	<c:if test="${list.qycount>0}">
			                    <a href="#" class="js-detail" data-id="${list.loginOrganizationId };0;0;">${list.qycount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${list.registerCount==0}">${list.registerCount }</c:if>
	                    	<c:if test="${list.registerCount>0}">
	                    		<a href="#" class="js-zcDetail" data-id="${list.loginOrganizationId };0;0;">${list.registerCount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${list.bloodpMressureNum==0}">${list.bloodpMressureNum }</c:if>
	                    	<c:if test="${list.bloodpMressureNum>0}">
			                    <a href="#" class="js-xyDetail" data-id="${list.loginOrganizationId };0;0;">${list.bloodpMressureNum }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${list.bloodSugarNum==0}">${list.bloodSugarNum }</c:if>
	                    	<c:if test="${list.bloodSugarNum>0}">
			                    <a href="#" class="js-xtDetail" data-id="${list.loginOrganizationId };0;0;">${list.bloodSugarNum }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${list.consultCount==0}">${list.consultCount }</c:if>
	                    	<c:if test="${list.consultCount>0}">
		                    	<a href="#" class="js-zxDetail" data-id="${list.loginOrganizationId };0;0;${list.residentIdList}">${list.consultCount }</a>
	                    	</c:if>
	                    </td>
	                    <td>${list.date_startStr }</td>
	                    <td>${list.date_endStr }</td>
	                    <c:if test="${orgLevel==1||orgLevel==2||orgLevel==3||(orgLevel==4&&isTeam==1)}">
	                    <td><a href="#" class="js-view" data-id="${list.loginOrganizationId};0;0;">查看详情</a></td>
	                    </c:if>
	                </tr>
                </c:forEach>
	            <c:if test="${orgLevel==4&&isTeam==1}">
	                <tr>
	       				<td>${noTeamMap.noTeamHecadre }</td>
	                    <td>
	                    	<c:if test="${noTeamMap.jdcount==0}">${noTeamMap.jdcount }</c:if>
	                    	<c:if test="${noTeamMap.jdcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamMap.loginOrganizationId };1;0;${noTeamMap.hecadreIdList}">${noTeamMap.jdcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noTeamMap.qycount==0}">${noTeamMap.qycount }</c:if>
	                    	<c:if test="${noTeamMap.qycount>0}">
			                    <a href="#" class="js-detail" data-id="${noTeamMap.loginOrganizationId};1;0;${noTeamMap.hecadreIdList}">${noTeamMap.qycount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noTeamMap.registerCount==0}">${noTeamMap.registerCount }</c:if>
	                    	<c:if test="${noTeamMap.registerCount>0}">
	                    		<a href="#" class="js-zcDetail" data-id="${noTeamMap.loginOrganizationId};1;0;${noTeamMap.hecadreIdList}">${noTeamMap.registerCount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noTeamMap.bloodpMressureNum==0}">${noTeamMap.bloodpMressureNum }</c:if>
	                    	<c:if test="${noTeamMap.bloodpMressureNum>0}">
			                    <a href="#" class="js-xyDetail" data-id="${noTeamMap.loginOrganizationId};1;0;${noTeamMap.hecadreIdList}">${noTeamMap.bloodpMressureNum }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noTeamMap.bloodSugarNum==0}">${noTeamMap.bloodSugarNum }</c:if>
	                    	<c:if test="${noTeamMap.bloodSugarNum>0}">
			                    <a href="#" class="js-xtDetail" data-id="${noTeamMap.loginOrganizationId};1;0;${noTeamMap.hecadreIdList}">${noTeamMap.bloodSugarNum }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noTeamMap.consultCount==0}">${noTeamMap.consultCount }</c:if>
	                   		<c:if test="${noTeamMap.consultCount>0}">
			                    <a href="#" class="js-zxDetail" data-id="${noTeamMap.loginOrganizationId};1;0;${noTeamMap.residentIdList}">${noTeamMap.consultCount }</a>
		                    </c:if>
	                    </td>
	                    <td>${noTeamMap.date_startStr }</td>
	                    <td>${noTeamMap.date_endStr }</td>
	                    <td><a href="#" class="js-view" data-id="${noTeamMap.loginOrganizationId};1;0;${noTeamMap.hecadreIdList}">查看详情</a></td>
	       			</tr>
	       			<tr>
	       				<td>${noHecadreMap.noHecadreUser }</td>
	                    <td>
	                    	<c:if test="${noHecadreMap.jdcount==0}">${noHecadreMap.jdcount }</c:if>
	                    	<c:if test="${noHecadreMap.jdcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noHecadreMap.loginOrganizationId };0;1;${noHecadreMap.jdResidentUIdList}">${noHecadreMap.jdcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noHecadreMap.qycount==0}">${noHecadreMap.qycount }</c:if>
	                    	<c:if test="${noHecadreMap.qycount>0}">
			                    <a href="#" class="js-detail" data-id="${noHecadreMap.loginOrganizationId};0;1;${noHecadreMap.qyResidentUIdList}">${noHecadreMap.qycount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noHecadreMap.registerCount==0}">${noHecadreMap.registerCount }</c:if>
	                    	<c:if test="${noHecadreMap.registerCount>0}">
	                    		<a href="#" class="js-zcDetail" data-id="${noHecadreMap.loginOrganizationId};0;1;${noHecadreMap.zcResidentUIdList}">${noHecadreMap.registerCount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noHecadreMap.bloodpMressureNum==0}">${noHecadreMap.bloodpMressureNum }</c:if>
	                    	<c:if test="${noHecadreMap.bloodpMressureNum>0}">
			                    <a href="#" class="js-xyDetail" data-id="${noHecadreMap.loginOrganizationId};0;1;${noHecadreMap.xyResidentUIdList}">${noHecadreMap.bloodpMressureNum }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noHecadreMap.bloodSugarNum==0}">${noHecadreMap.bloodSugarNum }</c:if>
	                    	<c:if test="${noHecadreMap.bloodSugarNum>0}">
			                    <a href="#" class="js-xtDetail" data-id="${noHecadreMap.loginOrganizationId};0;1;${noHecadreMap.xtResidentUIdList}">${noHecadreMap.bloodSugarNum }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noHecadreMap.consultCount==0}">${noHecadreMap.consultCount }</c:if>
	                   		<c:if test="${noHecadreMap.consultCount>0}">
			                    <a href="#" class="js-zxDetail" data-id="${noHecadreMap.loginOrganizationId};0;1;${noHecadreMap.residentIdList}">${noHecadreMap.consultCount }</a>
		                    </c:if>
	                    </td>
	                    <td>${noHecadreMap.date_startStr }</td>
	                    <td>${noHecadreMap.date_endStr }</td>
	                    <td></td>
	       			</tr>
	            </c:if>
                </tbody>
            </table>
            <c:if test="${orgLevel!=4||isTeam!=1}">
            <tags:pagination page="${pages}" action="${ctx}/behaviour?level=${level}&loginOrganizationId=${loginOrganizationId}&date_startStr=${date_startStr}&date_endStr=${date_endStr}&isTeam=${isTeam}&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}&hecadreIdList=${hecadreIdList}" pageId="behaviour${level}" />
        	</c:if>
         </div>
    </div>
</div>

<script>

	require([ 'jquery' ], function($) {
		var $self = $("#behaviour${level}");
		
		$self.find("#js-search").on("click", function(e) {
			var date_start = $self.find("#js_date_start").val();
			var date_end = $self.find("#js_date_end").val();
			if(date_start==null||date_start==''||date_end==null||date_end==''){
				common.alert("请选择日期区间");
				return;
			}
			if(date_start > date_end){
				common.alert("结束日期应该大于开始日期！");
				return;
			}
			var level = $self.find("#level").val();
			common.load({
				container : 'behaviour${level}',
				url : '${ctx}/behaviour?level='+level+"&loginOrganizationId="+ $self.find("#loginOrganizationId").val()+"&isTeam=${isTeam}&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}&hecadreIdList=${hecadreIdList}",
				data : $self.find("#js-form").serialize()
			});
		});
		
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
     		var params = '?loginOrganizationId='+orgId+"&noTeamNext="+noTeamNext+"&noHecadreNext="+noHecadreNext+"&hecadreIdList="+hecadreIdList+
     				"&date_startStr=${date_startStr}&date_endStr=${date_endStr}&orgLevel=${orgLevel}&level="+level+"&isTeam="+isTeam;
     		common.createTab({
     			uri: '${ctx}/behaviour'+params,
     			data: {name: '用户行为数据统计'},
     			key: 'behaviour'+level
     		});
     	});
		
		$self.find(".js-detail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var orgId = id_arr[0];
     		var noTeamNext = id_arr[1];
     		var noHecadreNext = id_arr[2];
     		var userIdList = id_arr[3];
     		var params='?organizationId='+orgId+"&date_startStr=${date_startStr}&date_endStr=${date_endStr}"
     				+"&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext
     				+"&noHecadreNext="+noHecadreNext+"&userIdList="+userIdList;
			common.createTab({
				uri: '${ctx}/behaviour/detail'+params,
     			data: {name: '家庭医生详细签约列表'},
     			key: 'behaviourDetail'
     		});
		});
		
		$self.find(".js-jdDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var orgId = id_arr[0];
     		var noTeamNext = id_arr[1];
     		var noHecadreNext = id_arr[2];
     		var userIdList = id_arr[3];
     		var params='?organizationId='+orgId+"&date_startStr=${date_startStr}&date_endStr=${date_endStr}"+
     				"&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext+
     				"&noHecadreNext="+noHecadreNext+"&userIdList="+userIdList;
			common.createTab({
				uri: '${ctx}/behaviour/jdDetail'+params,
     			data: {name: '居民信息详细列表'},
     			key: 'behaviourJDDetail'
     		});
		});
		
		//已注册（人）详情页面
		$self.find(".js-zcDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var orgId = id_arr[0];
     		var noTeamNext = id_arr[1];
     		var noHecadreNext = id_arr[2];
     		var registerUserIdList = id_arr[3];
     		var params="?organizationId="+orgId+"&date_startStr=${date_startStr}&date_endStr=${date_endStr}"+
     				"&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext+
					"&noHecadreNext="+noHecadreNext+"&userIdList="+registerUserIdList;
     		common.createTab({
				uri: '${ctx}/behaviour/register'+params,
     			data: {name: '居民注册明细表'},
     			key: 'behaviourZCDetail'
     		});
		});
		//血压测量（人）详情页面
		$self.find(".js-xyDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var orgId = id_arr[0];
     		var noTeamNext = id_arr[1];
     		var noHecadreNext = id_arr[2];
     		var userIdList = id_arr[3];
     		var param;
     		if('${orgLevel}'==1||'${orgLevel}'==2||'${orgLevel}'==3){
     			param='&organizationId='+orgId;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==1&&noTeamNext==0&&noHecadreNext==0){
     			param='&teamId='+orgId;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==1&&noTeamNext==1){
     			param='&hecadreUidList='+userIdList;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==1&&noHecadreNext==1){
     			param='&organizationIdSingle='+orgId;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==0){
     			param='&healthsId='+orgId;
     		}
     		var params="?date_startStr=${date_startStr}&date_endStr=${date_endStr}"+param;
     		common.createTab({
				uri: '${ctx}/behaviour/bloodPressure'+params,
     			data: {name: '血压测量明细表'},
     			key: 'behaviourXYDetail'
     		});
		});
		//血糖测量（人）详情页面
		$self.find(".js-xtDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var orgId = id_arr[0];
     		var noTeamNext = id_arr[1];
     		var noHecadreNext = id_arr[2];
     		var userIdList = id_arr[3];
     		if('${orgLevel}'==1||'${orgLevel}'==2||'${orgLevel}'==3){
     			param='&organizationId='+orgId;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==1){
     			param='&teamId='+orgId;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==1&&noTeamNext==1){
     			param='&hecadreUidList='+userIdList;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==1&&noHecadreNext==1){
     			param='&organizationIdSingle='+orgId;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==0){
     			param='&healthsId='+orgId;
     		}
     		var params="?date_startStr=${date_startStr}&date_endStr=${date_endStr}"+param;
     		common.createTab({
				uri: '${ctx}/behaviour/bloodSugar'+params,
     			data: {name: '血糖测量明细表'},
     			key: 'behaviourXTDetail'
     		});
		});
		
		//已咨询（人）详情页面
		$self.find(".js-zxDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var noTeamNext = id_arr[1];
     		var noHecadreNext = id_arr[2];
     		var orgId = id_arr[0];
     		var residentIdList = id_arr[3];
     		var params="?date_startStr=${date_startStr}&date_endStr=${date_endStr}&userIdList="+residentIdList;
     		common.createTab({
				uri: '${ctx}/behaviour/counsel'+params,
     			data: {name: '居民咨询明细表'},
     			key: 'behaviourZXDetail'
     		});
		});
		
		
		$self.find("#btn-export").on('click',function(e){
	        window.location.href="${ctx}/behaviour?download=download&loginOrganizationId=${loginOrganizationId}&date_startStr=${date_startStr}&date_endStr=${date_endStr}&isTeam=${isTeam}&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}&hecadreIdList=${hecadreIdList}";
	    });

		$self.find('#js_date_start_cnt').datetimepicker({
			language:  'zh-CN',
			weekStart: 1,
			todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0,
			format:'yyyy-mm-dd'
		});
		
		$self.find('#js_date_end_cnt').datetimepicker({
			language:  'zh-CN',
			weekStart: 1,
			todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0,
			format:'yyyy-mm-dd'
		});
		
	});
</script>