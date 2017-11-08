<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj",Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap household">
    <div class="tb-head">辖区各户编号管理</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <form action="#" class="form-inline" id="js-form">
                    	<input type="text" class="form-control" placeholder="请输入小区/建筑物名称" name="buildingName" value="${pages.searchMap['buildingName']}"/>
                        <input type="button" class="btn btn-main" value="查询" id="js-search" />
                    </form>
                </div>
                <div class="pull-right">
                    <button type="button" class="btn btn-main" style="display: none;">excel导入</button>
                    <button type="button" class="btn btn-main" id="js-create">新增</button>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th></th>
                    <th>小区/建筑物名称</th>
                    <th>所属卫生站</th>
                    <th>小区住户数</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content }" var="building" varStatus="status">
                	 <tr>
	                    <td>${status.index+1}</td>
	                    <td>${building.buildingName }</td>
	                    <td>${building.decodeStation }</td>
	                    <td>${building.householdDetailsCount }</td>
	                    <td class="optCol">
	                    <a href="#" class="js-updateDetail" data-id="${building.buildingId }">住户编号管理</a>
	                    <a href="#" class="js-update" data-id="${building.buildingId }">修改</a>
                        <a href="#" class="js-delete" data-id="${building.buildingId }">删除</a>
                        </td>
	                </tr>
                </c:forEach>
                </tbody>
            </table>
          <tags:pagination pageId="building" paginationSize="5" action="${ctx}/building" page="${pages}"></tags:pagination>
        </div>
    </div>
</div>

<script>
require([
	'jquery','js/cascade'
],function($,cascade){
	var $self = $("#building");
	
	$self.find("#js-create").on("click", function(e){
		common.createTab({
			uri: '${ctx}/building/create',
			data: {name: '新增小区'},
			key: 'newBuilding'
		});
	});
	
	$self.find(".js-update").on("click", function(e){
		var id = $(this).attr('data-id');
		common.createTab({
			uri: '${ctx}/building/update/'+id,
			data: {name: '修改小区'},
			key: 'newBuilding'
		});
	});
	
	$self.find(".js-updateDetail").on("click", function(e){
		var id = $(this).attr('data-id');
    	common.createTab({
			uri: '${ctx}/household/create/'+id,
			data: {name: '住户编号管理'},
			key: 'newHousehold'
		});
	});

    $self.find(".js-delete").on("click", function(e){
        var id = $(this).attr('data-id');
        common.confirm({
            content:"确认删除？",
            success:function(){
                var self = this;
                common.fetch({
                    url:'${ctx}/building/delete/'+id,
                    type:"get",
                    dataType:"JSON",
                    success:function(data){
                        common.alert(data.ret_msg);
                        if(data.ret_code == 1){
	                        $self.find("#js-confirm").trigger('click');
                        }
                        self.hide();
                    }
                });
            }
        });

    });

    $self.find("#js-search").on('click',function(e){
        common.load({
            container: 'building',
            url: '${ctx}/building',
            data: $self.find("#js-form").serialize()
        });
    });
	
});

</script>