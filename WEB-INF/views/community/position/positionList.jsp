<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap duties">
    <div class="tb-head">职务管理</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt">
                <button class="btn btn-main" id="js-create" type="button" >添加</button>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th>序号</th>
                    <th>职务</th>
                    <th>上级职务</th>
                    <th>是否属于健康教育领导小组</th>
                    <th>职务类别</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content }" var="position" varStatus="status">
                	 <tr>
                    <td>${status.index+1 }</td>
                    <td>${position.position_name }</td>
                    <td>${position.position_parent }</td>
                    <td>${position.isInGroup }</td>
                    <td>${position.decodeType }</td>
                    <td>
                    	<button class="btn btn-main js-update" type="button" data-id="${position.position_id}">修改</button>
                        <button class="btn btn-main js-delete" type="button" data-id="${position.position_id}">删除</button>
                    </td>
                	</tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination paginationSize="5" page="${pages }" action="${ctx}/position" pageId="position"></tags:pagination>
           
        </div>
    </div>
</div>

<div id="modal_include_position">
<jsp:include page="positionModal.jsp" flush="true"></jsp:include>
</div>
<script>
require([
	'jquery'
],function($){
	var $self = $("#position");
	
	$self.find(".js-update").on("click", function(e){
		var id = $(this).attr('data-id');
		$.get("${ctx}/position/update/"+id,function(html){
		$self.find("#modal_include_position").html(html);
	    $self.find("#modal_position").modal("show");
		},"html");
	});
	
	$self.find("#js-create").on("click", function(e){
		common.fetch({
			url:'${ctx}/position/create',
			type:'get',
			dataType:'html',
			success:function(html){
				$self.find("#modal_include_position").html(html);
				$self.find("#modal_position").modal("show");
			}
		});
	});

    $self.find(".js-delete").on("click", function(e){
        var id = $(this).attr('data-id');
        common.confirm({
            content:"确认删除？",
            success:function(){
                var self = this;
                $.get("${ctx}/position/delete/"+id,function(data){
                    if(data.ret_code==1){
                        common.alert(data.ret_msg);
                    }else{
                        common.alert("删除失败，无法删除已被关联的数据。");
                    }
                    $self.find("#js-confirm").trigger("click");
                    self.hide();
                },"json");
            }
        });

    });
	
});

</script>