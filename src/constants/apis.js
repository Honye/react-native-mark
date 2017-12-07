/*
 * @Author: Honye 
 * @Date: 2017-11-18 16:11:37 
 * @Last Modified by: Honye
 * @Last Modified time: 2017-12-07 14:45:30
 */

const DB_HOST = 'https://api.douban.com';
const HY_HOST = 'https://hongye567.github.io';

const APIs = {

    DB_HOST,

    HY_HOST,
    // 豆瓣 apikey 参数
    DB_KEY: '0b2bdeda43b5688921839c8ecb20399b',
    // 默认配置
    CONFIG: `${HY_HOST}/static/json/config`,
    // 首页轮播图
    BANNER: `${HY_HOST}/static/json/banner`,
    // 首页文章
    ARTICLE: `${HY_HOST}/static/json/articles`,
    // 文章详情
    ARTICLE_DETAIL: `${HY_HOST}/static/json/article/detail`,
    // 分类类别
    CLASSIFY: `${HY_HOST}/static/json/classify`,
    // 每日卡片
    CARDS: `${HY_HOST}/static/json/cards`,
    // 豆瓣热映
    THEATER: `${DB_HOST}/v2/movie/in_theaters`,
    // 即将上映
    COMMING: `${DB_HOST}/v2/movie/coming_soon`,
    // 影视条目信息
    SUBJECT_INFO: `${DB_HOST}/v2/movie/subject`,
    // 影视搜索
    SEARCH: `${DB_HOST}/v2/movie/search`,
}

export default APIs;