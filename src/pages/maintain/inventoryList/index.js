import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

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
    navigationBarTitleText: '保养清单'
  }

  render () {
    return (
      <View className='index'>
        保养清单列表
      </View>
    )
  }
}
