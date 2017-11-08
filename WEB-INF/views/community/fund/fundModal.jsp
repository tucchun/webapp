<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div id="modal_fund" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title" id="modal_expenditureLabel">新增经费开支</h4>
            </div>
            <div class="modal-body">
                <form action="#" id="js-form">
                    <input type="hidden" name="fundId" value="${fund.fundId}">
                    <table class="table table-bordered">
                        <tr>
                            <td class="col-sm-2"><span class="required">*</span>社区服务站</td>
                            <td>
                                <tags:selectboxMapper name="stationId" list="${stations}" value="${fund.stationId}" addNull="false"/>
                            </td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>支出项目</td>
                            <td><input type="text" class="form-control" name="fundName" value="${fund.fundName}"/></td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>支出金额</td>
                            <td><input type="text" class="form-control" name="fundMoney" value="${fund.fundMoney}" /></td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>日期</td>
                            <td>
                            <div class="input-group date form_date col-sm-12" data-date="" id="js-new-seminar-date" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                                <input name="fundDate"  class="form-control" size="16" type="text" value="<fmt:formatDate value='${fund.fundDate}'/>" readonly="">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>备注</td>
                            <td><textarea class="form-control" name="fundDescription" >${fund.fundDescription}</textarea></td>
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
'jquery','validate','message_zh'
],function($){
    var $self = $("#fund");
    
    $self.find("#js-submit").on("click", function(e){
        if($self.find('#js-form').valid()){
            common.post({
                url: '${ctx}/fund/${action}',
                data: $self.find("#js-form").serialize(),
                modal: $self.find("#modal_fund"),
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
            stationId:{required:true},
            fundName:{required:true,maxlength:100},
            fundMoney:{required:true,number:true,min:0,max:100000000},
            fundDate:{required:true}
        },
        errorPlacement: function(error, element) {
            if(element.attr("name") == "fundDate")
            {
                error.insertAfter(element.parent());
            }
            else {
                error.insertAfter(element);
            }
        },
        messages:{
        	stationId:{required:'社区服务站不能为空'},
            fundName:{required:'支出项目不能为空'},
            fundMoney:{required:'支出金额不能为空',number:'请输入合法金额'},
            fundDate:{required:'日期不能为空'}
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