/*
 * 影单分类
 * @Author: Honye 
 * @Date: 2018-03-06 21:47:30 
 * @Last Modified by: Honye
 * @Last Modified time: 2018-03-06 22:03:14
 */
'use strict';

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

class ClassificationPage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>分类查找</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default ClassificationPage;