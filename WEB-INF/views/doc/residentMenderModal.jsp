<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt" %>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<%response.setHeader("Cache-Control","no-cache"); 
  response.setHeader("Pragma","no-cache"); 
  response.setDateHeader ("Expires", 0); 
%> 

<div id="modal_residentMender" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="professionalTitleManageLabel">
            	居民资料修改
            </h4>
        </div>
        <div class="modal-body">
            <form class="form-horizontal form-tb clearfix" id="residentMender-form">
                <input type="hidden" name="residentId" value="${residentaudit.residentId }">
                <input type="hidden" name="residentRelation" value="${residentaudit.residentRelation}">
                <input type="hidden" name="residentType" value="${residentaudit.residentType}">
                <input type="hidden" name="residentMobile" value="${residentaudit.residentMobile }">
                <input type="hidden" name="residentContactsName" value="${residentaudit.residentContactsName }">
                <input type="hidden" name="residentContactsMobile" value="${residentaudit.residentContactsMobile }">
                <input type="hidden" name="residentIdentitypic" value="${residentaudit.residentIdentitypic }">
                <input type="hidden" name="residentHouseholdAddr" value="${residentaudit.residentHouseholdAddr}">
                <input type="hidden" name="residentBirthday" value="${residentaudit.residentBirthday}">
                <input type="hidden" name="residentNation" value="${residentaudit.residentNation}">
                <input type="hidden" name="residentSex" value="${residentaudit.residentSex}">
                <input type="hidden" name="residentIdentity" value="${residentaudit.residentIdentity}">
                <input type="hidden" name="residentName" value="${residentaudit.residentName}">
                <input type="hidden" name="residentAge" value="${residentaudit.extend1}">
                <!-- 监护人1 监护人2 -->
                <input type="hidden" name="residentGuradianNo1" value="${residentaudit.residentGuradianNo1 }">
                <input type="hidden" name="residentGuradianNo2" value="${residentaudit.residentGuradianNo2 }">
                <input type="hidden" name="userId" value="${residentaudit.userId }">
                <div class="form-group">

						<div class="form-group">
							<div class="col-sm-2 control-label">
								<span class="required"></span>审核状态:
							</div>
							<div class="col-sm-8">
								<c:if test="${residentaudit.residentResult eq 1}">
									<font color="red">审核通过</font>
								</c:if>
								<c:if test="${residentaudit.residentResult eq 2}">
									<font color="red">审核未通过</font>
								</c:if>
								<c:if test="${residentaudit.residentResult eq 0}">
									<font color="red">待审核</font>
								</c:if>
							</div>
						</div>

					<div class="col-sm-2 control-label"><span class="required"></span>姓名:</div>
                    <div class="col-sm-8">
                        ${residentaudit.residentName}
                         <c:if test="${residentaudit.residentResult ne 1}">
                        	<c:if test="${residentaudit.residentName ne resident.user.realName}">
                        		&nbsp;&nbsp;&nbsp;&nbsp;<span class="oldSpan"><i class="oldSpan-triangle"></i>原姓名 :&nbsp;${resident.user.realName}</span>
                        	</c:if>
                        </c:if>
                    </div>
                </div>

                <div class="form-group">
                	<div class="col-sm-2 control-label"><span class="required"></span>民族:</div>
                    <div class="col-sm-8">
                        ${residentaudit.residentNation }
                        <c:if test="${residentaudit.residentResult ne 1}">
                        	<c:if test="${residentaudit.residentNation ne resident.residentNation}">
                        		&nbsp;&nbsp;&nbsp;&nbsp;<span class="oldSpan"><i class="oldSpan-triangle"></i>原民族 :&nbsp;${resident.residentNation}</span>
                        	</c:if>
                        </c:if>
                    </div>
                 </div>
                    
                <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required"></span>出生日期:</div>
                    <div class="col-sm-8">
                    ${residentaudit.residentBirthday}
                    	 <c:if test="${residentaudit.residentResult ne 1}">
                        	<c:if test="${residentaudit.residentBirthday ne birthday}">
                        		&nbsp;&nbsp;&nbsp;&nbsp;<span class="oldSpan"><i class="oldSpan-triangle"></i>原出生日期 :&nbsp;${birthday}</span>
                        	</c:if>
                        </c:if>
                    </div>
                </div>
                
                <div class="form-group">
                 	<div class="col-sm-2 control-label"><span class="required"></span>与户主关系:</div>
                    <div class="col-sm-8">
                     ${residentaudit.residentRelation}
                     	 <c:if test="${residentaudit.residentResult ne 1}">
                        	<c:if test="${residentaudit.residentRelation ne resident.residentRelation}">
                        		&nbsp;&nbsp;&nbsp;&nbsp;<span class="oldSpan"><i class="oldSpan-triangle"></i>原与户主关系 :&nbsp;${resident.residentRelation}</span>
                        	</c:if>
                        </c:if>
                    </div>
                </div>
                
                <div class="form-group">
                 <div class="col-sm-2 control-label"><span class="required"></span>身份证号码:</div>
                    <div class="col-sm-8">
                        ${residentaudit.residentIdentity }
                         <c:if test="${residentaudit.residentResult ne 1}">
                        	<c:if test="${residentaudit.residentIdentity ne resident.user.personId}">
                        		&nbsp;&nbsp;&nbsp;&nbsp;<span class="oldSpan"><i class="oldSpan-triangle"></i>原身份证号码 :&nbsp;${resident.user.personId}</span>
                        	</c:if>
                        </c:if>
                    </div>
                </div>
                
                <c:if test="${residentaudit.residentBirthNumber ne null && residentaudit.residentBirthNumber ne ''}">
                <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required"></span>出生证:</div>
                    <div class="col-sm-8">
                    ${residentaudit.residentBirthNumber}
                    	 <c:if test="${residentaudit.residentResult ne 1}">
                        	<c:if test="${residentaudit.residentBirthNumber ne resident.residentBirthNumber}">
                        		&nbsp;&nbsp;&nbsp;&nbsp;<span class="oldSpan"><i class="oldSpan-triangle"></i>原出生日期 :&nbsp;${resident.residentBirthNumber}</span>
                        	</c:if>
                        </c:if>
                    </div>
                </div>
                </c:if>
                
                <div class="form-group">
                <div class="col-sm-2 control-label"><span class="required"></span>性别:</div>
                    <div class="col-sm-8">
                    	<c:if test="${residentaudit.residentSex eq 1}">男</c:if>
                    	<c:if test="${residentaudit.residentSex eq 2}">女</c:if>
                    	<c:if test="${residentaudit.residentResult ne 1}">
                        	<c:if test="${residentaudit.residentSex ne resident.user.sex}">
                        		&nbsp;&nbsp;&nbsp;&nbsp;<span class="oldSpan"><i class="oldSpan-triangle"></i>原性别 :&nbsp;
                        		<c:if test="${resident.user.sex eq 1}">男</c:if>
                    			<c:if test="${resident.user.sex eq 2}">女</c:if>
                        		</span>
                        	</c:if>
                        </c:if>
                    </div>
                </div>
               
                <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required"></span>人口类别:</div>
                    <div class="col-sm-8">
                    	<c:if test="${residentaudit.residentType eq 1}">固定人口</c:if>
                    	<c:if test="${residentaudit.residentType eq 2}">流动人口</c:if>
                    	<c:if test="${residentaudit.residentResult ne 1}">
                        <c:if test="${residentaudit.residentType ne resident.residentType}">
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="oldSpan"><i class="oldSpan-triangle"></i>原人口类别 :&nbsp;
                        <c:if test="${resident.residentType eq 1}">固定人口</c:if>
                    	<c:if test="${resident.residentType eq 2}">流动人口</c:if>
                        </span>
                        </c:if>
                        </c:if>
                    </div>
                </div>
                
                <div class="form-group">
                      <div class="col-sm-2 control-label"><span class="required"></span>本人电话:</div>
                    <div class="col-sm-8">
                    	 ${residentaudit.residentMobile }
                    	 <c:if test="${residentaudit.residentResult ne 1}">
                        	<c:if test="${residentaudit.residentMobile ne resident.residentMobile}">
                        		&nbsp;&nbsp;&nbsp;&nbsp;<span class="oldSpan"><i class="oldSpan-triangle"></i>原本人电话 :&nbsp;${resident.residentMobile}</span>
                        	</c:if>
                        </c:if>
                    </div>
                </div>
                
                <div class="form-group">
                     <div class="col-sm-2 control-label"><span class="required"></span>联系人姓名:</div>
                    <div class="col-sm-8">
                     ${residentaudit.residentContactsName}
                      <c:if test="${residentaudit.residentResult ne 1}">
                        	<c:if test="${residentaudit.residentContactsName ne resident.residentContactsName}">
                        		&nbsp;&nbsp;&nbsp;&nbsp;<span class="oldSpan"><i class="oldSpan-triangle"></i>原联系人姓名 :&nbsp;${resident.residentContactsName}</span>
                        	</c:if>
                        </c:if>
                    </div>
                </div>
                
                <div class="form-group">
                     <div class="col-sm-2 control-label"><span class="required"></span>联系人电话:</div>
                    <div class="col-sm-8">
                     ${residentaudit.residentContactsMobile}
                      <c:if test="${residentaudit.residentResult ne 1}">
                        	<c:if test="${residentaudit.residentContactsMobile ne resident.residentContactsMobile}">
                        		&nbsp;&nbsp;&nbsp;&nbsp;<span class="oldSpan"><i class="oldSpan-triangle"></i>原联系人电话 :&nbsp;${resident.residentContactsMobile}</span>
                        	</c:if>
                        </c:if>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required">*</span>户籍地址:</div>
                    <div class="col-sm-8">
                        ${residentaudit.residentHouseholdAddr}
                         <c:if test="${residentaudit.residentResult ne 1}">
                        	<c:if test="${residentaudit.residentHouseholdAddr ne resident.residentHouseholdAddr}">
                        		<Br/><span class="oldSpan"><i class="oldSpan-triangle"></i>原户籍地址 :&nbsp;${resident.residentHouseholdAddr}</span>
                        	</c:if>
                        </c:if>
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required">*</span>现住址:</div>
                    <div class="col-sm-8">
                        ${resident.residentAddress}
                    </div>
                </div>
                
                 <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required">*</span>资料修改原因:</div>
                    <div class="col-sm-8">
                        ${residentaudit.editReason}
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required"></span>身份凭证:</div>
                    <div class="col-sm-8">
                            <br />
                            <div class="imglist clearfix">
                                <div class="pull-left" >             
                                	<c:if test="${not empty residentaudit.residentIdentitypic}">
                                	<img src="/hca/api/business/getfile/${residentaudit.residentIdentitypic }" alt="" class="form-img" style="width:400px;height:300px"/>
                                	</c:if>
                                </div>
                            </div>
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="col-sm-2 control-label"><span class="required"></span>备注:</div>
                    <div class="col-sm-8">
                        <c:if test="${residentaudit.residentResult ne 0}">${residentaudit.residentAuditRemark}</c:if>
                    </div>
                </div>
                <!-- 
                <c:if test="${residentaudit.residentResult eq 1 or residentaudit.residentResult eq 2 }">
                 <div class="form-group">
                    <label class="col-sm-2 control-label"><span class="required">*</span>审核状态:</label>
                    <div class="col-sm-8">
                   	 <c:if test="${residentaudit.residentResult eq 1}">
                   	 	<strong>审核通过</strong>
                   	 </c:if>
                   	  <c:if test="${residentaudit.residentResult eq 2 }">
                   	  	<strong>审核未通过</strong>
                   	  </c:if>
                    </div>
                </div>
 				</c:if>
       -->
                <div class="form-group">
                    <div class="operation">
                    <c:if test="${residentaudit.residentResult eq 2}">
                    <input type="button" class="btn btn-main" value="重新提交修改"  id="js-submit"/>
                    </c:if>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
require([
	"jquery","KindEditor","zh_CN", 'js/components-select','js/cascade','upload','validate','message_zh'
],function($){
	var $self = $("#residentMender");
	$self.find("#js-submit").on("click", function(e){
        if($self.find('#residentMender-form').valid()){
            common.post({
                url: '${ctx}/resident/update',
                data: $self.find("#residentMender-form").serialize(),
                modal: $self.find("#modal_residentMender"),
                dataType: "JSON"
            }).done(function(data){
                common.alert(data.ret_msg);
	              // 刷新
	             $self.find("#js-confirm").trigger("click");
            }).fail(function(error){
           		common.alert("提交失败");
            });
        }
	});
});
</script>