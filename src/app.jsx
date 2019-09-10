import Taro, { Component } from '@tarojs/taro'
import { set as setGlobalData, get as getGlobalData } from './global_data'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentWillMount () {
    // 展示本地存储能力
    var logs = Taro.getStorageSync('logs') || []
    logs.unshift(Date.now())
    Taro.setStorageSync('logs', logs)

    // 登录
    Taro.login({
      success: res => {
        // console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // 获取用户信息
    Taro.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          Taro.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              // this.globalData.userInfo = res.userInfo
              // console.log(res)
              setGlobalData('userInfo', res.userInfo);
              // Taro.setStorageSync('avatar', res.userInfo.avatarUrl)
              // Taro.setStorageSync('nickname', res.userInfo.nickName)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.$app.userInfoReadyCallback) {
                this.$app.userInfoReadyCallback(res)
              }
            }
          })
          // if (this.loginCallback) {
          //   this.loginCallback(res)
          // }
        }
      }
    })
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/index/index',
      'pages/handwrite/index',
      'pages/preview/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './assets/tabbar_icon01.png',
          selectedIconPath: './assets/tabbar_icon01_active.png',
        },
        {
          pagePath: 'pages/category/index',
          text: '分类',
          iconPath: './assets/tabbar_icon02.png',
          selectedIconPath: './assets/tabbar_icon02_active.png',
        },
        {
          pagePath: 'pages/cart/index',
          text: '购物车',
          iconPath: './assets/tabbar_icon03.png',
          selectedIconPath: './assets/tabbar_icon03_active.png',
        },
        {
          pagePath: 'pages/user/index',
          text: '我的',
          iconPath: './assets/tabbar_icon04.png',
          selectedIconPath: './assets/tabbar_icon04_active.png',
        },
      ],
      color: '#999',
      selectedColor: '#e80e27',
      backgroundColor: '#fff',
      borderStyle: 'black',
    },
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
