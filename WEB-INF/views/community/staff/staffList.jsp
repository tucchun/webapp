<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap communityUser">
    <div class="tb-head">社区卫生站人员管理</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <form action="#" class="form-inline" id="js-searchForm">
                        <input type="text" class="form-control" placeholder="请输入姓名" name="staffName" value="${pages.searchMap['staffName']}"/>
                        <tags:selectboxMapper name="position" id="positionId" list="${positions}" value="${pages.searchMap['position']}" emptyTitle="请选择职务" addNull="true"/>
                        <tags:selectboxMapper name="staffRole" list="${staffRoles}" value="${pages.searchMap['staffRole']}" emptyTitle="请选择角色" addNull="true"/>
                        <input type="button" class="btn btn-main" value="查询" id="btn-search"/>
                    </form>
                </div>
                <div class="pull-right">
                	<c:if test="${organization.isStation}">
                    <button type="button" class="btn btn-main" id="js-create">添加</button>
                    </c:if>
                </div>
            </div>
            <table cellspacing="0" class="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>学历</th>
                    <th>单位</th>
                    <th>科室</th>
                    <th>职务</th>
                    <th>职称</th>
                    <th>全/兼职</th>
                    <th>所属角色</th>
                    <th>手机号码</th>
                    <th>绑定ID</th>
                    <th>创建时间</th>
                    <th>最近登录时间</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                
                <c:forEach items="${pages.content}" var="staff" varStatus="status">
                <tr>
                    <td>${status.index+1 }</td>
                    <td>${staff.staffName }</td>
                    <td>${staff.decodeSex }</td>
                    <td>${staff.staffAge }</td>
                    <td>${staff.decodeEducation }</td>
                    <td>${staff.organizationName}</td>
                    <td>${staff.decodeDepartment }</td>
                    <td>${staff.decodePosition }</td>
                    <td>${staff.decodeTitle }</td>
                    <td>${staff.decodeFulltimeWork }</td>
                    <td>${staff.decodeRole}</td>
                    <td>${staff.staffMobile }</td>
                    <td>${staff.staffDeviceid }</td>
                    <td><fmt:formatDate value="${staff.staffRegisterDate}" pattern="yyyy-MM-dd"/> </td>
                    <td><fmt:formatDate value="${staff.user.lastLogin}" pattern="yyyy-MM-dd HH:mm:ss"/></td>
                    <td>
                    	<c:if test="${ !staff.isAdmin() }">
                    	<c:if test="${organization.isStation}">
                        <button type="button" class="btn btn-main js-update" data-id="${staff.staffId}">修改</button>
                        <button type="button" class="btn btn-main js-delete" data-id="${staff.staffId}">删除</button>
                        </c:if>
                        <c:if test="${not empty staff.staffDeviceid }">
                        	<button type="button" class="btn btn-main js-unbind" data-id="${staff.userId}">解绑</button>
                        </c:if>
                        </c:if>
                    </td>
                </tr>
                </c:forEach>
                </tbody>
            </table>
            <tags:pagination page="${pages}" action="${ctx}/staff" pageId="staff" />
        </div>
    </div>
</div>
<script>
    require([
        'jquery'
    ],function($){
        var $self = $("#staff");
        // 添加
        $self.find("#js-create").on("click", function(e){
            common.createTab({
                uri: '${ctx}/staff/create',
                data: {name: '新增社区卫生站用户'},
                key: 'newStaff'
            });
        });

        // 修改
        $self.find(".js-update").on("click", function(e){
            var id = $(this).attr('data-id');
            common.createTab({
                uri: "${ctx}/staff/update/"+id,
                data: {name: '修改社区卫生站用户'},
                key: 'newStaff'
            });
        });
        // 删除
        $self.find(".js-delete").on("click",function(e){
            var id = $(this).attr('data-id');
            $.get("${ctx}/staff/deleteCheck/"+id,function(data){
            	if(data.ret_code==2){
            		common.alert(data.ret_msg);
            	}else{
            		common.confirm({
                        content:"确认删除？",
                        success:function(){
                            var self = this;
                            $.get("${ctx}/staff/delete/"+id,function(data){
                                common.alert(data.ret_msg);
                                $self.find("#js-confirm").trigger('click');
                                self.hide();
                            },"json");
                        }
                    });
            	}
            },"json");
            
        });
        // 解绑
        $self.find(".js-unbind").on("click",function(e){
            var id = $(this).attr('data-id');

            common.confirm({
                content:"确认解绑？",
                success:function(){
                    var self = this;
                    $.get("${ctx}/staff/unbind/"+id,function(data){
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
                container: 'staff',
                url: '${ctx}/staff',
                data: $self.find("#js-searchForm").serialize()
            });
        });
    });
</script>