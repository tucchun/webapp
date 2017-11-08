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
    <div class="tb-head">健康教育活动&gt;&gt;<c:if test="${action eq 'create' }">新增</c:if><c:if test="${action eq 'update' }">修改</c:if>健教活动</div>
    <div class="tb-content">
        <div class="tb-wrap">
        <form action="#"  id="js-form">
        	<input type="hidden" name="hecadres" id="hecadres"/>
        	<input type="hidden" name="activityId" id="activityId" value="${serviceActivity.activityId}" />
            <table class="table wrap-table">
                <tbody>
                <tr>
                    <td class="col-sm-2">社区卫生站：</td>
                    <td>
                        <c:if test="${action eq 'create' }">
	                        ${station_name}
	                        <input type="hidden" name="station_id" value="${station_id }" />
                        </c:if>
                        <c:if test="${action eq 'update' }">
	                        ${serviceActivity.station_name}
	                        <input type="hidden" name="station_id" value="${serviceActivity.station_id }" />
                        </c:if>
                    </td>
                </tr>
                <tr>
                    <td>活动主题：</td>
                    <td>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="subject" placeholder="活动主题" value="${serviceActivity.subject }" required />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>活动开始时间：</td>
                    <td>
                        <div class="input-group date form_date col-sm-3" data-date="" id="js-new-seminar-date"  data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                            <input name="activity_timeStr" class="form-control" size="16" type="text" value="${serviceActivity.activity_timeStr }" readonly="">
                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>活动地点：</td>
                    <td>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" name="activityPlace" placeholder="活动地点" value="${serviceActivity.activityPlace }" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>活动形式：</td>
                    <td>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" name="mode" placeholder="活动形式" value="${serviceActivity.mode }" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>组织者：</td>
                    <td>
                        <div class="col-sm-3">
	                        <tags:selectboxMapper list="${organizerList}" name="userIdOrganizer" addNull="true" value="${serviceActivity.userIdOrganizer}" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>参与健康管理师：</td>
                    <td>
						<div class="form-choices-selects clearfix" id="select-hecadre">
							<div class="col-sm-3">
								<select class="form-control select-left" multiple>
									<c:forEach items="${noSelectedList}" var="staff" varStatus="status">
										<option value="${staff.staff_id}" >${staff.staff_name }</option>
									</c:forEach>
								</select>
							</div>
							<div class="col-sm-1">
								<div class="select-opt">
									<button type="button" class="btn btn-default btn-block add">&gt;&gt;</button>
									<button type="button" class="btn btn-default btn-block del">&lt;&lt;</button>
								</div>
							</div>
							<div class="col-sm-3">
								<select class="form-control select-right" id="hecadreList" name="hecadreList" multiple>
									<c:forEach items="${hecadreSelectedList}" var="staff" varStatus="status">
										<option value="${staff.staff_id}">${staff.staff_name }</option>
									</c:forEach>
								</select>
							</div>
						</div>
                    </td>
                </tr>
                <tr>
                    <td>接受健康教育人员类别：</td>
                    <td id="js-checkbox-cnt">
                        <c:if test="${action eq 'create' }">
	                        <c:forEach items="${participatingPopulationList}" var="pop" varStatus="status">
	                        	<label><input type="checkbox" name="user_crowdArr" class="js-checkbox" value="${pop.lookup_code }" />&nbsp;${pop.lookup_value}</label>&nbsp;&nbsp;
	                        </c:forEach>
	                    </c:if>
                        <c:if test="${action eq 'update' }">
	                        <c:forEach items="${participatingPopulationList}" var="pop" varStatus="status">
	                        	<label><input type="checkbox" name="user_crowdArr" class="js-checkbox" value="${pop.lookup_code }" <c:if test="${pop.checked eq 1 }">checked</c:if> />&nbsp;${pop.lookup_value}</label>&nbsp;&nbsp;
	                        </c:forEach>
	                    </c:if>
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
<div id="joinZg" style="display:none;">${noSelectedStaff}</div>
<div id="joinZgSelted" style="display:none;">${SelectedStaff}</div>
<script>

    require(['jquery','js/components-select','js/cascade','validate','message_zh'], function($,select,cascade){
    	var $self = $("#modifyHealthActivities");
    	var sel = $self.find('#select-hecadre');
		var selected = new select(sel);
     	var staffJson = JSON.parse($self.find('#joinZg').html());
     	var pageType = "${action}";
		//如果是修改页面，则重新渲染组织者，参与健康管理师
		if(pageType == "update"){
			var seletedStaffJson = JSON.parse($self.find('#joinZgSelted').html());//默认已选健康管理师
			var selectedOrgId = "${serviceActivity.userIdOrganizer}";//默认已选组织者
			//渲染待选参与健康管理师
        	var arr_option = [];
        	for(var i = 0; i < staffJson.length; i++){
				if(staffJson[i].staff_id != selectedOrgId){
					arr_option.push("<option value='"+staffJson[i].staff_id+"'>"+staffJson[i].staff_name+"</option>");
        		}
        	}
        	$self.find('#select-hecadre .select-left').html(arr_option.join(''));
			//渲染组织者
       		var staffJson_org = JSON.parse($self.find('#joinZg').html());
			var arr_option_org = [];
        	for(var i = 0; i < staffJson_org.length; i++){
				for(var j = 0; j < seletedStaffJson.length; j++){
					if(staffJson_org[i].staff_id == seletedStaffJson[j].staff_id){
						staffJson_org.splice(i,1);
						i--;
						break;
					}
				}
        	}
        	for(var i = 0; i < staffJson_org.length; i++){
        		arr_option_org.push("<option value='"+staffJson_org[i].staff_id+"'>"+staffJson_org[i].staff_name+"</option>");
        	}
        	$self.find('#userIdOrganizer').html("<option value=''>请选择</option>"+arr_option_org.join(''));
       		$self.find("#userIdOrganizer option[value='"+selectedOrgId+"']").attr("selected",true);
       		
	       	//参与人群
       		var len = $self.find('#js-checkbox-cnt input[value=11]:checked').length;
       		if(len == 1){
       			var checkbox = $self.find('#js-checkbox-cnt input[value=11]');
       			$(checkbox).parent().siblings('label').find('input[type=checkbox]').prop('disabled',true);
       		}
		}
		
		//选择联动，当选择了组织者后，在参与健康管理师中不显示此健康管理师
        $self.on('change','select[name=userIdOrganizer]',function(){
        	var selectedId = $(this).val();
        	var arr_option = [];
        	for(var i = 0; i < staffJson.length; i++){
				if(staffJson[i].staff_id != selectedId){
					arr_option.push("<option value='"+staffJson[i].staff_id+"'>"+staffJson[i].staff_name+"</option>");
        		}
        	}
        	$self.find('#select-hecadre .select-left').html(arr_option.join(''));
        });
     	
        $self.find('.select-opt .add').on('click',function(){
			var target = $self.find('#select-hecadre .select-left option:selected');
			for(var i = 0;i<target.length;i++){
				$self.find('#userIdOrganizer option[value='+target[i].value+']').remove();
			}
		});
		
		$self.find('.select-opt .del').on('click',function(){
			var seletedHecadre = $self.find('#hecadreList option');
			var selectedOrgId = $self.find('#userIdOrganizer').val();
			//渲染组织者
			var staffJson_org = JSON.parse($self.find('#joinZg').html());
			var arr_option_org = [];
        	for(var i = 0; i < staffJson_org.length; i++){
				for(var j = 0; j < seletedHecadre.length; j++){
					if(staffJson_org[i].staff_id == seletedHecadre[j].value){
						staffJson_org.splice(i,1);
						i--;
						break;
					}
				}
        	}
        	for(var i = 0; i < staffJson_org.length; i++){
        		arr_option_org.push("<option value='"+staffJson_org[i].staff_id+"'>"+staffJson_org[i].staff_name+"</option>");
        	}
        	$self.find('#userIdOrganizer').html("<option value=''>请选择</option>"+arr_option_org.join(''));
       		$self.find("#userIdOrganizer option[value='"+selectedOrgId+"']").attr("selected",true);
		});
		
		
     	$self.find("#js-checkbox-cnt").on("change", ".js-checkbox", function(e){
     		var $this = $(e.target);
     		if($this.val() == "11"){
     			if($this.is(':checked')){
	     			//common.alert(11);
	     			$self.find(".js-checkbox").prop("checked",false);
	     			$self.find(".js-checkbox").prop("disabled",true);
	     			$this.prop("disabled",false);
	     			$this.prop("checked",true);
     			}else{
	     			$self.find(".js-checkbox").prop("disabled",false);
     			}
     		}
     	});
     	
		$self.find("#js-submit").on("click", function(e){
			var stationId = $self.find('input[name="station_id"]').val();
    		if(stationId == null || stationId == ""){
    			common.alert("当前角色不能新增");
    			return;
    		}
    		//$self.find('#hecadres').val($('#hecadreList').attr('data-selected'));
    		$self.find('#hecadres').val(selected.getSelectValue());
    		if(selected.getSelectValue()==null || selected.getSelectValue() ==""){
    			common.alert("请选择参与健康管理师");
    			return;
    		}
    		if($self.find('#js-form').valid()){
    			common.confirm({
	     			content:"确认保存？",
	     			success:function(){
			    		common.fetch({
		                     url: '${ctx}/healthActivities/${action}',
		                     type: 'POST',
		                     data: $self.find("#js-form").serialize(),
		                     dataType: "json",
		                     success: function(data){
		                         common.alert(data.ret_msg);
		                         if(data.ret_code==1){
		                             common.createTab({
		                                 uri: '${ctx}/healthActivities',
		                                 data: {name: '健康教育活动'},
		                                 key: 'healthActivities',
		                                 callback: function(){
		                                     common.closeTab("modifyHealthActivities",null,false);
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
                subject:"required",
                activity_timeStr:"required",
                activityPlace:"required",
                mode:"required",
                userIdOrganizer:"required",
                user_crowdArr:"required"
            },
            errorPlacement: function(error, element) {
                if (element.prop("name") == "activity_timeStr" || element.prop("name") == "user_crowdArr") {
                    error.appendTo(element.parent().parent());
                }
                else {
                    error.insertAfter(element);
                }
            },
            messages:{
            	subject:{required:"请输入活动主题"},
            	activity_timeStr:{required:"请选择活动开始时间"},
            	activityPlace:{required:"请输入活动地点"},
            	mode:{required:"请输入活动形式"},
            	userIdOrganizer:{required:"请选择组织者"},
            	user_crowdArr:{required:"请选择接受健康教育人员类别"}
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
