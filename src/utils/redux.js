/*
 * @Author: Honye 
 * @Date: 2018-02-27 00:04:24 
 * @Last Modified by: Honye
 * @Last Modified time: 2018-02-27 10:14:16
 */
'use strict';

import {
    createReactNavigationReduxMiddleware,
    createReduxBoundAddListener
} from 'react-navigation-redux-helpers';

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware('root', state => state.nav,);

const addListener = createReduxBoundAddListener('root');

export {
    middleware,
    addListener
};