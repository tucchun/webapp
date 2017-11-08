<%@tag import="com.newcare.fnd.pojo.Lookup"%>
<%@ tag import="java.util.ArrayList" %>
<%@ tag import="org.apache.commons.lang3.StringUtils" %>
<%@tag pageEncoding="UTF-8"%>
<%@ attribute name="list" type="java.util.List" required="true"%>
<%@ attribute name="value" type="java.lang.String" required="false"%>
<%@ attribute name="name" type="java.lang.String" required="true"%>
<%@ attribute name="addNull" type="java.lang.Boolean" required="false"%>


<select name="<%=name%>" class="form-control">
<%
	String emptySelect = "请选择";
	if(list==null){
		list = new ArrayList<Lookup>();
	}
	String selected = "";
	if(addNull!=null && addNull){
		Lookup tmpLookup = new Lookup();
		tmpLookup.setLookup_value(emptySelect);
		list.add(0,tmpLookup);
	}
	for(int i = 0 ;i <list.size();i++){
		Lookup select = (Lookup)list.get(i);
		if(value!=null && StringUtils.isNotBlank(select.getLookup_value())) {
            selected = select.getLookup_value().equals(value)? "selected" : "";
        }
		%>
		<option value="<%=emptySelect.equalsIgnoreCase(select.getLookup_value())?"":select.getLookup_value()%>" <%=selected %> >
			<%= select.getLookup_value() %>
		</option>		
		<%
	}
%>
</select>
