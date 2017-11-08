<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj",Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<div class="wrap household" id="building">
    <div class="tb-head">辖区各户编号管理&gt;&gt;
    	<c:if test="${action eq 'create' }">新增小区</c:if>
    	<c:if test="${action eq 'update' }">修改小区</c:if>
    </div>
    <div class="tb-content">
        <div class="tb-wrap">
            <form action="#" class="form-inline" id="js-form">
                <input type="hidden"  name="buildingId" value="${building.buildingId }">
                <fieldset>
                    <legend>基本信息</legend>
                    <div class="table-wrap">
                        <table class="table table-bordered">
                            <tr>
                                <td class="col-sm-2"><span class="required">*</span>小区/建筑物名称</td>
                                <td>
                                    <div class="col-sm-5"><input type="text" class="form-control" placeholder="小区/建筑物名称" name="buildingName" value="${building.buildingName }"/></div>
                                </td>
                            </tr>
                            <tr>
                                <td class="col-sm-2"><span class="required">*</span>社区卫生站</td>
                                <td>
                                    <div class="col-sm-5">
                                    	${serviceStation.name }
									</div>
                                </td>
                            </tr>
                            <tr >
                                <td class="col-sm-2"><span class="required">*</span>所属居委会</td>
                                <td>
                                    <div class="col-sm-5">
                                    	<tags:selectboxMapper name="commAreaCode" list="${commAreaCodes}" value="${building.commAreaCode }" addNull="true"/>
                                    </div>
                                </td>
                            </tr>

                        </table>
                    </div>
                </fieldset>
                <fieldset>
                <legend>小区人口信息</legend>
                <div class="table-wrap">
                    <table class="table table-bordered">
                        <tr>
                            <td class="col-sm-2">小区户籍人口</td>
                            <td><input type="text"  class="form-control" name="totalPopulation" value="${building.totalPopulation }"/></td>
                            <td class="col-sm-2">0-6岁儿童数量</td>
                            <td><input type="text"  class="form-control" name="childrenPopulation" value="${building.childrenPopulation }" /></td>
                        </tr>
                        <tr>
                            <td>小区总户数</td>
                            <td><input type="text"  class="form-control" name="totalHouse" value="${building.totalHouse }" /></td>
                            <td>育龄妇女数量</td>
                            <td><input type="text"  class="form-control" name="totalChildbearing" value="${building.totalChildbearing }" /></td>
                        </tr>
                        <tr>
                            <td>辖区常住人口数</td>
                            <td><input type="text"  class="form-control" name="totalResident" value="${building.totalResident }"/></td>
                            <td>60岁以上老年人数量</td>
                            <td><input type="text"  class="form-control" name="totalOlder60" value="${building.totalOlder60 }"/></td>
                        </tr>
                        <tr>
                            <td>上年门诊量</td>
                            <td><input type="text" name="totalLastYearOutpatient" class="form-control"  value="${building.totalLastYearOutpatient }"/></td>
                            <td>65岁以上老年人数量</td>
                            <td><input type="text"  class="form-control"  name="totalOlder65" value="${building.totalOlder65 }" /></td>
                        </tr>
                        <tr>
                            <td>上年住院人数</td>
                            <td><input type="text"  class="form-control" name="totalLastYearHospitalized" value="${building.totalLastYearHospitalized }"/></td>
                            <td>上年健教投入资金(￥)</td>
                            <td><input type="text"  class="form-control" name="totalLastYearFunds" value="${building.totalLastYearFunds }"/></td>
                        </tr>
                    </table>
                </div>
            </fieldset>
            <fieldset>
                <legend>小区慢性病人群比例</legend>
                <div class="table-wrap inllness">
                    <table class="table">
                        <tr>
                            <td>高血压<input type="text" class="form-control" name="percentHypertension"  value="${building.percentHypertension}"><span>%</span></td>
                            <td>糖尿病<input type="text" class="form-control" name="percentDiabetes"  value="${building.percentDiabetes}"><span>%</span></td>
                            <td>冠心病<input type="text" class="form-control" name="percentHeartDisease"  value="${building.percentHeartDisease}"><span>%</span></td>
                            <td>支气管炎<input type="text" class="form-control" name="percentBronchitis"  value="${building.percentBronchitis}"><span>%</span></td>
                            <td>脑梗<input type="text" class="form-control" name="percentCerebralInfarction"  value="${building.percentCerebralInfarction}"><span>%</span></td>
                        </tr>
                    </table>
                </div>
            </fieldset>
            <fieldset>
                <legend>小区平面图</legend>
                <div class="table-wrap">
                    <div class="opt">
                        <a class="btn btn-main" id="choseFile">选择图片</a><span class="mr10">支持jpg、png的图片格式，最大1M</span>
                    </div>
                    <div class="imglist clearfix">
                        <c:forEach items="${building.areaPlans}" var="areaPlan" >
                            <div class="pull-left"><img src="${areaPlan}" alt="" class="form-img"><input type="hidden" name="imgUrls" value="${areaPlan}"><a href="#">删除</a></div>
                        </c:forEach>
                    </div>
                </div>
            </fieldset>
            <div class="opt save">
                <button class="btn btn-main" type="button" id="js-submit">保存并下一步</button>
            </div>
            </form>
            
        </div>
    </div>
