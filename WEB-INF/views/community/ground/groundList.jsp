
<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap expenditure">
    <div class="tb-head">健康教育宣传场地管理</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <form class="form-inline" id="js-searchForm">
                        <tags:selectboxMapper name="stationId" list="${stations}" value="${pages.searchMap['stationId']}" addNull="true"/>
                        <input type="text" name="groundName" id="groundName" value="${pages.searchMap['groundName']}" class="form-control" placeholder="请输入健康教育宣传场地管名称">
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
                    <th>宣传场地名称</th>
                    <th>面积</th>
                    <th>数量</th>
                    <th>频率</th>
                    <th>投入使用时间</th>
                    <th>性质（专/兼）</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content}" var="ground" varStatus="status">
                    <tr>
                    <td>${status.index+1}</td>
                    <td>${ground.decodeServiceStation}</td>
                    <td>${ground.groundName}</td>
                    <td>${ground.groundMeasure}</td>
                    <td>${ground.groundCount}</td>
                    <td>${ground.groundFreq}</td>
                    <td><fmt:formatDate value="${ground.groundEffectiveDate}" pattern="yyyy-MM-dd"/></td>
                    <td>${ground.decodeGroundType}</td>
                    <td>
                        <button type="button" class="btn btn-main js-update" data-id="${ground.groundId}">修改</button>
                        <button type="button" class="btn btn-main js-delete" data-id="${ground.groundId}">删除</button>
                    </td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/ground" pageId="ground" />
        </div>
    </div>
    <div id="div_include_ground">

    </div>
</div>
<script>
require([
	'jquery'
],function($){
	var $self = $("#ground");
	
	$self.find("#js-search").on("click", function(e){
        common.load({
            container: 'ground',
            url: '${ctx}/ground',
            data: $self.find("#js-searchForm").serialize()
        });
	});

	$self.find("#js-create").on("click", function(e){
        $.get("${ctx}/ground/create",function(html){
            $("#div_include_ground").html(html);
            $("#modal_ground").modal('show');
        },"html");
	});

	// 去修改
	$self.find(".js-update").on("click", function(e){
		var id = $(this).attr('data-id');
        $.get("${ctx}/ground/update/"+id,function(html){
            $("#div_include_ground").html(html);
            $("#modal_ground").modal('show');
        },"html");
	});

    $self.find(".js-delete").on("click", function(e){
        var id = $(this).attr('data-id');
        common.confirm({
            content:"确认删除？",
            success:function(){
                var self = this;
                $.get("${ctx}/ground/delete/"+id,function(data){
                	common.alert(data.ret_msg);
                    $self.find("#js-confirm").trigger('click');
                    self.hide();
                },"JSON");
            }
        });

    });
	
});

</script>