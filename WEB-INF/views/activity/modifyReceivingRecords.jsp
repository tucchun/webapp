<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap">
  <div class="tb-head">健康教育印刷资料接收记录表&gt;&gt;<c:if test="${action eq 'create' }">新增</c:if><c:if test="${action eq 'update' }">修改</c:if>印刷资料接收记录</div>
  <div class="tb-content">
    <div class="tb-wrap">
    <form action="#"  id="js-form">
    	  <input type="hidden" name="activityId" id="activityId" value="${serviceActivity.activityId}" />
    	  <c:if test="${action eq 'create' }">
           <input type="hidden" name="station_id" value="${station_id }" />
          </c:if>
          <c:if test="${action eq 'update' }">
           <input type="hidden" name="station_id" value="${serviceActivity.station_id }" />
          </c:if>
	      <table class="table wrap-table">
	        <tbody>
	          <tr>
	            <td>材料下发或制作机构：</td>
	            <td>
	              <div class="col-sm-5">
	                <input type="text" class="form-control" placeholder="材料下发或制作机构" name="hostUnit" value="${serviceActivity.hostUnit }"/>
	              </div>
	            </td>
	          </tr>
	          <tr>
	            <td>材料名称：</td>
	            <td>
	              <div class="col-sm-3">
	                <input type="text" class="form-control" placeholder="材料名称" name="subject" value="${serviceActivity.subject }"/>
	              </div>
	            </td>
	          </tr>
	          <tr>
	            <td>材料类型：</td>
	            <td>
	              <div class="col-sm-3">
	                <tags:selectboxMapper name="material_type" list="${materialTypeList }" addNull="true" value="${serviceActivity.material_type }"/>
	              </div>
	            </td>
	          </tr>
	          <tr>
	            <td>接收数量：</td>
	            <td>
	              <div class="col-sm-2 input-group">
	                <input type="text" class="form-control" name="material_count" value="${serviceActivity.material_count }" />
	                <span class="input-group-addon">份</span>
	              </div>
	            </td>
	          </tr>
	          <tr>
	            <td>接收日期：</td>
	            <td>
	              <div class="input-group date form_date col-sm-3" id="js-new-seminar-date" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
	                <input  class="form-control" size="16" type="text" name="activity_timeStr" value="${serviceActivity.activity_timeStr }" readonly="">
	                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
	              </div>
	            </td>
	          </tr>
	          <tr>
	            <td>接收人：</td>
	            <td>
	              <div class="col-sm-3">
                   <%-- <tags:selectboxMapper list="${receiverList}" name="user_id_receiver" addNull="true" value="${serviceActivity.user_id_receiver}" /> --%>
                   <input type="text" class="form-control" placeholder="接收人" name="receiverName" value="${serviceActivity.receiverName }"/>
                  </div>
	            </td>
	          </tr>
	          <tr>
	            <td>接收机构：</td>
	            <td>
	              <div class="col-sm-3">
		              <c:if test="${action eq 'create'}"><input type="text" class="form-control" name="receiving_agency" value="${receiving_agency}" /></c:if>
		              <c:if test="${action eq 'update'}"><input type="text" class="form-control" name="receiving_agency" value="${serviceActivity.receiving_agency}" /></c:if>
	              </div>
	            </td>
	          </tr>
	          <tr>
	            <td colspan="2">
	              <div class="col-sm-12 form-submit-btns text-center">
	                <button type="button" class="btn btn-main btn-lg" id="js-submit">保存</button>
	              </div>
	            </td>
	          </tr>
	        </tbody>
	      </table>
	      </form>
    </div>
  </div>
</div>
<script>
	require(['jquery','validate','message_zh'], function($){
		var $self = $("#modifyReceivingRecords");
		
		$self.find("#js-submit").on("click", function(e){
			var stationId = $self.find('input[name="station_id"]').val();
    		if(stationId == null || stationId == ""){
    			common.alert("当前角色不能新增");
    			return;
    		}
    		if($self.find('#js-form').valid()){
    			common.confirm({
	     			content:"确认保存？",
	     			success:function(){
			    		common.fetch({
		                     url: '${ctx}/receivingRecords/${action}',
		                     type: 'POST',
		                     data: $self.find("#js-form").serialize(),
		                     dataType: "json",
		                     success: function(data){
		                         common.alert(data.ret_msg);
		                         if(data.ret_code==1){
		                             common.createTab({
		                                 uri: '${ctx}/receivingRecords',
		                                 data: {name: '健康教育印刷资料接收记录表'},
		                                 key: 'receivingRecords',
		                                 callback: function(){
		                                     common.closeTab("modifyReceivingRecords",null,false);
		                                 }
		                             });
		                         }
		                     }
		                 });
	     				this.hide();
	     			}
    			});
    		}
    	});
    	
    	$self.find('#js-form').validate({
            rules:{
            	hostUnit:"required",
                subject:"required",
                material_type:"required",
                material_count:{required:true,digits:true,range:[0,100000000]},
                activity_timeStr:"required",
                receiverName:"required",
                receiving_agency:"required"
            },
            errorPlacement: function(error, element) {
                if (element.prop("name") == "activity_timeStr" || element.prop("name") == "material_count") {
                    error.appendTo(element.parent().parent());
                }
                else {
                    error.insertAfter(element);
                }
            },
            messages:{
            	hostUnit:{required:"请输入材料下发或制作机构"},
            	subject:{required:"请输入材料名称"},
            	material_type:{required:"请选择材料类型"},
            	material_count:{required:"请输入接收数量"},
            	activity_timeStr:{required:"请选择接收日期"},
            	receiverName:{required:"请输入接收人"},
            	receiving_agency:{required:"请输入接收机构"}
            }
        });
    	
    	$self.find('#js-new-seminar-date').datetimepicker({
            language:  'zh-CN',
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 0,
            forceParse: 0,
            format:'yyyy-mm-dd hh:ii'
        });
		
	});
</script>