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
        url: '/pages/repair/applyDetail/index'
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
      },{
        key: 12,
        name: '维修任务列表',
        url: '/pages/repair/missionList/index'
      },{
        key: 13,
        name: '维修工单',
        url: '/pages/repair/workOrder/index'
      },{
        key: 14,
        name: '配件详情',
        url: '/pages/accessory/detail/index'
      },{
        key: 15,
        name: '维修报告书',
        url: '/pages/repair/report/index'
      },{
        key: 16,
        name: '自检任务列表',
        url: '/pages/selfTest/list/index'
      },{
        key: 17,
        name: '自检工单',
        url: '/pages/selfTest/workOrder/index'
      },{
        key: 18,
        name: '保养清单列表',
        url: '/pages/maintain/inventoryList/index'
      },{
        key: 19,
        name: '保养清单详情',
        url: '/pages/maintain/inventoryDetail/index'
      },{
        key: 20,
        name: '我的收获地址',
        url: '/pages/mine/address/list/index'
      },{
        key: 21,
        name: '领料申请列表',
        url: '/pages/mine/pickApplyList/index'
      },{
        key: 22,
        name: '采购申请列表',
        url: '/pages/mine/purchaseApplyList/index'
      },{
        key: 23,
        name: '采购签收',
        url: '/pages/mine/purchaseSign/index'
      },{
        key: 24,
        name: '个人信息',
        url: '/pages/mine/personalInfo/index'
      },{
        key: 25,
        name: '证书',
        url: '/pages/mine/certificate/index'
      },{
        key: 26,
        name: '消息通知',
        url: '/pages/mine/messageNotice/index'
      },{
        key: 27,
        name: '消息详情',
        url: '/pages/mine/messageDetail/index'
      },{
        key: 28,
        name: '问题反馈',
        url: '/pages/mine/problemFeedback/index'
      },{
        key: 29,
        name: '问题详情',
        url: '/pages/mine/problemDetail/index'
      },{
        key: 30,
        name: '新增问题',
        url: '/pages/mine/problemAdd/index'
      },{
        key: 31,
        name: '物业联系人',
        url: '/pages/mine/tenement/index'
      },{
        key: 32,
        name: '故障代码',
        url: '/pages/mine/malfunctionCode/index'
      },{
        key: 33,
        name: '故障详情',
        url: '/pages/mine/malfunctionDetail/index'
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
