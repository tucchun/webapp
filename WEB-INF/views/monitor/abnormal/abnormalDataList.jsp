<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap expenditure">
    <div class="tb-head">异常数据监控</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt"></div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th class="col-xs-1">序号</th>
                    <th>异常数据表单/异常数据项1</th>
                    <th>表单创建时间</th>
                    <th>异常数据表单/异常数据项2</th>
                    <th>表单创建时间</th>
                    <th>健康管理师姓名</th>
                    <th>健康管理师手机号码</th>
                    <th>上级主管及联系方式</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content }" var="ab" varStatus="status">
                	<tr>
	                    <td>${status.index + 1 }</td>
	                    <td>${ab.oldNotes}/${ab.oldColumnNotes }:${ab.oldColumnValue }</td>
	                    <td>${ab.oldTime }</td>
	                    <td>${ab.newNotes}/${ab.newColumnNotes }:${ab.newColumnValue }</td>
	                    <td>${ab.newTime }</td>
	                    <td>${ab.staffName }</td>
	                    <td>${ab.staffMobile }</td>
	                    <td>${ab.staffParentName }/${ab.staffParentMobile }</td>
	                    <td>
							<c:choose>
								<c:when test="${ab.state == 0 }">待修正</c:when>
								<c:when test="${ab.state == 1 }">已修正</c:when>
							</c:choose>
						</td>
	                    <td class="optCol">
	                    	<c:choose>
								<c:when test="${ab.state == 0 }"><a href="#" class="js-update" data-id="${ab.id }">修正数据</a></c:when>
								<c:when test="${ab.state == 1 }"><a href="#" class="js-view" data-id="${ab.id }">查看详情</a></c:when>
							</c:choose>
	                    </td>
                	</tr>
                </c:forEach>
                </tbody>
            </table>
           <div class="pagenation clearfix">
               <tags:pagination pageId="abnormalDataList" paginationSize="5" action="${ctx}/AbnormalData" page="${pages}"></tags:pagination>
            </div>
        </div>
    </div>
</div>
<script>
    require([
        'jquery'
    ], function($){
        $('#data_start').datetimepicker({
            language:  'zh-CN',
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0
        });
        $('#data_end').datetimepicker({
            language:  'zh-CN',
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0
        });
        
        
    	var $self = $("#abnormalDataList");
    	
    	$self.find("#js-search").on("click", function(e){
            common.load({
                container: 'abnormalDataList',
                url: '${ctx}/AbnormalData',
                data: $("#js-searchForm").serialize()
            });
    	});
    	
    	$self.find(".js-update").on("click", function(e){
    		var id = $(this).attr('data-id');
    		common.createTab({
    			uri: '${ctx}/AbnormalData/update/'+id,
    			data: {name: '修正数据'},
    			key: 'correct'
    		});
    	});
    	
    	$self.find(".js-view").on("click", function(e){
    		var id = $(this).attr('data-id');
    		common.createTab({
    			uri: '${ctx}/AbnormalData/view/'+id,
    			data: {name: '详情'},
    			key: 'correctDetail'
    		});
    	});
    	
    });
</script>