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
	<div class="tb-head">讲堂资讯管理</div>
	<div class="tb-content">
		<div class="tb-wrap">
			<div class="opt clearfix">
				<div class="pull-left">
					<form class="form-inline" id="js-searchForm">
						<select name="category" class="form-control"> 
							<option value="">请选择分类</option>
							<c:forEach items="${informationList}" var="look">
								<option value="${look.lookup_code }" <c:if test="${pages.searchMap['category'] == look.lookup_code}">selected</c:if>>${look.lookup_value }</option>
							</c:forEach>
						</select>
						<input type="button" class="btn btn-main" id="js-search" value="查询" />
					</form>
				</div>
				<div class="pull-right">
					<button type="button" class="btn btn-main" id="js-create">新增文章</button>
				</div>
			</div>
			<table cellspacing="0"
				class="table table-striped table-hover table-bordered">
				<thead>
					<tr>
						<!-- <th class="check"></th> -->
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
					<c:forEach items="${pages.content }" var="article" varStatus="status">
						<tr>
							<%-- <td><input type="checkbox" value="${article.id}"
								name="goodids"></td> --%>
							<td>${status.index + 1 }</td>
							<td>${article.title}</td>
							<td>${article.categoryName}</td>
							<td>${article.source}</td>
							<td>${article.author}</td>
							<td>${article.readingCount }</td>
							<td>${article.createDateStr}</td>
							<td><a href="#" class="js-update" data-id="${article.id }">修改</a>
							    <a href="#" class="js-delete" data-id="${article.id }">删除</a>
							</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
			<tags:pagination pageId="articleList" paginationSize="5"
				action="${ctx}/Article" page="${pages}"></tags:pagination>
		</div>
	</div>
</div>


<script>
	require([ 'jquery', 'js/components-select', 'js/cascade' ], function($,
			select, cascade) {
		var $self = $("#articleList");

		$self.find("#js-create").on("click", function(e) {
			common.createTab({
				uri : '${ctx}/Article/create',
				data : {
					name : '新增文章'
				},
				key : 'newArticle'
			});
		});

		$self.find(".js-update").on("click", function(e) {
			var id = $(this).attr('data-id');
			common.createTab({
				uri : '${ctx}/Article/editArticle/' + id,
				data : {
					name : '修改文章'
				},
				key : 'editArticle'
			});
		});

		$self.find(".js-delete").on("click", function(e) {
			var id = $(this).attr('data-id');
			common.confirm({
				content:"确定要删除吗?",
				success:function(){
					$.get("${ctx}/Article/delete/" + id, function(success) {
						if (1 == success.ret_code) {
							common.alert(success.ret_msg);
							$self.find("#js-confirm").trigger("click");
						} else {
							common.alert(success.ret_msg);
						}
					}, "json");
					this.hide();
				}
			});
		});

		$self.find("#js-search").on("click", function(e) {
			common.load({
				container : 'articleList',
				url : '${ctx}/Article',
				data : $self.find("#js-searchForm").serialize()
			});
		});
	});
</script>