<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap clinicList">
    <div class="tb-head">交流圈内容管理</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt">
                <button class="btn btn-main" type="button" id="js-delete">删除</button>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th class="check"><input type="checkbox" name="allCheck" /></th>
                    <th class="col-xs-1">序号</th>
                    <th >帖子内容</th>
                    <th>发表者</th>
                    <th>发表时间</th>
                    <th>所属圈子</th>
                    <th>圈主</th>
                </tr>
                </thead>
                <tbody>
				<c:forEach items="${pages.content }" var="cc" varStatus="status">
                <tr>
                    <td><input type="checkbox" value="${cc.postsId }" name="cids"></td>
                    <td>${status.index + 1 }</td>
                    <td width="30%"  style="word-break:break-all;">${cc.postsTitle } ${cc.postsContent }</td>
                    <td>${cc.userName }</td>
                    <td>${cc.time }</td>
                    <td>${cc.circleName }</td>
                    <td>${cc.circleUserName }</td>
                </tr>
                </c:forEach>
                </tbody>
            </table>
             <div class="pagenation clearfix">
               <tags:pagination pageId="CirclePosts" paginationSize="5" action="${ctx}/CirclePosts" page="${pages}"></tags:pagination>
            </div>
        </div>
    </div>
</div>
<script>
require([
	'jquery'
],function($){
	var $self = $("#CirclePosts");
	 $self.find("#js-delete").on("click", function(e){
		var ids = [];
		$.each($('input[name=cids]:checked'),function(index,ele){
			ids.push($(ele).val());
		});
		var strids = ids.join(',');
		if(strids != ''){
		common.confirm({
			content:"确定要删除吗?",
			success:function(){
				$.get("${ctx}/CirclePosts/delete/"+strids,function(success){
					 success = JSON.parse(success);
			    	 if(2 == success.ret_code){
			    		 common.alert(success.ret_msg);
			         }else{
			        	 common.alert(success.ret_msg);
			             $self.find("#js-confirm").trigger("click");
			         }
			    },"html");
				this.hide();
			}
		});
		}else{
			common.alert("请选择需要删除的留言");
		}
	   
    });
	 
	 $self.on('click','input[name=allCheck]',function(){
         var obj_checkbox = $self.find('table tbody input[type=checkbox]');
         if(this.checked){
             $(obj_checkbox).prop('checked','checked');
         }else{
             $(obj_checkbox).prop('checked','');
         }
     });
	
});
</script>