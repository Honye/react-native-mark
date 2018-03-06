/*
 * 文章详情
 * @Author: Honye 
 * @Date: 2018-03-06 21:38:31 
 * @Last Modified by: Honye
 * @Last Modified time: 2018-03-06 22:02:52
 */
'use strict';

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

class ArticleDetailsPage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>文章详情</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default ArticleDetailsPage;