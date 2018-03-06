/*
 * 影院热映
 * @Author: Honye 
 * @Date: 2018-03-06 23:04:31 
 * @Last Modified by: Honye
 * @Last Modified time: 2018-03-06 23:05:47
 */
'use strict';

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

class InTheatersPage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>影院热映</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default InTheatersPage;