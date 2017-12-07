/*
 * @Author: Honye 
 * @Date: 2017-12-05 11:55:45 
 * @Last Modified by: Honye
 * @Last Modified time: 2017-12-06 11:10:33
 */
'use strict';

import withTimeout from './withTimeout';

const time = 15000;

export function request({ method='GET', headers={'Content-Type': 'json'}, url, body={} }) {
    let pUrl = url;
    let initData = { method, headers };
    if(Object.keys(body).length>0) {
        if(method.toUpperCase()=='POST') {
            initData.body = JSON.stringify(body)
        } else if(method.toUpperCase()=='GET') {
            pUrl = `${url}?${parseParams(body)}`;
        }
    }
    
    return withTimeout(time, fetch(pUrl, initData))
        .then(response => response.json())
        .then(res => {
            // console.log("访问结果", res);
            return res;
        })
        .catch(err => {
            console.warn("访问错误", err);
        })
}

/**
 * 拼接参数
 * @param {Object} params 参数对象
 */
function parseParams(params) {
    let paramArr = [];
    for(let key in params) {
        paramArr.push(`${key}=${params[key]}`);
    }
    return paramArr.join('&');
}

export default request;