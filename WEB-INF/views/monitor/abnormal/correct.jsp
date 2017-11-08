<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap">
    <div class="tb-head">异常数据数据监控&gt;&gt;修正异常数据</div>
    <div class="tb-content">
        <div class="tb-wrap">
           <form id="correct-js-form">
           		<input type="hidden" value="${ad.id }" name="id" />
                <table class="table wrap-table">
                    <tbody>
                    <tr>
                        <td colspan="2" style="text-align: left;">姓名：${ad.realName }     性别：${ad.sex }    年龄：${ad.age }      民族：${ad.residentNation }   <a href="#" class="js-view" data-id="${ad.userId }">健康档案</a></td>
                    </tr>
                    <tr>
                        <td>异常数据表单:</td>
                        <td>${ad.oldNotes }</td>
                    </tr>
                    <tr>
                        <td>表单创建时间:</td>
                        <td>${ad.oldTime }</td>
                    </tr>
                    <tr>
                        <td>数据异常项:</td>
                        <td>${ad.oldColumnNotes }：${ad.oldColumnValue }</td>
                    </tr>
                    <tr>
                        <td>修正数据值：</td>
                        <td>
                            <div class="col-sm-5">
                                <input type="text" name="oldNewValue" id="oldNewValue" class="form-control" placeholder="请输入数值" />
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                
                <table class="table wrap-table">
                    <tbody>
                    <tr>
                        <td>异常数据表单:</td>
                        <td>${ad.newNotes }</td>
                    </tr>
                    <tr>
                        <td>表单创建时间:</td>
                        <td>${ad.newTime }</td>
                    </tr>
                    <tr>
                        <td>数据异常项:</td>
                        <td>${ad.newColumnNotes }：${ad.newColumnValue }</td>
                    </tr>
                    <tr>
                        <td>修正数据值：</td>
                        <td>
                            <div class="col-sm-5">
                                <input type="text" name="newNewValue" id="newNewValue" class="form-control" placeholder="请输入数值" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>备注:</td>
                        <td>
                            <div class="col-sm-5">
                                <textarea name="content" class="form-control"></textarea>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div class="col-sm-12 form-submit-btns text-center">
                              	<button type="button" class="btn btn-main btn-lg"  id="js-submit">保存</button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
</div>
<script>
    require([
        'jquery'
    ], function($){
        var $self = $("#correct");

        $self.find("#js-submit").on("click", function(e){
        	if($self.find('#correct-js-form').valid()){
    		var $obj = $(this);
    		$obj.hide();
    		common.fetch({
    		    url: '${ctx}/AbnormalData/update',
    		    type: 'POST',
    		    data: $self.find("#correct-js-form").serialize(),
    		    dataType:"json",
    		    success: function(rt) {
    		       if(1 == rt.ret_code){
    		    	   $('#abnormalDataList').load("${ctx}/AbnormalData");
    		    	   common.closeTab('correct');
    		       }else{
    		    	   $obj.show();  
    		       }
    		    }
    		});
    		}
    	});
        
        
        $self.find('#correct-js-form').validate({
	        rules:{
	        	oldNewValue:"required",
	        	newNewValue:"required"
	            },
	        messages:{
	        	oldNewValue:"请填写数据异常项",
	        	newNewValue:"请填写数据异常项"
	            }
	        });
        
       
        $self.find(".js-view").on("click", function(e){
            var id = $(this).attr('data-id');
            common.createTab({
                uri: '${ctx}/resident/view/'+id,
                data: {name: '健康档案'},
                key: 'healthRecord'
            });
        });
    });
</script>