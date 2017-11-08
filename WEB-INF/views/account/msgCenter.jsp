<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.newcare.fnd.pojo.Notice"%>
<%@page import="java.util.List"%>
<%@page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="com.newcare.constant.Constants" %>
<%@ page import="com.newcare.fnd.enums.NoticeType" %>
<%@ page import="com.newcare.fnd.enums.SourceType" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags" %>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<html>
<head>
	<title>通知中心</title>
</head>
<body>
	<div class="wrap msgCenter">
    <div class="tb-head">通知中心</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <ul>
            	<%
            	SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");   
        		List<Notice> listNotice = (List<Notice>) request.getAttribute("notice");
            	if(listNotice.isEmpty()){
            		%>
            		<p align="center">暂无消息</p>
            	<%	
            	}
        		for(Notice record: listNotice){
        			String name = NoticeType.getNameByType(SourceType.WEBADMIN.getCode(), record.getType());
        			String content = record.getContent();
        			%>
        			<li>
                    <p><%=name%><span><%=df.format(record.getCreateDate())%><i class="icon icon-sanjiao icon-rote"></i></span></p>
        			<p><%=content%></p>
        			</li>
        		<%	
        		}
        	%>
            </ul>
        </div>
    </div>
    <script type="text/javascript">
        require(['jquery'],function ($) {
            var _self = $('#msgCenter');
            _self.find('li').on('click',function(event){
                _self.find('li').removeClass('active');
                _self.find('li p:last-child').hide();
                _self.find('li .icon-sanjiao').addClass('icon-rote');
                $(this).addClass('active');
                $(this).find('p').show();
                $(this).find('.icon-sanjiao').removeClass('icon-rote');
            });
            
            _self.find(".js-audit").on("click", function(e){
                var id = $(this).attr('data-id');
                $.get("${ctx}/msgCenter/update/"+id,function(html){
                    $("#div_include_modalCenter").html(html);
                    $("#modal_msgCenterInfo").modal('show');
                },"html");
            });	
        });
    </script>
</div>
<div id="div_include_modalCenter">
    <jsp:include page="msgCenterInfo.jsp" flush="true" />
</div>
</body>
</html>
