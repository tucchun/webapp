<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />


<div class="wrap">
    <div class="tb-head">社区卫生站用户管理&gt;&gt;
        <c:if test="${action eq 'create'}">新增社区卫生站用户</c:if>
        <c:if test="${action ne 'create'}">修改社区卫生站用户</c:if>
        </div>
    <div class="tb-content">
        <div class="tb-wrap">
            <form action="#" id="js-form">
                <table class="table wrap-table">
                    <input type="hidden" name="staffId" value="${staff.staffId}" />
                    <tbody>
                    <tr class="form-inline">
                        <td class="col-sm-2"><span class="required">*</span>姓名：</td>
                        <td><input type="text" class="form-control" name="staffName" value="${staff.staffName}"/></td>
                    </tr>
                    <tr class="form-inline">
                        <td><span class="required">*</span>所属角色：</td>
                        <td>
                            <select name="staffRole" id="staffRole" class="form-control">
                                <option value="">请选择</option>
                                <c:forEach items="${staff.roles}" var="role">
                                    <option value="${role.id}" <c:if test="${role.id eq staff.staffRole}">selected</c:if>>${role.name}</option>
                                </c:forEach>
                            </select>
                        </td>
                    </tr>
                    <tr class="form-inline">
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
                    <tr class="form-inline">
                        <td><span class="required">*</span>密码：</td>
                        <td>
                                <input type="password" id="passwordstr" class="form-control" name="staff.user.passwd" value="${staff.user.passwd}"/>
                                <input type="hidden" id="password" name="user.passwd" value="${staff.user.passwd}"/>
                        </td>
                    </tr>
                    <tr class="form-inline">
                        <td><span class="required">*</span>重复密码：</td>
                        <td>
                                <input type="password" id="chkpassword" class="form-control" name="chkpassword" value="${staff.user.passwd}"/>
                        </td>
                    </tr>
                    <tr class="form-inline">
                        <td><span class="required">*</span>手机号码：</td>
                        <td><input type="text" class="form-control" name="staffMobile" value="${staff.staffMobile}"/></td>
                    </tr>
                    <tr class="form-inline">
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
                    <tr class="form-inline">
                        <td><span class="required">*</span>性别：</td>
                        <td>
                            <tags:selectboxMapper name="staffSex" list="${staff.sexs}" addNull="true" value="${staff.staffSex}"/>
                        </td>
                    </tr>
                    <tr class="form-inline">
                        <td><span class="required">*</span>出生年月：</td>
                        <td>

                        <div class="input-group date form_date" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                            <input name="staffBirth" id="js-new-seminar-date" class="form-control" size="16" type="text" value="<fmt:formatDate value="${staff.staffBirth}" pattern="yyyy-MM-dd" />" readonly="">
                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                        </div>

                        </td>
                    </tr>
                    <tr class="form-inline">
                        <td><span class="required">*</span>学历：</td>
                        <td>
                            <tags:selectbox list="${staff.educations}" name="staffEdu" addNull="true" value="${staff.staffEdu}"/>
                        </td>
                    </tr>
                    <tr class="form-inline">
                        <td><span class="required">*</span>组织机构：</td>
                        <td>
                            <tags:selectboxMapper list="${organizations}" name="organizationId" addNull="false" value="${staff.organizationId}"/>
                        </td>
                    </tr>
                    <tr class="form-inline">
                        <td><span class="required">*</span>科室：</td>
                        <td>
                            <tags:selectbox list="${staff.departments}" name="staffDepartment" addNull="true" value="${staff.staffDepartment}"/>
                        </td>
                    </tr>
                    <tr class="form-inline">
                        <td><span class="required">*</span>职务：</td>
                        <td>
                            <select name="staffPost" class="form-control">
                                <option value="">请选择</option>
                                <c:forEach items="${staff.positions}" var="position">
                                    <option value="${position.position_id}" <c:if test="${position.position_id eq staff.staffPost}">selected</c:if>>${position.position_name}</option>
                                </c:forEach>
                            </select>
                        </td>
                    </tr>
                    <tr class="form-inline">
                        <td><span class="required">*</span>职称：</td>
                        <td>
                            <tags:selectbox list="${staff.titles}" name="staffTitle" addNull="true" value="${staff.staffTitle}"/>
                        </td>
                    </tr>
                    <tr class="form-inline">
                        <td><span class="required">*</span>全/兼职：</td>
                        <td>
                            <tags:selectbox list="${staff.fulltimeWorks}" name="staffFulltimeWork" addNull="true" value="${staff.staffFulltimeWork}"/>
                        </td>
                    </tr>
                    <tr class="form-inline">
                        <td>直接上级：</td>
                        <td>
                            <select name="staffParent" class="form-control">
                                <option value="">请选择</option>
                                <c:forEach items="${staff.parentStaffs}" var="parentStaff">
                                    <option value="${parentStaff.staffId}" <c:if test="${parentStaff.staffId eq staff.staffParent}">selected</c:if>>${parentStaff.staffName}</option>
                                </c:forEach>
                            </select>
                        </td>
                    </tr>
                    
                    <tr class="form-inline">
			          <td>人员头像:</td>
						<td>
			                        <div><a class="btn btn-main" id="choseFile">选择图片</a><span class="mr10">建议尺寸：200*200px，支持jpg、png格式的图片，最大不超过1M</span></div>
			                        <br />
			                        <div class="imglist clearfix">
			                        	<div class="pull-left"><img src="${staff.headImage }" alt="" id="imgurl" class="form-img"><input type="hidden" id="img" name="img" value="${heafImgUrl }"><a href="#" id="img_del">删除</a></div>
			                        </div>
			                        <input type="text" name="pics" id="pics" value="" style="visibility:hidden;"/>
			        </tr>
			        <tr>
			          <td>简介:</td>
			          <td>
			            <div class="col-sm-10">
			              <textarea name="personalIntroduce" id="personalIntroduce" rows="10" maxlength="1000" class="fill form-control">${staff.personalIntroduce }</textarea><span>请输入简介内容，1000字以内
