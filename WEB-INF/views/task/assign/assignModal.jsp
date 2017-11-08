<%@page import="com.newcare.fnd.pojo.Lookup"%>
<%@page import="com.newcare.doc.pojo.Staff"%>
<%@ page import="com.newcare.constant.Constants" %>
<%@ page import="java.util.List" %>
<%@ page import="com.newcare.task.pojo.TaskAssign" %>
<%@ page import="com.newcare.task.vo.TaskAssignVO" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div id="modal_communityTasklist" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title" id="modal_communityLabel">新增任务指标</h4>
            </div>
            <div class="modal-body">
                <form action="#" id="js-form">
                	<c:if test="${ta != null}">
                	<input type="hidden" name="assignId" value="${ta.id}">
                	</c:if>
                    <table class="table table-bordered">
                        <tr>
                            <td class="col-sm-2">健康管理师</td>
                            <td>
                            	<c:if test="${ta != null}">
                            		<p><label>${ta.staffName}</label></p>
                            	</c:if>
                            	<c:if test="${ta == null}">
                                <p><label><input type="checkbox" id="chk-subs">所有健康管理师</label></p>
                                <p>
                                	<c:forEach items="${hecadreList}" var="stf" varStatus="status">
                                		<label><input type="checkbox" class="chk-sub" name="userId" value="${stf.userId}" >${stf.staffName}</label>
                                	</c:forEach>
								</p>
								</c:if>
                            </td>
                        </tr>
                        <tr>
                            <td>任务周期</td>
                            <td>
                            	<c:if test="${ta != null}">
                            		<fmt:formatDate value="${ta.periodStart}" pattern="MM月dd日"/>-<fmt:formatDate value="${ta.periodEnd}" pattern="MM月dd日"/>
                            	</c:if>
                            	<c:if test="${ta == null}">
	                                <table>
	                                    <tr>
	                                        <td><label><input class="radio-period" type="radio" name="periodPlan" value="1" checked>当周计划</label></td>
	                                        <td><label><input class="radio-period" type="radio" name="periodPlan" value="2" >下周计划<span class='period'></span></label></td>
	                                        <td><label class="label-period"></label></td>
	                                    </tr>
	                                    <tr>
	                                        <td><label><input class="radio-period" type="radio" name="periodPlan" value="3" >当月计划</label></td>
	                                        <td><label><input class="radio-period" type="radio" name="periodPlan" value="4" >下月计划<span class='period'></span></label></td>
	                                        <td><label class="label-period"></label></td>
	                                    </tr>
	                                </table>
	                         	</c:if>
                            </td>
                        </tr>
                    </table>
                    <table class="table table-bordered">
                        <tr>
                            <td colspan="2" class="left">任务指标</td>
                        </tr>
                        <tr>
                            <td class="col-sm-3">建档数:</td>
                            <td><input type="number" min="0" name="numDoc" class='num-doc' value="${ta.numDoc}">人</td>
                        </tr>
                        <tr>
                            <td>随访数:</td>
                            <td><input type="number" min="0" name="numVisit" class='num-visit' value="${ta.numVisit}">人</td>
                        </tr>
                        <tr>
                            <td>签约家庭医生数:</td>
                            <td><input type="number" min="0" name="numFdc" class='num-fdc' value="${ta.numFdc}">人</td>
                        </tr>
                    </table>
                </form>
                <div class="operation">
                	<c:if test="${action eq 'create'}">
                    	<button class="btn btn-main" type="submit" id="btn-save">保存</button>
                    </c:if>
                    <c:if test="${action eq 'update'}">
                    	<button class="btn btn-main" type="submit" id="btn-update">保存</button>
                    </c:if>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    require([
        'jquery'
    ],function($){
    	$self = $("#taskAssignList");
    	
    	// 设置时间段显示
    	function showPeriod() {
    		$("label.label-period").html("");
    		
    		var pt = $(".radio-period:checked").val();
    		var firstDay = new Date(), lastDay = new Date();
    		var curr = new Date();
    		if(pt == 1) { // 1 当周
    			var first = curr.getDate() - curr.getDay() + 1;
    			var last = first + 6;
    			
    			firstDay.setDate(first);
    			lastDay.setDate(last);
    		} else if(pt == 2) { // 2 下周
    			var first = curr.getDate() - curr.getDay() + 8;
    			var last = first + 6;
    			
    			firstDay.setDate(first);
    			lastDay.setDate(last);
    		} else if(pt == 3) { // 3 当月
    			firstDay = new Date(curr.getFullYear(), curr.getMonth(), 1);
    			lastDay = new Date(curr.getFullYear(), curr.getMonth() + 1, 0);
    		} else { // 4 下月
    			firstDay = new Date(curr.getFullYear(), curr.getMonth() + 1, 1);
    			lastDay = new Date(curr.getFullYear(), curr.getMonth() + 2, 0);
    		}
    		
    		var start = (firstDay.getMonth() + 1) + "月" + firstDay.getDate() + "日",
    		    end = (lastDay.getMonth() + 1) + "月" + lastDay.getDate() + "日";

    		var trObj = $(".radio-period[value='" + pt + "']").closest("tr");
    		trObj.find("label.label-period").html(start + "-" + end);
    	}
    	
    	$(".radio-period").change(showPeriod);
    	showPeriod(); // 加载页面时显示
    	
    	// 勾选所有健康管理师
    	$("#chk-subs").click(checkAllSubs);
    	function checkAllSubs() {
    		var self = $(this);
    		if(document.getElementById('chk-subs').checked) {
    			self.closest("td").find('.chk-sub').prop('checked', true);
    		} else {
    			self.closest("td").find('.chk-sub').prop('checked', false);
    		}
    	}
    	
    	$(".chk-sub").click(toggleCheckAll);
    	function toggleCheckAll() {
    		var self = $(this);
    		if(!self.prop("checked")) {
    			$("#chk-subs").prop('checked', false);
    		}
    	};

    	$("#btn-save, #btn-update").click(function() {
    		if("${action}" == "create") {
                var hasSub = false;
                var chksubs = $("#js-form .chk-sub");
                for(var i = 0; i < chksubs.length; i++) {
                    if(chksubs[i].checked) hasSub = true;
                }
                if(!hasSub) {
                    common.alert("请选择需要指派任务的健康管理师!", function(){
                        $(document.body).addClass("modal-open")
                    });
                    return false;
                }
			}
    		
    		if($self.find('#js-form').valid()){
                common.post({
                    url: '${ctx}/taskAssign/${action}',
                    data: $self.find("#js-form").serialize(),
                    dataType: 'json',
                    modal: $self.find("#modal_communityTasklist")
                }).done(function(data){
                    // var jsonObj = $.parseJSON(data);
                    if(data.ret_code == 1 ){
                        $self.find("#js-confirm").trigger("click");
                    } else {
                        common.alert(data.ret_msg);
                    }
                }).fail(function(error){
                    console.log(error)
                });
            }
    	});

        $self.find('#js-form').validate({
            rules:{
                numDoc:{required:true,digits:true,range:[0,1000000]},
                numVisit:{required:true,digits:true,range:[0,1000000]},
                numFdc:{required:true,digits:true,range:[0,1000000]}
            },
            messages:{
            	numDoc:{required:'建档人数不能为空'},
                numVisit:{required:'随访数不能为空'},
                numFdc:{required:'签约家庭医生数不能为空'}
            }
        });
    });

</script>















