import Taro, { Component } from '@tarojs/taro'
import { View, Icon, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import maintainImg from '../../images/title-icon/maintain.png'

import './index.scss'

export default class Index extends Component {

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount () {

  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '保养'
  }

  render () {
    return (
      <View className='index'>
        <View>
          <View className="title">
            <Image className="title-icon" src={maintainImg} style="width: 40rpx; height: 40rpx;"></Image>
            <Text className="title-text">保养</Text>
          </View>
          <View className="content">
            <View className="flex-item">1</View>
            <View className="flex-item">2</View>
            <View className="flex-item">3</View>
            <View className="flex-item">4</View>
          </View>
        </View>
      </View>
    )
  }
}
