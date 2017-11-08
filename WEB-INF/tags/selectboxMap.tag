<%@tag import="org.springframework.web.servlet.support.RequestContextUtils"%>
<%@tag import="java.util.HashMap" %>
<%@tag import="java.util.Map" %>
<%@tag pageEncoding="UTF-8"%>
<%@ attribute name="name" type="java.lang.String" required="true"%>
<%@ attribute name="id" type="java.lang.String" required="false"%>
<%@ attribute name="value" type="java.lang.String" required="false"%>
<%@ attribute name="list" type="java.util.Map" required="false"%>
<%@ attribute name="emptyTitle" type="java.lang.String" required="false"%>
<%@ attribute name="addNull" type="java.lang.Boolean" required="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%
	if(addNull == null){
		addNull = false;
	}
%>
<select name="<%=name %>" id="<%=name %>" class="form-control">
	<%	
		String selected = "";
		if(list==null){
			list = new HashMap<String,Object>();
		}
	 	if(addNull!=null && addNull){
	 		String select = emptyTitle==null?"请选择":emptyTitle;
			list.put("", select);
	    }
		for(Object key : list.keySet()){
			selected = key.toString().equalsIgnoreCase(value) ? "selected" : "";
		%>
			<option value="<%=key %>" <%=selected %>><%=list.get(key) %></option>
		<%
		}
	%>
</select>