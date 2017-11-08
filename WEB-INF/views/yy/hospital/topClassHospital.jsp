<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<div class="wrap hospital">
    <div class="tb-head">医院管理</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <form class="form-inline" id="js-searchForm">
                    <select name="province" class="form-control"	id="js-province" />
                    <select name="city" class="form-control" id="js-city" />
                    <%--	<select name="city" class="form-control" id="js-city" >
                    <option value="">全部</option>
                    <c:forEach items="${cityList }" var="city" varStatus="status">
                    	<option value="${city.code }" <c:if test="${pages.searchMap['city'] == city.code}">selected</c:if> >${city.name }</option>
                    </c:forEach>
                    </select> --%>
                       <input type="button" class="btn btn-main" id="js-search" value="查询" />
                    </form>
                </div>
                <div class="pull-right">
                    <button type="button" class="btn btn-main" id="js-create">新增</button>
                    <button type="button" class="btn btn-main" id="js-delete">删除</button>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th class="check"><input type="checkbox" name="allCheck" /></th>
                    <th>序号</th>
                    <th style="width:550px;">医院名称</th>
                    <th class="">医院等级</th>
                    <th class="">预约量</th>
                    <th class="">所属地区</th>
                    <th class="">排序操作</th>
                    <th class="">操作</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content }" var="hos" varStatus="status">
                <tr class="sort_wrap" data-sortid="${hos.id}">
                    <td><input type="checkbox" value="${hos.id }" name="hosids"></td>
                    <td>${status.index + 1 }</td>
                    <td>${hos.name }</td>
                    <td>
                    	${hos.gradename}
                    </td>
                    <td>${hos.appointment }</td>
                    <td>${hos.cityname }</td>
                    <td><c:choose>
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
               			</c:choose></td>
                    <td class="optCol"><a href="#" class="js-update" data-id="${hos.id}">编辑</a></td>
                </tr>
                </c:forEach>
                </tbody>
            </table>
            <div class="pagenation clearfix">
               <tags:pagination pageId="topClassHospital" paginationSize="5" action="${ctx}/Hospital" page="${pages}"></tags:pagination>
            </div>
        </div>
    </div>
</div>
<script>
require([
	'jquery',
	'js/area',
	'js/page_sort','js/cascade'
],function($,select,page_sort, cascade){
	var $self = $("#topClassHospital");
	
	$.getJSON("${ctx}/Hospital/getAreaCascade", function(data){
        new cascade({
		    $primary: $self.find("#js-province"),
		    $secondary:  $self.find("#js-city"),
		    "primaryData": data.provinceList,
		    "secondaryData": data.cityList,
		    "parentId": "parentid",
		    "defaultPrimary": "${pages.searchMap['province']}",
		    "defaultSecondary": "${pages.searchMap['city']}"
    	});
    });
	
	$self.find("#js-search").on("click", function(e){
        common.load({
            container: 'topClassHospital',
            url: '${ctx}/Hospital',
            data: $self.find("#js-searchForm").serialize()
        });
	});
	
	$self.find("#js-create").on("click", function(e){
		common.createTab({
			uri: '${ctx}/Hospital/create',
			data: {name: '新建医院'},
			key: 'newTopClassHospital'
		});
	});
	
	$self.find(".js-update").on("click", function(e){
		var id = $(this).attr('data-id');
		common.createTab({
			uri: '${ctx}/Hospital/editHospital/'+id,
			data: {name: '修改医院'},
			key: 'editTopClassHospital'
		});
	});

	$self.find("#js-delete").on("click", function(e){
		var ids = [];
		$.each($('input[name=hosids]:checked'),function(index,ele){
			ids.push($(ele).val());
		});
		var strids = ids.join(',');
		if(strids != ''){
			common.confirm({
				content:"确定要删除吗?",
				success:function(){
					 $.get("${ctx}/Hospital/delete/"+strids,function(success){
						 success = JSON.parse(success);
				    	 if(2 == success.ret_code){
				    		 common.alert(success.ret_msg);
				         }else{
				        	 common.alert(success.ret_msg);
				             $self.find("#js-confirm").trigger("click");
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
	    $.get("${ctx}/Hospital/change/"+arr,function(success){
	    },"html");
    });
    $self.find('.sort_wrap').on('click','i.icon-down',function(){
    	var arr = page_sort.instances($(this),'table');
	    $.get("${ctx}/Hospital/change/"+arr,function(success){
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
