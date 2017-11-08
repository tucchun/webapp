<%@page import="com.newcare.constant.Constants"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="tags" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%request.setAttribute("prj", Constants.PRJ_PERFIX );%>
<c:set var="ctx" value="${pageContext.request.contextPath}${prj }" />

<style type="text/css">
	.table-left td{text-align: left!important;}
	.tdinput{width:100%!important;}
	.autocompleter-item:hover {
	    background: #cccccc;
	}
</style>

<!-- 如果弹窗modal隐藏不了. 加overflow -->
<div id="modal_sp" class="modal fade" style="height: 100%; overflow: auto;">
    <div class="modal-dialog" style="width:900px;">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title" id="modal_expenditureLabel">
                <c:if test="${action eq 'create' }">新增服务包</c:if>        
        		<c:if test="${action eq 'update' }">修改服务包</c:if>        
                </h4>
            </div>
            <div class="modal-body">
                <form action="#" id="js-form" class="form-inline">
                    <input type="hidden" name="spId" value="${fdSp.spId}">
                    <table class="table table-bordered table-left" id="sp-table">
                        <tr>
                        	<td colspan="4">服务包名称</td>
                        </tr>
                        <tr>
                        	<td colspan="4"><input class="form-control tdinput" type="text" name="spName" value="${fdSp.spName}" > </td>
                        </tr>
                        <tr>
                        	<td>服务项目</td>
                        	<td>项目单价</td>
                        	<td>服务次数(不限次数请填0)</td>
                        	<td></td>
                        </tr>
                       	<c:if test="${action eq 'create' }">
	                        <tr>
	                        	<td>
	                        		<input class="form-control tdinput" type="text" name="itemName0" value="">
	                        		<input type=hidden name="fdSpItems[0].itemId" value="">
	                        	</td>
	                        	<td>
	                        		<input class="form-control tdinput" type="text" name="itemPrice0" value="" disabled="disabled" >
	                        	</td>
	                        	<td>
	                        		<input class="form-control tdinput" type="text" name="fdSpItems[0].itemServiceTimes" value="" >
	                        	</td>
	                        	<td >
	                        		<button class="btn btn-main js-del" type="button" onclick="trDel(this);">-&nbsp;</button>
	                        	</td>
	                        </tr>
                       	</c:if>
                       	<c:if test="${action eq 'update' }">
                       		<c:forEach items="${fdSp.fdSpItems }" var="fdSpItem" varStatus="status">
                       		<tr>
	                        	<td>
	                        		<input class="form-control tdinput" type="text" name="itemName${status.index }" value="${fdSpItem.fdItem.itemName}" >
	                        		<input type="hidden" name="fdSpItems[${status.index }].itemId" value="${fdSpItem.itemId}">
	                        	</td>
	                        	<td>
	                        		<input class="form-control tdinput" type="text" name="itemPrice${status.index }" value="${fdSpItem.fdItem.itemPrice}" disabled="disabled" >
	                        	</td>
	                        	<td>
	                        		<input class="form-control tdinput" type="text" name="fdSpItems[${status.index }].itemServiceTimes" value="${fdSpItem.itemServiceTimes}" >
	                        	</td>
	                        	<td >
	                        		<button class="btn btn-main js-del" type="button" onclick="trDel(this);">-&nbsp;</button>
	                        	</td>
	                        </tr>
	                        </c:forEach>
                       	</c:if>
                       	<tr>
                       		<td colspan="3" style="border: 0px!important;"></td>
                        	<td>
                        		<button class="btn btn-main js-add" type="button" >+</button>
                        	</td>
	                    </tr>
                    </table>
                    
                     <table class="table table-left table-noborder">
                    	<tr>
                    		<td class="col-sm-2"><label>服务总价</label></td>
                    		<td><input class="form-control" type="text" name="spOriginalPrice"
                    			value="<fmt:formatNumber type="currency" value="${fdSp.spOriginalPrice }" pattern="###0.00#"/>" disabled="disabled">
                    			&nbsp;元</td>
                    	</tr>
                    	<tr>
                    		<td><label>打包总价</label></td>
                    		<td>
                    			<input class="form-control" type="text" name="spActualPrice" value="<fmt:formatNumber type="currency" value="${fdSp.spActualPrice }" pattern="###0.00#"/>">
                    		&nbsp;<span>元</span></td>
                    	</tr>
                    </table>
                    
                </form>
                <div class="operation" style="padding-bottom:10px;">
                    <button class="btn btn-main" type="button" id="js-submit">保存</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<script>
