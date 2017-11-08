<%@ page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%
	request.setAttribute("prj", Constants.PRJ_PERFIX);
%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap">
    <div class="tb-head">医院管理&gt;&gt;新增医院</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <form action="#">
                <table class="table wrap-table">
                    <tbody>
                    <tr>
                        <td>医院名称:</td>
                        <td>
                            <div class="col-sm-10"><input type="text" class="form-control" placeholder="医院名称"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>医院等级:</td>
                        <td>
                            <div class="col-sm-10 form-inline">
                                <select name="" class="form-control">
                                    <option value="">三级甲等</option>
                                    <option value="">二级甲等</option>
                                    <option value="">一级甲等</option>
                                    <option value="">三级乙等</option>
                                    <option value="">二级乙等</option>
                                    <option value="">一级乙等</option>
                                    <option value="">三级</option>
                                    <option value="">二级</option>
                                    <option value="">一级</option>
                                    <option value="">其他</option>
                                </select>
                            </div>
                            <!--<div class="form-inline"><input type="text" class="form-control" placeholder="商品名称"></div>-->
                        </td>
                    </tr>
                    <tr>
                        <td>所在地区:</td>
                        <td>
                            <div class="form-inline">
                                <select name="" class="form-control">
                                    <option value="">省份</option>
                                    <option value="">广东</option>
                                </select>
                                <select name="" class="form-control">
                                    <option value="">城市</option>
                                    <option value="">深圳</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>预约量:</td>
                        <td>
                            <div class="col-sm-10"><input type="text" class="form-control" placeholder="预约量"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>医院头像:</td>
                        <td>
                            <div><a class="btn btn-main" id="choseFile">选择图片</a><span class="mr10">支持jpg、png的图片格式，最大1M</span></div>
                            <br />
                            <div class="imglist clearfix">
                                <div class="pull-left">
                                    <img src="../static/rss/example.jpg" alt="" class="form-img"><a href="#">删除</a>
                                </div>
                                <div class="pull-left">
                                    <img src="../static/rss/example.jpg" alt="" class="form-img"><a href="#">删除</a>
                                </div>
                                <div class="pull-left">
                                    <img src="../static/rss/example.jpg" alt="" class="form-img"><a href="#">删除</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div class="col-sm-12 form-submit-btns text-center">
                                <button type="submit" class="btn btn-main btn-lg">保存</button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
</div>
<script type="text/javascript">
    require(['upload'],function(){
    	 var action = "${ctx}/upload/uploadFile",_self = $('#newDoctor'),button = _self.find('#choseFile'),interval;
         new AjaxUpload(button,{
             action:action,
             onSubmit:function(file,ext){
                 if (!(ext && /^(jpg|jpeg|JPG|JPEG|png|PNG)$/.test(ext))) {
                     alert('图片格式不正确,请选择正确图片格式!', '系统提示');
                     return false;
                 }
                 /* button.text('上传中'); */
                 this.disable();
                 /* interval = window.setInterval(function () {
                     var text = button.text();
                     if (text.length < 10) {
                         button.text(text + '|');
                     } else {
                         button.text('上传中');
                     }
                 }, 200); */
             },
             onComplete:function(file,response){
            	 response = JSON.parse(response);
                 console.log(response);
                 window.clearInterval(interval);
                 this.enable();
                     if(response.retCode == 'success'){
                     	var imgUrl = response.imgUrl;
                     	$('#img').val(imgUrl);
                     	var img = '<div class="pull-left"><img src="' + imgUrl +'" alt="" class="form-img"><a href="#">删除</a></div>'
                             $(_self).find('.imglist').append(img);
                     }else{
                     	alert("上传失败");
                     }
             }

         });

         //删除上传的图片
         _self.find('.imglist').on('click','a',function(){
            $(this).parent().remove();
         });
	     /* _self.find('#js-submit').on('click',function(e){
	    	 var imgs = _self.find('.imglist').find('img');
	    	 var arr = [];
	    	 $.each(imgs,function(index,el){
	    		 arr.push(el.attr('src'));
	    		 $.ajax({
	    			 
	    		 });
	    	 });
	     }); */
    })
</script>
