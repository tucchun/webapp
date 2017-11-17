/**
 * Created by Administrator on 2017/6/26.
 */
define(['jquery'],function($){
    "use strict";
    /***
     * districtSetting.target:目标元素，jquery对象；必须
     * districtSetting.districtName:小区名称，string；必须
     * districtSetting.build:楼栋，string；可选
     * districtSetting.unit:单元，number；可选
     * districtSetting.floor:楼层数，number；必填
     * districtSetting.houseNumber:单层户数，number；必填
     * districtSetting.startNo:起始编号，string；必填
     * districtSetting.callback：回调函数
     * ***/
    function GenerateHouseNo(districtSetting){
        var _self = this;
        var district = '';
        var unit = districtSetting.unit ? districtSetting.unit : 1,floor = districtSetting.floor ? districtSetting.floor : 1,houseNumber = districtSetting.houseNumber;
        if(districtSetting.districtName){
            district = '<p>小区/建筑物名称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+districtSetting.districtName+'</p>';
        }
        var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        var unitstr = district+'<div>';
        for(var i = 0;i < unit;i++){
            var build = '';
            build = districtSetting.build ? districtSetting.build : '';
            var str_unit = '';
            if(unit === 1){
                str_unit = '<tr data-type="unit"><td colspan="2"><span>'+build+'</span>' +
                    '<input type="text" placeholder="" value=""></td></tr>';
            }else{
                str_unit = '<tr data-type="unit"><td colspan="2"><span>'+build+'</span>' +
                    '<input type="text" placeholder="" value="'+(i+1)+'单元"></td></tr>';
            }
            unitstr += '<table class="table table-bordered">' +
                '<tbody>' + str_unit;
            for(var j = 0;j < floor;j++){
                var trHtml = '<tr data-type="houseNumber"><td class="col-sm-2">'+(j+1)+'楼</td><td><ul class="clearfix">';
                for(var k = 0;k < houseNumber;k++){
                    var str = districtSetting.startNo;
                    var char = parseInt(str.charAt(str.length - 1));
                    var slflag = str.indexOf('-');
                    var disnumber = '';
                    if(slflag>0){
                        var identifierArr = str.split('-');
                        identifierArr[1] = parseInt(identifierArr[1])+k;
                        disnumber = identifierArr.join('-');
                    }else{
                        if(isNaN(char)){
                            var no = (alphabet.indexOf(str.charAt(str.length - 1)) + k);
                            disnumber = j+Math.floor(parseInt(str)) + alphabet[no];
                        }else{
                            var fnu =   k+char < 10 ? ('0'+(k+char)) : k+char;
                            if(Math.floor(parseInt(str)/100) < 1){
                                disnumber = (j+Math.floor(parseInt(str)/100)+1)+''+fnu;
                            }else{
                                disnumber = (j+Math.floor(parseInt(str)/100))+''+fnu;
                            }
                            //兼容城中村，当单元和楼层数都为1时，编号按输入依次自增
                            if(unit == 1&&floor == 1){
                                disnumber = parseInt(str)+k;
                            }
                        }
                    }
                    trHtml += '<li class="pull-left"><input type="text" value="'+disnumber+'">' +
                        '<a href="#" class="del">删除</a><a href="#" class="js-add">添加</a></li>';
                }
                trHtml+='</ul>' +
                    '<ul class="clearfix"><li class="pull-left">' +
                    '<a href="javascript:void(0)" class="del_floor">删除整层</a></li>' +
                    '</ul></td></tr>';
                unitstr+=trHtml;
            }
            unitstr += '</tbody></table>';
        }
        unitstr += '</div>';
        $.extend(_self,districtSetting);
        _self.render($(districtSetting.target.get(0)),unitstr)
        _self.bindEvent();
        // _self.render()
    }
    $.extend(GenerateHouseNo.prototype,{
        bindEvent:function(){
            var _ = this;
            $(_.target.get(0)).on('click','a.del',function(){
                $(this).parent().remove();
            }).bind(_);
            $(_.target.get(0)).on('click','a.js-add',function(){
                var house = '<li class="pull-left"><input type="text" value=""><a href="#" class="del">删除</a><a href="#" class="js-add">添加</a></li>';
                $(house).insertAfter($(this).parent());
            }).bind(_);
            $(_.target.get(0)).on('click','a.del_floor',function(){
                $(this).parents('tr').remove();
            }).bind(_);
        },
        render:function(target,htmlstr){
            target.html(htmlstr)
        }
    });
    return GenerateHouseNo;
});