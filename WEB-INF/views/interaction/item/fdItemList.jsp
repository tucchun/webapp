<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap expenditure">
    <div class="tb-head">家庭医生服务项目</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <button type="button" class="btn btn-main" id="js-create">新增</button>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th class="col-xs-1">序号</th>
                    <th>服务项目</th>
                    <th>单价（元）</th>
                    <th>职工医保报销</th>
                    <th>新农合报销</th>
                    <th>居民医保报销</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content}" var="item" varStatus="status">
                    <tr>
                    <td>${status.index+1}</td>
                    <td>${item.itemName}</td>
                    <td><fmt:formatNumber type="currency" value="${item.itemPrice}" pattern="#,##0.00#"/></td>
                    <td>${item.reimPctEmp/100}%</td>
                    <td>${item.reimPctNew/100}%</td>
                    <td>${item.reimPctRes/100}%</td>
                    <td>
                        <button type="button" class="btn btn-main js-update" data-id="${item.itemId}">修改</button>
                        <button type="button" class="btn btn-main js-delete" data-id="${item.itemId}">删除</button>
                    </td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/fdItem" pageId="fdItem" />
        </div>
    </div>
    <div id="div_include_item">

    </div>
</div>
<script>
require([
	'jquery'
],function($){
	var $self = $("#fdItem");

	$self.find("#js-create").on("click", function(e){
        common.fetch({
       		url:"${ctx}/fdItem/create",
       		dataType:"html",
       		type:"get",
       		success:function(html){
	            $("#div_include_item").html(html);
	            $("#modal_item").modal('show');
	        }
        });
	});

	// 去修改
	$self.find(".js-update").on("click", function(e){
		var id = $(this).attr('data-id');
	    common.fetch({
	    	url:"${ctx}/fdItem/update/"+id,
	    	dataType:'html',
	    	type:'get',
	    	success:function(html){
	    		$("#div_include_item").html(html);
	            $("#modal_item").modal('show');
	    	}
	    });
	});

    $self.find(".js-delete").on("click", function(e){
        var id = $(this).attr('data-id');
        common.fetch({
            url: '${ctx}/fdItem/check/'+id,
            type: 'GET',
            dataType: "json",
            success: function(data){
                if(data.ret_code == 1){
                	 common.confirm({
                         content:"确认删除？",
                         success:function(){
                             var self = this;
                             $.get("${ctx}/fdItem/delete/"+id,function(data){
                                 common.alert(data.ret_msg);
                                 $self.find("#js-confirm").trigger('click');
                                 self.hide();
                             },"json");
                         }
                     });        	
                }else{
                	common.alert(data.ret_msg);
                }
            }
        });
        
    });
	
});

</script>