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
    navigationBarTitleText: '个人信息'
  }

  render () {
    return (
      <View className='index'>
        证书
      </View>
    )
  }
}
