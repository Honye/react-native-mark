/*
 * @Author: Honye 
 * @Date: 2017-12-05 11:49:45 
 * @Last Modified by: Honye
 * @Last Modified time: 2018-03-04 22:14:43
 */
'use strict';

export default {
    DISCOVERY: 'DISCOVERY',     // 发现页
    BANNER: 'BANNER',           // 轮播图
    LOGOUT: 'Logout',           // 退出登录
    ARTICLES: 'Articles',       // 文章列表
}

/**
 * Action 构造器
 * @param {String} actionType 动作类型
 * @param {*} data 返回数据
 */
export const createAction = (actionType, data={}) => ({
    type: actionType,
    data
})