<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<div class="wrap hospital">
    <div class="tb-head">常见疾病管理</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt">
                <button type="button" class="btn btn-main" data-toggle="modal" data-target="#modal_disease">新增</button>
                <button type="button" class="btn btn-main" id="js-delete">删除</button>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th class="check"><input type="checkbox" name="allCheck" /></th>
                    <th>序号</th>
                    <th>疾病名称</th>
                    <th>排序操作</th>
                    <th class="col-sm-1">操作</th>
                </tr>
                </thead>
                <tbody>
                 <c:forEach items="${pages.content }" var="dis" varStatus="status">
                 <tr class="sort_wrap" data-sortid="${dis.id}">
                    <td><input type="checkbox" value="${dis.id}" name="ids"></td>
                    <td>${status.index + 1 }</td>
                    <td>${dis.name }</td>
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
                    <td class="optCol"><a href="#" class="js-update" data-id="${dis.id}">编辑</a></td>
                    </td>
                </tr>
                </c:forEach>
                </tbody>
            </table>
            <div class="pagenation clearfix">
               <tags:pagination pageId="diseaseList" paginationSize="5" action="${ctx}/Disease" page="${pages}"></tags:pagination>
            </div>
        </div>
    </div>
    <div id="modal_disease" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="modal_diseaseLabel">新增常见疾病</h4>
                </div>
                <div class="modal-body">
                    <form class="form-inline" id="js-form-add" onsubmit="return false">
                        <table class="table table-bordered">
                            <tr>
                                <td class="col-sm-2"><span class="required">*</span>疾病名称</td>
                                <td><input type="text" class="form-control" name="name" /></td>
                            </tr>
                        </table>
                    </form>
                    <div class="operation">
                        <button class="btn btn-main" type="button" id="js-submit">保存</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="modal_include_disease">
	<jsp:include page="diseaseModel.jsp" flush="true" />
</div>
<script>
require([
	'jquery','js/page_sort','validate','message_zh'
],function($,page_sort){
	var $self = $("#diseaseList");
	
	$self.find("#js-submit").on("click", function(e){
		if($self.find('#js-form-add').valid()){
			common.post({
				url: '${ctx}/Disease/create',
				data: $self.find("#js-form-add").serialize(),
				dataType:"json",
				modal: $self.find("#modal_disease")
			}).done(function(data){
				// 刷新
				if(1 == data.ret_code){
					common.alert(data.ret_msg);
					$self.find("#js-confirm").trigger("click");
				}else{
					common.alert(data.ret_msg);
				}
			}).fail(function(error){
			});
	    }
	}); 
	
	$self.find('#js-form-add').validate({
        rules:{
        	name:"required"
        },
        messages:{
			name:"请填写疾病名称"
           	}
    });
	
	
	 $self.find("#js-delete").on("click", function(e){
		 var ids = [];
			$.each($('input[name=ids]:checked'),function(index,ele){
				ids.push($(ele).val());
			});
			var strids = ids.join(',');
			if(strids != ''){
				common.confirm({
					content:"确定要删除吗?",
					success:function(){
						$.get("${ctx}/Disease/delete/"+strids,function(success){
							success = JSON.parse(success);
					    	 if(1 == success.ret_code){
					    		 common.alert(success.ret_msg);
					    		 $self.find("#js-confirm").trigger("click");
					         }else{
					        	 common.alert(success.ret_msg);
					        	
					         }
					    });
						this.hide();
					}
				});
			}else{
				common.alert("请选择需要删除的数据");
			}
		 
		    
	    });
	 
	 $self.find(".js-update").on("click", function(e){
			var id = $(this).attr('data-id');
			$.get("${ctx}/Disease/editDisease/"+id,function(html){
				$self.find("#modal_include_disease").html(html);
			    $self.find("#modal_update_disease").modal("show");
			},"html");
		});
	 
	 $self.find('.sort_wrap').on('click','i.icon-up',function(){
		    var arr = page_sort.instances($(this),'table');
		    $.get("${ctx}/Disease/change/"+arr,function(success){
		    },"html");
	    });
	 $self.find('.sort_wrap').on('click','i.icon-down',function(){
	 	var arr = page_sort.instances($(this),'table');
	 	$.get("${ctx}/Disease/change/"+arr,function(success){
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
