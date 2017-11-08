<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap">
  <div class="tb-head">撰写健康建议</div>
  <div class="tb-content">
  	  <form action="#" id="js-form">
  	  <input type="hidden" name="userId" value="${resident.user.id}">
      <table class="table wrap-table table-border-none">
        <tbody>
          <tr>
            <td>姓名:${resident.user.realName }</td>
            <td>性别:${resident.decodeSex}</td>
            <td>年龄:${resident.decodeAge}</td>
            <td>所属人群:${resident.decodeResidentGroup}</td>
            <td rowspan="3" class="optCol border-bottom">
              <a><a href="#" data-id="${resident.userId}" class="js-view">查看健康档案>></a></a>
            </td>
          </tr>
          <tr>
            <td colspan="3">
            	<c:if test="${resident.residentMobile ne null and resident.residentMobile ne ''}">
	            		本人电话:${resident.residentMobile}
	            	</c:if>
	            	<c:if test="${resident.residentMobile eq null or resident.residentMobile eq ''}">
	            		联系人电话:${resident.residentContactsName}/${resident.residentContactsMobile}
	            	</c:if>
            </td>
            <td>身份证号码:
            	<c:if test="${resident.user.personId ne null and resident.user.personId ne ''}">
	                    ${resident.user.personId}
	                </c:if>
	                <c:if test="${resident.user.personId eq null or resident.user.personId eq ''}">
	                    ${resident.residentBirthNumber}
	                </c:if>
            </td>
          </tr>
          <tr>
            <td class="border-bottom">血型：${residentInfoCard.bloodTypeStr}</td>
            <td class="border-bottom">RH阴性：${residentInfoCard.rhTypeStr}</td>
            <td class="border-bottom">疾病既往史：${residentInfoCard.diseaseStr }</td>
            <td class="border-bottom">药物过敏史：${residentInfoCard.drupAllergy.drugDescribe }</td>
          </tr>

          <tr>
            <td colspan="5">随访记录</td>
          </tr>
          <tr>
            <td colspan="5">
              <div class="auto">
                <textarea name="healthDescription" placeholder="请输入随访记录，最多1000字" class="form-control" id="health_description" cols="30" rows="10"></textarea>
              </div>

            </td>
          </tr>


          <tr>
            <td colspan="5">健康建议</td>
          </tr>
          <tr>
            <td colspan="5">
              <div class="auto">
                <textarea name="doctorAdvice" placeholder="请输入健康建议，最多1000字" class="form-control" id="doctor_advice" cols="30" rows="10"></textarea>
              </div>

            </td>
          </tr>

          <tr>
            <td colspan="5" class="border-bottom">
              <div class="text-right">
                <button class="btn btn-main" type="button" id="js-submit">保存</button>
              </div>

            </td>
          </tr>
		
		<c:forEach items="${advices}" var="advice">
			<tr>
	            <td colspan="5">随访记录</td>
	          </tr>
	          <tr>
	            <td colspan="5">${advice.healthDescription }</td>
	          </tr>
	          <tr>
	            <td colspan="5">健康建议</td>
	          </tr>
	          <tr>
	            <td colspan="5">${advice.doctorAdvice }</td>
	          </tr>
	          <tr>
	            <td colspan="5" class="border-bottom">
	                <div class="text-right">
	                  ${advice.createDateStr }&nbsp;&nbsp;&nbsp;${advice.doctorName }
	                </div>
	            </td>
	          </tr>
		</c:forEach>

        </tbody>
      </table>
      </form>
    </div>
  </div>
</div>
<script>
  require([
    'jquery'
  ], function($) {
	var $self = $("#createDoctorAdvice");
	
	$self.find(".js-view").on("click", function(e){
        var id = $(this).attr('data-id');
        common.createTab({
            uri: '${ctx}/resident/view/'+id,
            data: {name: '健康档案'},
            key: 'healthRecord'
        });
    });
	
	$self.find("#js-submit").on("click", function(e){
        if($self.find('#js-form').valid()){
        	common.confirm({
        		content:"确认提交？",
        		success:function(){
        			var self = this;
        			common.fetch({
                        url: '${ctx}/doctorAdvice/${action}',
                        type: 'POST',
                        data: $self.find("#js-form").serialize(),
                        dataType:"JSON",
                        success: function(data) {
                       		self.hide();
                        	common.alert(data.ret_msg,function(){
                        		common.createTab({
                                    uri: '${ctx}/doctorAdvice',
                                    data: {name: '健康建议'},
                                    key: 'doctorAdvice',
                                    callback: function(){
                                        common.closeTab("createDoctorAdvice",null,false);
                                    }
                                });
                        	});
                        }
                    });
        		}
        	});
        }
    });
	
	
	$self.find('#js-form').validate({
        rules:{
        	healthDescription:{
                required:true,maxlength:1000
            },
            doctorAdvice:{
            	required:true,maxlength:1000
            }
        },
        messages:{
        	healthDescription:{
        		required:"随访记录不能为空",
        		maxlength:"随访记录最多输入1000个字"
            },
            doctorAdvice:{
        		required:"健康建议不能为空",
        		maxlength:"健康建议最多输入1000个字"
            }
        }
    });
	
	
  });
</script>
