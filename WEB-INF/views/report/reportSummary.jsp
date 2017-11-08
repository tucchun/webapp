<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap xzqy">
    <div class="tb-head">台账统计表</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <form action="#" class="form-inline" id="js-form">
                        <select name="stationId" class="form-control" id="js-stationId" />
                        <select name="commAreaCode" class="form-control" id="js-commAreaCode" />
                        <tags:selectboxMapper name="year" list="${years }" addNull="false" value="${searchMap['year'] }" emptyTitle="年度"/>
                        <tags:selectboxMapper name="quarter" list="${quarters }" addNull="false" value="${searchMap['quarter'] }" emptyTitle="季度"/>
                        
                        <input type="hidden" name="reportType" value="">
                        <input type="hidden" name="reportIndex" value="">
                        <input type="hidden" name="isQuarter" value="">
                        <input type="button" class="btn btn-main" value="查询" id="js-search" />
                    </form>
                </div>
                <div class="pull-right">
                    <button type="button" class="btn btn-main" id="btn-export">导出</button>
                </div>
            </div>
            <table class="table table-bordered inhoseActivity">
                <thead>
                <tr>
                    <th class="col-sm-2">服务项目</th>
                    <th colspan="2" class="col-sm-4">统计指标（辖区内档案）</th>
                    <th class="col-sm-3">第${searchMap['quarter'] }季度新增</th>
                    <th class="col-sm-3">${searchMap['year'] }年累计</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td rowspan="7">健康教育</td>
                    <td >健康教育资料</td>
                    <td >发放数量</td>
                    <td>${resultMap1['quarter2']}</a></td>
                    <td>${resultMap1['year2']}</a></td>
                </tr>
                <tr>
                    <td class="col-sm-2" rowspan="2">健康教育讲座</td>
                    <td class="col-sm-1">次数</td>
                    <td>${resultMap1['quarter3']}</a></td>
                    <td>${resultMap1['year3']}</a></td>
                </tr>
                <tr>
                    <td class="col-sm-1">参与人数</td>
                    <td>${resultMap1['quarter4']}</a></td>
                    <td>${resultMap1['year4']}</a></td>
                </tr>
                <tr>
                    <td class="col-sm-2" rowspan="2">健康教育活动</td>
                    <td class="col-sm-1">次数</td>
                    <td>${resultMap1['quarter5']}</a></td>
                    <td>${resultMap1['year5']}</a></td>
                </tr>
                <tr>
                    <td class="col-sm-1">覆盖人数</td>
                    <td>${resultMap1['quarter6']}</a></td>
                    <td>${resultMap1['year6']}</a></td>
                </tr>
                <tr>
                    <td class="col-sm-2" rowspan="2">健康教育培训</td>
                    <td class="col-sm-1">次数</td>
                    <td>${resultMap1['quarter7']}</a></td>
                    <td>${resultMap1['year7']}</a></td>
                </tr>
                <tr>
                    <td class="col-sm-1">培训人数</td>
                    <td>${resultMap1['quarter8']}</a></td>
                    <td>${resultMap1['year8']}</a></td>
                </tr>
                <!-- 0-6岁儿童健康管理 -->
                <tr>
                    <td rowspan="4">0-6岁儿童健康管理</td>
                    <td colspan="2">新生儿访视人数</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="1" data-index="1" data-quarter="true"> ${resultMap2['quarter1']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="1" data-index="1" data-quarter="false">${resultMap2['year1']}</a></td>
                </tr>
                <tr>
                    <td colspan="2">满6周岁血红蛋白检测人数</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="1" data-index="2" data-quarter="true">${resultMap2['quarter2']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="1" data-index="2" data-quarter="false">${resultMap2['year2']}</a></td>
                </tr>
                <tr>
                    <td colspan="2">满6周岁听力筛查人数</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="1" data-index="3" data-quarter="true">${resultMap2['quarter3']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="1" data-index="3" data-quarter="false">${resultMap2['year3']}</a></td>
                </tr>
                <tr>
                    <td colspan="2">儿童建档人数</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="1" data-index="4" data-quarter="true">${resultMap2['quarter4']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="1" data-index="4" data-quarter="false">${resultMap2['year4']}</a></td>
                </tr>
                <!-- 孕产妇健康管理 -->
                <tr>
                    <td rowspan="3">孕产妇健康管理</td>
                    <td colspan="2">孕期接受5次及以上随访服务的孕产妇数</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="2" data-index="1" data-quarter="true">${resultMap3['quarter1']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="2" data-index="1" data-quarter="false">${resultMap3['year1']}</a></td>
                </tr>
                <tr>
                    <td colspan="2">产后访视人数</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="2" data-index="2" data-quarter="true">${resultMap3['quarter2']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="2" data-index="2" data-quarter="false">${resultMap3['year2']}</a></td>
                </tr>
                <tr>
                    <td colspan="2">孕产妇建档人数</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="2" data-index="3" data-quarter="true">${resultMap3['quarter3']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="2" data-index="3" data-quarter="false">${resultMap3['year3']}</a></td>
                </tr>

                <!-- 老年人健康管理 -->
                <tr>
                    <td rowspan="3">老年人健康管理</td>
                    <td colspan="2">65岁及以上建档人数</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="3" data-index="1" data-quarter="true">${resultMap4['quarter1']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="3" data-index="1" data-quarter="false">${resultMap4['year1']}</a></td>
                </tr>
                <tr>
                    <td colspan="2">评估人数（完成自理能力评估表）</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="3" data-index="2" data-quarter="true">${resultMap4['quarter2']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="3" data-index="2" data-quarter="false">${resultMap4['year2']}</a></td>
                </tr>
                <tr>
                    <td colspan="2">体检人数（完成实验室检查）</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="3" data-index="3" data-quarter="true">${resultMap4['quarter3']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="3" data-index="3" data-quarter="false">${resultMap4['year3']}</a></td>
                </tr>

                <!-- 35岁及以上高血压患者健康管理 -->
                <tr>
                    <td rowspan="3">35岁及以上高血压患者健康管理</td>
                    <td colspan="2">35岁及以上高血压患者建档人数</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="4" data-index="1" data-quarter="true">${resultMap5['quarter1']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="4" data-index="1" data-quarter="false">${resultMap5['year1']}</a></td>
                </tr>
                <tr>
                    <td colspan="2">体检人数</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="4" data-index="2" data-quarter="true">${resultMap5['quarter2']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="4" data-index="2" data-quarter="false">${resultMap5['year2']}</a></td>
                </tr>
                <tr>
                    <td colspan="2">最近一次随访血压达标人数</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="4" data-index="3" data-quarter="true">${resultMap5['quarter3']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="4" data-index="3" data-quarter="false">${resultMap5['year3']}</a></td>
                </tr>

                <!-- 35岁及以上2型糖尿病患者健康管理 -->
                <tr>
                    <td rowspan="3">35岁及以上2型糖尿病患者健康管理</td>
                    <td colspan="2">35岁及以上2型糖尿病患者建档人数</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="5" data-index="1" data-quarter="true">${resultMap6['quarter1']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="5" data-index="1" data-quarter="false">${resultMap6['year1']}</a></td>
                </tr>
                <tr>
                    <td colspan="2">体检人数</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="5" data-index="2" data-quarter="true">${resultMap6['quarter2']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="5" data-index="2" data-quarter="false">${resultMap6['year2']}</a></td>
                </tr>
                <tr>
                    <td colspan="2">最近一次随访空腹血糖达标人数</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="5" data-index="3" data-quarter="true">${resultMap6['quarter3']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="5" data-index="3" data-quarter="false">${resultMap6['year3']}</a></td>
                </tr>

                <!-- 重性精神疾病患者健康管理 -->
                <tr>
                    <td rowspan="3">重性精神疾病患者健康管理</td>
                    <td colspan="2">重性精神疾病患者建档人数</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="6" data-index="1" data-quarter="true">${resultMap7['quarter1']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="6" data-index="1" data-quarter="false">${resultMap7['year1']}</a></td>
                </tr>
                <tr>
                    <td colspan="2">体检人数</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="6" data-index="2" data-quarter="true">${resultMap7['quarter2']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="6" data-index="2" data-quarter="false">${resultMap7['year2']}</a></td>
                </tr>
                <tr>
                    <td colspan="2">最近一次随访时分类为病情稳定的患者数</td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="6" data-index="3" data-quarter="true">${resultMap7['quarter3']}</a></td>
                    <td ><a href="javascript:void(0);" class="showModal" data-type="6" data-index="3" data-quarter="false">${resultMap7['year3']}</a></td>
                </tr>

                </tbody>
            </table>

        </div>
    </div>
</div>

<div id="div_include_report">

</div>
<script>
    require([
        'jquery','js/cascade'
    ],function($,cascade){
        var $self = $("#reportSummary");
        
        var stations = JSON.parse('${stations}');
    	var commAreaCodes =  JSON.parse('${commAreaCodes}');
        new cascade({
            $primary: $self.find("#js-stationId"),
            $secondary:  $self.find("#js-commAreaCode"),
            "primaryData": stations,
            "secondaryData": commAreaCodes,
            "parentId": "parent",
            "defaultPrimary": "${searchMap['stationId']}",
            "defaultSecondary": "${searchMap['commAreaCode']}",
            "defaultPrimaryTip": "卫生站",
			"defaultSecondaryTip": "居委会"
        });
        $self.find("#js-search").on('click',function(e){
            common.load({
                container: 'reportSummary',
                url: '${ctx}/report/summary',
                data: $self.find("#js-form").serialize()
            });
        });
        $self.find("#btn-export").on('click',function(e){
            common.download({
            	url:"${ctx}/report/summary?${search}&download=download"
            });
        });
        
        $self.find(".showModal").on('click',function(e){
        	var $this = $(this);
        	$self.find("input[name='reportType']").val($this.data("type"));
        	$self.find("input[name='reportIndex']").val($this.data("index"));
        	$self.find("input[name='isQuarter']").val($this.data("quarter"));
        	common.createTab({
    			uri: '${ctx}/report/resident/list?'+$self.find("#js-form").serialize(),
    			data: {name: '详细名单列表'},
    			key: 'reportSummaryResidentList'
    		});
        });
    });

</script>