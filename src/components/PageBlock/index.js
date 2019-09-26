import Taro, { Component } from '@tarojs/taro'
import { View, Icon, Text, Image } from '@tarojs/components'
// import { AtIcon } from 'taro-ui'

import './index.scss'

export default class PageBlock extends Component {

  constructor (props) {
    super(props)
    this.state = {
      itemNum: 4
    }
  }

  componentWillMount () {

  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const menuItem = this.props.item.slice();
    const menuLength = menuItem.length;
    if (menuLength < 4) {
      for (let i = 0; i < (this.state.itemNum - menuLength); i++) {
        menuItem.push({})
      }
    }

    return (
      <View>
        <View className='title'>
          <View className={`title-icon at-icon at-icon-${this.props.icon}`}></View>
          <Text className='title-text'>{this.props.title}</Text>
        </View>
        <View className='content'>
          {
            menuItem.map((item, index) => {
              return Object.keys(item).length === 0 ?
              (
                <View className='flex-item' key={`item_key_${index}`}></View>
              ) :
              (
                <View className='flex-item' key={`item_key_${index}`}>
                  <View className='icon-bg'>
                    <View className='icon-tip-num'>{item.tipNum}</View>
                  </View>
                  <View className='icon-text'>{item.name}</View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}
