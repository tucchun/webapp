<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap classify">
    <div class="tb-head">轮播图管理</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt">
                <button class="btn btn-main" type="button" id="js-delete">删除</button>
                <button class="btn btn-main" type="button" id="js-create">新增</button>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th class="check"></th>
                    <th class="col-xs-1">序号</th>
                    <th>标题</th>
                    <th>图片</th>
                    <th>创建时间</th>
                    <th>排序操作</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content }" var="type" varStatus="status">
                	 <tr class="sort_wrap" data-sortid="${type.carouselId}">
                    <td><input type="checkbox" value="${type.carouselId }" name="typeids"></td>
                    <td>${status.index + 1 }</td>
                    <td>${type.carouselTitle }</td>
                    <td>
                    <c:forEach items="${type.imagePath }" var="e">
            		 <img alt="" src="${e}" height=80 width="150">
                    </c:forEach>
                    </td>
                    <td>${type.createDate }</td>
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
                    <td class="optCol"><%-- <a href="#" class="js-view" data-id="${type.carouselId }" >查看详情</a> --%>
                    <a href="#" class="js-update" data-id="${type.carouselId }">编辑</a></td>
                </tr>
                </c:forEach>
                </tbody>
            </table>
            <div class="pagenation clearfix">
               <tags:pagination pageId="carousel" paginationSize="5" action="${ctx}/carousel" page="${pages}"></tags:pagination>
            </div>
        </div>
    </div>
</div>

<script>
require([
	'jquery','js/page_sort'
],function($,page_sort){
	var $self = $("#__carousel__");
	$self.find("#js-create").on("click", function(e){
		common.createTab({
			uri: '${ctx}/carousel/addpage',
			data: {name: '轮播图新增'},
			key: 'newClassify'
		});
	});
	
	$self.find(".js-update").on("click", function(e){
		var id = $(this).attr('data-id');
		common.createTab({
			uri: '${ctx}/carousel/update/'+id,
			data: {name: '轮播图修改'},
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
		$.each($self.find('input[name=typeids]:checked'),function(index,ele){
			ids.push($(ele).val());
		});
		var strids = ids.join(',');
		if(strids != ''){
			common.confirm({
				content:"确定要删除吗?",
				success:function(){
					$.get("${ctx}/carousel/delete/"+strids,function(success){
				    	 if('success' == success){
				    		 common.alert("删除成功");
				    	     $self.find("#js-confirm").trigger("click");
				         }else{
				        	 common.alert(success);
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
		    $.get("${ctx}/carousel/change/"+arr,function(success){
		    	 $self.find("#js-confirm").trigger("click");
		    },"html");
	    });
    $self.find('.sort_wrap').on('click','i.icon-down',function(){
    	var arr = page_sort.instances($(this),'table');
    	$.get("${ctx}/carousel/change/"+arr,function(success){
    		 $self.find("#js-confirm").trigger("click");
	    },"html");
    });
	
});
</script>