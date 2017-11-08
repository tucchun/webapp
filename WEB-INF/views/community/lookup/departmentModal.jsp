<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div id="modal_department" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="professionalDepartmentManageLabel">
            	<c:if test="${action eq 'create' }" >新增科室</c:if>
            	<c:if test="${action eq 'update' }" >修改科室</c:if>
            </h4>
        </div>
        <div class="modal-body">
            <form class="form-horizontal form-tb clearfix" id="js-form">
            	<input type="hidden" name="lookup_id" value="${lookup.lookup_id }">
            	<input type="hidden" name="category" value="department">
                <div class="form-group">
                    <label class="col-sm-2 control-label"><span class="required">*</span>科室:</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" placeholder="科室名称" name="lookup_value"  value="${lookup.lookup_value }"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="operation">
                        <input type="button" class="btn btn-main" value="保存" id="js-submit" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
require([
	'jquery','validate','message_zh'
],function($){
	var $self = $("#lookup_department");

	$self.find("#js-submit").on("click", function(e){
        if($self.find('#js-form').valid()){
            common.post({
                url: '${ctx}/lookup/${action}',
                data: $self.find("#js-form").serialize(),
                modal: $self.find("#modal_department")
            }).done(function(data){
                // 刷新
                $self.find("#js-confirm").trigger("click");
            }).fail(function(error){
                console.log(error)
            });
        }
	});

    $self.find('#js-form').validate({
        rules:{
            lookup_value:{
                required:true,
                maxlength:20,
                remote:{
                    // 远程验证
                    url : "${ctx}/lookup/check",
                    type : "get",
                    dataType : "json",
                    data : {
                        "category" : function () {return $self.find("input[name=category]").val();},
                        "id" : "${lookup.lookup_id }",
                        "name": function () {return $self.find("input[name=lookup_value]").val();}
                    }
                }
            }
        },
        messages:{
            lookup_value:{
                remote:"科室已存在",
                required:"科室不能为空"
            }
        }
    });
	
});
</script>