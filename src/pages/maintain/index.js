import Taro, { Component } from '@tarojs/taro'
import { View, Icon, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import PageBlock from '../../components/PageBlock'

import './index.scss'

export default class Index extends Component {

  constructor (props) {
    super(props)
    this.state = {
      menuList: [{
        title: '保养',
        icon: 'setting',
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

    const menuList = [{
      title: '保养',
      icon: 'setting',
      item: [
        {
          name: '待保养',
          icon: 'block',
          tipNum: 0
        }
      ]
    }]

    return (
      <View className='index'>
        {
          this.state.menuList.map(menu => {
            return (
              <PageBlock title='保养'></PageBlock>
            )
          })
        }
      </View>
    )
  }
}
