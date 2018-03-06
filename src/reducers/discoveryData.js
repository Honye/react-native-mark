/*
 * @Author: Honye 
 * @Date: 2017-12-05 14:03:07 
 * @Last Modified by: Honye
 * @Last Modified time: 2018-03-04 22:17:44
 */
'use strict';

import actionTypes from './../constants/actionTypes';

const initState = {
    banners: [],
    articles: [],
    loading: false
}

export default function discoveryData(state=initState, action) {
    switch(action.type) {
        case actionTypes.BANNER:  // 首页横幅
            return {...state, banners:action.data, loading:false}
        case actionTypes.ARTICLES:  // 首页文章
            return {...state, articles:action.data, loading:false}
        default:
            return state;
    }
}