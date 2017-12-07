/*
 * @Author: Honye 
 * @Date: 2017-12-07 16:52:42 
 * @Last Modified by: Honye
 * @Last Modified time: 2017-12-07 17:06:07
 */
'use strict';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


class DetailPage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>详情页面</Text>
            </View>
        )
    }
}

DetailPage.navigationOptions = {
    title: '详情'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default DetailPage;