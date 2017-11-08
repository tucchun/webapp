<%@page import="com.newcare.fnd.pojo.Lookup"%>
<%@ page import="com.newcare.constant.Constants" %>
<%@ page import="java.util.List" %>
<%@ page import="com.newcare.fnd.pojo.Role" %>
<%@ page import="com.newcare.fnd.pojo.Menu" %>
<%@ page import="com.newcare.util.CommonUtil" %>
<%@ page import="com.newcare.fnd.pojo.RoleMenu" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<%
    Role role = (Role)request.getAttribute("role");
%>
<div id="modal_roleManager" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title" id="modal_roleLabel">
                    <c:if test="${action eq 'update'}">修改角色</c:if>
                    <c:if test="${action eq 'create'}">添加角色</c:if>
                </h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal form-tb clearfix" id="js-form">
                    <input type="hidden" name="id" value="${role.id}">
                    <div class="form-group">
                        <label class="col-sm-2 control-label"><span class="required">*</span>角色名:</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" placeholder="角色名称" name="name" value="${role.name}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label"><span class="required">*</span>角色描述:</label>
                        <div class="col-sm-8">
                            <textarea class="form-control" placeholder="角色描述" name="description">${role.description}</textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label"><span class="required">*</span>角色类型:</label>
                        <div class="col-sm-8">
                            <%
                            if(role != null) {
                            List<Lookup> roleLkps = (List<Lookup>)request.getAttribute("roleCodes");
                            for(Lookup lkp : roleLkps) {
                            	String checked = role.hasType(lkp.getLookup_code()) ? "checked" : "";
                            	request.setAttribute("checked", checked);
							%>
								<input id="chk-<%=lkp.getLookup_code()%>" name="roleType" class="form-check-input" type="checkbox" value="<%=lkp.getLookup_code()%>" ${checked}>
								<label for="chk-<%=lkp.getLookup_code()%>"><%=lkp.getLookup_value()%></label>
							<%                            	
                            }
                            }
                            %>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label"><span class="required">*</span>角色等级:</label>
                        <div class="col-sm-8">
                            <tags:selectboxMapper name="level" list="${roleLevels }" value="${role.level }"/>
	                        <label class="control-label">当前机构最高级别管理员：</label>
	                        <c:if test="${action eq 'create'}">
                            <c:if test="${!hasTopestAdmin }">
	                            <input type="radio" id="weight_2" name="weight" value="2" <c:if test="${role.weight eq 2 }">checked</c:if>> 否
	                            <input type="radio" id="weight_1" name="weight" value="1" <c:if test="${role.weight eq 1 }">checked</c:if>> 是
                            </c:if>
                            <c:if test="${hasTopestAdmin }">
                            	<input type="radio" id="weight_2" name="weight" value="2" checked> 否
                            	<input type="radio" id="weight_1" name="weight" value="1" disabled="disabled"> 是
                            </c:if>
                            </c:if>
                            
                            <c:if test="${action eq 'update'}">
                            	<c:if test="${role.weight eq 1 }">是</c:if>
                            	<c:if test="${role.weight ne 1 }">否</c:if>
                            </c:if>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label"><span class="required">*</span>角色权限:</label>
                        <div class="col-sm-10 power" id="js-level">
                            <div class="title">请在下方勾选</div>

                            <%
                                Integer index = 0;
                                List<Menu> menus = (List<Menu>)request.getAttribute("menus");
                                List<RoleMenu> roleMenus = (List<RoleMenu>)request.getAttribute("roleMenus");
                            %>
                            <%=CommonUtil.genMenuLabels(menus,roleMenus)%>
                        </div>
                    </div>
                    <div class="operation"><button type="button" class="btn btn-main" id="js-submit">确认</button>
                        <button type="button" class="btn btn-cancel" data-dismiss="modal" aria-hidden="true">取消</button></div>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
    require([
        'jquery','validate','message_zh'
    ],function($){
    	var $self = $("#role");
    	
    	
    	var $ROLE_HECADRE = $self.find("#chk-ROLE_HECADRE");
    	var $ROLE_DOCTOR = $self.find("#chk-ROLE_DOCTOR");
    	var $ROLE_NURSE = $self.find("#chk-ROLE_NURSE");
    	function initRoleType() {
    		if($ROLE_HECADRE.is('checked')) {
    			$ROLE_DOCTOR.prop("disabled", true);
    			$ROLE_NURSE.prop("disabled", true);
    		} else if($ROLE_DOCTOR.is('checked')) {
    			$ROLE_HECADRE .prop("disabled", true);
    			$ROLE_NURSE.prop("disabled", true);
    		} else if($ROLE_NURSE.is('checked')) {
    			$ROLE_HECADRE .prop("disabled", true);
    			$ROLE_DOCTOR.prop("disabled", true);
    		}
    	} 
    	initRoleType();
    	
    	function checkRoleType() {
    		if(this.checked) {
    			if(this.id == 'chk-ROLE_HECADRE') {
        			$ROLE_DOCTOR.prop("disabled", true);
        			$ROLE_NURSE.prop("disabled", true);
        		} else if(this.id == 'chk-ROLE_DOCTOR') {
        			$ROLE_HECADRE .prop("disabled", true);
        			$ROLE_NURSE.prop("disabled", true);
        		} else if(this.id == 'chk-ROLE_NURSE') {
        			$ROLE_HECADRE .prop("disabled", true);
        			$ROLE_DOCTOR.prop("disabled", true);
        		}
    		} else {
    			$ROLE_HECADRE .prop("disabled", false);
    			$ROLE_DOCTOR.prop("disabled", false);
    			$ROLE_NURSE.prop("disabled", false);
    		}
    	}
    	
    	$ROLE_HECADRE .click(checkRoleType);
    	$ROLE_DOCTOR.click(checkRoleType);
    	$ROLE_NURSE.click(checkRoleType);
    	
        

        $self.find("#js-level").on("change", ".js-level", function(e){
            var _$self = $(e.target);
            var parentID = _$self.data("parent");
            var currentID = _$self.data("key");
            var $parent = $self.find("input[data-key='"+ parentID +"']");
            var $children = $self.find("input[data-parent='"+ currentID +"']");
            var checked = _$self.is(":checked");

            if(parentID){
                $children = $self.find("input[data-parent='"+ parentID +"']");
                if($children.filter(":checked").size() > 0){
                    $parent.prop("checked", true);
                }else{
                    $parent.prop("checked", false);
                }
            }else{
                if(checked){
                    $children.prop("checked", true);

                }else{
                    $children.prop("checked", false);

                }

            }
            e.preventDefault();
            e.stopPropagation();
        })
        
        // 角色等级改变
        $self.find("select[name='level']").on("change", function(e){
        	common.fetch({
        		url:"${ctx}/role/hasTopestAdmin",
        		data:{level:$(this).val()},
        		dataType:"text",
        		success:function(data){
        			if(data=="true"){
        				// 已经存在最高级别
        				$self.find("#weight_1").attr("disabled","disabled");
        				$self.find("#weight_2").removeAttr("disabled");
        				
        				$self.find("#weight_2").prop("checked","checked");
        			}else{
        				$self.find("#weight_1").removeAttr("disabled");
        				$self.find("#weight_2").removeAttr("disabled");
        				
        			}
        		}
        	});
        });

        $self.find("#js-submit").on("click", function(e){
        	// 健康管理师, 医生, 护士角色只能选择其中一个
            if($self.find('#js-form').valid()){
                common.post({
                    url: '${ctx}/role/${action}',
                    data: $self.find("#js-form").serialize(),
                    modal: $self.find("#modal_roleManager"),
                    dataType: "json"
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
                name:{
                    required:true,
                    maxlength:10,
                    remote:{
                        // 远程验证
                        url : "${ctx}/role/check",
                        type : "get",
                        dataType : "json",
                        data : {
                            "name": function () {return $self.find("input[name=name]").val();},
                            "id": function () {return $self.find("input[name=id]").val();}
                        }
                    }

                },
                description:{required:true,maxlength:30},
                code:{required:true},
                level:{required:true},
                roleType:{required:true}
            },
            messages:{
                name:{
                	required:"角色名不能为空",
                    remote:"角色名已存在"
                },
                description:{required:"角色描述不能为空"},
                code:{required:"角色类型不能为空"},
                level:{required:"角色等级不能为空"},
                roleType:{required:"角色权限不能为空"}
                
            },
            errorPlacement: function(error, element) {
                if (element.prop('type') === 'checkbox'
                    || element.prop('type') === 'radio') {
                    error.appendTo(element.parent());
                } else {
                    error.insertAfter(element);
                }
            }
        });
    });
</script>