<%@ page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%
	request.setAttribute("prj", Constants.PRJ_PERFIX);
%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap hospital">
	<div class="tb-head">推荐资讯管理</div>
	<div class="tb-content">
		<div class="tb-wrap">
		<div class="opt clearfix">
				<div class="pull-right">
					<button type="button" class="btn btn-main" id="js-cancel">取消推荐</button>
				</div>
			</div>
			<table cellspacing="0"
				class="table table-striped table-hover table-bordered">
				<thead>
					<tr>
						<th class="check"><input type="checkbox" name="allCheck" /></th>
						<th>序号</th>
						<th class="col-sm-5">文章标题</th>
						<th>所属分类</th>
						<th>来源</th>
						<th>作者</th>
						<th>点击量</th>
						<th>创建时间</th>
						<th class="col-sm-1">操作</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${pages}" var="article" varStatus="status">
						<tr>
							<td><input type="checkbox" value="${article.id}"
								name="articleId"></td>
							<td>${status.index + 1 }</td>
							<td>${article.title}</td>
							<td>${article.categoryName}</td>
							<td>${article.source}</td>
							<td>${article.author}</td>
							<td>${article.readingCount }</td>
							<td>${article.createDateStr}</td>
							<td><a href="#" class="js-update" data-id="${article.id }">取消推荐</a>
							</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
	</div>
</div>


<script>
	require([ 'jquery', 'js/components-select', 'js/cascade' ], function($,
			select, cascade) {
		var $self = $("#recommendList");

		$self.find(".js-update").on("click", function(e) {
			var id = $(this).attr('data-id');
			$.get("${ctx}/Article/cancel/" + id, function(success) {
				if (1 == success.ret_code) {
					common.alert(success.ret_msg);
					$self.find("#js-confirm").trigger("click");
				} else {
					common.alert(success.ret_msg);
				}
			}, "json");
		});
		
		$self.find("#js-cancel").on("click", function(e) {
			var ids = [];
			$.each($('input[name=articleId]:checked'), function(index, ele) {
				ids.push($(ele).val());
			});
			if (ids.length > 0) {
				var strids = ids.join(',');
				$.get("${ctx}/Article/cancel/" + strids, function(success) {
					alert(success);
					alert(1 == success.ret_code);
					if (1 == success.ret_code) {
						$self.find("#js-confirm").trigger("click");
					} else {
						common.alert(success.ret_msg);
					}
				}, "json");
			} else {
				common.alert("请选择需要取消推荐的资讯");
			}
		});
		
		$self.on('click','input[name=allCheck]',function(){
            var obj_checkbox = $self.find('table tbody input[type=checkbox]');
            if(this.checked){
                $(obj_checkbox).prop('checked','checked');
            }else{
                $(obj_checkbox).prop('checked','');
            }
        });
	});
</script>