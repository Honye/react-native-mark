/*
 * @Author: Honye 
 * @Date: 2017-12-07 09:44:50 
 * @Last Modified by: Honye
 * @Last Modified time: 2017-12-07 11:40:45
 */
'use strict';

import React, { Component } from 'react';
import { View, Button, StyleSheet, BackHandler, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';


class Guide extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    dispatch(NavigationActions.back())
    return !(nav.index===0);
  }

  onInPress = () => {
    const { navigation } = this.props;
    navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home' })
        ]
      })
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='进入' onPress={this.onInPress} />
      </View>
    )
  }
}

Guide.navigationOptions = {
  title: '引导页'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50
  }
})

const mapStateToProps = state => ({
  nav: state.nav
})


export default connect(mapStateToProps)(Guide);