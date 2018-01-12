<%@ page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%
	request.setAttribute("prj", Constants.PRJ_PERFIX);
%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap">
	<div class="tb-head">资讯管理&gt;&gt;修改文章</div>
	<div class="tb-content">
		<div class="tb-wrap">
			<form id="js-form">
				<input type="hidden" value="${article.id }" name="id">  
				<table class="table wrap-table">
					<tbody>
						<tr>
							<td><span class="required">*</span>所属分类:</td>
							<td>
								<div class="col-sm-10 form-inline">
									<select name="category" class="form-control"> 
										<option value="">请选择分类</option>
										<c:forEach items="${informationList}" var="look">
											<option value="${look.lookup_code }" <c:if test="${look.lookup_code == article.category }">selected</c:if> >${look.lookup_value }</option>
										</c:forEach>
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<td><span class="required">*</span>标题:</td>
							<td>
								<div class="col-sm-4">
									<input type="text" name="title" class="form-control" maxlength="30" value="${article.title }"
										placeholder="请输入标题，不超过30个汉字">
								</div>
							</td>
						</tr>
						<tr>
							<td><span class="required">*</span>来源:</td>
							<td>
								<div class="col-sm-2">
									<input type="text" name="source" class="form-control" maxlength="5" value="${article.source }"
										placeholder="请输入来源，不超过5个汉字">
								</div>
							</td>
						</tr>
						<tr>
							<td><span class="required">*</span>作者:</td>
							<td>
								<div class="col-sm-2">
									<input type="text" name="author" class="form-control" maxlength="5" value="${article.author }"
										placeholder="请输入作者，不超过5个汉字">
								</div>
							</td>
						</tr>
						<tr>
							<td>关键词:</td>
							<td>
								<div class="col-sm-5">
									<input type="text" name="keyWords" class="form-control" maxlength="50" value="${article.keyWords}"
										placeholder="请输入关键词多个使用“，”逗号隔开，不超过50个汉字">
								</div>
							</td>
						</tr>
						<tr>
							<td><span class="required">*</span>封面图片:</td>
							<td>
                            <div><a class="btn btn-main" id="choseFile">选择图片</a><span class="mr10">图片尺寸规范：220*150px，支持jpg、png，最大不超过1M，仅可上传一张图片</span></div>
                            <br />
                            <div class="imglist clearfix">
                            	<div class="pull-left"><img src="${article.imgUrl }" alt="" id="imgurl" class="form-img">
                            						   <input type="hidden" id="img" name="img" value="${article.imgUrl }">
                            						   <input type="text" name="imageurl" id="imageurl" value="" style="visibility:hidden;"/>
                            						   <a href="#">删除</a></div>
                            </div>
                        </td>
						</tr>
						<tr>
				          <td><span class="required">*</span>摘要:</td>
				          <td>
				            <div class="col-sm-10">
				              <textarea placeholder="请输入摘要，不超过100个汉字" name="summary" id="summary" rows="5" maxlength="100" class="fill form-control">${article.summary }</textarea>	
				            </div>
				            <
				          </td>
				        </tr>
				         <tr>
                        <td><span class="required">*</span>正文:</td>
                        <td>
                            <div class="edit">
                                <textarea name="content" id="editArticle_kindEditor_editArticle" style="width:776px;height:360px;">${article.content }</textarea>
                            <input type="text" name="contents" id="contents" value="1" style="visibility:hidden;"/>
                           </div>
                           <div style="color: #848282">文章详情，不超过10000个汉字</div>
                        </td>
                    </tr>
                    <tr>
							<td></td>
							<td>
								<div class="col-sm-2">
									<input type="checkbox" value="1" name="recommendStatus" <c:if test="${article.recommendStatus==1 }">checked</c:if> > 推荐到APP首页
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
require(["jquery","KindEditor","zh_CN",'js/components-select','js/cascade','upload','validate','js/dialog','message_zh'], 
		function ($,K,zh_CN,select,cascade,upload,validate,Dialog) {
		var $self = $("#editArticle");

		$self.find("#js-submit").on("click", function(e) {
			
			editor.sync('editArticle_kindEditor_editArticle');
			if(!$self.find('#editArticle_kindEditor_editArticle').val()){
    			$self.find('#contents').val('');
    		}else{
    			$self.find('#contents').val('1');
    		}
    		if($self.find('#editArticle_kindEditor_editArticle').val().length > 10000){
	    	    common.alert("详情文本太长!");
    			return false;
    		}
    		$self.find('#imageurl').val($self.find('#img').val());
			if($self.find('#js-form').valid()){
			var $obj = $(this);
			$obj.hide();
			common.fetch({
				url : '${ctx}/Article/editArticle',
				type : 'POST',
				data: $self.find("#js-form").serialize(),
				dataType : "json",
				success : function(rt) {
					if (1 == rt.ret_code) {
						common.createTab({
				               uri: '${ctx}/Article',
				               data: {name: '讲堂资讯管理'},
				               key: 'articleList',
				               callback: function(){
				                   common.closeTab("editArticle", null, false);
				               }
				           });
					} else {
						$obj.show();
					}
				}
			}); }
		});
		var editor = KindEditor.create('#editArticle_kindEditor_editArticle', {
       	 resizeType : 1,
            allowPreviewEmoticons: false,
            allowImageUpload:true,
            allowFileManager:true, 
            uploadJson:'${ctx}/upload/uploadFile1',
            afterUpload: function (url) {
                this.sync();
            },
            afterBlur: function(){this.sync();},   
            items : [
              'fontname','fontsize', '|','forecolor', 'hilitecolor','bold', 'italic','underline',
              'removeformat','|', 'justifyleft','justifycenter', 'justifyright','insertorderedlist',
              'insertunorderedlist','|', 'emoticons','link','media','|','image'
            ]
       });
		
		var action = "${ctx}/upload/uploadFile",_self = $('#editArticle'),button = _self.find('#choseFile'),interval;
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
        });
        
        $self.find('#js-form').validate({
            rules:{
            	category:{required:true},
            	title:{required:true},
            	source:{required:true},
            	author:{required:true},
            	/* keyWords:{required:true}, */
            	summary:{required:true},
            	imageurl:{required:true},
            	contents:{required:true}
                },
            messages:{
            	category:"请选择文章分类",
            	title:"请正确填写标题",
            	source:"请正确填写来源",
            	author:"请正确填写作者",
            	/* keyWords:"请正确填写关键词", */
            	summary:"请正确填写摘要",
            	imageurl:"请上传封面图片",
            	contents:"请正确填写正文"
            }
            });
	});
</script>