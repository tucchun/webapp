<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div id="modal_equipment" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title" id="modal_expenditureLabel">健康教育宣传器材管理</h4>
            </div>
            <div class="modal-body">
                <form action="#" id="js-form">
                    <input type="hidden" name="equId" value="${equipment.equId}">
                    <table class="table table-bordered">
                        <tr>
                            <td class="col-sm-2"><span class="required">*</span>社区服务站</td>
                            <td>
                                <tags:selectboxMapper name="equStationId" list="${stations}" value="${equipment.equStationId}" addNull="false"/>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-sm-2"><span class="required">*</span>宣传器材名称</td>
                            <td><input type="text" class="form-control" name="equName" value="${equipment.equName}"/></td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>型号</td>
                            <td><input type="text" class="form-control" name="equModel" value="${equipment.equModel}"/></td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>数量</td>
                            <td><input type="text" class="form-control" name="equMeasure" value="${equipment.equMeasure}"/></td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>价值</td>
                            <td><input type="text" class="form-control" name="equValue" value="${equipment.equValue}"/></td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>投入使用时间</td>
                            <td>
                                <div class="input-group date form_date col-sm-12" data-date="" id="js-new-seminar-date" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                                    <input name="equEffectiveDate"  class="form-control" size="16" type="text" value="<fmt:formatDate value='${equipment.equEffectiveDate}'/>" readonly="">
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>使用情况</td>
                            <td>
                                <tags:selectbox list="${equTypes}" value="${equipment.equType}" name="equType" addNull="true"/>
                            </td>
                        </tr>
                    </table>
                </form>
                <div class="operation">
                    <button class="btn btn-main" type="button" id="js-submit">确认</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<script>
require([
'jquery','validate','message_zh'
],function($){
    var $self = $("#equipment");
    
    $self.find("#js-submit").on("click", function(e){
        if($self.find('#js-form').valid()){
            common.post({
                url: '${ctx}/equipment/${action}',
                data: $self.find("#js-form").serialize(),
                modal: $self.find("#modal_equipment"),
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

    $self.find('#js-form').validate({
        rules:{
            equStationId:{required:true},
            equName:{required:true,maxlength:100},
            equModel:{required:true,maxlength:50},
            equMeasure:{required:true,maxlength:50},
            equValue:{required:true,digits:true,min:0,max:100000000},
            equEffectiveDate:{required:true},
            equType:{required:true}
        },
        errorPlacement: function(error, element) {
            if(element.attr("name") == "equEffectiveDate")
            {
                error.insertAfter(element.parent());
            }
            else {
                error.insertAfter(element);
            }
        },
        messages:{
        	equStationId:{required:'社区服务站不能为空'},
            equName:{required:'宣传器材名称不能为空'},
            equModel:{required:'型号不能为空'},
            equMeasure:{required:'数量不能为空'},
            equValue:{required:'价值不能为空'},
            equEffectiveDate:{required:'投入使用时间不能为空'},
            equType:{required:'使用情况不能为空'}
        }
    });

    $self.find('#js-new-seminar-date').datetimepicker({
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        format:'yyyy-mm-dd'
    });
});
</script>