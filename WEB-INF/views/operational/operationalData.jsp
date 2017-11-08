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
                    <input type="hidden" id="hecadreIdListStr" name="hecadreIdListStr" value="${hecadreIdListStr }" />
                    
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
	                    	<c:if test="${orgLevel!=4 || list.staffStatus!=0 }">
		                    	${list.organizationName }
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.jmcount==0}">${list.jmcount }</c:if>
	                    	<c:if test="${list.jmcount>0}">
			                    <a href="#" class="js-jmDetail" data-id="0;${list.loginOrganizationId };'';''">${list.jmcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.jdcount==0}">${list.jdcount }</c:if>
	                    	<c:if test="${list.jdcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="0;${list.loginOrganizationId };'';${group_all}">${list.jdcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.childcount==0}">${list.childcount }</c:if>
	                    	<c:if test="${list.childcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="0;${list.loginOrganizationId };'';${group_children}">${list.childcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.maternalcount==0}">${list.maternalcount }</c:if>
	                    	<c:if test="${list.maternalcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="0;${list.loginOrganizationId };'';${group_maternal}">${list.maternalcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.oldMancount==0}">${list.oldMancount }</c:if>
	                    	<c:if test="${list.oldMancount>0}">
			                    <a href="#" class="js-jdDetail" data-id="0;${list.loginOrganizationId };'';${group_aged}">${list.oldMancount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.highBloodPrescount==0}">${list.highBloodPrescount }</c:if>
	                    	<c:if test="${list.highBloodPrescount>0}">
			                    <a href="#" class="js-jdDetail" data-id="0;${list.loginOrganizationId };'';${group_hypertension}">${list.highBloodPrescount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.diabeticscount==0}">${list.diabeticscount }</c:if>
	                    	<c:if test="${list.diabeticscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="0;${list.loginOrganizationId };'';${group_diabetic}">${list.diabeticscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.coronaryHeartDiscount==0}">${list.coronaryHeartDiscount }</c:if>
	                    	<c:if test="${list.coronaryHeartDiscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="0;${list.loginOrganizationId };'';${group_coronary_heart}">${list.coronaryHeartDiscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>${list.sfcount }</td>
	                    <td>${list.ghcount }</td>
	                    <td>${list.mycount }</td>
	                    <td>
		                    <c:if test="${list.qycount==0}">${list.qycount }</c:if>
	                    	<c:if test="${list.qycount>0}">
			                    <a href="#" class="js-detail" data-id="0;${list.loginOrganizationId };'';''">${list.qycount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
		                    <c:if test="${list.spcount==0}">${list.spcount }</c:if>
	                    	<c:if test="${list.spcount>0}">
			                    <a href="#" class="js-spDetail" data-id="0;${list.loginOrganizationId };'';''">${list.spcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>${list.date_startStr }</td>
	                    <td>${list.date_endStr }</td>
	                    <c:if test="${orgLevel==1||orgLevel==2||orgLevel==3||(orgLevel==4&&isTeam==1)}">
	                    <td><a href="#" class="js-view" data-id="0;${list.loginOrganizationId};''">查看详情</a></td>
	                    </c:if>
	                </tr>
                </c:forEach>
                <c:if test="${orgLevel==4&&isTeam==1}">
                	<tr>
        				<td>${noTeamMap.noTeamHecadre}</td>
        				<td>
        					<c:if test="${noTeamMap.jmcount==0}">${noTeamMap.jmcount }</c:if>
	                    	<c:if test="${noTeamMap.jmcount>0}">
		        				<a href="#" class="js-jmDetail" data-id="1;${noTeamMap.loginOrganizationId};${hecadreIdListStr};''">${noTeamMap.jmcount}</a>
	                    	</c:if>
        				</td>
	                    <td>
        					<c:if test="${noTeamMap.jdcount==0}">${noTeamMap.jdcount }</c:if>
	                    	<c:if test="${noTeamMap.jdcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="1;${noTeamMap.loginOrganizationId };${hecadreIdListStr};${group_all}">${noTeamMap.jdcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
        					<c:if test="${noTeamMap.childcount==0}">${noTeamMap.childcount }</c:if>
	                    	<c:if test="${noTeamMap.childcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="1;${noTeamMap.loginOrganizationId };${hecadreIdListStr};${group_children}">${noTeamMap.childcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
        					<c:if test="${noTeamMap.maternalcount==0}">${noTeamMap.maternalcount }</c:if>
	                    	<c:if test="${noTeamMap.maternalcount>0}">
			                    <a href="#" class="js-jdDetail" data-id="1;${noTeamMap.loginOrganizationId };${hecadreIdListStr};${group_maternal}">${noTeamMap.maternalcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
        					<c:if test="${noTeamMap.oldMancount==0}">${noTeamMap.oldMancount }</c:if>
	                    	<c:if test="${noTeamMap.oldMancount>0}">
			                    <a href="#" class="js-jdDetail" data-id="1;${noTeamMap.loginOrganizationId };${hecadreIdListStr};${group_aged}">${noTeamMap.oldMancount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
        					<c:if test="${noTeamMap.highBloodPrescount==0}">${noTeamMap.highBloodPrescount }</c:if>
	                    	<c:if test="${noTeamMap.highBloodPrescount>0}">
			                    <a href="#" class="js-jdDetail" data-id="1;${noTeamMap.loginOrganizationId };${hecadreIdListStr};${group_hypertension}">${noTeamMap.highBloodPrescount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
        					<c:if test="${noTeamMap.diabeticscount==0}">${noTeamMap.diabeticscount }</c:if>
	                    	<c:if test="${noTeamMap.diabeticscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="1;${noTeamMap.loginOrganizationId };${hecadreIdListStr};${group_diabetic}">${noTeamMap.diabeticscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
        					<c:if test="${noTeamMap.coronaryHeartDiscount==0}">${noTeamMap.coronaryHeartDiscount }</c:if>
	                    	<c:if test="${noTeamMap.coronaryHeartDiscount>0}">
			                    <a href="#" class="js-jdDetail" data-id="1;${noTeamMap.loginOrganizationId };${hecadreIdListStr};${group_coronary_heart}">${noTeamMap.coronaryHeartDiscount }</a>
	                    	</c:if>
	                    </td>
	                    <td>${noTeamMap.sfcount }</td>
	                    <td>${noTeamMap.ghcount }</td>
	                    <td>${noTeamMap.mycount }</td>
	                    <td>
        					<c:if test="${noTeamMap.qycount==0}">${noTeamMap.qycount }</c:if>
	                    	<c:if test="${noTeamMap.qycount>0}">
			                    <a href="#" class="js-detail" data-id="1;${noTeamMap.loginOrganizationId};${hecadreIdListStr};''">${noTeamMap.qycount }</a>
	                    	</c:if>
	                    </td>
	                    <td>
        					<c:if test="${noTeamMap.spcount==0}">${noTeamMap.spcount }</c:if>
	                    	<c:if test="${noTeamMap.spcount>0}">
			                    <a href="#" class="js-spDetail" data-id="1;${noTeamMap.loginOrganizationId};${hecadreIdListStr};''">${noTeamMap.spcount }</a>
	                    	</c:if>
	                    </td>
	                    <td>${noTeamMap.date_startStr }</td>
	                    <td>${noTeamMap.date_endStr }</td>
	                    <td><a href="#" class="js-view" data-id="1;${noTeamMap.loginOrganizationId};${hecadreIdListStr}">查看详情</a></td>
        			</tr>
                </c:if>
                </tbody>
            </table>
            <c:if test="${orgLevel!=4||isTeam!=1}">
	            <tags:pagination page="${pages}" action="${ctx}/operationalData?level=${level}&loginOrganizationId=${loginOrganizationId}&date_startStr=${date_startStr}&date_endStr=${date_endStr}&isTeam=${isTeam}&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}&hecadreIdListStr=${hecadreIdListStr}" pageId="operationalData${level}" />
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
				url : '${ctx}/operationalData?level='+level+"&loginOrganizationId="+ $self.find("#loginOrganizationId").val()+"&isTeam=${isTeam}&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}&hecadreIdListStr=${hecadreIdListStr}",
				data : $self.find("#js-form").serialize()
			});
		});
		
		$self.find(".js-view").on("click", function(e){
     		var id_arr = $(this).attr('data-id').split(";");
     		var noTeamNext = id_arr[0];
     		var orgId = id_arr[1];
     		var hecadreIdListStr = id_arr[2];
     		var level = $self.find("#level").val()+1;
     		var isTeam="${isTeam}";
     		if("${orgLevel}"==4){
     			isTeam=0;
     		}
     		var params = '?loginOrganizationId='+orgId+"&noTeamNext="+noTeamNext+"&hecadreIdListStr="+hecadreIdListStr+
     				"&date_startStr=${date_startStr}&date_endStr=${date_endStr}&orgLevel=${orgLevel}&level="+level+"&isTeam="+isTeam;
     		common.createTab({
     			uri: '${ctx}/operationalData'+params,
     			data: {name: '运营数据统计'},
     			key: 'operationalData'+level
     		});
     	});
		
		$self.find(".js-detail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var noTeamNext = id_arr[0];
     		var orgId = id_arr[1];
     		var hecadreIdListStr = id_arr[2];
     		var params='?organizationId='+orgId+"&date_startStr=${date_startStr}&date_endStr=${date_endStr}&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext+"&hecadreIdListStr="+hecadreIdListStr;
			common.createTab({
				uri: '${ctx}/operationalData/detail'+params,
     			data: {name: '家庭医生详细签约列表'},
     			key: 'operationalDataDetail'
     		});
		});
		
		$self.find(".js-spDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var noTeamNext = id_arr[0];
     		var orgId = id_arr[1];
     		var hecadreIdListStr = id_arr[2];
     		var params='?organizationId='+orgId+"&date_startStr=${date_startStr}&date_endStr=${date_endStr}&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext+"&hecadreIdListStr="+hecadreIdListStr;
			common.createTab({
				uri: '${ctx}/operationalData/spDetail'+params,
     			data: {name: '家庭医生健康服务包签约列表'},
     			key: 'operationalDataSPDetail'
     		});
		});
		
		$self.find(".js-jdDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var noTeamNext = id_arr[0];
     		var orgId = id_arr[1];
     		var hecadreIdListStr = id_arr[2];
     		var groupCode = id_arr[3];
     		var params='?organizationId='+orgId+"&date_startStr=${date_startStr}&date_endStr=${date_endStr}&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext+"&hecadreIdListStr="+hecadreIdListStr+"&groupCode="+groupCode;
			common.createTab({
				uri: '${ctx}/operationalData/jdDetail'+params,
     			data: {name: '居民信息详细列表'},
     			key: 'operationalDataJDDetail'
     		});
		});
		
		$self.find(".js-jmDetail").on("click",function(e){
			var id_arr = $(this).attr('data-id').split(";");
     		var noTeamNext = id_arr[0];
     		var orgId = id_arr[1];
     		var hecadreIdListStr = id_arr[2];
     		var params='?organizationId='+orgId+"&date_startStr=${date_startStr}&date_endStr=${date_endStr}&orgLevel=${orgLevel}&isTeam=${isTeam}&noTeamNext="+noTeamNext+"&hecadreIdListStr="+hecadreIdListStr;
			common.createTab({
				uri: '${ctx}/operationalData/jmDetail'+params,
     			data: {name: '居民信息详细列表'},
     			key: 'operationalDataJMDetail'
     		});
		});
		
		$self.find("#btn-export").on('click',function(e){
	        window.location.href="${ctx}/operationalData?download=download&loginOrganizationId=${loginOrganizationId}&date_startStr=${date_startStr}&date_endStr=${date_endStr}&isTeam=${isTeam}&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}&hecadreIdListStr=${hecadreIdListStr}";
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