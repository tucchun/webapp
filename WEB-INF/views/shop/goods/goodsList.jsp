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
	<div class="tb-head">商品列表</div>
	<div class="tb-content">
		<div class="tb-wrap">
			<div class="opt clearfix">
				<div class="pull-left">
					<form class="form-inline" id="js-searchForm">
						<span>一级分类名称</span><select name="onecate" class="form-control"
							id="js-onecate" /> <span>二级分类名称</span><select name="twocate"
							class="form-control" id="js-twocate" /> <span>状态</span><select
							name="state" id="goods_one_cate" class="form-control">
							<option value="">请选择</option>
							<option value="1"
								<c:if test="${pages.searchMap['state'] == 1}">selected</c:if>>已上架</option>
							<option value="0"
								<c:if test="${pages.searchMap['state'] == 0}">selected</c:if>>已下架</option>
						</select> <input type="button" class="btn btn-main" id="js-search"
							value="查询" />
					</form>
				</div>
				<div class="pull-right">
					<button type="button" class="btn btn-main" id="js-create">新增</button>
					<button type="button" class="btn btn-main" id="js-delete">删除</button>
					<button type="button" class="btn btn-main" id="js-online">上架</button>
					<button type="button" class="btn btn-main" id="js-offline">下架</button>
				</div>
			</div>
			<table cellspacing="0"
				class="table table-striped table-hover table-bordered">
				<thead>
					<tr>
						<th class="check"><input type="checkbox" name="allCheck" /></th>
						<th>序号</th>
						<th class="col-sm-5">商品名称</th>
						<th>所属分类</th>
						<th>价格</th>
						<th>品牌</th>
						<th>规格</th>
						<th>状态</th>
						<th class="col-sm-1">操作</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${pages.content }" var="goods" varStatus="status">
						<tr>
							<td><input type="checkbox" value="${goods.id}"
								name="goodids"></td>
							<td>${status.index + 1 }</td>
							<td>${goods.name}</td>
							<td>${goods.onename}-${goods.twoname}</td>
							<td>￥<fmt:formatNumber value="${goods.price/100}"
									pattern="#,###.00" /></td>
							<td>${goods.brand}</td>
							<td>${goods.specifications }</td>
							<td><c:choose>
									<c:when test="${goods.state == 0 }">
	                    		 	已下架
	                    		</c:when>
									<c:otherwise>
	                    			 已上架
	                    		</c:otherwise>
								</c:choose></td>
							<td><a href="#" class="js-update" data-id="${goods.id }">编辑</a></td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
			<tags:pagination pageId="goodsList" paginationSize="5"
				action="${ctx}/Goods" page="${pages}"></tags:pagination>
		</div>
	</div>
</div>


<script>
	require([ 'jquery', 'js/components-select', 'js/cascade' ], function($,
			select, cascade) {
		var $self = $("#goodsList");

		$.getJSON("${ctx}/GoodsType/getTypeCascade", function(data) {
			new cascade({
				$primary : $self.find("#js-onecate"),
				$secondary : $self.find("#js-twocate"),
				"primaryData" : data.OneCateList,
				"secondaryData" : data.twoCateList,
				"parentId" : "parentid",
				"defaultPrimary" : "${pages.searchMap['onecate']}",
				"defaultSecondary" : "${pages.searchMap['twocate']}"
			});
		});

		$self.find("#js-create").on("click", function(e) {
			common.createTab({
				uri : '${ctx}/Goods/create',
				data : {
					name : '新建商品'
				},
				key : 'newGoods'
			});
		});

		$self.find(".js-update").on("click", function(e) {
			var id = $(this).attr('data-id');
			common.createTab({
				uri : '${ctx}/Goods/editGoods/' + id,
				data : {
					name : '修改商品'
				},
				key : 'editGoods'
			});
		});

		$self.find(".js-mess").on("click", function(e) {
			var id = this.dataset['id'];
			common.createTab({
				uri : '${ctx}/interGoodsType/findGoodsType/' + id,
				data : {
					name : '分类详情'
				},
				key : 'classifyMess'
			});
		});

		$self.find("#js-delete").on("click", function(e) {
			var ids = [];
			$.each($('input[name=goodids]:checked'), function(index, ele) {
				ids.push($(ele).val());
			});
			if (ids.length > 0) {
				common.confirm({
					content:"确定要删除吗?",
					success:function(){
						var strids = ids.join(',');
						$.get("${ctx}/Goods/delete/" + strids, function(success) {
							success = JSON.parse(success);
							if (1 == success.ret_code) {
								common.alert(success.ret_msg);
								$self.find("#js-confirm").trigger("click");
							} else {
								common.alert(success.ret_msg);
							}
						}, "html");
						this.hide();
					}
				});
			} else {
				common.alert("请选择需要删除的商品");
			}
		});

		$self.find("#js-online").on("click", function(e) {
			var ids = [];
			$.each($('input[name=goodids]:checked'), function(index, ele) {
				ids.push($(ele).val());
			});
			if (ids.length > 0) {
				var strids = ids.join(',');
				$.get("${ctx}/Goods/onLine/" + strids, function(success) {
					if (1 == success.ret_code) {
						common.alert(success.ret_msg);
						$self.find("#js-confirm").trigger("click");
					} else {
						common.alert(success.ret_msg);
					}
				}, "json");
			} else {
				common.alert("请选择需要上架的商品");
			}
		});

		$self.find("#js-offline").on("click", function(e) {
			var ids = [];
			$.each($('input[name=goodids]:checked'), function(index, ele) {
				ids.push($(ele).val());
			});
			if (ids.length > 0) {
				var strids = ids.join(',');
				$.get("${ctx}/Goods/offLine/" + strids, function(success) {
					if (1 == success.ret_code) {
						common.alert(success.ret_msg);
						$self.find("#js-confirm").trigger("click");
					} else {
						common.alert(success.ret_msg);
					}
				}, "json");
			} else {
				common.alert("请选择需要下架的商品");
			}
		});

		$self.find("#js-search").on("click", function(e) {
			common.load({
				container : 'goodsList',
				url : '${ctx}/Goods',
				data : $self.find("#js-searchForm").serialize()
			});
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