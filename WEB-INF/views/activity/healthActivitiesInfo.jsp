<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }"/>

<div class="wrap">
    <div class="tb-head">健康教育活动&gt;&gt;活动详情</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="table-wrap">
                <table class="table wrap-table">
                    <tbody>
                    <tr>
                        <td>活动主题：</td>
                        <td>${serviceActivity.subject }</td>
                    </tr>
                    <tr>
                        <td>活动开始时间：</td>
                        <td>${serviceActivity.activity_timeStr }</td>
                    </tr>
                    <tr>
                        <td>活动地点：</td>
                        <td>${serviceActivity.activityPlace }</td>
                    </tr>
                    <tr>
                        <td>活动形式：</td>
                        <td>${serviceActivity.mode }</td>
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
                        <td>接受健康教育人员类别：</td>
                        <td>${serviceActivity.user_crowdStr }</td>
                    </tr>
                    <tr>
                        <td>接受健康教育人数：</td>
                        <td>${serviceActivity.activity_people_count }</td>
                    </tr>
                    
                    <tr>
                        <td>发放折页数量：</td>
                        <td>${serviceActivity.fold_count }</td>
                    </tr>
                    <tr>
                        <td>发放小册子数量：</td>
                        <td>${serviceActivity.booklet_count }</td>
                    </tr>
                    <tr>
                        <td>发放其他资料数量：</td>
                        <td>${serviceActivity.other_paper_count }</td>
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
        var $self = $("#healthActivitiesInfo")
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