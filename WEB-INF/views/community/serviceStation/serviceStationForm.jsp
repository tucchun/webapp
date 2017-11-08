<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap newhospital">
    <div class="tb-head">社区卫生站管理&gt;&gt;<c:if test="${action eq 'create' }">新增</c:if><c:if test="${action eq 'update' }">修改</c:if>社区卫生站</div>
    <div class="tb-wrap">
        <form action="#"  id="js-form">
        	<input type="hidden" name="id" value="${serviceStation.id }">
            <fieldset>
                <legend>基本信息</legend>
                <div class="table-wrap">
                    <table class="table table-bordered">
                        <tr>
                            <td class="col-sm-2"><span class="required">*</span>社区卫生站名称</td>
                            <td><div class="col-sm-10"><input type="text" class="form-control" name="name" value="${serviceStation.name }" placeholder="社区卫生站名称" /></div></td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>详细地址</td>
                            <td>
                                <div class="col-sm-10 table-row">
                                    <select name="area_province" class="form-control" id="js-province" /><span>省</span>
                                    <select name="area_city" class="form-control" id="js-city" /><span>市</span>
                                    <select name="area_district" class="form-control" id="js-district" /><span>区/县</span>
                                    <select name="area_street" class="form-control" id="js-street" /><span>乡镇/街道</span><br/><br/>
                                    <div class="bs-example">
                                    	<span><span class="required">*</span>居委会:</span><label id="jwh" class="pointer" data-toggle="modal" data-target="#modal_newHospital">请选择></label>
                                    </div>
                                    <input type="hidden" name=area_village value="${serviceStation.area_village }">
                                </div>
                                <div class="col-sm-10 table-row">
                                    <input type="text"  placeholder="请输入详细地址，具体到门牌号" class="form-control" name="address" value="${serviceStation. address}"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-sm-2"><span class="required">*</span>服务电话</td>
                            <td><div class="col-sm-10"><input type="text" class="form-control" name="phone" value="${serviceStation.phone }" placeholder="社区卫生站服务电话" /></div></td>
                        </tr>
                    </table>
                </div>
            </fieldset>
            <fieldset>
                <legend>人口信息</legend>
                <div class="table-wrap">
                    <table class="table table-bordered">
                        <tr>
                            <td class="col-sm-2"><span class="required">*</span>辖区户籍人口</td>
                            <td><input type="text"  class="form-control" name="total_population" value="${serviceStation.total_population }"/></td>
                            <td class="col-sm-2"><span class="required">*</span>0-6岁儿童数量</td>
                            <td><input type="text"  class="form-control" name="children_population" value="${serviceStation.children_population }" /></td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>辖区总户数</td>
                            <td><input type="text"  class="form-control" name="total_house" value="${serviceStation.total_house }" /></td>
                            <td><span class="required">*</span>育龄妇女数量</td>
                            <td><input type="text"  class="form-control" name="total_childbearing" value="${serviceStation.total_childbearing }" /></td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>辖区常住人口数</td>
                            <td><input type="text"  class="form-control" name="total_resident" value="${serviceStation.total_resident }"/></td>
                            <td><span class="required">*</span>60岁以上老年人数量</td>
                            <td><input type="text"  class="form-control" name="total_older60" value="${serviceStation.total_older60 }"/></td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>上年门诊量</td>
                            <td><input type="text" name="total_last_year_outpatient" class="form-control"  value="${serviceStation.total_last_year_outpatient }"/></td>
                            <td><span class="required">*</span>65岁以上老年人数量</td>
                            <td><input type="text"  class="form-control"  name="total_older65" value="${serviceStation.total_older65 }" /></td>
                        </tr>
                        <tr>
                            <td><span class="required">*</span>上年住院人数</td>
                            <td><input type="text"  class="form-control" name="total_last_year_hospitalized" value="${serviceStation.total_last_year_hospitalized }"/></td>
                            <td><span class="required">*</span>上年健教投入资金(￥)</td>
                            <td><input type="text"  class="form-control" name="total_last_year_funds" value="${serviceStation.total_last_year_funds }"/></td>
                        </tr>
                    </table>
                </div>
            </fieldset>
            <fieldset>
                <legend>辖区慢性病人群比例</legend>
                <div class="table-wrap inllness">
                    <table class="table">
                        <tr>
                            <td><span class="required">*</span>高血压<input type="text" class="form-control" name="percent_hypertension"  value="${serviceStation.percent_hypertension}"><span>%</span></td>
                            <td><span class="required">*</span>糖尿病<input type="text" class="form-control" name="percent_diabetes"  value="${serviceStation.percent_diabetes}"><span>%</span></td>
                            <td><span class="required">*</span>冠心病<input type="text" class="form-control" name="percent_heart_disease"  value="${serviceStation.percent_heart_disease}"><span>%</span></td>
                            <td><span class="required">*</span>支气管炎<input type="text" class="form-control" name="percent_bronchitis"  value="${serviceStation.percent_bronchitis}"><span>%</span></td>
                            <td><span class="required">*</span>脑梗<input type="text" class="form-control" name="percent_cerebral_infarction"  value="${serviceStation.percent_cerebral_infarction}"><span>%</span></td>
                        </tr>
                    </table>
                </div>
            </fieldset>
            <fieldset>
                <legend>辖区平面图</legend>
                <div class="table-wrap">
                    <div class="opt">
                        <a class="btn btn-main" id="choseFile">选择图片</a><span class="mr10">支持jpg、png的图片格式，最大1M</span>
                    </div>
                    <div class="imglist clearfix">
                        <c:forEach items="${serviceStation.areaPlans}" var="areaPlan" >
                            <div class="pull-left"><img src="${areaPlan}" alt="" class="form-img"><input type="hidden" name="imgUrls" value="${areaPlan}"><a href="#">删除</a></div>
                        </c:forEach>
                    </div>
                </div>
            </fieldset>
            <div class="opt save">
                <button class="btn btn-main" type="button" id="js-submit">保存</button>
            </div>
        </form>
    </div>
    <div id="div_include_jwh">
    <jsp:include page="chooseVillage.jsp" flush="true"/>
    </div>
