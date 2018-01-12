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
                	
                    <%-- <input type="hidden" id="loginOrganizationId" name="loginOrganizationId" value="${loginOrganizationId }" />
                    <input type="hidden" id="hecadreIdListStr" name="hecadreIdListStr" value="${hecadreIdListStr }" /> --%>
                    
                    <form action="#" class="form-inline" id="js-form" onsubmit="return false">
                        <div class="input-group date form_date col-sm-4" id="js_date_start" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                            <input  name="date_startStr" id="js_date_start_input" class="form-control" size="20" type="text" value="${date_startStr }" readonly="">
                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<div id="js_date_end" class="input-group date form_date col-sm-4" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                        <input  name="date_endStr" class="form-control" id="js_date_end_input" size="20" type="text" value="${date_endStr }" readonly="">
                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
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
                    <th>已添加居民（人）</th>
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
	                    	<c:if test="${list.jmcount==null || list.jmcount==0}">0</c:if>
	                    	<c:if test="${list.jmcount>0}">
			                    <a href="#" class="js-jmDetail" data-id="${noTeamNext};${list.organizationId }">${list.jmcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.jdcount==null || list.jdcount==0}">0</c:if>
	                    	<c:if test="${list.jdcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamNext};${list.organizationId };${group_all}">${list.jdcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.childcount==null || list.childcount==0}">0</c:if>
	                    	<c:if test="${list.childcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamNext};${list.organizationId };${group_children}">${list.childcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.maternalcount==null || list.maternalcount==0}">0</c:if>
	                    	<c:if test="${list.maternalcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamNext};${list.organizationId };${group_maternal}">${list.maternalcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.oldMancount==null || list.oldMancount==0}">0</c:if>
	                    	<c:if test="${list.oldMancount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamNext};${list.organizationId };${group_aged}">${list.oldMancount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.highBloodPrescount==null || list.highBloodPrescount==0}">0</c:if>
	                    	<c:if test="${list.highBloodPrescount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamNext};${list.organizationId };${group_hypertension}">${list.highBloodPrescount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.diabeticscount==null || list.diabeticscount==0}">0</c:if>
	                    	<c:if test="${list.diabeticscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamNext};${list.organizationId };${group_diabetic}">${list.diabeticscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.coronaryHeartDiscount==null || list.coronaryHeartDiscount==0}">0</c:if>
	                    	<c:if test="${list.coronaryHeartDiscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="${noTeamNext};${list.organizationId };${group_coronary_heart}">${list.coronaryHeartDiscount }</a>
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
			                    <a href="#" class="js-qyDetail" data-id="${noTeamNext};${list.organizationId }">${list.qycount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.spcount==null || list.spcount==0}">0</c:if>
	                    	<c:if test="${list.spcount>0}">
			                    <a href="#" class="js-spDetail" data-id="${noTeamNext};${list.organizationId }">${list.spcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>${date_startStr }</td>
	                    <td>${date_endStr }</td>
	                    <c:if test="${orgLevel==1||orgLevel==2||orgLevel==3||(orgLevel==4&&isTeam==1)}">
	                    <td><a href="#" class="js-view" data-id="0;${list.organizationId}">查看详情</a></td>
	                    </c:if>
	                </tr>
                </c:forEach>
                <c:if test="${orgLevel==4&&isTeam==1}">
                	<tr>
        				<td>${noTeamMap.noTeamHecadre}</td>
        				<td>
        					<c:if test="${noTeamMap.jmcount==null || noTeamMap.jmcount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.jmcount>0}">
		        				<a href="#" class="js-jmDetail" data-id="1;${noTeamMap.organizationId}">${noTeamMap.jmcount}</a>
	                    	</c:if>
        				</td>
	                    <td>
        					<c:if test="${noTeamMap.jdcount==null || noTeamMap.jdcount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.jdcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="1;${noTeamMap.organizationId };${group_all}">${noTeamMap.jdcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
        					<c:if test="${noTeamMap.childcount==null || noTeamMap.childcount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.childcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="1;${noTeamMap.organizationId };${group_children}">${noTeamMap.childcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
        					<c:if test="${noTeamMap.maternalcount==null || noTeamMap.maternalcount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.maternalcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="1;${noTeamMap.organizationId };${group_maternal}">${noTeamMap.maternalcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
        					<c:if test="${noTeamMap.oldMancount==null || noTeamMap.oldMancount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.oldMancount>0}">
			                    <a href="#" class="js-jdDetail" data-id="1;${noTeamMap.organizationId };${group_aged}">${noTeamMap.oldMancount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
        					<c:if test="${noTeamMap.highBloodPrescount==null || noTeamMap.highBloodPrescount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.highBloodPrescount>0}">
			                    <a href="#" class="js-jdDetail" data-id="1;${noTeamMap.organizationId };${group_hypertension}">${noTeamMap.highBloodPrescount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
        					<c:if test="${noTeamMap.diabeticscount==null || noTeamMap.diabeticscount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.diabeticscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="1;${noTeamMap.organizationId };${group_diabetic}">${noTeamMap.diabeticscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
        					<c:if test="${noTeamMap.coronaryHeartDiscount==null || noTeamMap.coronaryHeartDiscount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.coronaryHeartDiscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="1;${noTeamMap.organizationId };${group_coronary_heart}">${noTeamMap.coronaryHeartDiscount }</a>
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
			                    <a href="#" class="js-qyDetail" data-id="1;${noTeamMap.organizationId}">${noTeamMap.qycount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
        					<c:if test="${noTeamMap.spcount==null || noTeamMap.spcount==0}">0</c:if>
	                    	<c:if test="${noTeamMap.spcount>0}">
			                    <a href="#" class="js-spDetail" data-id="1;${noTeamMap.organizationId}">${noTeamMap.spcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>${date_startStr }</td>
	                    <td>${date_endStr }</td>
	                    <td><a href="#" class="js-view" data-id="1;${organizationId}">查看详情</a></td>
        			</tr>
                </c:if>
                </tbody>
            </table>
            <c:if test="${orgLevel!=4||isTeam!=1}">
	            <tags:pagination page="${pages}" action="${ctx}/operationalData?level=${level}&organizationId=${organizationId}&doctorUid=${doctorUid}&date_startStr=${date_startStr}&date_endStr=${date_endStr}&isTeam=${isTeam}&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}" pageId="operationalData${level}" />
            </c:if>
        </div>
    </div>
</div>

<script>

	require([ 'jquery' ], function($) {
		var $self = $("#operationalData${level}");
		
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
			var level = $self.find("#level").val();
			common.load({
				container : 'operationalData${level}',
				url : "${ctx}/operationalData?level=${level}&organizationId=${organizationId}&doctorUid=${doctorUid}&isTeam=${isTeam}"
						+"&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}&date_start="+date_start+"&date_end="+date_end,
				data : $self.find("#js-form").serialize()
			});
		});
		
		$self.find(".js-view").on("click", function(e){
     		var id_arr = $(this).attr('data-id').split(";");
     		var noTeamNext = id_arr[0];
     		var orgId = id_arr[1];
     		var level = $self.find("#level").val()+1;
     		var isTeam="${isTeam}";
     		var orgLevel = "${orgLevel}";
     		var doctorUid = "";
     		var organizationId;
     		if(orgLevel==4){
     			organizationId = "${organizationId}";
     			isTeam=0;
     			if(noTeamNext==0){ doctorUid = orgId; }
     		}else{ organizationId=orgId; }
     		var params = '?organizationId='+organizationId+"&doctorUid="+doctorUid+"&noTeamNext="+noTeamNext
     				+"&date_startStr=${date_startStr}&date_endStr=${date_endStr}&orgLevel=${orgLevel}&level="+level+"&isTeam="+isTeam;
     		common.createTab({
     			uri: '${ctx}/operationalData'+params,
     			data: {name: '运营数据统计'},
     			key: 'operationalData'+level
     		});
     	});
		
		$self.find(".js-jmDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var noTeamNext = id_arr[0];
     		var orgId = id_arr[1];
     		var organizationId;
     		var doctorUid='';
     		var hecadreUid='';
     		var orgLevel = "${orgLevel}";
     		if(orgLevel==4){
     			organizationId = "${organizationId}";
     			if("${isTeam}"==1 && noTeamNext==0) { doctorUid = orgId; }
     			if("${isTeam}"==0) { hecadreUid=orgId; }
     		}else{ organizationId=orgId; }
     		var params='?organizationId='+organizationId+"&doctorUid="+doctorUid+"&hecadreUid="+hecadreUid
     				+"&date_startStr=${date_startStr}&date_endStr=${date_endStr}&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext;
			common.createTab({
				uri: '${ctx}/operationalData/jmDetail'+params,
     			data: {name: '居民信息详细列表'},
     			key: 'operationalDataJMDetail'
     		});
		});
		
		$self.find(".js-jdDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var noTeamNext = id_arr[0];
     		var orgId = id_arr[1];
     		var residentGroup = id_arr[2];
     		var organizationId;
     		var doctorUid='';
     		var hecadreUid='';
     		var orgLevel = "${orgLevel}";
     		if(orgLevel==4){
     			organizationId = "${organizationId}";
     			if("${isTeam}"==1 && noTeamNext==0) { doctorUid = orgId; }
     			if("${isTeam}"==0) { hecadreUid=orgId; }
     		}else{ organizationId=orgId; }
     		var params='?organizationId='+organizationId+"&doctorUid="+doctorUid+"&hecadreUid="+hecadreUid+"&residentGroup="+residentGroup
     				+"&date_startStr=${date_startStr}&date_endStr=${date_endStr}&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext;
			common.createTab({
				uri: '${ctx}/operationalData/jdDetail'+params,
     			data: {name: '居民信息详细列表'},
     			key: 'operationalDataJDDetail'
     		});
		});
		
		$self.find(".js-qyDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var noTeamNext = id_arr[0];
     		var orgId = id_arr[1];
     		var organizationId;
     		var doctorUid='';
     		var hecadreUid='';
     		var orgLevel = "${orgLevel}";
     		if(orgLevel==4){
     			organizationId = "${organizationId}";
     			if("${isTeam}"==1 && noTeamNext==0) { doctorUid = orgId; }
     			if("${isTeam}"==0) { hecadreUid=orgId; }
     		}else{ organizationId=orgId; }
     		var params='?organizationId='+organizationId+"&doctorUid="+doctorUid+"&hecadreUid="+hecadreUid
     				+"&date_startStr=${date_startStr}&date_endStr=${date_endStr}&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext;
			common.createTab({
				uri: '${ctx}/operationalData/qyDetail'+params,
     			data: {name: '家庭医生详细签约列表'},
     			key: 'operationalDataQYDetail'
     		});
		});
		
		$self.find(".js-spDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var noTeamNext = id_arr[0];
     		var orgId = id_arr[1];
     		var organizationId;
     		var doctorUid='';
     		var hecadreUid='';
     		var orgLevel = "${orgLevel}";
     		if(orgLevel==4){
     			organizationId = "${organizationId}";
     			if("${isTeam}"==1 && noTeamNext==0) { doctorUid = orgId; }
     			if("${isTeam}"==0) { hecadreUid=orgId; }
     		}else{ organizationId=orgId; }
     		var params='?organizationId='+organizationId+"&doctorUid="+doctorUid+"&hecadreUid="+hecadreUid
     				+"&date_startStr=${date_startStr}&date_endStr=${date_endStr}&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext;
			common.createTab({
				uri: '${ctx}/operationalData/spDetail'+params,
     			data: {name: '家庭医生健康服务包签约列表'},
     			key: 'operationalDataSPDetail'
     		});
		});
		
		$self.find("#btn-export").on('click',function(e){
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
	        window.location.href="${ctx}/operationalData?download=download&organizationId=${organizationId}&doctorUid=${doctorUid}&isTeam=${isTeam}"
	        		+"&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}&date_startStr="+date_start+"&date_endStr="+date_end;
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