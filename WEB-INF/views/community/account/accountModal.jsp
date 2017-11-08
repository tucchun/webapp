<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />


<div class="wrap">
    <div class="tb-head">账户管理&gt;&gt;
        <c:if test="${action eq 'create'}">新增账户</c:if>
        <c:if test="${action ne 'create'}">修改账户</c:if>
        </div>
    <div class="tb-content">
        <div class="tb-wrap">
            <form action="#" class="form-inline" id="js-form">
                <table class="table wrap-table">
                    <input type="hidden" name="staffId" value="${staff.staffId}" />
                    <input type="hidden" name="user.id" value="${staff.user.id}" />
                    <tbody>
                    <tr>
                        <td class="col-sm-2"><span class="required">*</span>姓名：</td>
                        <td><input type="text" class="form-control" name="staffName" value="${staff.staffName}"/></td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>登录账户：</td>
                        <td>
                            <c:if test="${action eq 'create'}">
                                <input type="text" class="form-control" id="username" name="user.loginName" value="${staff.user.loginName}"/>
                            </c:if>
                            <c:if test="${action eq 'update'}">
                                ${staff.user.loginName}
                            </c:if>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>密码：</td>
                        <td>
                                <input type="password" id="passwordstr" class="form-control" name="staff.user.passwd" value="${staff.user.passwd}"/>
                                <input type="hidden" id="password" name="user.passwd" value="${staff.user.passwd}"/>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>重复密码：</td>
                        <td>
                                <input type="password" id="chkpassword" class="form-control" name="chkpassword" value="${staff.user.passwd}"/>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>所属角色：</td>
                        <td>
                            <select name="staffRole" id="staffRole" class="form-control">
                            	<c:if test="${!isTopestRole}">
	                                <option value="">请选择</option>
                            	</c:if>
                                <c:forEach items="${staff.roles}" var="role">
                                    <option value="${role.id}" <c:if test="${role.id eq staff.staffRole}">selected</c:if>>${role.name}</option>
                                </c:forEach>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>组织机构：</td>
                        <td>
                            <tags:selectboxMapper list="${organizations}" name="organizationId" addNull="false" value="${staff.organizationId}"/>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>手机号码：</td>
                        <td>
                            <input type="text" class="form-control" name="staffMobile" value="${staff.staffMobile}"/>
                        </td>
                    </tr>
                    <tr>
                        <td><span class="required">*</span>身份证号码：</td>
                        <td>
                            <c:if test="${action eq 'create'}">
	                            <input type="text" class="form-control" id="staffIdcard" name="staffIdcard" value="${staff.staffIdcard}">
	                        </c:if>
	                        <c:if test="${action eq 'update'}">
	                            ${staff.staffIdcard}
	                        </c:if>
                        </td>
                    </tr>
                    
                    <tr>
                        <td colspan="2">
                            <div class="col-sm-12 form-submit-btns text-center">
                                <button class="btn btn-main" type="button" id="js-submit">保存</button>
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
    require([
        'jquery','zTree','js/security','validate','message_zh'
    ],function($, zTree, security){
        var $self = $("#newAccount");

        $self.find("#passwordstr").on('keyup',function(){
            $self.find("#password").val(security.transferPassword($(this).val()));
        });
        
        $self.find("#js-submit").on('click',function(e){
            if($self.find('#js-form').valid()){
            	$self.find("#passwordstr").val("");
                common.fetch({
                    url: '${ctx}/account/${action}',
                    type: 'POST',
                    data: $self.find("#js-form").serialize(),
                    dataType: "json",
                    success: function(data){
                        common.alert(data.ret_msg);
                        if(data.ret_code == 1){
                            common.createTab({
                                uri: '${ctx}/account',
                                data: {name: '账户管理'},
                                key: 'account',
                                callback: function(){
                                    common.closeTab("newAccount",null,false);
                                }
                            });
                        }
                    }
                });
            }
        });       
        
        $.validator.addMethod("mobile",function(value, element, params){
            var regex = /^1\d{10}$/;
            return value=='' || (value != '' && regex.test(value));
        },"非法手机号码");

        $.validator.addMethod("onlyLetterAndDigit",function(value, element, params){
            var regex=new RegExp('^[a-zA-Z0-9]*$');
            return regex.test(value);
        },"用户名只能是字母和数字");
        
        $.validator.addMethod("chkpasswordAccount",function(value, element, params){
            return $self.find("#passwordstr").val() == $self.find("#chkpassword").val();
        },"两次输入的密码不相同");
        
        $.validator.addMethod('checkPwd',function(value,element){
            console.log(value);
            var flag = common.Util.checkPwd(value);
            return flag ? false : true;
        },'您的密码不能是接连的数字或字母,且不能是相同的数字或字母，请重新设置');

        $self.find('#js-form').validate({
            rules:{
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
                chkpassword:{required:true, chkpasswordAccount:true},
                organizationId:{required:true},
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
            	staffName:{required:"姓名不能为空"},            
                chkpassword:{
                	chkpassword:"两次输入的密码不相同",
                	required:"重复密码不能为空"
                },
                'staff.user.passwd':{required:"密码不能为空",rangelength:"密码至少8位,最多32位长度"},
                staffRole:{required:"所属角色不能为空"},
                organizationId:{required:"组织机构不能为空"},
                'user.loginName':{
                    remote:"登录账户已存在",
                    required:"登录账户不能为空"
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
