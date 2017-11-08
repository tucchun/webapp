<%@tag import="org.springframework.web.servlet.support.RequestContextUtils"%>
<%@ tag import="com.newcare.select.pojo.Select" %>
<%@ tag import="java.util.ArrayList" %>
<%@tag pageEncoding="UTF-8"%>
<%@ attribute name="name" type="java.lang.String" required="true"%>
<%@ attribute name="id" type="java.lang.String" required="false"%>
<%@ attribute name="list" type="java.util.List" required="true"%>
<%@ attribute name="value" type="java.lang.String" required="false"%>
<%@ attribute name="emptyTitle" type="java.lang.String" required="false"%>
<%@ attribute name="addNull" type="java.lang.Boolean" required="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%
	if(addNull == null){
		addNull = false;
	}
	if(id == null){
		id = name;
	}
%>

<select name="<%=name %>" id="<%=id %>" class="form-control">
	<%
		if(list==null){
			list = new ArrayList<Select>();
		}
		if(addNull!=null && addNull){
		    list.add(0,new Select("",emptyTitle==null?"请选择":emptyTitle,""));
		}
		if(list!=null && list.size()>0){
		    for(int i = 0;i<list.size();i++){
				Select select = (Select)list.get(i);
				String selected = "";
				if(select.getId() !=null && value!=null){
				    selected =select.getId().equalsIgnoreCase(value)?"selected":"";
				}
				%>

						<option value="<%=select.getId()%>" <%=selected%>><%=select.getValue()%></option>
				<%
						}
					}
		// 移除请选择避免多次使用出现多个请选择
		if(list!=null && list.size()>0&&addNull){
			list.remove(0);
		}
				%>
</select>