<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%request.setAttribute("prj",Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />
<div class="wrap newHousehold" id="newHouseHold">
    <div class="tb-head">住户编号管理</div>
    <div class="tb-content">
        <div class="tb-wrap">
            <div class="house">
                <fieldset>
                    <legend>小区/建筑物名称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${household.headerBuildingName }</legend>
                </fieldset>
                <fieldset>
                    <legend>住户编号规则</legend>
                    <div>
                    	<form action="#" class="form-inline" id="gen-form">
                        <table class="table table-bordered" id="rules">
                            <tr>
                                <td class="col-sm-2">楼栋/座/阁</td>
                                <td><div class="col-sm-5" id="build"><input class="form-control" name="gen_buildingNo" type="text" placeholder="输入楼栋号、座号或某某阁，可以为空" /></div></td>
                            </tr>
                            <tr>
                                <td>单元数量</td>
                                <td><div class="col-sm-5" id="unit"><input class="form-control" name="gen_unit" type="text" placeholder="该楼栋有几个单元，不输入默认为1" /></div></td>
                            </tr>
                            <tr>
                                <td><span class="required">*</span>楼层数</td>
                                <td><div class="col-sm-5" id="floor"><input class="form-control" name="gen_floor" type="text" placeholder="该楼栋的楼层数，必填项" /></div></td>
                            </tr>
                            <tr>
                                <td><span class="required">*</span>一层几户</td>
                                <td><div class="col-sm-5" id="hose"><input class="form-control" name="gen_neigbor" type="text" placeholder="一层楼的住户数量，必填项" /></div></td>
                            </tr>
                            <tr>
                                <td><span class="required">*</span>起始编号</td>
                                <td><div class="col-sm-5" id="startNo"><input class="form-control" name="gen_startNo" type="text" placeholder="有效住户的起始编号，例：101，301，3A 必填项" /></div></td>
                            </tr>
                        </table>
                        </form>
                    </div>
                </fieldset>
            </div>
            <div class="opt save">
                <button class="btn btn-main" type="button" id="generateHoseNo" data-target="#modal_generateNo">一键生成</button>
            </div>
            <!--</form>-->
            <table cellspacing="0" class="table table-striped table-hover table-bordered" id="houseNoList">
                <thead>
                <tr>
                    <th>小区/建筑物名称</th>
                    <th>楼栋/座/阁</th>
                    <th>单元</th>
                    <th class="col-sm-7">门牌号</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${households}" var="household" varStatus="status">
                    <tr>
                    <td>${household.headerBuildingName}</td>
                    <td>${household.headerBuildingNo}</td>
                    <td>${household.headerBuildingUnit}</td>
                    <td>
                    	<c:forEach items="${household.details}" var="detail">
                    		${detail.detail_household_no },
                    	</c:forEach>
                    </td>
                    <td class="optCol">
                        <a href="#" data-id="${household.headerId }" class="js-updateHousehold">编辑</a>
                        <a href="#" data-id="${household.headerId }" class="js-deleteHousehold">删除</a>
                    </td>
                    </tr>
                </c:forEach>
                
                
                </tbody>
            </table>
        </div>
    </div>
    <div id="modal_generateNo" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_generateNoLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="modal_newHouseholdLabel">一键生成住户及编号</h4>
                </div>
                <div class="modal-body" id="distristHouse">
                    <p>小区/建筑物名称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${household.headerBuildingName }</p>
                    <div>
                        <table class="table table-bordered">
                            <tr>
                                <td colspan="2"><input type="text" placeholder="" value="1栋" /><input type="text" placeholder="" value="1单元"></td>
                            </tr>
                            <tr>
                                <td class="col-sm-2">1楼</td>
                                <td class="col-sm-10">
                                    <ul class="houseList clearfix">
                                        <li class="pull-left"><input type="text" value="1212"><a href="#" class="del">删除</a></li>
                                        <li class="pull-left"><input type="text" value="1212"><a href="#" class="del">删除</a></li>
                                        <li class="pull-left"><input type="text" value="1212"><a href="#" class="del">删除</a></li>
                                        <li class="pull-left"><input type="text" value="1212"><a href="#" class="del">删除</a></li>
                                        <li class="pull-left"><a href="#" class="js-add btn btn-main">添加</a></li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li class="pull-left"><a href="javascript:void(0)">删除整层</a></li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <a class="btn btn-main confirm" type="button">确认无误并提交</a>
                </div>
            </div>
        </div>
    </div>
    
    <div id="div_householdModal"></div>
    
    <div class="modal fade" id="modal_tips" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×
                    </button>
                    <h4 class="modal-title" id="myModalLabel">
                        确认删除
                    </h4>
                </div>
                <div class="modal-body">
                    你确定更要删除该条数据吗？
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">
                        取消
                    </button>
                    <button type="button" class="btn btn-primary" data-event="confirm">
                        确认
                    </button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</div>
<script type="text/javascript">
    require(['jquery','js/generateHouseNo'],function($,GenerateHouseNo){
        var $delTr;
        var _self = $('#newHousehold');
        var rul = _self.find('table#rules');
        //列表删除
        $('#modal_tips').modal({
            keyboard: true,
            show:false
        });
        _self.find('a[data-opt=del]').on('click',function(){
            $('#modal_tips').modal('show');
            $delTr = $(this).parents('tr');
        });
        _self.find('button[data-event=confirm]').on('click',function(){
            $delTr.remove();
            $('#modal_tips').modal('hide');
            //此处添加删除实际数据的ajax
        });
        
        // 验证gen-form
        $.validator.addMethod("starNo",function(value,element,params){
            var flag = false;
            var regEx = /-/g,reg = /^\d*[A-Z]$/g,regd = /^\d+$/g,regr = /^[A-Z]*[0-9]*$/g;
            if(regEx.test(value)||reg.test(value)||regd.test(value)||regr.test(value)){
                flag = true;
            }
            return flag;
        },"起始编号格式错误");
        _self.find('#gen-form').validate({
        	rules:{
        		gen_buildingNo:{maxlength:10, remote:{
                    // 远程验证
                    url : "${ctx}/household/checkBuildingNo",
                    type : "get",
                    dataType : "json",
                    data : {
                        name: function () {return _self.find("input[name=gen_buildingNo]").val();},
                        id: "${household.buildingId}"
                    }
                }
        		},
        		gen_unit:{digits:true},
        		gen_floor:{required:true,digits:true,},
        		gen_neigbor:{required:true,digits:true},
        		gen_startNo:{required:true,maxlength:20,starNo:true},
        	},
        	messages:{
        		gen_buildingNo:{
                    remote:"该小区已存在此楼栋"
                },
                gen_floor:{required:"楼层数不能为空"},
                gen_neigbor:{required:"一层几户不能为空"},
                gen_startNo:{required:"起始编号不能为空"}
            }
        });
        
       _self.find('#generateHoseNo').on('click',function(){
    	   if(_self.find('#gen-form').valid()){
	           new GenerateHouseNo({
	               target:_self.find('#distristHouse'),
	               districtName:'${household.headerBuildingName }',
	               build:rul.find('#build input').val(),
	               unit:rul.find('#unit input').val(),
	               floor:rul.find('#floor input').val(),
	               houseNumber:rul.find('#hose input').val(),
	               startNo:rul.find('#startNo input').val()
	           });
	           _self.find('#modal_generateNo').modal('show');
    	   }
       });
       _self.find('a.btn.confirm').on('click',function(){
    	   
    	   
    	   var modal = $(this).parents('#modal_generateNo'),_table = modal.find('#distristHouse table');
           var josn_houseNumber = [];
            var null_flag = true;
           $.each(_table,function(index,ele){
        	   var str_unit = $(ele).find('tr[data-type=unit] input').val();
        	   var str_build = rul.find('#build input').val();
        	   var obj_houseNumber = $(ele).find('tr[data-type=houseNumber] input');
        	   var arr_houseNumber = [];
               $.each(obj_houseNumber,function(idx,ipt){
                    if(!$(ipt).val()){
                        null_flag = false;
                    }
            	   arr_houseNumber.push($(ipt).val());
               });
               var obj = {
            		   header_building_no:str_build,
            		   header_building_unit:str_unit,
            		   detail_household_no:arr_houseNumber
               };
               josn_houseNumber.push(obj);
           });
           //ajax提交写在这，成功后将数据回填到表格中
           if(!null_flag){
        	   common.alert("门牌号为空");
        	   return;
           }
           common.fetch({
                url:'${ctx}/household/create',
                data: {data:JSON.stringify(josn_houseNumber),buildingId:"${household.buildingId}"},
                method: 'POST',
                dataType: "json",
                success: function(data){
                	if(data.ret_code==1){
                  	  	common.alert(data.ret_msg);
                  	  	refresh('create');
                  		$("#building").find("#js-search").trigger('click');
                    }else{
                        common.alert('提交失败！');
                    }
                }
            });
           
           
           //josn_houseNumber是要提交的数据
           /* var arr_tr = [];
           for(var i = ){
               var str = '<tr><td>'+'万象天成'+'</td><td>'+'1栋'+'</td><td>'+obj+'</td><td>'+josn_houseNumber[obj].join(',')+
                   '</td><td class="optCol"><a href="#">编辑</a><a href="#" data-opt="del">删除</a></td>';
               arr_tr.push(str);
           }  */
           /* 
            _self.find('#houseNoList tbody').append(arr_tr.join('')); */
           _self.find('#modal_generateNo').modal('hide');
       });
       
       function refresh(sor){
    	   console.log('调用来源:  '+sor);
    	   common.load({
               container: 'newHousehold',
               url: '${ctx}/household/create/${household.buildingId}',
               callback:function(){
                   $('.modal-backdrop').remove();
               }
           });
       }
       
    // 去修改household
       _self.find(".js-updateHousehold").on('click',function(){
           var headerId = $(this).attr('data-id');
           $.get("${ctx}/household/update/"+headerId,function(html){
        	   _self.find("#div_householdModal").html(html);
        	   _self.find("#modal_newHousehold").modal('show');
           },"html");
       });

       _self.find(".js-deleteHousehold").on('click',function(){
           var headerId = $(this).attr('data-id');
           common.confirm({
               content:"确认删除？",
               success:function(){
                   var self = this;
                   $.post("${ctx}/household/delete/detail/"+headerId,function(data){
                       if(data.ret_code == 1){
                           common.alert("删除成功",refresh('delete'));
                       }else{
                           common.alert(data.ret_msg);
                       }
                       self.hide();
                   },'JSON');
               }
           });
       });
       
       
        
    })
</script>

    