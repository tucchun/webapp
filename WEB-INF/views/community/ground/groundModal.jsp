<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div id="modal_ground" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title" id="modal_expenditureLabel">健康教育宣传场地管理</h4>
            </div>
            <div class="modal-body">
                <form action="#" id="js-form">
                    <input type="hidden" name="groundId" value="${ground.groundId}">
                    <table class="table table-bordered">
                        <tr>
                            <td class="col-sm-2"><span class="required">*</span>社区服务站</td>
                            <td>
                                <tags:selectboxMapper name="groundStationId" list="${stations}" value="${ground.groundStationId}" addNull="false"/>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-sm-2"><span class="required">*</span>宣传场地名称</td>
                            <td><input type="text" class="form-control" name="groundName" value="${ground.groundName}"/></td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>面积</td>
                            <td><input type="text" class="form-control" name="groundMeasure" value="${ground.groundMeasure}"/></td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>数量</td>
                            <td><input type="text" class="form-control" name="groundCount" value="${ground.groundCount}"/></td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>频率</td>
                            <td><input type="text" class="form-control" name="groundFreq" value="${ground.groundFreq}"/></td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>投入使用时间</td>
                            <td>
                                <div class="input-group date form_date col-sm-12" data-date="" id="js-new-seminar-date" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                                    <input name="groundEffectiveDate"  class="form-control" size="16" type="text" value="<fmt:formatDate value='${ground.groundEffectiveDate}'/>" readonly="">
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>性质</td>
                            <td>
                                <tags:selectbox list="${groundTypes}" value="${ground.groundType}" name="groundType" addNull="true"/>
                            </td>
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
<script>
require([
'jquery','validate','message_zh'
],function($){
    var $self = $("#ground");
    
    $self.find("#js-submit").on("click", function(e){
        if($self.find('#js-form').valid()){
            common.post({
                url: '${ctx}/ground/${action}',
                data: $self.find("#js-form").serialize(),
                modal: $self.find("#modal_ground"),
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
            groundStationId:{required:true},
            groundName:{required:true,maxlength:100},
            groundMeasure:{required:true,maxlength:50},
            groundCount:{required:true,maxlength:50},
            groundFreq:{required:true,maxlength:50},
            groundEffectiveDate:{required:true},
            groundType:{required:true}
        },
        errorPlacement: function(error, element) {
            if(element.attr("name") == "groundEffectiveDate")
            {
                error.insertAfter(element.parent());
            }
            else {
                error.insertAfter(element);
            }
        },
        messages:{
        	groundStationId:{required:'社区服务站	不能为空'},
            groundName:{required:'宣传场地名称不能为空'},
            groundMeasure:{required:'面积不能为空'},
            groundCount:{required:'数量不能为空'},
            groundFreq:{required:'频率不能为空'},
            groundEffectiveDate:{required:'投入使用时间不能为空'},
            groundType:{required:'性质不能为空'}
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