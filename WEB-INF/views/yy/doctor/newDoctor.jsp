<%@ page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%
	request.setAttribute("prj", Constants.PRJ_PERFIX);
%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap">
	<div class="tb-head">医生管理&gt;&gt;新增医生</div>
	<div class="tb-content">
		<div class="tb-wrap">
			<form id="newDoctor-js-form">
				<input type="hidden" name="diseaseids" id="diseaseids"/>
				<table class="table wrap-table">
					<tbody>
						<tr>
							<td><span class="required">*</span>医院:</td>
							<td>
								<div class="col-sm-10 form-inline">
									<select name="province" class="form-control" id="js-province" /><span>省</span>
									<select name="city" class="form-control" id="js-city" /><span>市</span>
									<select name="hospital" id="js-hospital" class="form-control">
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<td><span class="required">*</span>科室:</td>
							<td>
								<div class="col-sm-10 form-inline">
									<select name="onedepartment" id="onedepartment" class="form-control">
									</select>
									<select name="twodepartment" id="twodepartment" class="form-control">
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<td><span class="required">*</span>医生姓名:</td>
							<td>
								<div class="form-inline col-sm-10">
									<input type="text" name="name" class="form-control"
										placeholder="医生姓名">
								</div>
							</td>
						</tr>
						<tr>
							<td><span class="required">*</span>医生职称:</td>
							<td>
								<div class="col-sm-10 form-inline">
								<tags:selectbox list="${doctorGradeList}" name="grade" addNull="true"/>
								</div>
							</td>
						</tr>
						<tr>
							<td><span class="required">*</span>擅长疾病：</td>
							<td>
								<div class="form-choices-selects clearfix" id="select-community">
									<div class="col-sm-3">
										<select class="form-control select-left" multiple>
											<c:forEach items="${diseaseList }" var="dis"
												varStatus="status">
												<option value="${dis.id }" select="false">${dis.name }</option>
											</c:forEach>
										</select>
									</div>
									<div class="col-sm-1">
										<div class="select-opt">
											<button type="button" class="btn btn-default add">&gt;&gt;</button>
											<button type="button" class="btn btn-default del">&lt;&lt;</button>
										</div>
									</div>
									<div class="col-sm-3">
										<select class="form-control select-right" id="diseaseList"
											multiple>

										</select>
									</div>
									<input type="text" name="dis" id="dis" value="" style="visibility:hidden;"/>
								</div>
							</td>
						</tr>
						<tr>
							<td>医生头像:</td>
							<td>
                            <div><a class="btn btn-main" id="choseFile">选择图片</a><span class="mr10">支持jpg、png的图片格式，最大1M</span></div>
                            <br />
                            <div class="imglist clearfix">
                            	<div class="pull-left"><img src="" alt="" id="imgurl" class="form-img"><input type="hidden" id="img" name="img"><a href="#">删除</a></div>
                            </div>
                        </td>
						</tr>
						<tr>
							<td colspan="2">
								<div class="col-sm-12 form-submit-btns text-center">
									<button type="button" class="btn btn-main btn-lg"
										id="js-submit">保存</button>
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
	require([ 'jquery', 'js/area', 'js/components-select','js/cascade','upload','validate' ,,'message_zh'], function($, area,
			select,cascade) {
		var $self = $("#newDoctor");
		var sel = $self.find('#select-community');
		var selected = new select(sel);

		$.getJSON("${ctx}/Doctor/getAreaHispital", function(data){
	        new cascade({
			    $primary: $self.find("#js-province"),
			    $secondary:  $self.find("#js-city"),
			    "primaryData": data.provinceList,
			    "secondaryData": data.cityList,
			    "parentId": "parentid",
			    "defaultPrimary": "",
			    "defaultSecondary": ""
        	});
		    new cascade({
			    $primary: $self.find("#js-city"),
			    $secondary:  $self.find("#js-hospital"),
			    "primaryData": data.cityList,
			    "secondaryData": data.hospitalList,
			    "parentId": "parentid",
			    "defaultPrimary": "",
			    "defaultSecondary": ""
		    });
		    new cascade({
			    $primary: $self.find("#onedepartment"),
			    $secondary:  $self.find("#twodepartment"),
			    "primaryData": data.onedepartmentList,
			    "secondaryData": data.twodepartmentList,
			    "parentId": "parentid",
			    "defaultPrimary": "",
			    "defaultSecondary": ""
		    });
	    });
		
		$self.find("#js-submit").on("click", function(e) {
			$self.find('#dis').val($self.find('#diseaseList').attr('data-selected'));
			if($self.find('#newDoctor-js-form').valid()){
			$self.find('#diseaseids').val($self.find('#diseaseList').attr('data-selected'));
			var $obj = $(this);
			$obj.hide();
			common.fetch({
				url : '${ctx}/Doctor/create',
				type : 'POST',
				cache : false,
				data : new FormData($('#newDoctor-js-form')[0]),
				processData : false,
				contentType : false,
				dataType : "text",
				success : function(rt) {
					if ('success' == rt) {
						//$('#doctorList').load("${ctx}/Doctor");
						//common.closeTab('newDoctor');
						common.createTab({
				               uri: '${ctx}/Doctor',
				               data: {name: '医生列表'},
				               key: 'doctorList',
				               callback: function(){
				                   common.closeTab("newDoctor", null, false);
				               }
				           });
					} else {
						$obj.show();
					}
				}
			}); }
		});
		
		var action = "${ctx}/upload/uploadFile",_self = $('#newDoctor'),button = _self.find('#choseFile'),interval;
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
                    	var uri = response.imgUrl;
                    	var imgUrl = uri;
                    	$self.find('#imgurl').attr("src",imgUrl);
                    	$self.find('#img').val(uri);
                    }else{
                    	common.alert(response.retMsg);
                    }
            }

        });

        //删除上传的图片
        _self.find('.imglist').on('click','a',function(){
        	$self.find('#imgurl').attr("src","");
            $self.find('#img').val("");
        	//$(this).parent().remove();
        });
        
        $self.find('#newDoctor-js-form').validate({
            rules:{
            	provinceprovince:"required",
            	city:"required",
            	hospital:"required",
            	onedepartment:"required",
            	twodepartment:"required",
            	name:"required",
            	grade:"required",
            	dis:"required"
                },
            messages:{
            	provinceprovince:"请选择医院所在省份",
            	city:"请选择医院所在城市",
            	hospital:"请选择医院",
            	onedepartment:"请选择医生所在一级科室",
            	twodepartment:"请选择医生所在一级科室",
            	name:"请填写医生名称",
            	grade:"请选择医生职称",
            	dis:"请选择医生擅长疾病"
            }
            });
	});
</script>