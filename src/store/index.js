/*
 * @Author: Honye 
 * @Date: 2017-12-05 21:33:40 
 * @Last Modified by: Honye
 * @Last Modified time: 2017-12-05 21:35:28
 */
'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './../reducers';

const configStore = applyMiddleware(thunkMiddleware)(createStore)

export default configStore(reducers);