</div>
<script>
require([
	'jquery',
    'js/cascade',
    'upload',
    'validate','message_zh'
],function($, cascade){
	var $self = $("#newBuilding");
	
	function openDetail(id){
		common.createTab({
			uri: '${ctx}/household/create/'+id,
			data: {name: '住户编号管理'},
			key: 'newHousehold',
			callback: function(){
				common.closeTab("newBuilding", null, false);
			}
		});
    };
    
    // 触发验证
    $self.find("select[name='commAreaCode']").on('change',function(){
    	$self.find('input[name=buildingName]').valid();
    });

    // 修改小区
	$self.find("#js-submit").on("click", function(e){
        if($self.find('#js-form').valid()){
            common.fetch({
                url:'${ctx}/building/${action}',
                data: $self.find("#js-form").serialize(),
                method: 'POST',
                dataType: "json",
                success: function(data){
                  if(data.ret_code==1){
                	  $("#building").find("#js-search").trigger("click");
                      common.load({
                          container: 'newBuilding',
                          url: '${ctx}/building/update/'+data.id
                      });
                	  common.alert(data.ret_msg,openDetail(data.id));
                  }else{
                      common.alert(data.ret_msg);
                  }
                }
            })
        }
	});

    var $delTr;
    //列表删除
    $('#modal_tips').modal({
        keyboard: true,
        show:false
    });

    // 验证
    $self.find('#js-form').validate({
        rules:{
            buildingName:{required:true, maxlength:100, remote:{
                // 远程验证
                url : "${ctx}/building/checkBuildingName",
                type : "get",
                dataType : "json",
                data : {
                    name: function () {return $self.find("input[name=buildingName]").val();},
                    id: function () {return $self.find("input[name=buildingId]").val();},
                    commAreaCode: function () {return $self.find("select[name=commAreaCode]").val();}
                }
            }},
            commAreaCode:"required",
            totalPopulation:{digits:true,range:[0,100000000]},
            childrenPopulation:{digits:true,range:[0,100000000]},
            totalHouse:{digits:true,range:[0,100000000]},
            totalChildbearing:{digits:true,range:[0,100000000]},
            totalResident:{digits:true,range:[0,100000000]},
            totalOlder60:{digits:true,range:[0,100000000]},
            totalLastYearOutpatient:{digits:true,range:[0,100000000]},
            totalOlder65:{digits:true,range:[0,100000000]},
            totalLastYearHospitalized:{digits:true,range:[0,100000000]},
            totalLastYearFunds:{number:true,range:[0,100000000]},
            percentHypertension:{number:true,range:[0,100]},
            percentDiabetes:{number:true,range:[0,100]},
            percentHeartDisease:{number:true,range:[0,100]},
            percentBronchitis:{number:true,range:[0,100]},
            percentCerebralInfarction:{number:true,range:[0,100]}
        },
        messages:{
        	buildingName:{
                remote:"已存在该小区",
                required:"小区/建筑物名称不能为空"
            },
            commAreaCode:{required:"所属居委会不能为空"}
            
        }
    });
    
    var action = "${ctx}/upload/uploadFile",_self = $('#newBuilding'),button = _self.find('#choseFile'),interval;
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
            	common.alert(response.retMsg);
            }
        }

    });

    //删除上传的图片
    _self.find('.imglist').on('click','a',function(){
        $(this).parent().remove();
    });
	
});
</script>
