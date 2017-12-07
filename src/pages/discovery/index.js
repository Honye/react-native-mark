/*
 * @Author: Honye 
 * @Date: 2017-11-18 15:49:02 
 * @Last Modified by: Honye
 * @Last Modified time: 2017-12-07 17:07:52
 */
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ViewPagerAndroid, Image
} from 'react-native';
import { request } from './../../utils/request';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import * as DiscoveryActions from './../../actions/reqDiscovery';
import { bindActionCreators } from 'redux';

class DiscoveryPage extends Component {

  state = {
    currentPosition: 1
  }

  componentWillMount() {
    this.props.getBanners()
  }

  componentDidMount() {
    this.onPress = this.onPress.bind(this)
  }

  onPress = () => {
    const { navigation, dispatch } = this.props;
    dispatch(NavigationActions.navigate({
      routeName: 'Login'
    }))
    // navigation.navigate('Details')
  }

  onPageSelected = (event) => {
    this.setState({
      currentPosition: event.nativeEvent.position
    })
  }

  render() {
    const { banners } = this.props;
    const { currentPosition } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.viewPager}>
          {
            banners.length > 0 ?
              <ViewPagerAndroid style={styles.viewPager}
                initialPage={currentPosition}
                onPageSelected={this.onPageSelected}
              >
                {
                  banners.map((item, index) => (
                    <View style={styles.pager} key={item.id}>
                      <TouchableOpacity style={styles.banner} activeOpacity={0.8}
                        onPress={this.onPress}
                      >
                        <Image
                          style={styles.banner}
                          source={{ uri: item.image }}
                        />
                      </TouchableOpacity>
                    </View>
                  ))
                }
              </ViewPagerAndroid>
              : null
          }
          <View style={styles.indicator}>
            {
              banners.map((item, index) => (
                <View key={item.id} style={[styles.indicatorIcon,index==currentPosition?styles.indicatorIconSelected:{}]}></View>
              ))
            }
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewPager: {
    height: 200,
    backgroundColor: '#F0F0F0'
  },
  pager: {
    backgroundColor: '#dcdcdc'
  },
  banner: {
    flex: 1,
  },
  indicator: {
    height: 30,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  indicatorIcon: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,.5)',
    marginHorizontal: 5
  },
  indicatorIconSelected: {
    backgroundColor: '#ffffff',
  }
})

const mapStateToProps = state => ({
  banners: state.discoveryData.banners,
  articles: state.discoveryData.articles
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  getBanners: bindActionCreators(DiscoveryActions.getBanners, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DiscoveryPage);