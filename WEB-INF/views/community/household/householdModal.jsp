<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj",Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />


    <div id="modal_newHousehold" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="modal_newHouseholdLabel">添加门牌号</h4>
                </div>
                <div class="modal-body">
                    <form action="#" id="js-form-detail" class="form-inline">
                        <!-- 防止删除被覆盖掉detail -->
                        <input type="hidden" name="tmpHeaderId" value="${household.headerId}">
                        <input type="hidden" name="buildingId" value="${household.buildingId}">
                        <table class="table table-bordered">
                            <tr>
                                <td class="col-sm-2">小区：</td>
                                <td class="col-sm-10">
                                    ${household.headerBuildingName}
                                        <input type="text" size="5" placeholder="栋" class="form-control" name="headerBuildingNo" value="${household.headerBuildingNo }"><label></label>
                                        <input type="text" size="5" placeholder="单元" class="form-control" name="headerBuildingUnit" value="${household.headerBuildingUnit }">
                                </td>
                            </tr>

                            <tr>
                                <td>门牌号：</td>
                                <td>
                                    <ul class="clearfix" id="js_houseNumber">
                                        <c:forEach items="${household.details}" var="detail" varStatus="status">
                                            <li class="pull-left">
                                                <input type="text" name="details[${status.index}].detail_household_no" value="${detail.detail_household_no}">
                                                <input type="hidden" name="details[${status.index}].detail_id" value="${detail.detail_id}">
                                                <c:if test="${detail.canDelete}">
                                                    <a href="#" class="js-del" >删除</a>
                                                </c:if>
                                            </li>
                                        </c:forEach>
                                        <li class="pull-left"><a href="#" class="js-add btn btn-main">添加</a></li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                        <div class="operation">
                            <button class="btn btn-main" type="button" id="js-submit-detail" data-dismiss="modal" aria-hidden="true">保存</button><button class="btn btn-cancel" type="button" data-dismiss="modal" aria-hidden="true">取消</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
<script>
    require([
        'jquery','validate','message_zh'
    ],function($){
        var $self = $("#newHousehold");

        var detailIndex = ${household.details.size()};
        // 添加
        $("#js_houseNumber").on("click", ".js-add", function(e){
            $(this).parent().before('<li class="pull-left"><input type="text" id="newDetail_'+detailIndex+'" name="details['+detailIndex+'].detail_household_no" value=""><input type="hidden" name="details['+detailIndex+'].detail_id" value=""><a href="#" class="js-del">删除</a></li>');
            $self.find('#newDetail_'+detailIndex).rules("add",{required:true,maxlength:20});
            $self.find('#newDetail_'+detailIndex).focus();
            detailIndex++;
        }).on("click", '.js-del', function(e){
            $(this).parent().remove();
        });

        // 提交detail
        $self.find("#js-submit-detail").on("click", function(e){
            if($self.find('#js-form-detail').valid()){
                common.post({
                    url: '${ctx}/household/${action}',
                    data: $self.find("#js-form-detail").serialize(),
                    modal: $self.find("#modal_newHousehold"),
                    dataType: 'json'
                }).done(function(data){
                	common.alert(data.ret_msg);
                    common.load({
                        container: 'newHousehold',
                        url: '${ctx}/household/create/${household.buildingId}'
                    });
                    $("#building").find("#js-search").trigger('click');
                }).fail(function(error){
                    console.log(error)
                });
            }else{
            	return false;
            }

        });

        $self.find('#js-form-detail').validate({
        	rules:{
                headerBuildingNo:{maxlength:100},
                headerBuildingUnit:{maxlength:100}
            }
        });
    });

</script>
