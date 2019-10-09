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
