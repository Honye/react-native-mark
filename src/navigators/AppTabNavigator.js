/*
 * @Author: Honye 
 * @Date: 2017-12-07 11:09:47 
 * @Last Modified by: Honye
 * @Last Modified time: 2017-12-07 15:32:52
 */
'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import DiscoveryPage from '../pages/discovery';
import MoviePage from '../pages/movies';
import UserPage from '../pages/user';

export const AppTabNavigator = TabNavigator(
  {
    Discovery: {
      screen: DiscoveryPage,
      navigationOptions: {
        tabBarLabel: '发现',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabIcon
            focused={focused}
            inactiveIcon={require('./../assets/images/tab_discover_unchecked.png')}
            activeIcon={require('./../assets/images/tab_discover_checked.png')}
          />
        )
      }
    },
    Movies: {
      screen: MoviePage,
      navigationOptions: {
        tabBarLabel: '我的电影',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabIcon
            focused={focused}
            inactiveIcon={require('./../assets/images/tab_movies_unchecked.png')}
            activeIcon={require('./../assets/images/tab_movies_checked.png')}
          />
        )
      }
    },
    User: {
      screen: UserPage,
      navigationOptions: {
        tabBarLabel: '账号',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabIcon
            focused={focused}
            inactiveIcon={require('./../assets/images/tab_usercenter_unchecked.png')}
            activeIcon={require('./../assets/images/tab_usercenter_checked.png')}
          />
        )
      }
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#496069'
    },
    initialRouteName: 'Discovery',
    backBehavior: 'none'
  }
)

class TabIcon extends Component {

  render() {
    const { focused, activeIcon, inactiveIcon } = this.props;
    return (
      <Image
        style={styles.tabIcon}
        source={focused ? activeIcon : inactiveIcon}
        resizeMode='contain'
      />
    )
  }
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
})


export default AppTabNavigator;
