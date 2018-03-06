/*
 * 发现页圆形按钮
 * @Author: Honye 
 * @Date: 2018-03-06 22:05:03 
 * @Last Modified by: Honye
 * @Last Modified time: 2018-03-06 22:34:40
 */
'use strict';

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class CircleView extends React.Component {

    render() {
      const { title, image, innerText, onPress } = this.props;
      return (
        <TouchableOpacity style={styles.flex1} 
          activeOpacity={0.8}
          onPress={onPress}
        >
          <View style={styles.circle}>
          {
            innerText ? <Text style={styles.innerText}>{innerText}</Text>
            : <Image style={styles.circleIcon} source={image} resizeMode='contain' />
          }
          </View>
          <Text>{title}</Text>
        </TouchableOpacity>
      )
    }
  }

  const styles = StyleSheet.create({
    flex1: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 6,
      },
      circle: {
        borderColor: '#496069',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
        borderWidth: 1,
        borderRadius: 30,
        width: 60,
        height: 60,
      },
      circleIcon: {
        width: 25,
        height: 25
      },
      innerText: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'
      },
  })