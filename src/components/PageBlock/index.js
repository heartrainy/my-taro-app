import Taro, { Component } from '@tarojs/taro'
import { View, Icon, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import './index.scss'

export default class PageBlock extends Component {

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

  render () {
    return (
      <View>
        <View className='title'>
          <View className='title-icon at-icon at-icon-settings'></View>
          <Text className='title-text'>{this.props.title}</Text>
        </View>
        <View className='content'>
          <View className='flex-item'>
            <View className='icon-bg'>
              <View className='icon-tip-num'>11</View>
            </View>
            <View className='icon-text'>待保养</View>
          </View>
          <View className='flex-item'></View>
          <View className='flex-item'></View>
          <View className='flex-item'></View>
        </View>
      </View>
    )
  }
}
