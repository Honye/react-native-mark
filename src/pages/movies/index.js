/*
 * @Author: Honye 
 * @Date: 2017-11-18 15:57:43 
 * @Last Modified by: Honye
 * @Last Modified time: 2017-12-07 10:34:52
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class MoviePage extends Component {

  constructor(props) {
    super(props);
  }

  onChangePress = () => {
    const { navigation } = this.props;
    navigation.navigate('User')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onChangePress}>
          <Text>我的电影</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MoviePage;