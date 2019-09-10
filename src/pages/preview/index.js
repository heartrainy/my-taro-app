import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

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
    navigationBarTitleText: '预览'
  }

  render () {
    const previewSrc = this.$router.params.previewSrc;
    return (
      <View className='index'>
        <Image src={previewSrc} />
      </View>
    )
  }
}
