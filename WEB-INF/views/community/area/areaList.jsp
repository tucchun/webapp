<%@ page import="com.newcare.constant.Constants" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
    <div class="wrap xzqy">
    <div class="tb-head">行政区域管理</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="opt clearfix">
                <div class="pull-left">
                    <form action="#" class="form-inline" id="js-form">
                        <select name="province_code" class="form-control" id="js-province" /><span>省</span>
                        <select name="city_code" class="form-control" id="js-city" /><span>市</span>
                        <select name="district_code" class="form-control" id="js-district" /><span>区/县</span>
                        <select name="street_code" class="form-control" id="js-street" /><span>乡镇/街道</span>
                        <input type="button" class="btn btn-main" id="js-submit" value="查询" />
                    </form>
                </div>
                <div class="pull-right" style="display: none">
                    <button type="button" class="btn btn-main">导入</button>
                </div>
            </div>
            <div id="area-table">
                <jsp:include page="areaTable.jsp" flush="true" />
            </div>
        </div>
    </div>
    </div>

<script>

    require([
        'jquery',
        'js/cascade'
    ], function($, cascade){
        var $self = $("#area");
        var $province = $self.find("#js-province");
        var $city = $self.find("#js-city");
        var $district = $self.find("#js-district");
        var $street = $self.find("#js-street");
        $.getJSON("${ctx}/area/all", function(data){
            new cascade({
                $primary: $province,
                $secondary:  $city,
                "primaryData": data.provinces,
                "secondaryData": data.cities,
                "parentId": "parent",
                "defaultPrimary": "${province_code}",
                "defaultSecondary": "${city_code}"
            });

            new cascade({
                $primary: $city,
                $secondary:  $district,
                "primaryData": data.cities,
                "secondaryData": data.districts,
                "parentId": "parent",
                "defaultPrimary": "${city_code}",
                "defaultSecondary": "${district_code}"
            });

            common.getJSONPromise({
                url: "${ctx}/area/list/" + $district.val()
            }).done(function(result){
                new cascade({
                    $primary: $district,
                    $secondary:  $street,
                    "primaryData": data.districts,
                    "secondaryData": result,
                    "parentId": "parent",
                    "defaultPrimary": "${district_code}",
                    "defaultSecondary": "${street_code}"
                });

                $district.on("change", function(e){
                    var selectValue = this.value;
                    if(selectValue){
                        $.getJSON("${ctx}/area/list/" + selectValue, function(data){
                            cascade.render($street, data);
                        });
                    }
                });
            })

        });





        $self.find("#js-submit").on("click", function(e){
            common.load({
                container: 'area',
                url: '${ctx}/area',
                data:  $self.find("#js-form").serialize(),
                callback: function(data){

                }
            });
        });
    });
</script>