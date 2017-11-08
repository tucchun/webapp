<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div id="modal_title" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="professionalTitleManageLabel">
            	<c:if test="${action eq 'create' }" >新增组织机构</c:if>
            	<c:if test="${action eq 'update' }" >修改组织机构</c:if>
            </h4>
        </div>
        <div class="modal-body">
            <form class="form-horizontal form-tb clearfix" id="js-form_modify">
            	<input type="hidden" name="organizationId" value="${organization.organizationId }">
                <div class="form-group">
                    <label class="col-sm-3 control-label"><span class="required">*</span>组织机构名:</label>
                    <div class="col-sm-8">
                        ${organization.organizationName }
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">上级机构:</label>
                    <div class="col-sm-8">
                        <tags:selectboxMapper name="parentId" list="${parentOrganizations}" addNull="false" value="${organization.parentId}"></tags:selectboxMapper>
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="operation">
                        <input type="button" class="btn btn-main" value="保存"  id="js-submit"/>
                	</div>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
require([
	'jquery','js/security' ,'validate','message_zh'
],function($,security){
	var $self = $("#organizationAdjustment");
	
	$self.find("#js-submit").on("click", function(e){
        if($self.find('#js-form_modify').valid()){
            var modal = $self.find("#modal_title");
            common.fetch({
                url: '${ctx}/organization/adjustment',
                data: $self.find("#js-form_modify").serialize(),
                dataType: "json",
                success: function(data){
                	common.alert(data.ret_msg);
                    modal.off('hidden.bs.modal.submit');
                    modal.on('hidden.bs.modal.submit', function (e) {
                        $self.find("#js-confirm").trigger("click");
                    });
                    modal.modal("hide");
                },
                error: function(err, errType, errorThrow){
                    console.log(err, errType, errorThrow);
                }
            })
        }
	});
	
    $self.find('#js-form').validate({
        rules:{
        	parentId:{required:true}
        },
        messages:{
        	parentId:{required:'上级机构不能为空'}
        }
    });
	
});
</script>