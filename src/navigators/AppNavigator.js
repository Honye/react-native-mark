import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';

import Guide from '../pages/guide';
import HomeTab from './AppTabNavigator';
import DetailPage from './../pages/discovery/details';
import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';

export const AppNavigator = StackNavigator(
  {
    Home: { screen: HomeTab },
    Guide: { screen: Guide },
    Login: { screen: LoginScreen },
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen },
    Details: { screen: DetailPage },
  },{
    navigationOptions: {
      title: 'HONYE'
    }
  }
);

class AppWithNavigationState extends Component {

  componentDidMount() {
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
    return (
      <AppNavigator 
        navigation={addNavigationHelpers({ 
          dispatch: this.props.dispatch,
          state: this.props.nav
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
