import React, { Component } from 'react';
import { StyleSheet, View, BackHandler, ToastAndroid } from 'react-native';

import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class MainScreen extends Component {

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if(nav.index===0) {
      if(this.lastBackPressed && this.lastBackPressed+2000 >= Date.now()) {
        return false;
      }
      this.lastBackPressed = Date.now();
      ToastAndroid.show("再按一次退出应用", ToastAndroid.SHORT);
    }
    dispatch(NavigationActions.back())
    return true;
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginStatusMessage />
        <AuthButton />
      </View>
    )
  }
}

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(MainScreen);
