<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap expenditure">
    <div class="tb-head">家庭医生服务包</div>
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
                    <th style="width:50px;">序号</th>
                    <th style="width:380px;">服务包名称</th>
                    <th>服务项目</th>
                    <th>服务总价(元)</th>
                    <th>打包总价(元)</th>
                    <th style="width:50px;">状态</th>
                    <th style="width:240px;">操作</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content}" var="sp" varStatus="status">
                    <tr>
                    <td>${status.index+1}</td>
                    <td><a href="javascript:void(0);" data-id="${sp.spId}" class="js-view">${sp.spName}</a></td>
                    <td>${sp.decodeItems}</td>
                    <td><fmt:formatNumber type="currency" value="${sp.spOriginalPrice}" pattern="#,##0.00#"/></td>
                    <td><fmt:formatNumber type="currency" value="${sp.spActualPrice}" pattern="#,##0.00#"/></td>
                    <td><c:if test="${sp.spStatus eq 1}">正常</c:if><c:if test="${sp.spStatus eq 2}">暂停</c:if></td>
                    <td>
                        <c:if test="${sp.spStatus eq 1}">
	                        <button type="button" class="btn btn-main js-update" data-id="${sp.spId}">修改</button>
    	                    <button type="button" class="btn btn-main js-delete" data-id="${sp.spId}">删除</button>
                        	<button type="button" class="btn btn-main js-stop" data-id="${sp.spId}">暂停</button>
                        </c:if>
                        <c:if test="${sp.spStatus eq 2}">
                        	<button type="button" class="btn btn-main js-start" data-id="${sp.spId}">启用</button>
                        </c:if>
                    </td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/fdSp" pageId="fdSp" />
        </div>
    </div>
    <div id="div_include_sp">

    </div>
    <div id="div_include_view">

    </div>
</div>
<script>
require([
	'jquery'
],function($){
	var $self = $("#fdSp");

	$self.find("#js-create").on("click", function(e){
        $.get("${ctx}/fdSp/create",function(html){
            $self.find("#div_include_sp").html(html);
            $self.find("#modal_sp").modal('show');
        },"html");
	});

	// 去修改
	$self.find(".js-update").on("click", function(e){
		var id = $(this).attr('data-id');
		common.fetch({
            url: '${ctx}/fdSp/check/'+id,
            type: 'GET',
            dataType: "json",
            success: function(data){
            	if(data.ret_code == 1){
            		$.get("${ctx}/fdSp/update/"+id,function(html){
            			$self.find("#div_include_sp").html(html);
            			$self.find("#modal_sp").modal('show');
                    },"html");
            	}else{
            		common.alert(data.ret_msg);
            	}
            }
        });
		
        
	});
	
	// view
	$self.find(".js-view").on("click", function(e){
		var id = $(this).attr('data-id');
        $.get("${ctx}/fdSp/view/"+id,function(html){
        	$self.find("#div_include_view").html(html);
        	$self.find("#modal_view").modal('show');
        },"html");
	});

    $self.find(".js-delete").on("click", function(e){
        var id = $(this).attr('data-id');
        common.fetch({
            url: '${ctx}/fdSp/check/'+id,
            type: 'GET',
            dataType: "json",
            success: function(data){
                if(data.ret_code == 1){
                	 common.confirm({
                         content:"确认删除？",
                         success:function(){
                             var self = this;
                             $.get("${ctx}/fdSp/delete/"+id,function(data){
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
    
    $self.find(".js-stop").on("click", function(e){
        var id = $(this).attr('data-id');
        
       	 common.confirm({
                content:"确认暂停该服务包？",
                success:function(){
                    var self = this;
                    $.get("${ctx}/fdSp/stop/"+id,function(data){
                        common.alert(data.ret_msg);
                        $self.find("#js-confirm").trigger('click');
                        self.hide();
                    },"json");
                }
            });        	
    });
    
    $self.find(".js-start").on("click", function(e){
        var id = $(this).attr('data-id');
        
       	 common.confirm({
                content:"确认启用该服务包？",
                success:function(){
                    var self = this;
                    $.get("${ctx}/fdSp/start/"+id,function(data){
                        common.alert(data.ret_msg);
                        $self.find("#js-confirm").trigger('click');
                        self.hide();
                    },"json");
                }
            });        	
    });
	
});

</script>