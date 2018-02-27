/*
 * @Author: Honye 
 * @Date: 2017-12-05 21:33:40 
 * @Last Modified by: Honye
 * @Last Modified time: 2018-02-27 10:41:41
 */
'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './../reducers';
import { middleware } from '../utils/redux';

const configStore = applyMiddleware(thunkMiddleware, middleware)(createStore)

export default configStore(reducers);