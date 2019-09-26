import Taro, { Component } from '@tarojs/taro'
import { View, Icon, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import PageBlock from '../../components/PageBlock/index'

import './index.scss'

export default class Index extends Component {

  constructor (props) {
    super(props)
    this.state = {
      menuList: [{
        title: '保养',
        icon: 'settings',
        item: [
          {
            name: '待保养',
            icon: 'block',
            tipNum: 0
          }
        ]
      }]
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
        {
          this.state.menuList.map((menu, index) => {
            return (
              <PageBlock title={menu.title} icon={menu.icon} item={menu.item} key={`pageblock_key_${index}`}></PageBlock>
            )
          })
        }
      </View>
    )
  }
}
