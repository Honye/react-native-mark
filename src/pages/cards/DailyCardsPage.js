/*
 * 每日卡片
 * @Author: Honye 
 * @Date: 2018-03-06 22:56:01 
 * @Last Modified by: Honye
 * @Last Modified time: 2018-03-06 22:57:14
 */
'use strict';

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

class DailyCardsPage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>每日卡片</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default DailyCardsPage;