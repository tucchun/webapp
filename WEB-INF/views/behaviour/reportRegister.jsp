<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap jmzc">
    <div class="tb-head">居民注册明细表</div>
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
                    <th>民族</th>
                    <th>本人电话</th>
                    <th>联系人姓名/电话</th>
                    <th>身份证号码</th>
                    <th>现住址</th>
                    <th>管辖者</th>
                    <th>所属人群</th>
                    <th>添加时间</th>
                    <th>添加人</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content}" var="list" varStatus="status">
                    <tr>
                        <td><a href="#" data-id="${list.user_id}" class="js-view">${list.userName }</a></td>
	                    <td>${list.sexStr }</td>
	                    <td>${list.age }</td>
	                    <td>${list.residentNation }</td>
	                    <td>${list.residentMobile }</td>
	                    <td>${list.residentContactsName}/${list.residentContactsMobile }</td>
	                    <td>${list.personId }</td>
	                    <td>${list.residentAddress }</td>
	                    <td>${list.currentHecadreName }</td>
	                    <td>${list.residentGroups }</td>
	                    <td>${list.createDocTimeStr }</td>
	                    <td>${list.hecadreName }</td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/behaviour/register?organizationId=${organizationId}&date_startStr=${date_startStr}&date_endStr=${date_endStr}&orgLevel=${orgLevel}&hecadreId=${hecadreId}&isTeam=${isTeam}&noTeamNext=${noTeamNext}&noHecadreNext=${noHecadreNext}&userIdList=${userIdList}" pageId="behaviourZCDetail" />
        </div>
    </div>
</div>

<script>
    require([ 'jquery' ],function($){
        var $self = $("#behaviourZCDetail");
        
        $self.find("#btn-export").on('click',function(e){
            common.download({
            	url:"${ctx}/behaviour/register?download=download&organizationId=${organizationId}&date_startStr=${date_startStr}&date_endStr=${date_endStr}&orgLevel=${orgLevel}&hecadreId=${hecadreId}&isTeam=${isTeam}&noTeamNext=${noTeamNext}&noHecadreNext=${noHecadreNext}&userIdList=${userIdList}"
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