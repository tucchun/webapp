<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap expenditure">
    <div class="tb-head">经费开支管理</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <form class="form-inline" id="js-searchForm">
                        <tags:selectboxMapper name="year" list="${years}" value="${pages.searchMap['year']}" addNull="true"/>
                        <input type="button" class="btn btn-main" id="js-search" value="查询" />
                    </form>
                </div>
                <div class="pull-right">
                    <button type="button" class="btn btn-main" id="js-create">新增</button>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th class="col-xs-1">序号</th>
                    <th>社区服务站</th>
                    <th>日期</th>
                    <th>支出项目</th>
                    <th>支出金额</th>
                    <th>备注</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content}" var="ground" varStatus="status">
                    <tr>
                    <td>${status.index+1}</td>
                    <td>${ground.decodeServiceStation}</td>
                    <td><fmt:formatDate value="${ground.fundDate}" pattern="yyyy-MM-dd"/></td>
                    <td>${ground.fundName}</td>
                    <td>${ground.fundMoney}</td>
                    <td>${ground.fundDescriptionLimit}</td>
                    <td>
                        <button type="button" class="btn btn-main js-update" data-id="${ground.fundId}">修改</button>
                        <button type="button" class="btn btn-main js-delete" data-id="${ground.fundId}">删除</button>
                    </td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/fund" pageId="fund" />
        </div>
    </div>
    <div id="div_include_fund">

    </div>
</div>
<script>
require([
	'jquery'
],function($){
	var $self = $("#fund");
	
	$self.find("#js-search").on("click", function(e){
        common.load({
            container: 'fund',
            url: '${ctx}/fund',
            data: $self.find("#js-searchForm").serialize()
        });
	});

	$self.find("#js-create").on("click", function(e){
        $.get("${ctx}/fund/create",function(html){
        	$("#fund").find("#div_include_fund").html(html);
        	$("#fund").find("#modal_fund").modal('show');
        },"html");
	});

	// 去修改
	$self.find(".js-update").on("click", function(e){
		var id = $(this).attr('data-id');
        $.get("${ctx}/fund/update/"+id,function(html){
        	$("#fund").find("#div_include_fund").html(html);
        	$("#fund").find("#modal_fund").modal('show');
        },"html");
	});

    $self.find(".js-delete").on("click", function(e){
        var id = $(this).attr('data-id');
        common.confirm({
            content:"确认删除？",
            success:function(){
                var self = this;
                $.get("${ctx}/fund/delete/"+id,function(data){
                    common.alert(data.ret_msg);
                    $self.find("#js-confirm").trigger('click');
                    self.hide();
                },"json");
            }
        });
    });
	
});

</script>