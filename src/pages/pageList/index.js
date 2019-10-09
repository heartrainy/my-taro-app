import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"

import './index.scss'

export default class Index extends Component {

  constructor (props) {
    super(props)
    this.state = {
      pageList: [{
        key: 1,
        name: '保养任务',
        url: '/pages/maintain/missionList/index'
      },{
        key: 2,
        name: '保养工单',
        url: '/pages/maintain/workOrder/index'
      },{
        key: 3,
        name: '保养报告',
        url: '/pages/maintain/report/index'
      },{
        key: 4,
        name: '维修申请列表',
        url: '/pages/repair/applyList/index'
      },{
        key: 5,
        name: '维修申请',
        url: '/pages/repair/apply/index'
      },{
        key: 6,
        name: '维修申请详情',
        url: '/pages/repair/detail/index'
      },{
        key: 7,
        name: '配件领取列表',
        url: '/pages/accessory/receiveList/index'
      },{
        key: 8,
        name: '领取配件',
        url: '/pages/accessory/receive/index'
      },{
        key: 9,
        name: '拍照申请',
        url: '/pages/accessory/photograph/index'
      },{
        key: 10,
        name: '商城采购申请',
        url: '/pages/accessory/purchaseApply/index'
      },{
        key: 11,
        name: '配件商城采购',
        url: '/pages/accessory/purchase/index'
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
    navigationBarTitleText: '页面列表'
  }

  handleClick = (url) => {
    Taro.navigateTo({
      url: url
    })
  }

  render () {
    return (
      <View className='index'>
        <AtList>
          {
            this.state.pageList.map(item => {
              return <AtListItem key={item.key} title={item.name} arrow='right' onClick={() => this.handleClick(item.url)} />
            })
          }
        </AtList>
      </View>
    )
  }
}
