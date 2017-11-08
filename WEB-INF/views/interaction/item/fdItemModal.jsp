<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<style>
.autocompleter-item:hover {
    background: #cccccc;
}
</style>

<div id="modal_item" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title" id="modal_expenditureLabel">
        		<c:if test="${action eq 'create' }">新增服务项目</c:if>        
        		<c:if test="${action eq 'update' }">修改服务项目</c:if>        
                </h4>
            </div>
            <div class="modal-body">
                <form action="#" id="js-form" class="form-inline">
                    <input type="hidden" name="itemId" value="${fdItem.itemId}">
                    <table class="table table-bordered">
                        <tr>
                            <td class="col-sm-2"><span class="required">*</span>服务项目</td>
                            <td>
                            	<c:if test="${action eq 'create' }">
                                	<input type="text" name="itemName" value="${fdItem.itemName }" class="form-control">
                                	<input type=hidden name="drugId" value="">
                                	<input type=hidden name="drugType" value="">
                                </c:if>
                                <c:if test="${action eq 'update' }">
                                	${fdItem.itemName }
                                </c:if>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-sm-2"><span class="required">*</span>服务价格(元)</td>
                            <td>
                            	<c:if test="${action eq 'create' }">
                                	<input disabled="disabled" type="text" name="itemPrice" value="<fmt:formatNumber type="currency" value="${fdItem.itemPrice}" pattern="#,##0.00#"/>" class="form-control">
                                </c:if>
                                <c:if test="${action eq 'update' }">
                                	<fmt:formatNumber type="currency" value="${fdItem.itemPrice}" pattern="#,##0.00#"/>
                                </c:if>
                                	
                            </td>
                        </tr>
                        <tr>
                            <td class="col-sm-2"><span class="required">*</span>医保报销</td>
                            <td class="table-padding-none">
                                <table class="form-inline">
                                	<tr>
                                		<td style="text-align: left;border-right:1px solid #CCC;">职工医保类</td>
                                		<td style="text-align: left;border-right:1px solid #CCC;">新农合类</td>
                                		<td style="text-align: left;">居民医保类</td>
                                	</tr>
                                	<tr>
                                		<td style="text-align: left;border-right:1px solid #CCC;">报销比例：<input type="text" class="form-control" name="tmpReimPctEmp" value="${fdItem.reimPctEmp/100 }" size="3" /><span>%</span></td>
                                		<td style="text-align: left;border-right:1px solid #CCC;">报销比例： <input type="text" class="form-control" name="tmpReimPctNew" value="${fdItem.reimPctNew/100 }" size="3"/><span>%</span></td>
                                		<td style="text-align: left;">报销比例： <input type="text" class="form-control" name="tmpReimPctRes" value="${fdItem.reimPctRes/100 }" size="3"/><span>%</span></td>
                                	</tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </form>
                <div class="operation" style="padding-bottom:10px;">
                    <button class="btn btn-main" type="button" id="js-submit">保存</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<script>
require([
'jquery','validate','message_zh','autocompleter'
],function($){
    var $self = $("#fdItem");
    var fdItemModal_inputedItemName = '';
   
    <c:if test="${action eq 'create'}">
    var data = ${itemData};
    $self.find('input[name="itemName"]').autocompleter({ 
    	source: data,
    	empty: false,
    	highlightMatches: true,
    	callback: function (value, i,selected) {
    		$('input[name="itemPrice"]').val(selected.price.toFixed(2));
    		$('input[name="drugId"]').val(selected.drugId);
    		$('input[name="drugType"]').val(selected.drugType);
    		fdItemModal_inputedItemName = value;
        }
    });
    </c:if>
    $self.find("#js-submit").on("click", function(e){
        if($self.find('#js-form').valid()){
            common.post({
                url: '${ctx}/fdItem/${action}',
                data: $self.find("#js-form").serialize(),
                modal: $self.find("#modal_item"),
                dataType: "JSON"
            }).done(function(data){
            	common.alert(data.ret_msg);
                // 刷新
                $self.find("#js-confirm").trigger("click");
            }).fail(function(error){
                console.log(error)
            });
        }
    });

    $.validator.addMethod("checkItemName",function(value, element, params){
    	return !(fdItemModal_inputedItemName!='' && fdItemModal_inputedItemName != value);
    },"请勿修改服务项目名称,不能为空且只能通过联想选择.");
    
    $self.find('#js-form').validate({
    	ignore: "",
        rules:{
        	itemName:{required:true,maxlength:50,checkItemName:true},
        	drugId:{required:true},
        	itemPrice:{required:true,min:0,max:10000000},
        	tmpReimPctEmp:{required:true,number:true,min:0,max:100},
        	tmpReimPctNew:{required:true,number:true,min:0,max:100},
        	tmpReimPctRes:{required:true,number:true,min:0,max:100},
        },
        messages:{
        	itemName:{required:'服务项目不能为空',maxlength:'服务项目最长50个字'},
        	drugId:{required:'请选择服务项目,不能为空且只能通过联想选择.'},
        	itemPrice:{required:'服务价格不能为空',min:'服务价格范围为0~10000000之间',max:'服务价格范围为0~10000000之间'},
        	tmpReimPctEmp:{required:'职工医保报销比例不能为空',min:'比例范围为0~100之间的数字',max:'比例范围为0~100之间的数字',number:'比例范围为0~100之间的数字'},
        	tmpReimPctNew:{required:'新农合报销比例不能为空',min:'比例范围为0~100之间的数字',max:'比例范围为0~100之间的数字',number:'比例范围为0~100之间的数字'},
        	tmpReimPctRes:{required:'居民医保报销比例不能为空',min:'比例范围为0~100之间的数字',max:'比例范围为0~100之间的数字',number:'比例范围为0~100之间的数字'}
        },
        errorPlacement:function(error, element) {
       	 if (element.prop("name") == "drugId") {
                error.insertAfter($('input[name="itemName"]'));
         }else if(element.prop("name") == "tmpReimPctEmp" || element.prop("name") == "tmpReimPctNew" || element.prop("name") == "tmpReimPctRes"){
        	 error.appendTo(element.next());
         }
       	 else{
           	 error.insertAfter(element);
            }
       }
    });
    
});
</script>