<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div id="modal_position" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="modal_dutiesLabel">
            <c:if test="${action eq 'create'}">新增职务</c:if>
            <c:if test="${action ne 'create'}">修改职务</c:if>
            </h4>
        </div>
        <div class="modal-body">
            <form class="form-horizontal form-tb clearfix" id="js-form" >
           		 <input type="hidden" name="position_id" value="${position.position_id }">
                <div class="form-group">
                    <label class="col-sm-2 control-label"><span class="required">*</span>职务:</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" placeholder="职务名称" name="position_name" id="position_name" value="${position.position_name }">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">上级职务:</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" placeholder="上级职务名称"  name="position_parent" id="position_parent" value="${position.position_parent }"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label"><span class="required">*</span>职务类型:</label>
                    <div class="col-sm-8">
                           <tags:selectbox list="${workingTypes}" name="position_type" value="${position.position_type}" addNull="true"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="radiochose">
                        <label class="control-label"><span class="required">*</span>是否属于健康教育领导小组：</label>
                       
                        <c:if test="${position.position_in_group ne 1 }"><c:set var="position_not_in_group" value="checked" /></c:if>
                        <label class="control-label"><input type="radio" value="1" name="position_in_group" id="position_in_group_1"   <c:if test="${position.position_in_group eq 1 }">checked</c:if> />是</label>
                        <label class="control-label"><input type="radio" value="0" name="position_in_group" id="position_in_group_0"  <c:if test="${position.position_in_group eq 0 }">checked</c:if> />否</label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="operation"><button type="button" class="btn btn-main" id="js-submit">保存</button></div>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
require([
	'jquery','validate','message_zh'
],function($){
	var $self = $("#position");
	
	$self.find("#js-submit").on("click", function(e){
	    if($self.find('#js-form').valid()){
            common.post({
                url: '${ctx}/position/${action}',
                data: $self.find("#js-form").serialize(),
                modal: $self.find("#modal_position"),
                dataType:'JSON'
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
            position_name:{
                required:true,
                maxlength:20,
                remote:{
                    // 远程验证
                    url : "${ctx}/position/check",
                    type : "get",
                    dataType : "json",
                    data : {
                        "name": function () {return $self.find("input[name=position_name]").val();},
                        "id": function () {return $self.find("input[name=position_id]").val();}
                    }
                }
            },
            position_parent:{maxlength:20},
            position_type:"required",
            position_in_group:"required"
        },
        messages:{
            position_name:{
            	required:"职务名称不能为空",
                remote:"职务已存在"
            },
            position_type:{required:"职务类型不能为空"},
            position_in_group:{required:"是否属于健康教育领导小组不能为空"}
        },
        errorPlacement: function(error, element) {
            if (element.prop('type') === 'checkbox'
                || element.prop('type') === 'radio') {
                error.appendTo(element.parent().parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
	
});
</script>