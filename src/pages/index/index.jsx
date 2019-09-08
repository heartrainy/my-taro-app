import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goToPage = (url) => {
    Taro.navigateTo({
      url: `/pages/${url}/index`
    })
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!!</Text>
        <AtButton type='primary' onClick={() => this.goToPage('handwrite')}>跳转</AtButton>
      </View>
    )
  }
}
