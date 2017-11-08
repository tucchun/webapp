<%@tag import="org.springframework.web.servlet.support.RequestContextUtils"%>
<%@ tag import="com.newcare.constant.Constants" %>
<%@tag pageEncoding="UTF-8"%>
<%@ attribute name="page" type="com.newcare.core.pagination.Page" required="true"%>
<%@ attribute name="paginationSize" type="java.lang.Integer" required="false"%>
<%@ attribute name="action" type="java.lang.String" required="true"%>
<%@ attribute name="pageId" type="java.lang.String" required="true"%>
<%@ attribute name="table_id" type="java.lang.String" required="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<%
	if(paginationSize == null){
		paginationSize = 5;
	}
	int current = page.getPageNumber();
	int begin = Math.max(1, current - paginationSize / 2);
	int end = Math.min(begin + (paginationSize - 1), page.getPageCount());
	request.setAttribute("current", current);
	request.setAttribute("begin", begin);
	request.setAttribute("end", end);
	
%>


<div class="pagenation clearfix">

	<%
				if (page.hasPrevious()) {
			%>
				<a  href="#" class="js-doPage active" data-page="1">首页</a>
				<a href="#" class="js-doPage" data-page="${current-1}" >上一页</a>
			<%
				} else {
			%>
				<span>首页</span>
				<span>上一页</span>
			<%
				}
			%>
		<c:forEach var="i" begin="${begin}" end="${end}">
				<c:choose>
					<c:when test="${i == current}">
						<span>${i}</span>
					</c:when>
					<c:otherwise>
						<a href="#" class="js-doPage" data-page="${i}">${i}</a>
					</c:otherwise>
				</c:choose>
			</c:forEach>
			<%
				if (page.hasNext()) {
			%>
			<a href="#" class="js-doPage" data-page="${current+1}" >下一页</a>
			<a href="#" class="js-doPage" data-page="${page.pageCount}">末页</a></li>
			<%
				} else {
			%>
			<span>下一页</span>
			<span>末页</span>
			<%
				}
			%>
                <form action="#" method="post" id="pageForm" onsubmit="return false;">
                    <span>共<%=page.getTotal()%>条 <%=(int)((page.getTotal()-1)/page.getPageSize()+1) %>页</span>
                    <span>到第<input type="text" id="pageNumber" name="pageNumber" value="${page.pageNumber }">页
                     <input type="button" class="btn btn-main js-doPage" id="js-confirm"  value="确定"  data-page="-1"/></span>
                </form>
            </div>
            
<script type="text/javascript">
 require([
	"jquery"
], function($){
	 
	var $self = $("#${pageId}" );
 	$self.find(".js-doPage").on("click", function(e){
 		// 判断是不是正整数
 		var re = /^[0-9]+$/;
 		if(!re.test($self.find("#pageNumber").val())){
 			$self.find("#pageNumber").val(1);
 		}
 		// -1 表示来自确定按钮的点击。 
 		if($(e.target).data("page") != -1){
	 		$self.find("#pageNumber").val($(e.target).data("page"));
 		}
 		var container = '${table_id}' || '${pageId}';

 		var url = "${action}";
 		var _search = encodeURI("${search}");
 		if(url.indexOf("?")>0){
 			url += "&"+_search;
 		}else{
 			url += "?"+_search;
 		}
 		url += "&t="+new Date().getTime();
		common.load({
			container: container,
			url: url,
			data:  $self.find("#pageForm").serialize(),
			callback: function(data){
				//console.log(data)
			}
		});
 	} )
}); 
 
</script>
