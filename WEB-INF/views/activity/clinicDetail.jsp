<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }"/>

<div class="wrap clinicDetail">
    <div class="tb-head">义诊管理&gt;&gt;义诊详情</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="table-wrap">
                <table class="table wrap-table table-bordered">
                    <tbody>
                    <tr>
                        <td>主题：</td>
                        <td>${serviceActivity.subject }</td>
                    </tr>
                    <tr>
                        <td>活动开始时间：</td>
                        <td>${serviceActivity.activity_timeStr }</td>
                    </tr>
                    <tr>
                        <td>地点：</td>
                        <td>${serviceActivity.activityPlace }</td>
                    </tr>
                    <tr>
                        <td>组织者：</td>
                        <td>${serviceActivity.organizer_name }</td>
                    </tr>
                    <tr>
                        <td>参与健康管理师：</td>
                        <td>${serviceActivity.hecadres }</td>
                    </tr>
                    <tr>
                        <td>参与人数：</td>
                        <td>${serviceActivity.activity_people_count }</td>
                    </tr>
                    <tr>
                        <td>参与人群：</td>
                        <td>${serviceActivity.user_crowdStr }</td>
                    </tr>
                    <tr>
                        <td>参与人员：</td>
                        <td>${serviceActivity.persons }</td>
                    </tr>
                    <tr>
                        <td>医师：</td>
                        <td>${serviceActivity.doctors }</td>
                    </tr>
                	<tr>
	                    <td>总结：</td>
	                    <td>${serviceActivity.activitySum }</td>
                	</tr>
                	<tr>
                        <td>活动照片：</td>
                        <td>
                   			<div class="col-sm-10 imglist clearfix">
	                            <ul id="js-images" class="imgage-viewer">
		    	                <c:forEach items="${serviceActivity.picture_url_arr }" var="picture_url" varStatus="status">
	                                <li><img class="form-img" src="${picture_url}"></li>
	                   			</c:forEach>
	                            </ul>
	                        </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<script>
    require(['viewer'], function(Viewer){
        var $self = $("#clinicDetail")
        var $imagesCnt = $self.find("#js-images");
        var $images = $imagesCnt.find("img");
        $images.each(function(index, item){
            var $this = $(this);
            var width = $this.width();
            var height = $this.height();
            if(width > height){
                $this.width("auto");
                $this.height("100%");
            }else{
                $this.width("100%");
                $this.height("auto");
            }
        });

        var viewer = new Viewer($imagesCnt.get(0), {});
    });
</script>