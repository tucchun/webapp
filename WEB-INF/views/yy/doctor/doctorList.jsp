<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap hospital">
    <div class="tb-head">医生列表</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <form class="form-inline" id="js-searchForm">
                        <select name="hospital" class="form-control">
                            <option value="">请选择</option>
                             <c:forEach items="${hospitalList }" var="hos" varStatus="status">
                             	<option value="${hos.code }" <c:if test="${pages.searchMap['hospital'] == hos.code}">selected</c:if> >${hos.name }</option>
                             </c:forEach>
                        </select>
                        <select name="onedepartment" id="onedepartment" class="form-control">
						</select>
						<select name="twodepartment" id="twodepartment" class="form-control">
						</select>
                        <input type="button" class="btn btn-main" id="js-search" value="查询" />
                    </form>
                </div>
                <div class="pull-right">
                    <button type="button" class="btn btn-main" id="js-create">新增</button>
                    <button type="button" class="btn btn-main" id="js-delete">删除</button>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th class="check"><input type="checkbox" name="allCheck" /></th>
                    <th class="col-sm-1">序号</th>
                    <th>医生姓名</th>
                    <th>医生等级</th>
                    <th>所属医院</th>
                    <th>所属科室</th>
                    <th>擅长疾病</th>
                    <th class="col-sm-1">操作</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${pages.content }" var="doctor" varStatus="status">
	                <tr>
	                    <td><input type="checkbox" value="${doctor.id }" name="ids"></td>
	                    <td>${status.index + 1 }</td>
	                    <td>${doctor.name }</td>
	                    <td>
	                    ${doctor.gradename}
	                    </td>
	                    <td>${doctor.hospitalname }</td>          
	                    <td>${doctor.onedepartmentname }-${doctor.twodepartmentname }</td>
	                    <td>${doctor.diseasename }</td>
	                    <td class="optCol"><a href="#" class="js-update" data-id="${doctor.id }">编辑</a></td>
	                </tr>
                </c:forEach>
                </tbody>
            </table>
            <div class="pagenation clearfix">
               <tags:pagination pageId="doctorList" paginationSize="5" action="${ctx}/Doctor" page="${pages}"></tags:pagination>
            </div>
        </div>
    </div>
</div>
<script>
require([
	'jquery', 'js/components-select','js/cascade'
],function($,select,cascade){
	var $self = $("#doctorList");
	
	$.getJSON("${ctx}/Doctor/getHospitalAndDepartmentCascade", function(data){
	    new cascade({
		    $primary: $self.find("#onedepartment"),
		    $secondary:  $self.find("#twodepartment"),
		    "primaryData": data.onedepartmentList,
		    "secondaryData": data.twodepartmentList,
		    "parentId": "parentid",
		    "defaultPrimary": "${pages.searchMap['onedepartment']}",
		    "defaultSecondary": "${pages.searchMap['twodepartment']}"
	    });
    });
	
	$self.find("#js-search").on("click", function(e){
        common.load({
            container: 'doctorList',
            url: '${ctx}/Doctor',
            data: $self.find("#js-searchForm").serialize()
        });
	});
	
	$self.find("#js-create").on("click", function(e){
		common.createTab({
			uri: '${ctx}/Doctor/create',
			data: {name: '新增医生'},
			key: 'newDoctor'
		});
	});
	
	$self.find(".js-update").on("click", function(e){
		var id = $(this).attr('data-id');
		common.createTab({
			uri: '${ctx}/Doctor/update/'+id,
			data: {name: '修改医生'},
			key: 'editDoctor'
		});
	});
	
	 $self.find("#js-delete").on("click", function(e){
		 var ids = [];
			$.each($('input[name=ids]:checked'),function(index,ele){
				ids.push($(ele).val());
			});
			var strids = ids.join(',');
			if(strids != ''){
				common.confirm({
					content:"确定要删除吗?",
					success:function(){
					    $.get("${ctx}/Doctor/delete/"+strids,function(success){
					    	 if(0 == success){
					    		 common.alert("删除失败");
					         }else if(1 == success){
					        	 common.alert("勾选的一级分类下存在二级分类，无法删除");
					         }else if(2 == success){
					        	 common.alert("删除成功");
					             $self.find("#js-confirm").trigger("click");
					         }
					    },"html");
						this.hide();
					}
				});
			}else{
				common.alert("请选择需要删除的数据");
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