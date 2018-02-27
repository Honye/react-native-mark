/*
 * @Author: Honye 
 * @Date: 2017-12-05 14:43:38 
 * @Last Modified by: Honye
 * @Last Modified time: 2018-02-27 12:52:37
 */
'use strict';

import { AppNavigator } from '../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';


// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Guide');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// Tab in Stack, this is null
const secondAction = AppNavigator.router.getActionForPathAndParams('Home') || {
  type: 'Navigation/NAVIGATE',
  routeName: 'Home'
};
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

const navReducer = (state, action) => {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    case 'User':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'User' }),
        state
      )
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}

export default navReducer;