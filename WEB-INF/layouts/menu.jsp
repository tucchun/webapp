<%@ page language="java" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>

<ul class="sidebar-menu">
        <!-- 公共基础数据菜单开始 -->
        <li  class="treeview">
            <a>
                <i class="icon icon-user-m"></i><span class="tree-txt">公共基础数据</span></i>
            </a>
            <ul class="treeview-menu">
                <li class="treeview">
                    <a data-uri="xzqy" data-key="xzqy" data-name="行政区域管理"><span class="tree-txt">行政区域管理</span></a>
                </li>
                <li class="treeview">
                    <a data-uri="duties" data-key="duties" data-name="职务管理"><span class="tree-txt">职务管理</span></a>
                </li>
                <li class="treeview">
                    <a data-uri="professionalTitleManager" data-key="professionalTitleManager" data-name="职称管理"><span class="tree-txt">职称管理</span></a>
                </li>
                <li class="treeview">
                    <a data-uri="departmentManager" data-key="departmentManager" data-name="科室管理"><span class="tree-txt">科室管理</span></a>
                </li>
            </ul>
        </li>
        <!-- 公共基础数据菜单结束 -->
        <!-- 社区卫生站基础数据设置开始-->
        <li  class="treeview">
            <a>
                <i class="icon icon-user-m"></i><span class="tree-txt">社区卫生站基础数据</span></i>
            </a>
            <ul class="treeview-menu">
                <li class="treeview">
                    <a><span class="tree-txt">社区卫生站管理</span><i class="icon icon-arrow-r pull-right"></i></a>
                    <ul class="treeview-menu">
                        <li class="treeview">
                            <a data-uri="hospital" data-key="hospital" data-name="社区卫生站"><span class="tree-txt">社区卫生站</span></a>
                        </li>
                        <li class="treeview">
                            <a data-uri="newHospital" data-key="newHospital" data-name="新增社区卫生站"><span class="tree-txt">新增社区卫生站</span></a>
                        </li>
                        <li class="treeview">
                            <a data-uri="newHospital" data-key="newHospital" data-name="社区卫生站详情"><span class="tree-txt">社区卫生站详情</span></a>
                        </li>
                        <li class="treeview">
                            <a data-uri="serviceArea" data-key="serviceArea" data-name="服务分区"><span class="tree-txt">服务分区</span></a>
                        </li>
                    </ul>
                </li>
                <li class="treeview">
                    <a><span class="tree-txt">辖区各住户编号管理</span><i class="icon icon-arrow-r pull-right"></i></a>
                    <ul class="treeview-menu">
                        <li class="treeview">
                            <a data-uri="household" data-key="household" data-name="辖区各住户编号"><span class="tree-txt">辖区各住户编号</span></a>
                        </li>
                        <li class="treeview">
                            <a data-uri="newHousehold" data-key="newHousehold" data-name="新增各户编号"><span class="tree-txt">新增各户编号</span></a>
                        </li>
                    </ul>
                </li>
                <li class="treeview">
                    <a data-uri="communityUser" data-key="communityUser" data-name="社区卫生站用户管理"><span class="tree-txt">社区卫生站用户管理</span></a>
                </li>
                <li class="treeview">
                    <a><span class="tree-txt">服务分区人员设置</span><i class="icon icon-arrow-r pull-right"></i></a>
                    <ul class="treeview-menu">
                        <li class="treeview">
                            <a data-uri="personnel" data-key="personnel" data-name="服务人员分区"><span class="tree-txt">服务人员分区</span></a>
                        </li>
                        <li class="treeview">
                            <a data-uri="newPersonnel" data-key="newPersonnel" data-name="新增服务人员分区"><span class="tree-txt">新增服务人员分区</span></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <!-- 社区卫生站基础数据设置结束-->
        <li  class="treeview">
            <a data-uri="roleManager" data-key="roleManager" data-name="角色管理">
                <i class="icon icon-rule-m"></i><span class="tree-txt">角色管理</span></i>
            </a>
        </li>
        <li class="treeview">
            <a>
                <i class="icon icon-act-m"></i><span class="tree-txt">活动管理</span><i class="icon icon-arrow-r pull-right"></i>
            </a>
            <ul class="treeview-menu">
                <li class="treeview">
                    <a ><span class="tree-txt">健康教育专题管理</span><i class="icon icon-arrow-r pull-right"></i></a>
                    <ul class="treeview-menu">
                        <li><a data-uri="seminarList" data-name="新增研讨会" data-key="seminarList"><span class="tree-txt">健康教育专题研讨会</span></a></li>
                        <li><a data-uri="modifySeminar" data-name="新增研讨会" data-key="modifySeminar"><span class="tree-txt">新增研讨会</span></a></li>
                        <li><a data-uri="serminarInfo" data-name="研讨详情" data-key="serminarInfo"><span class="tree-txt">研讨详情</span></a></li>
                    </ul>
                </li>
                <li>
                    <a data-uri="healthQuestionnaire" data-name="健康知识问卷" data-key="healthQuestionnaire">
                        <span class="tree-txt">健康知识问卷</span><i class="icon pull-right"></i>
                    </a>
                </li>
                <li class="treeview">
                    <a ><span class="tree-txt">健康教育活动管理</span><i class="icon icon-arrow-r pull-right"></i></a>
                    <ul class="treeview-menu">
                        <li><a data-uri="healthActivities" data-name="健康教育活动" data-key="healthActivities"><span class="tree-txt">健康教育活动</span></a></li>
                        <li><a data-uri="modifyHealthActivities" data-name="新增健教活动" data-key="modifyHealthActivities"><span class="tree-txt">新增健教活动</span></a></li>
                        <li><a data-uri="healthActivitiesInfo" data-name="健教活动详情" data-key="healthActivitiesInfo"><span class="tree-txt">健教活动详情</span></a></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>