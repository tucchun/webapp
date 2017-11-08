<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap roleManager">
  <div class="tb-head">角色管理</div>
  <div class="tb-content">
    <div class="tb-wrap">
      <div class="opt">
        <button class="btn btn-main" type="button" id="js-create">添加</button>
      </div>
      <table cellspacing="0" class="table table-striped table-hover table-bordered">
        <tbody>
        <tr>
          <td>序号</td>
          <td>角色</td>
          <td>角色类型</td>
          <td>角色描述</td>
          <td>修改时间</td>
          <td>操作</td>
        </tr>
        <c:forEach var="role" items="${pages.content}" varStatus="status" >
        <tr>
          <td>${status.index+1}</td>
          <td>${role.name}</td>
          <td>${role.roleTypeStr}</td>
          <td>${role.description}</td>
          <td><fmt:formatDate value="${role.lastModifyDate}" pattern="yyyy-MM-dd"/> </td>
          <td><button class="btn btn-main js-update" type="button" data-id="${role.id}">修改</button>
          <button class="btn btn-main js-delete" type="button" data-id="${role.id}">删除</button></td>
        </tr>
        </c:forEach>
        </tbody>
      </table>
     
    </div>
  </div>
  <tags:pagination page="${pages}" paginationSize="5" action="${ctx}/role" pageId="role" />

</div>


<div id="div_include_roleManager">
  <jsp:include page="roleModal.jsp" flush="true" />
</div>

<script>
    require([
        'jquery'
    ],function($){
        var $self = $("#role");

        $self.find("#js-create").on("click", function(e){
            $.get("${ctx}/role/create",function(html){
                $self.find("#div_include_roleManager").html(html);
                $self.find("#modal_roleManager").modal("show");
            },"html");
        });

        $self.find(".js-update").on("click", function(e){
            var id = $(this).attr('data-id');
            $.get("${ctx}/role/update/"+id,function(html){
                $self.find("#div_include_roleManager").html(html);
                $self.find("#modal_roleManager").modal("show");
            },"html");
        });

        $self.find(".js-delete").on("click", function(e){
            var id = $(this).attr('data-id');
			common.fetch({
				url:'${ctx}/role/checkDelete/'+id,
				type: "get",
				dataType:'json',
				success:function(data){
					if(data.ret_code==1){
						common.confirm({
			                content:"确认删除？",
			                success:function(){
			                    var self = this;
			                    $.get("${ctx}/role/delete/"+id,function(data){
			                        common.alert(data.ret_msg);
			                        $self.find("#js-confirm").trigger("click");
			                        self.hide();
			                    },"json");
			                }
			            });
					}else{
						common.alert(data.ret_msg);
					}
				}
			})

        });

    });

</script>