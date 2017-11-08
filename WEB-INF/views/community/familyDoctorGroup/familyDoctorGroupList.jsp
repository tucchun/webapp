<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj",Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap doctorGroup">
    <div class="tb-head">辖区家庭医生组设置</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-right">
                    <button type="button" class="btn btn-main" id="js-create">新增辖区家庭医生组设置</button>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th>序号</th>
                    <th>家庭医生</th>
                    <th>护士</th>
                    <th>健康管理师</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content }" var="group" varStatus="status">
                	 <tr>
	                    <td>${status.index+1}</td>
	                    <td>${group.doctor_name }</td>
	                    <td>${group.nurse_name }</td>
	                    <td>${group.hecadre_names }</td>
	                    <td class="optCol"><a href="#" class="js-update" data-id="${group.id }">修改</a>
                        <a href="#" class="js-delete" data-id="${group.id }">删除</a></td>
	                </tr>
                </c:forEach>
                </tbody>
            </table>
          <tags:pagination pageId="familyDoctorGroupList" paginationSize="5" action="${ctx}/familyDoctorGroupList" page="${pages}"></tags:pagination>
        </div>
    </div>
</div>
<script>
require([
	'jquery','js/cascade'
],function($,cascade){
	var $self = $("#familyDoctorGroupList");
	
	$self.find("#js-create").on("click", function(e){
		common.createTab({
			uri: '${ctx}/familyDoctorGroupList/create',
			data: {name: '辖区家庭医生组设置'},
			key: 'familyDoctorGroup'
		});
	});
	
	$self.find(".js-update").on("click", function(e){
		var id = $(this).attr('data-id');
		common.createTab({
			uri: '${ctx}/familyDoctorGroupList/update/'+id,
			data: {name: '辖区家庭医生组设置'},
			key: 'familyDoctorGroup'
		});
	});

    $self.find(".js-delete").on("click", function(e){
        var id = $(this).attr('data-id');
        common.confirm({
            content:"确认删除？",
            success:function(){
                var self = this;
                common.fetch({
                    url:'${ctx}/familyDoctorGroupList/delete/'+id,
                    method:"get",
                    dataType:"text",
                    success:function(data){
                    	var jsonObj = $.parseJSON(data);
    		    		common.alert(jsonObj.ret_msg);
	    		    	if(jsonObj.ret_code == 1){
		                    $self.find("#js-confirm").trigger('click');
	    		    	}
                        self.hide();
                    }
                });
            }
        });

    });

});

</script>