</span>	
			            </div>
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
    <div id="modal_hos" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="modal_hosLabel">选择社区卫生站</h4>
                </div>
                <div class="modal-body">
                    <ul id="ztreeDemo" class="ztree"></ul>
                </div>
            </div>
        </div>
    </div>
</div>


<script>
    require([
        'jquery','zTree','js/security','validate','message_zh','upload'
    ],function($, zTree, security,validate,message_zh,upload){
        var $self = $("#newStaff");

        $self.find("#passwordstr").on('keyup',function(){
            $self.find("#password").val(security.transferPassword($(this).val()));
        })

        var clicked = false;
        $self.find("#js-submit").on('click',function(e){
            if($self.find('#js-form').valid() && !clicked){
               	clicked = true;
                common.fetch({
                    url: '${ctx}/staff/${action}',
                    type: 'POST',
                    data: $self.find("#js-form").serialize(),
                    dataType: "json",
                    success: function(data){
                        clicked = false;
                        common.alert(data.ret_msg);
                        if(data.ret_code==1){
                            common.createTab({
                                uri: '${ctx}/staff',
                                data: {name: '社区卫生站用户管理'},
                                key: 'staff',
                                callback: function(){
                                    common.closeTab("newStaff",null,false);
                                }
                            });
                        }
                    }
                });
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

        var setting = {
            check: {
                enable: true,
                chkStyle: "radio",
                radioType: "all"
            },
            data: {
                simpleData: {
                    enable: true
                }
            },
            async:{
                enable:false
            }
        }, zNodes = ${stationTree}

        setting.check.chkboxType = { "Y": "", "N": "" };

        // 统计 赋值 卫生站
        function countStation(){
            var ztreeobj = $.fn.zTree.getZTreeObj('ztreeDemo');
            var checkNodes = ztreeobj.getCheckedNodes();
            var area = [],station = [];
            $.each(checkNodes,function(index,ele){
                if(ele.level === 3){
                    station.push(ele.id);
                }else{
                    area.push(ele.id);
                }
            });
            if(checkNodes&&checkNodes[0]) {
                $self.find('#chosedNumber').text(checkNodes[0].name);
            }
            $self.find('input[name=areaCodes]').val(area.join(','));
            $self.find('input[name=stationIds]').val(station.join(','));
        };

        $.fn.zTree.init($self.find("#ztreeDemo"), setting, zNodes);
        $self.find('#modal_hos').on('hide.bs.modal', countStation);

        // 进来触发
        countStation();

        $.validator.addMethod("onlyLetterAndDigit",function(value, element, params){
            var regex=new RegExp('^[a-zA-Z0-9]*$');
            return regex.test(value);
        },"用户名只能是字母和数字");

        $.validator.addMethod("mobile",function(value, element, params){
        	var regex = /^1\d{10}$/;
            return regex.test(value);
        },"非法手机号码");
        
        $.validator.addMethod("chkpasswordStaff",function(value, element, params){
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
                chkpassword:{required:true, chkpasswordStaff:true},
                staffIdcard:{required:true,remote:{
                    // 远程验证
                    url : "${ctx}/staff/validateid",
                    type : "get",
                    dataType : "json",
                    data : {
                        idcard: function () {
                            return $self.find("#staffIdcard").val();
                        }
                    },
                    dataFilter:function(data,type){
                        if(data){
                            var idcard = $self.find("#staffIdcard").val();
                            $self.find("input[name=staffBirth]").val(getBirthdayFromIdCard(idcard));
                            var sex = getSexFromIdCard(idcard);
                            $self.find("#staffSex option:contains('"+sex+"')").attr('selected', true);
                        }
                        return data;
                    }
                }

                },
                staffMobile:{required:true,mobile:true},
                staffSex:{required:true},
                staffBirth:{required:true},
                staffEdu:{required:true},
                staffDepartment:{required:true},
                staffPost:{required:true},
                staffTitle:{required:true},
                staffFulltimeWork:{required:true},
                organizationId:{required:true}
            },
            errorPlacement: function(error, element) {
                if(element.attr("name") == "staffBirth")
                {
                    error.insertAfter(element.parent());
                }
                else {
                    error.insertAfter(element);
                }
            },
            messages:{
                chkpassword:{
                	chkpassword:"两次输入的密码不相同",
                	required:"重复密码不能为空"
                },
                'user.loginName':{
                    remote:"用户名已存在",
                    required:"登录账户不能为空"
                },
                staffIdcard:{
                    remote:"身份证号码非法或已注册",
                    required:"身份证号码不能为空"
                },
                staffName:{required:"姓名不能为空"},
                staffRole:{required:"所属角色不能为空"},
                'staff.user.passwd':{required:"密码不能为空",rangelength:"密码至少8位,最多32位长度"},
                staffMobile:{required:"手机号码不能为空"},
                staffSex:{required:"性别不能为空"},
                staffBirth:{required:"出生年月不能为空"},
                staffEdu:{required:"学历不能为空"},
                organizationId:{required:"组织机构不能为空"},
                staffDepartment:{required:"科室不能为空"},
                staffPost:{required:"职务不能为空"},
                staffTitle:{required:"职称不能为空"},
                staffFulltimeWork:{required:"全/兼职不能为空"}
            }
        });
        
        
        var action = "${ctx}/upload/uploadFile",_self = $('#newStaff'),button = _self.find('#choseFile'),interval;
        new AjaxUpload(button,{
            action:action,
            onSubmit:function(file,ext){
                if (!(ext && /^(jpg|jpeg|JPG|JPEG|png|PNG)$/.test(ext))) {
                	common.alert('图片格式不正确,请选择正确图片格式!', '系统提示');
                    return false;
                }
                this.disable();
            },
            onComplete:function(file,response){
            	response = JSON.parse(response);
                console.log(response);
                window.clearInterval(interval);
                this.enable();
                    if(response.retCode == 'success'){
                    	var imgObj = $('<img/>');
                    	var uri = response.imgUrl;
                    	var img = response.img;//原图路径
                    	var imgUrl = uri;
                    	imgObj.attr('src',uri);
                    	imgObj.load(function(){ 
                    		var iWidth = this.width;
                    		var iHeight = this.height;
                    		if(iWidth != 200 || iHeight != 200){
                    			common.alert('请上传尺寸为200*200的图片');
                    		}
                    	});
                    	$self.find('#imgurl').attr("src",imgUrl);
                    	$self.find('#img').val(img);
                    	$self.find('#pics').val(1);
                    	imgShow();
                    }else{
                    	common.alert(response.retMsg);
                    }
            }

        });

        //删除上传的图片
        _self.find('.imglist').on('click','a',function(){
        	$self.find('#imgurl').attr("src","");
            $self.find('#img').val("");
            $self.find('#pics').val("");
            imgHide();
        });
        
        var imgSrc = '${staff.headImage }';
        if(imgSrc != null && imgSrc != ''){
        	imgShow();
        }else{
        	imgHide();
        }
        
    });
    
    function getBirthdayFromIdCard (idCard) {
        var birthday = "";
        if(idCard != null && idCard != ""){
            if(idCard.length == 15){
                birthday = "19"+idCard.substr(6,6);
            } else if(idCard.length == 18){
                birthday = idCard.substr(6,8);
            }

            birthday = birthday.replace(/(.{4})(.{2})/,"$1-$2-");
        }

        return birthday;
    };

    function getSexFromIdCard(idCard) {
        var index = 16;
        if(idCard.length == 15){
            index = 14;
        }
        return parseInt(idCard.substr(index, 1)) % 2 == 1?"男":"女";
    }
    function imgHide(){
		  $('#img_del').hide();
		}
	
	function imgShow(){
		  $('#img_del').show();
		}
</script>
