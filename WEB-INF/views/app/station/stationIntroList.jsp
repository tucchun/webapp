
<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap xzqy">
  <div class="tb-head">社区站展示管理</div>
  <div class="tb-content">
    <div class="tb-wrap">
      <div class="opt clearfix">
        <div class="pull-right">
          <button type="button" class="btn btn-main" id="js-create">新增社区站</button>
        </div>
      </div>
      <table cellspacing="0" class="table table-striped table-hover table-bordered">
        <thead>
        <tr>
          <th>序号</th>
          <th>社区站名称</th>
          <th>创建时间</th>
          <th>展示状态</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach items="${pages.content}" var="stationIntro" varStatus="status">
            <tr>
            <td>${status.index+1}</td>
            <td>${stationIntro.name}</td>
            <td><fmt:formatDate value="${stationIntro.createdate}" pattern="yyyy-MM-dd"/></td>
            <td>${stationIntro.decodeDisplay}</td>
            <td>
                <button type="button" class="btn btn-main js-update" data-id="${stationIntro.id}">修改</button>
                <button type="button" class="btn btn-main js-delete" data-id="${stationIntro.id}">删除</button>
            </td>
            </tr>
        </c:forEach>
        
        </tbody>
      </table>
      <tags:pagination page="${pages}" action="${ctx}/stationIntro" pageId="stationIntro" />
    </div>
  </div>
</div>



<script>
require([
	'jquery'
],function($){
	var $self = $("#stationIntro");
	
	$self.find("#js-create").on("click", function(e){
		common.createTab({
			uri: '${ctx}/stationIntro/create',
			data: {name: '新增社区站展示'},
			key: 'newStationIntro'
		});
		/* common.createTab({
			uri: '${ctx}/stationIntro/create',
			data: {name: '新增社区站展示'},
			key: 'newStationIntro'
		}); */
	});
	
	$self.find(".js-update").on("click", function(e){
		var id = $(this).attr('data-id');
		common.createTab({
			uri: '${ctx}/stationIntro/update/'+id,
			data: {name: '修改社区站展示'},
			key: 'newStationIntro'
		});
	});

    // 删除
    $self.find(".js-delete").on("click",function(e){
        var id = $(this).attr('data-id');

        common.confirm({
            content:"确认删除？",
            success:function(){
                var self = this;
                $.get("${ctx}/stationIntro/delete/"+id,function(data){
                    common.alert("删除成功");
                    $self.find("#js-confirm").trigger('click');
                    self.hide();
                },"text");
            }
        });

    });
	
});

</script>