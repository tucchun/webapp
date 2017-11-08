<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap newhospital">
    <div class="tb-head">社区卫生站管理&gt;&gt;社区卫生站详情</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="table-wrap">
                <fieldset>
                    <legend>基本信息</legend>
                    <div class="table-wrap">
                        <table class="table table-bordered">
                            <tr>
                                <td class="col-sm-2">社区卫生站名称</td>
                                <td>${serviceStation.name }</td>
                            </tr>
                            <tr>
                                <td>详细地址</td>
                                <td>${serviceStation.area}</td>
                            </tr>
                            <tr>
                                <td>服务电话</td>
                                <td>${serviceStation.phone}</td>
                            </tr>
                        </table>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>人口信息</legend>
                    <div class="table-wrap">
                        <table class="table table-bordered">
                            <tr>
                                <td class="col-sm-2">辖区户籍人口</td>
                                <td>${serviceStation.total_population }</td>
                                <td class="col-sm-2">0-6岁儿童数量</td>
                                <td>${serviceStation.children_population }</td>
                            </tr>
                            <tr>
                                <td>辖区总户数</td>
                                <td>${serviceStation.total_house }</td>
                                <td>育龄妇女数量</td>
                                <td>${serviceStation.total_childbearing }</td>
                            </tr>
                            <tr>
                                <td>辖区常住人口数</td>
                                <td>${serviceStation.total_resident }</td>
                                <td>60岁以上老年人数量</td>
                                <td>${serviceStation.total_older60 }</td>
                            </tr>
                            <tr>
                                <td>上年门诊量</td>
                                <td>${serviceStation.total_last_year_outpatient }</td>
                                <td>65岁以上老年人数量</td>
                                <td>${serviceStation.total_older65 }</td>
                            </tr>
                            <tr>
                                <td>上年住院人数</td>
                                <td>${serviceStation.total_last_year_hospitalized }</td>
                                <td>上年健教投入资金(￥)</td>
                                <td>
                                    ￥<fmt:formatNumber type="currency" value="${serviceStation.total_last_year_funds}" pattern="#,##0.00#"/>
                                </td>
                            </tr>
                        </table>
                    </div>
                </fieldset>
                <fieldset class="table-ill">
                    <legend>辖区慢性病人群比例</legend>
                    <div class="table-wrap">
                        <div class="col-sm-10">
                            <span>高血压:${serviceStation.percent_hypertension}%</span>
                            <span>糖尿病:${serviceStation.percent_diabetes}%</span>
                            <span>冠心病:${serviceStation.percent_heart_disease}%</span>
                            <span>支气管炎:${serviceStation.percent_bronchitis}%</span>
                            <span>脑梗:${serviceStation.percent_cerebral_infarction}%</span>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="table-imgs">
                    <legend>辖区平面图</legend>
                    <div class="table-wrap">
                        <div class="col-sm-10 imglist clearfix" id="">
                            <ul id="js-images" class="imgage-viewer">
                            <c:forEach items="${serviceStation.areaPlans}" var="plan">
                                <li><img src="${plan}" class="form-img"></li>
                            </c:forEach>
                            </ul>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
</div>
<script>
    require(['viewer'], function(Viewer){
        var $self = $("#viewServiceStation")
        var $imagesCnt = $self.find("#js-images");
        var $images = $imagesCnt.find("img");
        $images.each(function(index, item){
            var $this = $(this);
            var width = $this.width();
            var height = $this.height();
            if(width > height){
                $this.width("auto");
                $this.height("100%");
            }else{
                $this.width("100%");
                $this.height("auto");
            }
        });

        var viewer = new Viewer($imagesCnt.get(0), {});
    });
</script>