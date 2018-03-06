/*
 * @Author: Honye 
 * @Date: 2017-11-18 15:49:02 
 * @Last Modified by: Honye
 * @Last Modified time: 2018-03-06 23:07:16
 */
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ViewPagerAndroid, Image, Dimensions, ScrollView
} from 'react-native';
import { request } from './../../utils/request';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import * as DiscoveryActions from './../../actions/reqDiscovery';
import { bindActionCreators } from 'redux';
import CircleView from './components/CircleView';
import ArticleBigItem from '../articles/components/ItemArticleBig';

class DiscoveryPage extends Component {

  state = {
    currentPosition: 1
  }

  componentWillMount() {
    this.props.getBanners()
  }

  componentDidMount() {
    const { getArticles } = this.props;
    getArticles()
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

  /**
   * 圆形按钮点击事件
   * @param {String} routeName 路由页
   */
  _onCirclePress = (routeName) => () => {
    const { navigation } = this.props;
    navigation.navigate(routeName)
  }

  /**
   * 文章列表点击事件
   */
  _onArticlePress = () => {
    const { navigation } = this.props;
    navigation.navigate('ArticleDetails')
  }

  render() {
    const { banners, articles } = this.props;
    const { currentPosition } = this.state;
    const centerView = <View style={styles.centerWrapper}>
      <CircleView 
        image={require('../../assets/images/discover_classify_group_icon.png')}
        title='分类查找'
        onPress={this._onCirclePress('Classification')}
      />
      <CircleView 
        image={require('../../assets/images/discover_classify_group_icon.png')}
        title='每日电影卡片'
        innerText={new Date().getDate()}
        onPress={this._onCirclePress('DailyCards')}
      />
      <CircleView 
        image={require('../../assets/images/discover_classify_cinema_icon.png')}
        title='影院热映'
        onPress={this._onCirclePress('InTheaters')}
      />
    </View>;

    const articlesView = articles.map((item, index) => (
      <ArticleBigItem key={item.id} 
        image={item.image} 
        title={item.title} 
        onPress={this._onArticlePress}
      />
    ))
    return (
      <ScrollView style={styles.container}>
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
        { centerView }
        { articlesView }
      </ScrollView>
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
  },
  centerWrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
})

const mapStateToProps = state => ({
  banners: state.discoveryData.banners,
  articles: state.discoveryData.articles
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  getBanners: bindActionCreators(DiscoveryActions.getBanners, dispatch),
  getArticles: bindActionCreators(DiscoveryActions.getArticles, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DiscoveryPage);