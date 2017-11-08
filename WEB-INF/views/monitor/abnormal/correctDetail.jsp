<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap">
    <div class="tb-head">异常数据数据监控&gt;&gt;详情</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <form action="#">
                <table class="table wrap-table">
                    <tbody>
                     <tr>
                        <td colspan="2" style="text-align: left;">姓名：${ad.realName }     性别：${ad.sex }    年龄：${ad.age }      民族：${ad.residentNation }   <a href="#" class="js-view" data-id="${ad.userId }">健康档案</a></td>
                    </tr>
                    <tr>
                        <td>异常数据表单:</td>
                         <td>${ad.oldNotes }</td>
                    </tr>
                    <tr>
                        <td>表单创建时间:</td>
                        <td>${ad.oldTime }</td>
                    </tr>
                    <tr>
                        <td>数据异常项:</td>
                       <td>${ad.oldColumnNotes }：${ad.oldColumnValue }</td>
                    </tr>
                    <tr>
                        <td>修正数据值：</td>
                        <td>
                            <div class="col-sm-5">${ad.oldNewValue }</div>
                        </td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td>异常数据表单:</td>
                         <td>${ad.newNotes }</td>
                    </tr>
                    <tr>
                        <td>表单创建时间:</td>
                        <td>${ad.newTime }</td>
                    </tr>
                    <tr>
                        <td>数据异常项:</td>
                       <td>${ad.newColumnNotes }：${ad.newColumnValue }</td>
                    </tr>
                    <tr>
                        <td>修正数据值：</td>
                        <td>
                            <div class="col-sm-5">${ad.newNewValue }</div>
                        </td>
                    </tr>
                    <tr>
                        <td>备注:</td>
                        <td>${ad.content }</td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
</div>

<script>
    require([
        'jquery'
    ], function($){
        var $self = $("#correctDetail");
        $self.find(".js-view").on("click", function(e){
            var id = $(this).attr('data-id');
            common.createTab({
                uri: '${ctx}/resident/view/'+id,
                data: {name: '健康档案'},
                key: 'healthRecord'
            });
        });
    });
</script>