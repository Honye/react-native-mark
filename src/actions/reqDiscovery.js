/*
 * @Author: Honye 
 * @Date: 2017-12-05 11:48:46 
 * @Last Modified by: Honye
 * @Last Modified time: 2017-12-07 14:39:37
 */
'use strict';

import actionTypes from '../constants/actionTypes';
import apis from '../constants/apis';
import request from '../utils/request';


export function getBanners() {
    return dispatch => {
        request({
            url: apis.BANNER
        }).then(res => {
            dispatch(receiveBanner(res))
        })
    }
}

function receiveBanner(banners) {
    return {
        type: actionTypes.BANNER,
        data: banners
    }
}