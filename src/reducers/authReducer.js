/*
 * @Author: Honye 
 * @Date: 2017-12-05 23:13:51 
 * @Last Modified by: Honye
 * @Last Modified time: 2017-12-05 23:16:25
 */
'use strict';


const initialAuthState = { isLoggedIn: false };

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}