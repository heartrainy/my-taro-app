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
        icon: 'baoyang',
        item: [
          {
            name: '待保养',
            icon: 'dengdai',
            tipNum: 11,
            url: '/pages/maintain/missionList/index'
          },
          {
            name: '保养中',
            icon: 'dengdai',
            tipNum: 5
          },
          {
            name: '待确认',
            icon: 'dengdai',
            tipNum: 5
          },
          {
            name: '已完成',
            icon: 'dengdai',
            tipNum: 5
          }
        ]
      },{
        title: '维修',
        icon: 'baoyang',
        item: [
          {
            name: '待维修',
            icon: 'dengdai',
            tipNum: 11
          },
          {
            name: '维修中',
            icon: 'dengdai',
            tipNum: 5
          },
          {
            name: '已完成',
            icon: 'dengdai',
            tipNum: 5
          }
        ]
      },{
        title: '自检',
        icon: 'baoyang',
        item: [
          {
            name: '自检',
            icon: 'dengdai',
            tipNum: 11
          },
          {
            name: '已完成',
            icon: 'dengdai',
          }
        ]
      },{
        title: '我的',
        icon: 'baoyang',
        item: [
          {
            name: '维修申请',
            icon: 'dengdai',
            tipNum: 11
          },
          {
            name: '领料申请',
            icon: 'dengdai',
            tipNum: 5
          },
          {
            name: '待签收',
            icon: 'dengdai',
            tipNum: 5
          },
          {
            name: '领料',
            icon: 'dengdai',
            tipNum: 5
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
        <View className='title'>
          <View className='title-icon iconfont wbicon-baoyang'></View>
          <Text className='title-text'>维保计划</Text>
        </View>
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
