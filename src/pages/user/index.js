/*
 * @Author: Honye 
 * @Date: 2017-11-18 16:01:59 
 * @Last Modified by: Honye
 * @Last Modified time: 2017-12-07 10:41:05
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

class UserPage extends Component {

    constructor(props) {
        super(props);
    }

    onChangePress = () => {
        const { dispatch } = this.props;
        dispatch(NavigationActions.navigate({
            routeName: 'Movies'
        }))
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onChangePress}>
                    <Text>账号</Text>
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

export default connect()(UserPage);