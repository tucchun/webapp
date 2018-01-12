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
                    <input type="hidden" id="organizationId" name="organizationId" value="${organizationId }" />
                    <input type="hidden" id="doctorUid" name="doctorUid" value="${doctorUid}" />
                    <input type="hidden" id="level" name="level" value="${level }" />
                    <input type="hidden" id="isTeam" name="isTeam" value="${isTeam }" />
                    <input type="hidden" id="noTeamNext" name="noTeamNext" value="${noTeamNext }" />
                    
                    <form action="#" class="form-inline" id="js-form" onsubmit="return false">
                        <div class="input-group date form_date col-sm-4" id="js_date_start" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                            <input id="js_date_start_input" name="date_startStr" class="form-control" size="20" type="text" value="${date_startStr }" readonly="">
                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;
                        <div class="input-group date form_date col-sm-4" id="js_date_end" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
	                        <input id="js_date_end_input" name="date_endStr" class="form-control" size="20" type="text" value="${date_endStr }" readonly="">
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
	                    	<c:if test="${orgLevel!=4 || isTeam!=0 || list.staffStatus!=0 }">
		                    	${list.organizationName }
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${list.jdcount==null || list.jdcount==0}">0</c:if>
	                    	<c:if test="${list.jdcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${list.organizationId };${noTeamNext};${noHecadreNext}">${list.jdcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${list.qycount==null || list.qycount==0}">0</c:if>
	                    	<c:if test="${list.qycount>0}">
			                    <a href="#" class="js-qyDetail" data-id="${list.organizationId };${noTeamNext};${noHecadreNext}">${list.qycount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${list.registerCount==null || list.registerCount==0}">0</c:if>
	                    	<c:if test="${list.registerCount>0}">
	                    		<a href="#" class="js-zcDetail" data-id="${list.organizationId };${noTeamNext};${noHecadreNext}">${list.registerCount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${list.bloodpMressureNum==null || list.bloodpMressureNum==0}">0</c:if>
	                    	<c:if test="${list.bloodpMressureNum>0}">
			                    <a href="#" class="js-xyDetail" data-id="${list.organizationId };${noTeamNext};${noHecadreNext}">${list.bloodpMressureNum }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${list.bloodSugarNum==null || list.bloodSugarNum==0}">0</c:if>
	                    	<c:if test="${list.bloodSugarNum>0}">
			                    <a href="#" class="js-xtDetail" data-id="${list.organizationId };${noTeamNext};${noHecadreNext}">${list.bloodSugarNum }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${list.consultCount==null || list.consultCount==0}">${list.consultCount }</c:if>
	                    	<c:if test="${list.consultCount>0}">
		                    	<a href="#" class="js-zxDetail" data-id="${list.organizationId };${noTeamNext};${noHecadreNext}">${list.consultCount }</a>
	                    	</c:if>
	                    </td>
	                    <td>${date_startStr }</td>
	                    <td>${date_endStr }</td>
	                    <c:if test="${orgLevel==1||orgLevel==2||orgLevel==3||(orgLevel==4&&isTeam==1)}">
	                    <td><a href="#" class="js-view" data-id="${list.organizationId};0;0">查看详情</a></td>
	                    </c:if>
	                </tr>
                </c:forEach>
	            <c:if test="${orgLevel==4&&isTeam==1}">
	                <tr>
	       				<td>${noTeamMap.noTeamHecadre }</td>
	                    <td>
	                    	<c:if test="${noTeamMap.jdcount==null || noTeamMap.jdcount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.jdcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamMap.organizationId };1;0">${noTeamMap.jdcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noTeamMap.qycount==null || noTeamMap.qycount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.qycount>0}">
			                    <a href="#" class="js-qyDetail" data-id="${noTeamMap.organizationId};1;0">${noTeamMap.qycount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noTeamMap.registerCount==null || noTeamMap.registerCount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.registerCount>0}">
	                    		<a href="#" class="js-zcDetail" data-id="${noTeamMap.organizationId};1;0">${noTeamMap.registerCount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noTeamMap.bloodpMressureNum==null || noTeamMap.bloodpMressureNum==0}">0</c:if>
	                    	<c:if test="${noTeamMap.bloodpMressureNum>0}">
			                    <a href="#" class="js-xyDetail" data-id="${noTeamMap.organizationId};1;0">${noTeamMap.bloodpMressureNum }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noTeamMap.bloodSugarNum==null || noTeamMap.bloodSugarNum==0}">0</c:if>
	                    	<c:if test="${noTeamMap.bloodSugarNum>0}">
			                    <a href="#" class="js-xtDetail" data-id="${noTeamMap.organizationId};1;0">${noTeamMap.bloodSugarNum }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noTeamMap.consultCount==null || noTeamMap.consultCount==0}">0</c:if>
	                   		<c:if test="${noTeamMap.consultCount>0}">
			                    <a href="#" class="js-zxDetail" data-id="${noTeamMap.organizationId};1;0">${noTeamMap.consultCount }</a>
		                    </c:if>
	                    </td>
	                    <td>${date_startStr }</td>
	                    <td>${date_endStr }</td>
	                    <td><a href="#" class="js-view" data-id="${noTeamMap.organizationId};1;0">查看详情</a></td>
	       			</tr>
	       			<tr>
	       				<td>${noHecadreMap.noHecadreUser }</td>
	                    <td>
	                    	<c:if test="${noHecadreMap.jdcount==null || noHecadreMap.jdcount==0}">0</c:if>
	                    	<c:if test="${noHecadreMap.jdcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noHecadreMap.organizationId };0;1">${noHecadreMap.jdcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noHecadreMap.qycount==null || noHecadreMap.qycount==0}">0</c:if>
	                    	<c:if test="${noHecadreMap.qycount>0}">
			                    <a href="#" class="js-qyDetail" data-id="${noHecadreMap.organizationId};0;1">${noHecadreMap.qycount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noHecadreMap.registerCount==null || noHecadreMap.registerCount==0}">0</c:if>
	                    	<c:if test="${noHecadreMap.registerCount>0}">
	                    		<a href="#" class="js-zcDetail" data-id="${noHecadreMap.organizationId};0;1">${noHecadreMap.registerCount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noHecadreMap.bloodpMressureNum==null || noHecadreMap.bloodpMressureNum==0}">0</c:if>
	                    	<c:if test="${noHecadreMap.bloodpMressureNum>0}">
			                    <a href="#" class="js-xyDetail" data-id="${noHecadreMap.organizationId};0;1">${noHecadreMap.bloodpMressureNum }</a>
	                    	</c:if>
	                    </td>
	                    <td>
	                    	<c:if test="${noHecadreMap.bloodSugarNum==null || noHecadreMap.bloodSugarNum==0}">0</c:if>
	                    	<c:if test="${noHecadreMap.bloodSugarNum>0}">
			                    <a href="#" class="js-xtDetail" data-id="${noHecadreMap.organizationId};0;1">${noHecadreMap.bloodSugarNum }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${noHecadreMap.consultCount==null || noHecadreMap.consultCount==0}">0</c:if>
	                   		<c:if test="${noHecadreMap.consultCount>0}">
			                    <a href="#" class="js-zxDetail" data-id="${noHecadreMap.organizationId};0;1">${noHecadreMap.consultCount }</a>
		                    </c:if>
	                    </td>
	                    <td>${date_startStr }</td>
	                    <td>${date_endStr }</td>
	                    <td></td>
	       			</tr>
	            </c:if>
                </tbody>
            </table>
            <c:if test="${orgLevel!=4||isTeam!=1}">
            <tags:pagination page="${pages}" action="${ctx}/behaviour?level=${level}&organizationId=${organizationId}&doctorUid=${doctorUid}&date_startStr=${date_startStr}&date_endStr=${date_endStr}&isTeam=${isTeam}&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}" pageId="behaviour${level}" />
        	</c:if>
         </div>
    </div>
</div>

<script>

	require([ 'jquery' ], function($) {
		var $self = $("#behaviour${level}");
		
		$self.find("#js-search").on("click", function(e) {
			var date_start = $self.find("#js_date_start_input").val();
			var date_end = $self.find("#js_date_end_input").val();
			if(date_start==null||date_start==''||date_end==null||date_end==''){
				common.alert("请选择日期区间");
				return;
			}
			if(date_start > date_end){
				common.alert("结束日期应该大于开始日期！");
				return;
			}
			common.load({
				container : 'behaviour${level}',
				url : "${ctx}/behaviour?level=${level}&organizationId=${organizationId}&doctorUid=${doctorUid}"+"&isTeam=${isTeam}"
						+"&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}&noHecadreNext=${noHecadreNext}&date_start="+date_start+"&date_end="+date_end,
				data : $self.find("#js-form").serialize()
			});
		});
		
		$self.find(".js-view").on("click", function(e){
     		var id_arr = $(this).attr('data-id').split(";");
     		var orgId = id_arr[0];
     		var noTeamNext = id_arr[1];
     		var noHecadreNext = id_arr[2];
     		var level = $self.find("#level").val()+1;
     		var isTeam="${isTeam}";
     		var orgLevel = "${orgLevel}";
     		var doctorUid = "";
     		var organizationId = "${organizationId}";
     		if(orgLevel==4){
     			isTeam=0;
     			if(noTeamNext==0&&noHecadreNext==0){ doctorUid = orgId; }
     		}else{ organizationId=orgId; }
     		var params = '?organizationId='+organizationId+"&doctorUid="+doctorUid+"&noTeamNext="+noTeamNext+"&noHecadreNext="+noHecadreNext+
     				"&date_startStr=${date_startStr}&date_endStr=${date_endStr}&orgLevel=${orgLevel}&level="+level+"&isTeam="+isTeam;
     		common.createTab({
     			uri: '${ctx}/behaviour'+params,
     			data: {name: '用户行为数据统计'},
     			key: 'behaviour'+level
     		});
     	});
		
		$self.find(".js-jdDetail").on("click",function(e){
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
     				+"&date_startStr=${date_startStr}&date_endStr=${date_endStr}"
     				+"&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext+"&noHecadreNext="+noHecadreNext;
			common.createTab({
				uri: '${ctx}/behaviour/jdDetail'+params,
     			data: {name: '居民信息详细列表'},
     			key: 'behaviourJDDetail'
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
     				+"&date_startStr=${date_startStr}&date_endStr=${date_endStr}"
     				+"&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext+"&noHecadreNext="+noHecadreNext;
			common.createTab({
				uri: '${ctx}/behaviour/qyDetail'+params,
     			data: {name: '家庭医生详细签约列表'},
     			key: 'behaviourQYDetail'
     		});
		});
		
		//已注册（人）详情页面
		$self.find(".js-zcDetail").on("click",function(e){
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
     		var params="?organizationId="+organizationId+"&doctorUid="+doctorUid+"&hecadreUid="+hecadreUid
     				+"&date_startStr=${date_startStr}&date_endStr=${date_endStr}"+
     				"&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext+"&noHecadreNext="+noHecadreNext;
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
     		var organizationId = "${organizationId}";
     		var doctorUid='';
     		var hecadreUid='';
     		var orgLevel = "${orgLevel}";
     		if(orgLevel==4){
     			if("${isTeam}"==1 && noTeamNext==0 && noHecadreNext==0) { doctorUid = orgId; }
     			if("${isTeam}"==0) { hecadreUid=orgId; }
     		}else{ organizationId=orgId; }
     		var param='';
     		if('${orgLevel}'==1||'${orgLevel}'==2||'${orgLevel}'==3){
     			param='&organizationId='+organizationId;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==1&&noTeamNext==0&&noHecadreNext==0){
     			param='&doctorUid='+doctorUid;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==1&&noTeamNext==1){
     			param='&organizationIdNoTeam='+organizationId;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==1&&noHecadreNext==1){
     			param='&organizationIdSingle='+organizationId;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==0){
     			param='&healthsId='+hecadreUid;
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
     		var organizationId = "${organizationId}";
     		var doctorUid='';
     		var hecadreUid='';
     		var orgLevel = "${orgLevel}";
     		if(orgLevel==4){
     			if("${isTeam}"==1 && noTeamNext==0 && noHecadreNext==0) { doctorUid = orgId; }
     			if("${isTeam}"==0) { hecadreUid=orgId; }
     		}else{ organizationId=orgId; }
     		var param='';
     		if('${orgLevel}'==1||'${orgLevel}'==2||'${orgLevel}'==3){
     			param='&organizationId='+organizationId;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==1&&noTeamNext==0&&noHecadreNext==0){
     			param='&doctorUid='+doctorUid;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==1&&noTeamNext==1){
     			param='&organizationIdNoTeam='+organizationId;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==1&&noHecadreNext==1){
     			param='&organizationIdSingle='+organizationId;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==0){
     			param='&healthsId='+hecadreUid;
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
     		var param='';
     		if('${orgLevel}'==1||'${orgLevel}'==2||'${orgLevel}'==3){
     			param='&organizationId='+organizationId;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==1&&noTeamNext==0&&noHecadreNext==0){
     			param='&doctorUid='+doctorUid;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==1&&noTeamNext==1){
     			param='&organizationIdNoTeam='+organizationId;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==1&&noHecadreNext==1){
     			param='&organizationIdSingle='+organizationId;
     		}
     		if('${orgLevel}'==4&&'${isTeam}'==0){
     			param='&healthsId='+hecadreUid;
     		}
     		var params="?date_startStr=${date_startStr}&date_endStr=${date_endStr}"+param;
     		common.createTab({
				uri: '${ctx}/behaviour/counsel'+params,
     			data: {name: '居民咨询明细表'},
     			key: 'behaviourZXDetail'
     		});
		});
		
		
		$self.find("#btn-export").on('click',function(e){
	        window.location.href="${ctx}/behaviour?download=download&organizationId=${organizationId}&doctorUid=${doctorUid}"
	        		+"&date_startStr=${date_startStr}&date_endStr=${date_endStr}&isTeam=${isTeam}&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}";
	    });

		$self.find('#js_date_start').datetimepicker({
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
		
		$self.find('#js_date_end').datetimepicker({
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