<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap classify">
    <div class="tb-head">商品分类列表</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt">
                <button class="btn btn-main" type="button" id="js-delete">删除</button>
                <button class="btn btn-main" type="button" id="js-create">新增</button>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th class="check"><input type="checkbox" name="allCheck" /></th>
                    <th class="col-xs-1">序号</th>
                    <th>一级分类名称</th>
                    <th>二级分类数</th>
                    <th>排序操作</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content }" var="type" varStatus="status">
                	 <tr class="sort_wrap" data-sortid="${type.id}">
                    <td><input type="checkbox" value="${type.id}" name="typeids"></td>
                    <td>${status.index + 1 }</td>
                    <td>${type.name }</td>
                    <td>${type.count }</td>
                    <td>
                		<c:choose>
                			<c:when test="${status.index == 0}">
                				<i class="icon icon-down" />
                			</c:when>
                			<c:otherwise>
                				<c:choose>
                					<c:when test="${status.count == fn:length(pages.content)}">
                						<i class="icon icon-up" />
	                				</c:when>
	                				<c:otherwise>
	                					<i class="icon icon-up" />
	                					<i class="icon icon-down" />
	                				</c:otherwise>
                				</c:choose>
               				</c:otherwise>
               			</c:choose>
                    </td>
                    <td class="optCol"><%-- <a href="#" class="js-view" data-id="${type.id}" >查看详情</a> --%>
                    <a href="#" class="js-update" data-id="${type.id }">编辑</a></td>
                </tr>
                </c:forEach>
                </tbody>
            </table>
            <div class="pagenation clearfix">
               <tags:pagination pageId="GoodsType" paginationSize="5" action="${ctx}/GoodsType" page="${pages}"></tags:pagination>
            </div>
        </div>
    </div>
</div>

<script>
require([
	'jquery','js/page_sort'
],function($,page_sort){
	var $self = $("#GoodsType");
	$self.find("#js-create").on("click", function(e){
		common.createTab({
			uri: '${ctx}/GoodsType/create',
			data: {name: '新增分类'},
			key: 'newClassify'
		});
	});
	
	$self.find(".js-update").on("click", function(e){
		var id = $(this).attr('data-id');
		common.createTab({
			uri: '${ctx}/GoodsType/update/'+id,
			data: {name: '修改分类'},
			key: 'updateClassify'
		});
	});
	
	$self.find(".js-view").on("click", function(e){
		var id = $(this).attr('data-id');
		common.createTab({
			uri: '${ctx}/GoodsType/findGoodsType/'+id,
			data: {name: '分类详情'},
			key: 'classifyMess'
		});
	});
	
	 $self.find("#js-delete").on("click", function(e){
		var ids = [];
		$.each($('input[name=typeids]:checked'),function(index,ele){
			ids.push($(ele).val());
		});
		var strids = ids.join(',');
		if(strids != ''){
			common.confirm({
				content:"确定要删除吗?",
				success:function(){
					$.get("${ctx}/GoodsType/delete/1/"+strids,function(success){
						success = JSON.parse(success);
				    	 if(1 == success.ret_code){
				        	 common.alert(success.ret_msg);
				        	 $self.find("#js-confirm").trigger("click");
				         }else{
				        	 common.alert(success.ret_msg);
				         }
				    },"html");
					this.hide();
				}
			});
		}else{
    	     common.alert("请选择需要删除的数据");
		}
	    
    });
	 
	 $self.find('.sort_wrap').on('click','i.icon-up',function(){
		    var arr = page_sort.instances($(this),'table');
		    $.get("${ctx}/GoodsType/change/"+arr,function(success){
		    },"html");
	    });
    $self.find('.sort_wrap').on('click','i.icon-down',function(){
    	var arr = page_sort.instances($(this),'table');
    	$.get("${ctx}/GoodsType/change/"+arr,function(success){
	    },"html");
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