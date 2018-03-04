/*
 * @Author: Honye 
 * @Date: 2018-02-27 09:55:46 
 * @Last Modified by: Honye
 * @Last Modified time: 2018-03-04 17:00:25
 */
'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import SplashScreen from 'react-native-splash-screen';

import Guide from '../pages/guide';
import HomeTab from './AppTabNavigator';
import DetailPage from './../pages/discovery/details';
import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';
import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator(
  {
    Home: { screen: HomeTab },
    Guide: { screen: Guide },
    Login: { screen: LoginScreen },
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen },
    Details: { screen: DetailPage },
  },{
    headerMode: 'screen',
    navigationOptions: {
      title: 'HONYE',
      gesturesEnabled: true
    },
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal
    })
  }
);

class AppWithNavigationState extends Component {

  componentDidMount() {
	SplashScreen.hide();
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    dispatch(NavigationActions.back())
    return !(nav.index===0)
  }

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator 
        navigation={addNavigationHelpers({ 
          dispatch: dispatch,
          state: nav,
          addListener,
        })} 
      />
    )
  }
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
