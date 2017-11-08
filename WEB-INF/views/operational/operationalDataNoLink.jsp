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
                    <input type="hidden" id="isTeam" name="isTeam" value="${isTeam }" />
                    <input type="hidden" id="noTeamNext" name="noTeamNext" value="${noTeamNext }" />
                    <input type="hidden" id="hecadreIdListStr" name="hecadreIdListStr" value="${hecadreIdListStr }" />
                    
                    <form action="#" class="form-inline" id="js-form" onsubmit="return false">
                        <div class="input-group date form_date col-sm-4" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                            <input id="js_date_start" name="date_startStr" class="form-control" size="20" type="text" value="${date_startStr }" readonly="">
                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<div class="input-group date form_date col-sm-4" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                        <input id="js_date_end" name="date_endStr" class="form-control" size="20" type="text" value="${date_endStr }" readonly="">
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
                    <th>已随访（人）</th>
                    <th>已挂号就诊（人）</th>
                    <th>已免疫（人）</th>
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
	                    <td>${list.jmcount }</td>
	                    <td>${list.jdcount }</td>
	                    <td>${list.childcount }</td>
	                    <td>${list.maternalcount }</td>
	                    <td>${list.oldMancount }</td>
	                    <td>${list.highBloodPrescount }</td>
	                    <td>${list.diabeticscount }</td>
	                    <td>${list.coronaryHeartDiscount }</td>
	                    <td>${list.sfcount }</td>
	                    <td>${list.ghcount }</td>
	                    <td>${list.mycount }</td>
	                    <td>${list.qycount }</td>
	                    <td>${list.spcount }</td>
	                    <td>${list.date_startStr }</td>
	                    <td>${list.date_endStr }</td>
	                    <c:if test="${orgLevel==1||orgLevel==2||orgLevel==3||(orgLevel==4&&isTeam==1)}">
	                    <td><a href="#" class="js-view" data-id="0;${list.loginOrganizationId};''">查看详情</a></td>
	                    </c:if>
	                </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/operationalData?link=no&level=${level}&loginOrganizationId=${loginOrganizationId}&date_startStr=${date_startStr}&date_endStr=${date_endStr}&isTeam=${isTeam}&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}&hecadreIdListStr=${hecadreIdListStr}" pageId="operationalDataNoLink${level}" />
        </div>
        <c:if test="${orgLevel==4&&isTeam==1}">
        <c:if test="${noTeamMap.jmcount>0||noTeamMap.jdcount>0||noTeamMap.childcount>0||noTeamMap.maternalcount>0||noTeamMap.oldMancount>0||noTeamMap.highBloodPrescount>0||noTeamMap.diabeticscount>0||noTeamMap.coronaryHeartDiscount>0||noTeamMap.sfcount>0||noTeamMap.ghcount>0||noTeamMap.mycount>0||noTeamMap.qycount>0||noTeamMap.spcount>0}">
	        <div class="tb-wrap">
	        	<table cellspacing="0" class="table table-striped table-hover table-bordered center">
	        		<thead>
	                <tr>
	                    <th>家庭医生团队</th>
	                    <th>已添加居民（人）</th>
	                    <th>已建档（人）</th>
	                    <th>0-6岁儿童（人）</th>
	                    <th>孕产妇（人）</th>
	                    <th>老年人（人）</th>
	                    <th>高血压患者（人）</th>
	                    <th>糖尿病患者（人）</th>
	                    <th>冠心病患者（人）</th>
	                    <th>已随访（人）</th>
	                    <th>已挂号就诊（人）</th>
	                    <th>已免疫（人）</th>
	                    <th>家庭医生已签约（人）</th>
	                    <th>健康服务包（个）</th>
	                    <th>开始时间</th>
	                    <th>结束时间</th>
	                    <th>操作</th>
	                </tr>
	                </thead>
	        		<tbody>
	        			<tr>
	        				<td>${noTeamMap.name}</td>
	        				<td>${noTeamMap.jmcount }</td>
		                    <td>${noTeamMap.jdcount }</td>
		                    <td>${noTeamMap.childcount }</td>
		                    <td>${noTeamMap.maternalcount }</td>
		                    <td>${noTeamMap.oldMancount }</td>
		                    <td>${noTeamMap.highBloodPrescount }</td>
		                    <td>${noTeamMap.diabeticscount }</td>
		                    <td>${noTeamMap.coronaryHeartDiscount }</td>
		                    <td>${noTeamMap.sfcount }</td>
		                    <td>${noTeamMap.ghcount }</td>
		                    <td>${noTeamMap.mycount }</td>
		                    <td>${noTeamMap.qycount }</td>
		                    <td>${noTeamMap.spcount }</td>
		                    <td>${noTeamMap.date_startStr }</td>
		                    <td>${noTeamMap.date_endStr }</td>
		                    <td><a href="#" class="js-view" data-id="1;${noTeamMap.loginOrganizationId};${hecadreIdListStr}">查看详情</a></td>
	        			</tr>
	        		</tbody>
	        	</table>
	        </div>
        </c:if>
        </c:if>
    </div>
</div>

<script>

	require([ 'jquery' ], function($) {
		var $self = $("#operationalDataNoLink${level}");
		
		$self.find("#js-search").on("click", function(e) {
			var date_start = $self.find("#js_date_start").val();
			var date_end = $self.find("#js_date_end").val();
			if(date_start==null||date_start==''||date_end==null||date_end==''){
				common.alert("请选择日期区间");
				return;
			}
			var level = $self.find("#level").val();
			common.load({
				container : 'operationalDataNoLink${level}',
				url : '${ctx}/operationalData?link=no&level='+level+"&loginOrganizationId="+ $self.find("#loginOrganizationId").val()+"&isTeam=${isTeam}&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}&hecadreIdListStr=${hecadreIdListStr}",
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
     		var params = '?link=no&loginOrganizationId='+orgId+"&noTeamNext="+noTeamNext+"&hecadreIdListStr="+hecadreIdListStr+
				"&date_startStr=${date_startStr}&date_endStr=${date_endStr}&orgLevel=${orgLevel}&level="+level+"&isTeam="+isTeam;
     		common.createTab({
     			uri: '${ctx}/operationalData'+params,
     			data: {name: '运营数据统计'},
     			key: 'operationalDataNoLink'+level
     		});
     	});
		
		$self.find("#btn-export").on('click',function(e){
	        window.location.href="${ctx}/operationalData?link=no&download=download&loginOrganizationId=${loginOrganizationId}&date_startStr=${date_startStr}&date_endStr=${date_endStr}&isTeam=${isTeam}&orgLevel=${orgLevel}&noTeamNext=${noTeamNext}&hecadreIdListStr=${hecadreIdListStr}";
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