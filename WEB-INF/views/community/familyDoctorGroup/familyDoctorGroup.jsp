<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj",Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap familyDoctorGroup">
    <div class="tb-head">辖区家庭医生组设置</div>
    <div class="tb-content">
        <div class="tb-wrap">
        <form action="#"  id="js-form">
            <div class="doctorSetting">
                <div class="selectGroup form-inline">
                	<input type="hidden" id="groupId" name="groupId" value="${familyDoctorGroup.id}" />
                    <span>家庭医生</span>
                     <tags:selectboxMapper list="${doctorList}" name="doctor_id" addNull="true" value="${familyDoctorGroup.doctor_id}" />
                     &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>护士</span>
                     <tags:selectboxMapper list="${nurseList}" name="nurse_id" addNull="true" value="${familyDoctorGroup.nurse_id}" />
                </div>
            </div>
            <div class="dry">
                <div class="tb-head">健康管理师及网格住户设置</div>
                <div class="content" id="assign_dry">
                    <div class="clearfix assign">
                        <ul class="pull-left" id="drylist">
                        </ul>
                        <div class="netHouse pull-left">
                            <div class="tab-head">网格住户分配:</div>
                            <div id="netHouseList" class="js_houselist"></div>
                        </div>
                        <div class="center pull-left hide" id="js_chousehouse">
                            <div class="choused">
                                <div class="tab-head">已选<span id="js_houseCount">0</span>户</div>
                                <div class="tb-content center" id="chousedHouse">
                                    <a class="btn btn-default" id="js_delHouse">移除已分配的网格住户</a>
                                </div>
                            </div>
                            <a class="btn btn-main" id="add_dry">添加健康管理师及其网格住户</a>
                        </div>
                    </div>
                    <table class="table table-striped table-hover table-bordered" id="assigned_officer">
                        <thead>
                        <tr>
                            <th>健康管理师</th>
                            <th>已分配住户数</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        	<c:forEach items="${seletedHecadreList }" var="hecadreList" varStatus="status">
			                	 <tr>
				                    <td>${hecadreList.hecadre_name }</td>
				                    <td class="js_count">${hecadreList.householdNos }</td>
				                    <td class="optCol"><a href="#" class="modify" data-toggle="modal" data-target="#modal_doctorGroup" data-id="${hecadreList.hecadre_id}" data-name="${hecadreList.hecadre_name}">修改</a>
			                        <a href="#" class="del" data-id="${hecadreList.hecadre_id}" data-name="${hecadreList.hecadre_name}">删除</a></td>
				                </tr>
			                </c:forEach>
                        </tbody>
                    </table>
                    <div class="center"><a class="btn btn-main save">保存</a></div>
                </div>
                <div id="modal_doctorGroup" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_doctorGroupLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
    <h4 class="modal-title" id="modal_doctorGroupLabel">网格住户分配</h4>
    </div>
    <div class="modal-body js_houselist" id="distristHouse">
    <div class="district tree-wrap"></div>
    </div>
    <div class="modal-footer">
    <a class="btn btn-main confirm" data-dismiss="modal" aria-hidden="true">保存</a>
    <a class="btn btn-default" data-dismiss="modal">取消</a>
    </div>
    </div>
    </div>
    </div>
            </div>
           </form>
        </div>
    </div>
</div>

<div id="officerJson" style="display:none;">${officer}</div>
<div id="houseNumber" style="display:none;">${houseNumber}</div>
<div id="hecadreSelectedList" style="display:none;">${hecadreSelectedList}</div>
<script type="text/javascript">
    require(['js/newDoctorGroup','validate','message_zh'],function(newDoctorGroup){
        var _self = $('#familyDoctorGroup');
        var officer = JSON.parse(_self.find('#officerJson').text());
        var houseNumber = JSON.parse(_self.find('#houseNumber').text());
        var str_officer = _self.find("#hecadreSelectedList").text();
        var officerHouse = '';
        var officerIds = [];
        var arr_officer;
        if(str_officer){
        	arr_officer = JSON.parse(str_officer);
        }
        var dc = new newDoctorGroup({
            assign:_self.find('#assign_dry'),
            officer:officer,
            houseNumber:houseNumber,
            officerHouse:arr_officer
        });
        
        _self.find('#assigned_officer').on('click','a.modify',function(){
        	_self.find('#modal_doctorGroup').attr('data-id',$(this).attr('data-id'));

        	dc.modifyOfficer(_self.find('#modal_doctorGroup'),$(this).parents('tr'),$(this).attr('data-id'));
        });
        
        _self.find('.btn.save').on('click',function(){
        	/* if(dc.getHouse()==null || dc.getHouse()==''){
        		common.alert("请分配健康管理师的网格住户");
        		return;
        	} */
        	if(_self.find('#js-form').valid()){
        		common.confirm({
	     			content:"确认保存？",
	     			success:function(){
			            common.fetch({
			    		    url: '${ctx}/familyDoctorGroupList/${action}',
			    		    method: 'POST',
			    		    data: {
			    		    	data:JSON.stringify(dc.getHouse()),
			    		    	doctor_id:_self.find('select[name=doctor_id]').val(),
			    		    	nurse_id:_self.find('select[name=nurse_id]').val(),
			    		    	id:_self.find('#groupId').val()
			    		    },
			    		    dataType:"text",
			    		    success: function(rt) {
			    		    	var jsonObj = $.parseJSON(rt);
		    		    		common.alert(jsonObj.ret_msg);
			    		    	if(jsonObj.ret_code == 1){
				    		    	common.createTab({
							               uri: '${ctx}/familyDoctorGroupList',
							               data: {name: '辖区家庭医生组设置'},
							               key: 'familyDoctorGroupList',
							               callback: function(){
							                   common.closeTab("familyDoctorGroup", null, false);
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
        
        _self.find('#js-form').validate({
            rules:{
            	doctor_id:"required",
                nurse_id:"required"
            },
            messages:{
            	doctor_id:{required:"请选择家庭医生"},
            	nurse_id:{required:"请选择护士"}
            }
        });
        
    })
</script>