require([
'jquery','validate','message_zh','autocompleter'
],function($){
    var $self = $("#fdSp");
    
    var data = ${itemData};
    
    $self.find("#js-submit").on("click", function(e){
    	
    	calPrice();
    	
        if($self.find('#js-form').valid()){
        	if($self.find("#sp-table").find("tr").length < 5){
        		common.alert('服务项目不能为空');
        		return;
        	}
        	var itemIds = new Array();
        	$self.find("#sp-table").find("input[name$='itemId']").each(function(){
        		itemIds.push($(this).val());
        	});
        	var reItemIds = new Array();
        	for(var i =0;i<itemIds.length;i++){
        		for(var j =i+1;j<itemIds.length;j++){
        			if(itemIds[i]==itemIds[j]){
        				reItemIds.push(itemIds[i]);
        			}
        		}
        	}
        	if(reItemIds.length>0){
        		// 去重复
        		for(var i = reItemIds.length-1;i>=0;i--){
        			for(var j = i-1;j>=0;j--){
        				if(reItemIds[i] == reItemIds[j]){
        					reItemIds.splice(i,1);
        				}
        			}
        		}
        	}
        	if(reItemIds.length>0){
	        	var reItemNames = [];
	        	for(var i = 0;i<reItemIds.length;i++){
	        		for(var j = 0;j<data.length;j++){
	        			if(reItemIds[i] == data[j].itemId){
			        		reItemNames.push(data[j].label);
			        		break;
	        			}
	        		}
	        	}
	        	common.alert('存在重复服务项目!<br/>'+reItemNames.join('<br/>'));
				return;
        	}
            common.post({
                url: '${ctx}/fdSp/${action}',
                data: $self.find("#js-form").serialize(),
                modal: $self.find("#modal_sp"),
                dataType: "JSON"
            }).done(function(data){
            	common.alert(data.ret_msg);
                // 刷新
                $self.find("#js-confirm").trigger("click");
            }).fail(function(error){
                console.log(error)
            });
        }
    });
    
    // 默认填充框
    $("input[name^='itemName']").each(function(index,ele){
    	$(ele).autocompleter({ 
        	source: data,
        	empty: false,
        	highlightMatches: true,
        	callback: function (value, i,selected) {
        		$(this).parent().find("input[name$='itemId']").val(selected.itemId);
        		$(this).parent().next().find("input[name^='itemPrice']").val(selected.price);
        		//$('input[name="fdSpItems['+index+'].itemId"]').val(selected.itemId);
        		//$('input[name="itemPrice'+index+'"]').val(selected.price);
        		if(selected){
        			calPrice();
        		}
            }
        });
    });
    //动态添加
    var itemSize = '${fdSp.fdSpItems.size()}';
    $self.find(".js-add").on('click',function(e){
    	itemSize++;
    	var html = '<tr><td><input class="form-control tdinput" type="text" name="itemName'+itemSize+'" value=""><input type="hidden" name="fdSpItems['+itemSize+'].itemId"></td>';
    		html+='<td><input class="form-control tdinput" type="text" name="itemPrice'+itemSize+'" disabled="disabled"></td><td><input class="form-control tdinput" type="text" name="fdSpItems['+itemSize+'].itemServiceTimes" ></td>';
    		html+='<td ><button class="btn btn-main js-del" type="button" onclick="trDel(this);">-&nbsp;</button></td></tr>';
    	$("#sp-table tr:last-child").before(html);
    	// 自动填充
    	$('input[name="itemName'+itemSize+'"]').autocompleter({ 
        	source: data,
        	empty: false,
        	highlightMatches: true,
        	callback: function (value, index,selected) {
        		$(this).parent().find("input[name$='itemId']").val(selected.itemId);
        		$(this).parent().next().find("input[name^='itemPrice']").val(selected.price);
        		if(selected){
        			calPrice();
        		}
            }
        });
    	// 验证
    	$('input[name="fdSpItems['+itemSize+'].itemId"]').rules('add',{
    						required:true,
    						messages:{required:'请选择服务项目,不能为空且只能通过联想选择.'}
    	/*,
    						errorPlacement:{
    							function(error, element){error.insertAfter($('input[name="itemName'+itemSize+'"]'));}
    						}*/
    					});
    					
    							
    	$('input[name="fdSpItems['+itemSize+'].itemServiceTimes"]').rules('add',{
    						required:true,digits:true,range:[0,10000],
    						messages:{required:'服务次数不能为空',digits:'服务次数只能是整数',range:'服务次数范围为0-10000次, 不限次数请输入0'}
    	
    					});
    	$('input[name="fdSpItems['+itemSize+'].itemServiceTimes"]').on('change',function(){
    						calPrice();
    					});
    });
    
    $.validator.addMethod("maxPrice",function(value, element, params){
    	// 是否存在
    	var exist0 = false;
    	$self.find("#sp-table").find("input[name$='itemServiceTimes']").each(function(){
        		if($(this).val() == 0){
        			exist0 = true;
        		}
        });
    	if(exist0){
    		return true;
    	}
	        
    	return value - $self.find("input[name='spOriginalPrice']").val() <= 0;
    	
    },"打包总价不能高于服务总价");
    
    // 验证表单
    $self.find('#js-form').validate({
    	ignore: "",
        rules:{
        	spName:{required:true,
	        		maxlength:50,
	        		remote:{
	                    // 远程验证
	                    url : "${ctx}/fdSp/checkName",
	                    type : "get",
	                    dataType : "json",
	                    data : {
	                        "name": function () {return $self.find("input[name=spName]").val();},
	                        "id": function () {return $self.find("input[name=spId]").val();}
	                    }
	                }
        	},
        	'fdSpItems[0].itemServiceTimes':{required:true,digits:true,range:[0,10000]},
        	'fdSpItems[0].itemId':{required:true},
        	spActualPrice:{required:true,number:true,min:0,maxPrice:true,max:10000000}
        },
        messages:{
        	spName:{required:'服务包名称不能为空',maxlength:'服务包名称最长50个字',remote:"服务包已存在"},
        	'fdSpItems[0].itemServiceTimes':{required:'服务次数不能为空',digits:'服务次数只能是整数',range:'服务次数范围为0-10000次, 不限次数请输入0'},
        	'fdSpItems[0].itemId':{required:'请选择服务项目,不能为空且只能通过联想选择.'},
        	spActualPrice:{required:'打包总价不能为空',number:'打包总价只能是数字',min:'打包总价不能小于0元',max:'打包总价不能大于10000000元'}
        }
        ,
        errorPlacement:function(error, element) {
        	 if (element.prop("name") == "spActualPrice") {
        		 error.appendTo(element.next());
             }else{
            	 error.insertAfter(element);
             }
        }
    });
    
    // 添加默认触发计算打包价
    $self.find('input[name$="itemServiceTimes"]').on('change',function(){
    	calPrice();
    });
});

function trDel(obj){
	var tr=obj.parentNode.parentNode
	var tbody=tr.parentNode;
	tbody.removeChild(tr);
	calPrice();
};

function calPrice(){
	console.log('cal');
	var sum = 0;
	$("#fdSp").find("#sp-table tr").each(function(index,ele){
		var price = $(ele).find("input[name^='itemPrice']").val();
		var times = $(ele).find("input[name$='itemServiceTimes']").val();
		if(!isNaN(price) && !isNaN(times)){
			sum += price*times;
		}
	})
	$("#fdSp").find("input[name='spOriginalPrice']").val(sum);
};
</script>