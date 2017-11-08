<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%
	request.setAttribute("prj", Constants.PRJ_PERFIX);
%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap">
	<div class="tb-head">商品分类管理&gt;&gt;修改分类</div>
	<div class="tb-content">
		<form id="form_classify">
			<div class="tb-wrap">
				<table class="table wrap-table">
					<tbody>
						<tr>
							<td>一级分类名:</td>
							<td>
								<div class="col-sm-10 form-inline">
									<input type="text" class="form-control" name="parentname"
										value="${interGoodsType.name }" placeholder="一级分类">
								</div>
							</td>
						</tr>
						<tr>
							<td>二级分类:</td>
							<td id="js-cnt">
							<c:choose>
								<c:when test="${fn:length(interGoodsType.typeList) > 0 }">
									<c:forEach items="${interGoodsType.typeList}" var="tp"	varStatus="status">
									<div class="form-inline sort_wrap" data-optype="update">
										<input type="text" class="form-control" name="name" id="name" value="${tp.name }">
										<input type="hidden" name="ids"	id="ids" value="${tp.id }">
										<c:choose>
				                			<c:when test="${fn:length(interGoodsType.typeList) == 1}">
				                				<i class="icon icon-del"></i><i class="icon icon-add"></i>
				                			</c:when>
				                			<c:otherwise>
				                				<c:choose>
				                					<c:when test="${status.index == 0}">
				                						<i class="icon icon-down"></i><i class="icon icon-del"></i>
				                					</c:when>
				                					<c:when test="${status.count == fn:length(interGoodsType.typeList)}">
				                						<i class="icon icon-up"></i><i class="icon icon-del"></i><i class="icon icon-add"></i>
					                				</c:when>
					                				<c:otherwise>
					                					<i class="icon icon-up"></i><i class="icon icon-down"></i><i class="icon icon-del"></i>
					                				</c:otherwise>
				                				</c:choose>
				               				</c:otherwise>
				               			</c:choose>
									</div>
								</c:forEach>
								</c:when>
								<c:otherwise>
									<div class="form-inline sort_wrap" data-optype="update">
										<input type="text" class="form-control" name="name" id="name">
										<input type="hidden" name="ids"	id="ids" value="0">
										<i class="icon icon-del"></i><i class="icon icon-add"></i>
									</div>
								</c:otherwise>
							</c:choose>
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<div class="col-sm-12 form-submit-btns text-center">
									<button type="button" class="btn btn-main btn-lg"
										id="js-submit">保存</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<input type="hidden" id="delids" value="" name="dels"> <input
				type="hidden" id="id" value="${interGoodsType.id }" name="id">
		</form>
	</div>
</div>
<script type="text/javascript">
	require([ 'js/page_sort' ,'validate','message_zh'], function(page_sort,validate) {
		var _self = $('#updateClassify');
		//提交需要的全局变量，将要提交的数据放这里；
		var commitData = {
			dels : []
		};
		_self.find('.wrap-table').on('click', 'i.icon-up', function() {
			page_sort.instances($(this),'form');
		});
		_self.find('.wrap-table').on('click', 'i.icon-down', function() {
			page_sort.instances($(this),'form');
		});
		_self.find('.wrap-table').on('click', 'i.icon-add', function() {
			page_sort.instances($(this),'form');
		});
		_self.find('.wrap-table').on(
				'click',
				'i.icon-del',
				function() {
					//ajax 成功后判断是否调用该方法，默认无提示删除；
					var typeid = $(this).parents('.sort_wrap').find(
							'input[name="ids"]').val();
					var $this = $(this);
					if(typeid != 0){
						$.get("${ctx}/GoodsType/delete/2/" + typeid, function(
								success) {
							success = JSON.parse(success);
							if (1 == success.ret_code) {
								commitData.dels.push(typeid);
								_self.find('#delids')
										.val(commitData.dels.join(','));
								page_sort.del($this);
							}else{
								common.alert(success.ret_msg);
							}
						});
					}else{
						page_sort.del($this);
					}
					
				});
		_self.find("#js-submit").on("click", function(e) {
			if(_self.find('#form_classify').valid()){
			var inputArray = $(this).find('.sort_wrap');
			$.each(inputArray, function(index, el) {
				var optTag = $(el).attr('data-optype'), obj_input = [];
				obj_input.id = $(el).find('input[name="id"]').val();
				switch (optTag) {
				case 'del':
					commitData.dels.push(obj_input);
					break;
				}
			});
			var $obj = $(this);
			$obj.hide();
			common.fetch({
				url : '${ctx}/GoodsType/update',
				type : 'POST',
				data: _self.find("#form_classify").serialize(),
				dataType : "json",
				success : function(rt) {
					if (1 == rt.ret_code) {
						//$('#GoodsType').load("${ctx}/GoodsType");
						//common.closeTab('updateClassify');
						common.createTab({
				               uri: '${ctx}/GoodsType',
				               data: {name: '商品分类列表'},
				               key: 'GoodsType',
				               callback: function(){
				                   common.closeTab("updateClassify", null, false);
				               }
				           });
					} else {
						alert(rt.ret_msg);
						$obj.show();
					}
				}
			});

			commitData = {
				dels : []
			};}
		});
		
		
		_self.find('#form_classify').validate({
	        rules:{
	        	parentname:"required"
	            },
	       	messages: {   
	        		parentname:"请输入一级分类名称"  
	            } 
	        });
	})
</script>
