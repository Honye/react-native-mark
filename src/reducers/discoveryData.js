/*
 * @Author: Honye 
 * @Date: 2017-12-05 14:03:07 
 * @Last Modified by: Honye
 * @Last Modified time: 2017-12-07 15:29:23
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
        case actionTypes.BANNER:
            return {...state, banners:action.data, loading:false}
        default:
            return state;
    }
}