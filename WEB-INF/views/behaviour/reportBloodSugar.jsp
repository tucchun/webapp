<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap xtcl">
    <div class="tb-head">血糖测量明细表</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <form action="#" class="form-inline" id="js-form">
                        
                    </form>
                </div>
                <div class="pull-right">
                    <button type="button" class="btn btn-main" id="btn-export">导出</button>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>所属人群</th>
                    <th>设备测量血糖次数</th>
                    <th>自主血糖测量（蓝牙）</th>
                    <th>自主血糖测量（GPRS）</th>
                    <th>管理师血糖测量（蓝牙）</th>
                    <th>所属社区站</th>
                    <th>管辖者</th>
                    <th>开始时间</th>
					<th>结束时间</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content}" var="record" varStatus="status">
                    <tr>
                        <td><a href="#" data-id="${record.user.id}" class="js-view">${record.user.realName }</a></td>
                        <td>${record.decodeSex}</td>
                        <td>${record.decodeAge}</td>
                        <td>${record.residentGroups}</td>
                        <td>${record.measureNumDevice}次</td>
                        <td>${record.measureNumBluetooth}次</td>
                        <td>${record.measureNumGprs}次</td>
                        <td>${record.measureNumBTMaster}次</td>
                        <td>${record.station}</td>
                        <td>${record.healthManagerMan}</td>
                        <td><fmt:formatDate value="${record.user.createDate}" pattern="yyyy-MM-dd" /></td>
                        <td>${record.overTime}</td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/behaviour/bloodSugar?organizationId=${pages.searchMap['organizationId']}&healthsId=${pages.searchMap['healthsId']}&teamId=${pages.searchMap['teamId']}&date_startStr=${pages.searchMap['date_startStr']}&date_endStr=${pages.searchMap['date_endStr']}&hecadreUidList=${pages.searchMap['hecadreUidList']}&organizationIdSingle=${pages.searchMap['organizationIdSingle']}" pageId="behaviourXTDetail" />
        </div>
    </div>
</div>

<script>
    require([ 'jquery' ],function($,cascade){
        var $self = $("#behaviourXTDetail");
        
        $self.find("#btn-export").on('click',function(e){
            common.download({
            	url:"${ctx}/behaviour/bloodSugar?organizationId=${pages.searchMap['organizationId']}&healthsId=${pages.searchMap['healthsId']}&teamId=${pages.searchMap['teamId']}&date_startStr=${pages.searchMap['date_startStr']}&date_endStr=${pages.searchMap['date_endStr']}&hecadreUidList=${pages.searchMap['hecadreUidList']}&organizationIdSingle=${pages.searchMap['organizationIdSingle']}&download=download"
            });
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