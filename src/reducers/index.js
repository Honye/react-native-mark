/*
 * @Author: Honye 
 * @Date: 2017-12-05 23:15:20 
 * @Last Modified by: Honye
 * @Last Modified time: 2017-12-05 23:22:57
 */
'use strict';

import { combineReducers } from 'redux';
import navReducer from './navReducer';
import authReducer from './authReducer';
import discoveryData from './discoveryData';

const AppReducer = combineReducers({
    nav: navReducer,
    auth: authReducer,
    discoveryData
});

export default AppReducer;
