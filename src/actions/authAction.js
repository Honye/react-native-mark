/*
 * @Author: Honye 
 * @Date: 2017-12-06 13:26:06 
 * @Last Modified by: Honye
 * @Last Modified time: 2017-12-06 13:30:43
 */
'use strict';

import actionTypes from './../constants/actionTypes';

const logout = () => (
    dispatch => {
        dispatch({
            type: actionTypes.LOGOUT
        })
    }
)

export default {
    logout
}