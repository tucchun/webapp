<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>

<div class="modal fade" id="modal_newHospital" tabindex="-1" role="dialog" aria-labelledby="newHospital" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="modal_newHospitalLabel">选择居委会</h4>
                </div>
                <div class="modal-body">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th></th>
                            <th>居委会</th>
                        </tr>
                        </thead>
                        <tbody>
                        <c:forEach items="${villages}" var="village">
	                        <tr>
	                            <td>
	                            	<c:if test="${village.showCheck}">
	                            		<input type="checkbox" name="villageCodes" value="${village.code}" <c:if test="${village.isChecked()}">checked</c:if> />
	                            	</c:if>
	                            </td>
	                            <td>${village.name}</td>
	                        </tr>
                        </c:forEach>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-main">确认</button>
                    <button class="btn btn-default" data-dismiss="modal">取消</button>
                </div>
            </div>
        </div>
    </div>
    
    <script type="text/javascript">
    var $self = $("#newServiceStation");
    $self.find('#modal_newHospital').on('click','.btn-main',function(){
        /*var checkbox = $self.find('#modal_newHospital .table input[type=checkbox]');
        var checkedValue = [],checkText = [];
        $.each(checkbox,function(index,ele){
            if($(ele).is(':checked')){
                checkedValue.push($(ele).val());
                checkText.push($(ele).parent().next().text());
            }
        });
        if(!checkText.length){
            alert('请选择居委会！');
            return false;
        }
        $self.find("input[name='area_village']").val(checkedValue.join(','));
        $self.find('label#jwh').text(checkText.join(','));*/
        checkVillage();
        $self.find('#modal_newHospital').modal('hide');
    })
    
    function checkVillage(){
    	var checkbox = $self.find('#modal_newHospital .table input[type=checkbox]');
        var checkedValue = [],checkText = [];
        $.each(checkbox,function(index,ele){
            if($(ele).is(':checked')){
                checkedValue.push($(ele).val());
                checkText.push($(ele).parent().next().text());
            }
        });
        $self.find("input[name='area_village']").val(checkedValue.join(','));
        $self.find('label#jwh').text(checkText.join(',')+">");
        if(checkText.length==0){
        	$self.find('label#jwh').text("请选择>");
        }
    };
    
    // 初始化触发
    checkVillage();
</script>