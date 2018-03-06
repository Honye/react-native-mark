/*
 * 文章列表 Item (大)
 * @Author: Honye 
 * @Date: 2018-03-06 22:20:01 
 * @Last Modified by: Honye
 * @Last Modified time: 2018-03-06 22:46:12
 */
'use strict';

import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

class ArticleBigItem extends React.Component {

    render() {
        const { image, title, onPress } = this.props;
        return (
            <TouchableOpacity style={styles.container}
                activeOpacity={0.8}
                onPress={onPress}
            >
                <Image style={styles.articleImg} source={{ uri: image }} />
                <View style={styles.articleBottom}>
                    <Text style={styles.articleTitle}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    articleImg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 0.5
    },
    articleBottom: {
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    articleTitle: {
        textAlign: 'center',
    }
})

export default ArticleBigItem;