import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { set as setGlobalData, get as getGlobalData } from '../../global_data'
import './index.scss'

const app = Taro.getApp()

export default class Index extends Component {

  constructor (props) {
    super(props)
    this.state = {
      userInfo: {},
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    }
  }

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { 
    const userInfo = getGlobalData('userInfo')
    if (userInfo) {
      this.setState({
        userInfo: userInfo,
        hasUserInfo: true
      })
    } else if (this.state.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setState({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      console.log(3)
      // 在没有 open-type=getUserInfo 版本的兼容处理
      Taro.getUserInfo({
        success: res => {
          // app.globalData.userInfo = res.userInfo
          setGlobalData('userInfo', res.userInfo)
          this.setState({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getUserInfo = (e) => {
    console.log(e)
    setGlobalData('userInfo', e.detail.userInfo)
    this.setState({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }

  goToPage = (url) => {
    Taro.navigateTo({
      url: `/pages/${url}/index`
    })
  }

  render () {
    const { hasUserInfo, canIUse, userInfo } = this.state
    return (
      <View className='index'>
        <Text>Hello {userInfo.nickName}!!</Text>
        <AtButton type='primary' onClick={() => this.goToPage('handwrite')}>手写板</AtButton>
        {
          !hasUserInfo && canIUse ? <Button openType="getUserInfo" onGetuserinfo={this.getUserInfo}>获取用户信息</Button> : ''
        }
      </View>
    )
  }
}
