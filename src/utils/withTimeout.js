/*
 * @Author: Honye 
 * @Date: 2017-11-18 16:26:35 
 * @Last Modified by: Honye
 * @Last Modified time: 2017-11-18 16:35:35
 */

/**
 * 自定义错误
 * @param {String} name 错误名 
 * @param {String} message 错误提示信息 
 */
const CustomError = (name, message) => {
    this.name = name || 'Error';
    this.message = message || 'a error occered';
    this.stack = (new Error()).stack;
}
CustomError.prototype = Object.create(Error.prototype);
CustomError.prototype.constructor = CustomError;

/**
 * 
 * @param {Number} ms 超时时间（毫秒）
 * @param {Promise} promise 原型
 */
const withTimeout = (ms, promise) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new CustomError('Timeout', '网络超时'));
        }, ms);
        promise.then(resolve, reject);
    })
}

export default withTimeout;