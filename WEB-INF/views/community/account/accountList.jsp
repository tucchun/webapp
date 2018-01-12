<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap communityUser">
    <div class="tb-head">账户管理</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <form action="#" class="form-inline" id="js-searchForm">
                        <input type="text" class="form-control" placeholder="请输入姓名/账户名" name="staffName" value="${pages.searchMap['staffName']}"/>
                        <tags:selectboxMapper name="staffRole" list="${staffRoles}" value="${pages.searchMap['staffRole']}" emptyTitle="请选择角色" addNull="true"/>
                        <input type="button" class="btn btn-main" value="查询" id="btn-search"/>
                    </form>
                </div>
                <div class="pull-right">
                    <button type="button" class="btn btn-main" id="js-create">添加</button>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th>姓名</th>
                    <th>账户名</th>
                    <th>角色</th>
                    <th>机构</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                
                <c:forEach items="${pages.content}" var="staff" varStatus="status">
                <tr>
                    <td>${staff.staffName }</td>
                    <td>${staff.user.loginName }</td>
                    <td>${staff.decodeRole }</td>
                    <td>${staff.organizationName }</td>
                    <td>
                        <button type="button" class="btn btn-main js-update" data-id="${staff.staffId}">修改</button>
                        <button type="button" class="btn btn-main js-delete" data-id="${staff.staffId}">删除</button>
                    </td>
                </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/account" pageId="account" />
        </div>
    </div>
</div>
<script>
    require([
        'jquery'
    ],function($){
        var $self = $("#account");
        // 添加
        $self.find("#js-create").on("click", function(e){
            common.createTab({
                uri: '${ctx}/account/create',
                data: {name: '新增账户'},
                key: 'newAccount'
            });
        });

        // 修改
        $self.find(".js-update").on("click", function(e){
            var id = $(this).attr('data-id');
            common.createTab({
                uri: "${ctx}/account/update/"+id,
                data: {name: '修改账户'},
                key: 'newAccount'
            });
        });
        // 删除
        $self.find(".js-delete").on("click",function(e){
            var id = $(this).attr('data-id');

            common.confirm({
                content:"确认删除？",
                success:function(){
                    var self = this;
                    $.get("${ctx}/account/delete/"+id,function(data){
                        common.alert(data.ret_msg);
                        $self.find("#js-confirm").trigger('click');
                        self.hide();
                    },"json");
                }
            });
        });
        
        // 搜索
        $self.find("#btn-search").on('click',function(){
            common.load({
                container: 'account',
                url: '${ctx}/account',
                data: $self.find("#js-searchForm").serialize()
            });
        });
    });
</script>