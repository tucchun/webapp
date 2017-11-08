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
            <form class="form-horizontal form-tb clearfix" id="js-form">
            	<input type="hidden" name="organizationId" value="${organization.organizationId }">
                <div class="form-group">
                    <label class="col-sm-3 control-label"><span class="required">*</span>组织机构名:</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" placeholder="组织机构名" name="organizationName"  value="${organization.organizationName }"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">上级机构:</label>
                    <div class="col-sm-8">
                        <tags:selectboxMapper name="parentId" list="${organizations}" addNull="false" value="${organization.parentId}"></tags:selectboxMapper>
                    </div>
                </div>
               <h4>&nbsp;&nbsp;&nbsp;账户信息</h4>
                <hr>
                
                <div class="form-group">
                    <label class="col-sm-3 control-label"><span class="required">*</span>姓名：</label>
                    <div class="col-sm-8">
                        <input type="text" placeholder="姓名" class="form-control" name="staffName" value="${staff.staffName}"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label"><span class="required">*</span>登录账号：</label>
                    <div class="col-sm-8">
                    	<c:if test="${action eq 'create' or empty staff.user.id}">
                        <input type="text" placeholder="登录账号" class="form-control" id="username" name="user.loginName" value="${staff.user.loginName}"/>
                        </c:if>
                        <c:if test="${action eq 'update' and not empty staff.user.id}">
                                ${staff.user.loginName}
                        </c:if>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label"><span class="required">*</span>密码：</label>
                    <div class="col-sm-8">
                        <input type="password" id="passwordstr" class="form-control" name="staff.user.passwd" value="${staff.user.passwd}"/>
                        <input type="hidden" id="password" name="user.passwd" value="${staff.user.passwd}"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label"><span class="required">*</span>重复密码：</label>
                    <div class="col-sm-8">
                        <input type="password" id="chkpassword" class="form-control" name="chkpassword" value="${staff.user.passwd}"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label"><span class="required">*</span>所属角色：</label>
                    <div class="col-sm-8">
                        <select name="staffRole" id="staffRole" class="form-control">
                                <c:forEach items="${staff.roles}" var="role">
                                    <option value="${role.id}" <c:if test="${role.id eq staff.staffRole}">selected</c:if>>${role.name}</option>
                                </c:forEach>
                            </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label"><span class="required">*</span>手机号码：</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" name="staffMobile" value="${staff.staffMobile}"/>
                    </div>
                </div>
                
                <div class="form-group">
                    <label class="col-sm-3 control-label"><span class="required">*</span>身份证号码：</label>
                    <div class="col-sm-8">
                        <c:if test="${action eq 'create' or empty staff.user.id}">
                            <input type="text" class="form-control" id="staffIdcard" name="staffIdcard" value="${staff.staffIdcard}">
                        </c:if>
                        <c:if test="${action eq 'update' and not empty staff.user.id}">
                            ${staff.staffIdcard}
                        </c:if>
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
	var $self = $("#organization");
	
	$self.find("#passwordstr").on('keyup',function(){
        $self.find("#password").val(security.transferPassword($(this).val()));
    })

	$self.find("#js-submit").on("click", function(e){
        if($self.find('#js-form').valid()){
        	$self.find("#passwordstr").val("");
            var modal = $self.find("#modal_title");
            common.fetch({
                url: '${ctx}/organization/${action}',
                data: $self.find("#js-form").serialize(),
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
	
	$.validator.addMethod("mobile",function(value, element, params){
		var regex = /^1\d{10}$/;
        return value=='' || (value != '' && regex.test(value));
    },"非法手机号码");
	
	$.validator.addMethod("onlyLetterAndDigit",function(value, element, params){
        var regex=new RegExp('^[a-zA-Z0-9]*$');
        return regex.test(value);
    },"只能为数字或字母，长度最大限制20字符");
    
    $.validator.addMethod("chkpasswordOrg",function(value, element, params){
    	return $self.find("#passwordstr").val() == $self.find("#chkpassword").val(); 
    },"两次输入的密码不相同");
    
    $.validator.addMethod('checkPwd',function(value,element){
        console.log(value);
        var flag = common.Util.checkPwd(value);
        return flag ? false : true;
    },'您的密码不能是接连的数字或字母,且不能是相同的数字或字母，请重新设置');

    $self.find('#js-form').validate({
        rules:{
            organizationName:{
                required:true,
                maxlength:50,
                remote:{
                    // 远程验证
                    url : "${ctx}/organization/check",
                    type : "get",
                    dataType : "json",
                    data : {
                        "name": function () {return $self.find("input[name=organizationName]").val();},
                        "id": function () {return $self.find("input[name=organizationId]").val();}
                    }
                }
            },
    		staffName:{required:true, maxlength:20},
    		staffRole:{required:true},
            'user.loginName':{required:true,onlyLetterAndDigit:true,rangelength:[4,20],remote:{
                // 远程验证
                url : "${ctx}/staff/checkusername",
                type : "get",
                dataType : "json",
                data : {
                    username: function () {
                        return $self.find("#username").val();
                    }
                }
            }},
            'staff.user.passwd':{required:true, rangelength:[8,32],checkPwd:true},
            chkpassword:{required:true, chkpasswordOrg:true},
            staffMobile:{required:true,mobile:true},
            staffIdcard:{required:true,remote:{
	                // 远程验证
	                url : "${ctx}/staff/validateid",
	                type : "get",
	                dataType : "json",
	                data : {
	                    idcard: function () {
	                        return $self.find("#staffIdcard").val();
	                    }
	                }
            	}
            }
        },
        messages:{
        	organizationName:{
        		required:"组织机构名不能为空",
                remote:"组织机构名已存在"
            },
            staffName:{required:"姓名不能为空"},
            'staff.user.passwd':{required:"密码不能为空",rangelength:"密码至少8位,最多32位长度"},
            chkpassword:{
            	chkpassword:"两次输入密码不同",
            	required:"重复密码不能为空"
            },
            "user.loginName":{
            	remote:"该账号已存在，请重新输入！",
            	required:"登录账号不能为空"
            },
            staffIdcard:{
                remote:"身份证号码非法或已注册",
                required:"身份证号码不能为空"
            },
            staffMobile:{
                required:"手机号码不能为空"
            }
        }
    });
	
});
</script>