</div>
<script>
require([
	'jquery',
    'js/cascade',
    'upload',
    'validate','message_zh'
],function($, cascade){
	var $self = $("#newServiceStation");
	function refreshStation(){
        // 刷新
        common.createTab({
            uri: '${ctx}/serviceStation',
            data: {name: '社区卫生站管理'},
            key: 'serviceStation',
            callback: function(){
                common.closeTab("newServiceStation",null,false);
            }
        });
    };
	$self.find("#js-submit").on("click", function(e){

        if($self.find('#js-form').valid()){
        	if($self.find("select[name='area_province']").val()=='' || 
        	   $self.find("select[name='area_city']").val()=='' || 
        	   $self.find("select[name='area_district']").val()=='' || 
        	   $self.find("select[name='area_street']").val()==''){
        		common.alert("省/市 /区/街道不能为空");
				return;
        	}
        	
        	if($self.find("input[name='area_village']").val()==''){
				common.alert("居委会不能为空");
				return;
        	}	
            common.fetch({
                url: '${ctx}/serviceStation/${action}',
                type: 'POST',
                data: $self.find("#js-form").serialize(),
                dataType:"JSON",
                success: function(data) {
                	if(data.init == true){
						common.alert("初始化成功, 当前页面将会刷新重新加载菜单.",function(){
							location.reload();
						})                		
                	}else{
	                    common.alert(data.ret_msg, refreshStation);
                	}
                }
            });
        }
		
	});

    var $province = $self.find("#js-province");
    var $city = $self.find("#js-city");
    var $district = $self.find("#js-district");
    var $street = $self.find("#js-street");
    var $village = $self.find("#js-village");
    $.getJSON("${ctx}/area/all", function(data){
        new cascade({
            $primary: $province,
            $secondary:  $city,
            "primaryData": data.provinces,
            "secondaryData": data.cities,
            "parentId": "parent",
            "defaultPrimary": "${serviceStation.area_province}",
            "defaultSecondary": "${serviceStation.area_city}"
        });

        new cascade({
            $primary: $city,
            $secondary:  $district,
            "primaryData": data.cities,
            "secondaryData": data.districts,
            "parentId": "parent",
            "defaultPrimary": "${serviceStation.area_city}",
            "defaultSecondary": "${serviceStation.area_district}"
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
                "defaultPrimary": "${serviceStation.area_district}",
                "defaultSecondary": "${serviceStation.area_street}"
            });

            $district.on("change", function(e){
                var selectValue = this.value;
                if(selectValue){
                    $.getJSON("${ctx}/area/list/" + selectValue, function(data){
                        cascade.render($street, data);
                    });
                }
            });
            
        }).done(function(result){
        	
        	var stationId = "${serviceStation.id }";
           
            $street.on("change", function(e){
                var selectValue = this.value;
                if(selectValue){
                	 common.fetch({
                		 url:"${ctx}/serviceStation/getVillage",
                		 type: 'POST',
                		 data: {streetCode:selectValue,stationId:stationId},
                		 dataType: "html",
                		 success: function(html){
                          	$self.find("#div_include_jwh").html(html);
                         },
                         error: function(error){
                        	common.alert("网络异常，请刷新页面后重试！"); 
                         }
                	 });
                }
            });
            $street.trigger("change");
        });

    });


    var action = "${ctx}/upload/uploadFile",_self = $('#newServiceStation'),button = _self.find('#choseFile'),interval;
    new AjaxUpload(button,{
        action:action,
        onSubmit:function(file,ext){
            if (!(ext && /^(jpg|jpeg|JPG|JPEG|png|PNG)$/.test(ext))) {
                common.alert('图片格式不正确,请选择正确图片格式!', '系统提示');
                return false;
            }
            this.disable();
        },
        onComplete:function(file,response){
        	response = JSON.parse(response);
            console.log(response);
            window.clearInterval(interval);
            this.enable();
            if(response.retCode == 'success'){
                var uri = response.imgUrl;
                var imgUrl = uri;
                var img = '<div class="pull-left"><img src="' + imgUrl +'" alt="" class="form-img"><input type="hidden" name="imgUrls" value="'+uri+'"><a href="#">删除</a></div>'
                $(_self).find('.imglist').append(img);
            }else{
                // common.alert("上传失败");
                common.alert(response.retMsg);
            }
        }

    });

    //删除上传的图片
    _self.find('.imglist').on('click','a',function(){
        $(this).parent().remove();
    });
    
    jQuery.validator.addMethod("phone", function(value, element) {
        var length = value.length;
        var phone = /^[0-9-()（）]{7,18}$/;
        var mobile = /^1\d{10}$/;
        return this.optional(element) || (phone.test(value)) || (length == 11 && mobile.test(value));
       }, "服务电话只能是座机或者手机号码");

    $self.find('#js-form').validate({
        rules:{
            name:{
                required:true,
                maxlength:50,
                remote:{
                    // 远程验证
                    url : "${ctx}/serviceStation/checkStationName",
                    type : "get",
                    dataType : "json",
                    data : {
                        name: function () {return $self.find("input[name=name]").val();},
                        id: function () {return $self.find("input[name=id]").val();},
                        concatCode: function () {return $self.find("select[name=area_province]").val()+$self.find("select[name=area_city]").val()
                            +$self.find("select[name=area_district]").val()+$self.find("select[name=area_street]").val()
                            +$self.find("select[name=area_village]").val();}
                    }
                }
            },
            address:{required:true, maxlength:200},
            phone:{required:true,maxlength:200,phone:true},
            total_population:{required:true,digits:true,range:[0,100000000]},
            children_population:{required:true,digits:true,range:[0,100000000]},
            total_house:{required:true,digits:true,range:[0,100000000]},
            total_childbearing:{required:true,digits:true,range:[0,100000000]},
            total_resident:{required:true,digits:true,range:[0,100000000]},
            total_older60:{required:true,digits:true,range:[0,100000000]},
            total_last_year_outpatient:{required:true,digits:true,range:[0,100000000]},
            total_older65:{required:true,digits:true,range:[0,100000000]},
            total_last_year_hospitalized:{required:true,digits:true,range:[0,100000000]},
            total_last_year_funds:{required:true,number:true,range:[0,100000000]},
            percent_hypertension:{required:true,number:true,range:[0,100]},
            percent_diabetes:{required:true,number:true,range:[0,100]},
            percent_heart_disease:{required:true,number:true,range:[0,100]},
            percent_bronchitis:{required:true,number:true,range:[0,100]},
            percent_cerebral_infarction:{required:true,number:true,range:[0,100]}
        },
        messages:{
            'name':{
                remote:"同地区已存在该名称卫生站",
                required:"社区卫生站名称不能为空"
            },
            address:{required:"详细地址不能为空"},
            phone:{required:"服务电话不能为空"},
            total_population:{required:"辖区户籍人口不能为空"},
            children_population:{required:"0-6岁儿童数量不能为空"},
            total_house:{required:"辖区总户数不能为空"},
            total_childbearing:{required:"育龄妇女数量不能为空"},
            total_resident:{required:"辖区常住人口数不能为空"},
            total_older60:{required:"60岁以上老年人数量不能为空"},
            total_last_year_outpatient:{required:"上年门诊量不能为空"},
            total_older65:{required:"65岁以上老年人数量不能为空"},
            total_last_year_hospitalized:{required:"上年住院人数不能为空"},
            total_last_year_funds:{required:"上年健教投入资金不能为空"},
            percent_hypertension:{required:"高血压不能为空"},
            percent_diabetes:{required:"糖尿病不能为空"},
            percent_heart_disease:{required:"冠心病不能为空"},
            percent_bronchitis:{required:"支气管炎不能为空"},
            percent_cerebral_infarction:{required:"脑梗不能为空"},
            
        }
    });
    
    <c:if test="${hasBuildings}">
    	$self.find("select[name='area_province']").attr("disabled","disabled");
    	$self.find("select[name='area_city']").attr("disabled","disabled");
    	$self.find("select[name='area_district']").attr("disabled","disabled");
    	$self.find("select[name='area_street']").attr("disabled","disabled");
    	$self.find("select[name='area_street']").attr("disabled","disabled");
    	$self.find("#jwh").attr("data-target","");
    </c:if>
    

});
</script>