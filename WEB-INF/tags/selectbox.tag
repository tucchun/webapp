<%@tag import="com.newcare.fnd.pojo.Lookup"%>
<%@ tag import="java.util.ArrayList" %>
<%@tag pageEncoding="UTF-8"%>
<%@ attribute name="list" type="java.util.List" required="true"%>
<%@ attribute name="value" type="java.lang.String" required="false"%>
<%@ attribute name="name" type="java.lang.String" required="true"%>
<%@ attribute name="addNull" type="java.lang.Boolean" required="false"%>
<%@ attribute name="emptyTitle" type="java.lang.String" required="false"%>

<select name="<%=name%>" class="form-control" id="<%=name%>">
<%
	if(list==null){
		list = new ArrayList<Lookup>();
	}
    String selected = "";
    if(addNull!=null && addNull){
		Lookup tmpLookup = new Lookup();
		tmpLookup.setLookup_code("");
		tmpLookup.setLookup_value(emptyTitle==null?"请选择":emptyTitle);
		list.add(0,tmpLookup);
    }
	for(int i = 0 ;i <list.size();i++){
		Lookup select = (Lookup)list.get(i);
		if(select.getLookup_code()!=null) {
			selected = select.getLookup_code().equalsIgnoreCase(value) ? "selected" : "";
		}
		%>
		<option value="<%=select.getLookup_code()%>" <%=selected %> >
			<%= select.getLookup_value() %>
		</option>		
		<%
	}
%>
</select>
