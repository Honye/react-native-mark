/*
 * @Author: Honye 
 * @Date: 2017-12-05 11:48:46 
 * @Last Modified by: Honye
 * @Last Modified time: 2018-03-04 22:15:41
 */
'use strict';

import actionTypes, { createAction } from '../constants/actionTypes';
import apis from '../constants/apis';
import request from '../utils/request';

/** 获取首页横幅 */
export function getBanners() {
    return dispatch => {
        request({
            url: apis.BANNER
        }).then(res => {
            dispatch(createAction(actionTypes.BANNER, res))
        })
    }
}

/** 获取首页文章 */
export function getArticles() {
    return dispatch => {
        request({
            url: apis.ARTICLE
        }).then(res => {
            dispatch(createAction(actionTypes.ARTICLES, res))
        })
    }
}

function receiveBanner(banners) {
    return {
        type: actionTypes.BANNER,
        data: banners
    }
}