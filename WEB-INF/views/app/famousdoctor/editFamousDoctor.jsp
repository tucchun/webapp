<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap">
  <div class="tb-head">名医堂管理&gt;&gt;名医修改</div>
  <div class="tb-content">
  
    <div class="tb-wrap">
    <form id="js-form">
    <input type="hidden" name="doctorId" value="${doctor.doctorId }" />
      <table class="table wrap-table">
        <tbody>
        <tr>
          <td><span class="required">*</span>名医名称:</td>
          <td>
            <div class="form-inline">
              <input type="text" class="form-control" placeholder="请输入名称" maxlength="20" name="doctorName" value="${doctor.doctorName }"><span class="required">*</span><span>名称不能超过20个字符</span>
            </div>
          </td>
        </tr>
        <tr>
          <td><span class="required">*</span>名医头像:</td>
			<td>
                        <div><a class="btn btn-main" id="choseFile">选择图片</a><span class="mr10">支持jpg、png的图片格式,尺寸为:100px*100px,最大1M</span></div>
                        <br />
                        <div class="imglist clearfix">
                        	<div class="pull-left"><img src="${doctor.doctorPic }" alt="" id="imgurl" class="form-img"><input type="hidden" id="img" name="img" value="${doctor.doctorPic }"><a href="#">删除</a></div>
                        </div>
                        <input type="text" name="pics" id="pics" value="1" style="visibility:hidden;"/>
        </tr>
        <tr>
          <td><span class="required">*</span>科室名称:</td>
          <td>
            <div class="form-inline">
              <input type="text" class="form-control" placeholder="请输入科室名称" name="departmentName" maxlength="20" value="${doctor.departmentName }"><span class="required" >*</span><span>名称不能超过20个字符</span>
            </div>
          </td>
        </tr>
        <tr>
          <td><span class="required">*</span>所属社区站:</td>
          <td>
            <div class="form-inline">
              <input type="text" class="form-control" placeholder="请输入所属社区站" name="healthStationName" maxlength="20" value="${doctor.healthStationName }"><span class="required" >*</span><span>名称不能超过20个字符</span>
            </div>
          </td>
        </tr>
        <tr>
          <td><span class="required">*</span>展示状态:</td>
          <td>
            <div class="form-inline">
              <select class="form-control" name="doctorState">
                <option value="0" <c:if test="${doctor.doctorState ==0 }">selected</c:if> >可见</option>
                <option value="1" <c:if test="${doctor.doctorState ==1 }">selected</c:if>>不可见</option>
              </select>
              <span>状态为可见时，将在APP端展示，不可见时，则不展示！</span>
            </div>
          </td>
        </tr>
        <tr>
          <td><span class="required">*</span>名医简介:</td>
          <td>
            <div class="col-sm-10">
              <textarea name="doctorIntroduce" id="doctorIntroduce" rows="10" maxlength="2000" class="fill form-control" >${doctor.doctorIntroduce }</textarea><span class="required">*</span><span>名医简介不能超过2000个字符</span>
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
  require([
    'jquery',,'upload','validate' ,'message_zh'
  ], function($,upload,validate,message_zh){
    var $self = $("#editFamousDoctor");


    var action = "${ctx}/upload/uploadFile",_self = $('#editFamousDoctor'),button = _self.find('#choseFile'),interval;
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
        	var imgObj = $('<img/>');
        	var uri = response.imgUrl;
        	var imgUrl = uri;
        	imgObj.attr('src',uri);
        	imgObj.load(function(){ 
        		var iWidth = this.width;
        		var iHeight = this.height;
        		if(iWidth != 100 || iHeight != 100){
        			common.alert('请上传尺寸为100*100的图片');
        		}
        	});
            window.clearInterval(interval);
            this.enable();
                if(response.retCode == 'success'){
                	var uri = response.imgUrl;
                	var imgUrl = uri;
                	$self.find('#imgurl').attr("src",imgUrl);
                	$self.find('#img').val(uri);
                	$self.find('#pics').val("1");
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
    	//$(this).parent().remove();
    });
    
    
    
    $self.find("#js-submit").on("click", function(e) {
    	if(_self.find('#js-form').valid()){
		var $obj = $(this);
		$obj.hide();
		common.fetch({
			url : '${ctx}/famousDoctor/editGoods',
			type : 'POST',
			data: $self.find("#js-form").serialize(),
			dataType : "json",
			success : function(rt) {
				if (1 == rt.ret_code) {
					common.createTab({
			               uri: '${ctx}/famousDoctor',
			               data: {name: '名医列表'},
			               key: 'famousDoctor',
			               callback: function(){
			                   common.closeTab("editFamousDoctor", null, false);
			               }
			           });
				} else {
					common.alert("添加失败");
					$obj.show();
				}
			}
		});}
	});
    
    $self.find('#js-form').validate({
        rules:{
        	doctorName:{required:true},
        	departmentName:{required:true},
        	healthStationName:{required:true},
        	doctorIntroduce:{required:true},
        	pics:{required:true}
            },
        messages:{
        	doctorName:"请正确填写医生名称",
        	departmentName:"请正确填写科室名称",
        	healthStationName:"请正确填写社区站名称",
        	doctorIntroduce:"请正确填写医生简介",
        	pics:"请上传医生图片"
            }
        });
  });
</script>