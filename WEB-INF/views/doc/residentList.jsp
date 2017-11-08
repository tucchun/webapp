<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags" %>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap communityUser">
    <div class="tb-head">居民列表</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">	
                <div class="pull-left">
                     <form action="#" class="form-inline" id="js-search-form">
                     	
                     	<c:if test="${right eq 'all' or right eq 'lite'}">
                     		<input size="32" type="text" class="form-control" placeholder="请输入姓名，手机号码或身份证号码" name="keyword" value="${pages.searchMap['keyword']}"/>
                     		<tags:selectbox name="residentGroup" list="${residentGroups}" value="${pages.searchMap['residentGroup'] }" addNull="true" emptyTitle="所属人群"/>
	                     	<tags:selectboxMapper name="printStatus" list="${printStatuses}" value="${pages.searchMap['printStatus'] }" addNull="true" emptyTitle="打印状态"/>
	                     	<tags:selectboxMapper name="infoFrom" list="${infoFroms}" value="${pages.searchMap['infoFrom'] }" addNull="true" emptyTitle="信息来源"/>
                     	</c:if>
                     	
                     	<c:if test="${ right eq 'readonly'}">
	                     	<select name="organization_2" class="form-control" id="js-organization_2" />
	                        <select name="organization_3" class="form-control" id="js-organization_3" />
	                        <select name="organization_4" class="form-control" id="js-organization_4" />
	                        <select name="teamId" class="form-control" id="js-teamId" />
	                        <select name="staffId" class="form-control" id="js-staffId" />
	                        <tags:selectbox name="residentGroup" list="${residentGroups}" value="${pages.searchMap['residentGroup'] }" addNull="true" emptyTitle="所属人群"/>
	                        <input size="32" type="text" class="form-control" placeholder="请输入姓名，手机号码或身份证号码" name="keyword" value="${pages.searchMap['keyword']}"/>
                        </c:if>
                        <input type="button" class="btn btn-main" value="查询" id="js-search" />
                     </form>
            </div>
            <div class="pull-right">
            	<c:if test="${isTopestRoleAdmin}">
               		<button type="button" class="btn btn-main" id="btn-export">导出</button>
               </c:if>
            </div>
        </div>
        <div id="div_table_list">
            <jsp:include page="residentTable.jsp" />
        </div>
    </div>
</div>

<div id="div_include_modal">
    
</div>
</div>
<script>

    require([
        'jquery',
        'js/cascade'
    ], function($, cascade){
    	var $self = $("#${pageSelf}");
        var $organization_2 = $self.find("#js-organization_2");
        var $organization_3 = $self.find("#js-organization_3");
        var $organization_4 = $self.find("#js-organization_4");
        var $teamId = $self.find("#js-teamId");
        var $staffId = $self.find("#js-staffId");

        $self.find("#js-search").on('click',function(e){
            common.load({
                container: '${pageSelf}',
                url: '${ctx}/${pageUrl}',
                data: $self.find("#js-search-form").serialize()
            });
        });
        
        $self.find("#btn-export").on('click',function(e){
            common.download({url:'${ctx}/${pageUrl}&${search}&download=download'});
        });
        
        $.getJSON("${ctx}/organization/all", function(data){
            new cascade({
                $primary: $organization_2,
                $secondary:  $organization_3,
                "primaryData": data.organization_2s,
                "secondaryData": data.organization_3s,
                "parentId": "parent",
                "defaultPrimary": "${pages.searchMap['organization_2'] }",
                "defaultSecondary": "${pages.searchMap['organization_3'] }",
                "defaultPrimaryTip": "省公司",
                "defaultSecondaryTip": "市公司"
            });

            new cascade({
                $primary: $organization_3,
                $secondary:  $organization_4,
                "primaryData": data.organization_3s,
                "secondaryData": data.organization_4s,
                "parentId": "parent",
                "defaultPrimary": "${pages.searchMap['organization_3'] }",
                "defaultSecondary": "${pages.searchMap['organization_4'] }",
                "defaultPrimaryTip": "市公司",
                "defaultSecondaryTip": "社区站"
            });
            
            new cascade({
                $primary: $organization_4,
                $secondary:  $teamId,
                "primaryData": data.organization_4s,
                "secondaryData": data.teamIds,
                "parentId": "parent",
                "defaultPrimary": "${pages.searchMap['organization_4'] }",
                "defaultSecondary": "${pages.searchMap['teamId'] }",
                "defaultPrimaryTip": "社区站",
                "defaultSecondaryTip": "家庭医生团队"
            });

            common.getJSONPromise({
                url: "${ctx}/staff/organizationStaff/" + $teamId.val()
            }).done(function(result){
                new cascade({
                    $primary: $teamId,
                    $secondary:  $staffId,
                    "primaryData": data.teamIds,
                    "secondaryData": result,
                    "parentId": "parent",
                    "defaultPrimary": "${pages.searchMap['teamId'] }",
                    "defaultSecondary": "${pages.searchMap['staffId'] }",
                    "defaultPrimaryTip": "家庭医生团队",
                    "defaultSecondaryTip": "健康管理师"
                });

                $teamId.on("change", function(e){
                    var selectValue = this.value;
                    if(selectValue){
                        $.getJSON("${ctx}/staff/organizationStaff/" + selectValue, function(data){
                            cascade.render($staffId, data, null, "健康管理师");
                        });
                    }
                });
            })

        });

    });
</script>