import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import redActive from '../../images/color_red_selected.png';
import red from '../../images/color_red.png';
import blackActive from '../../images/color_black_selected.png';
import black from '../../images/color_black.png';

import './index.scss'

export default class HandWrite extends Component {

  config = {
    navigationBarTitleText: '手写页'
  }

  constructor (props) {
    super(props)
    this.state = { 
      canvasName: 'handWriting',
      ctx: '',
      canvasWidth: 0,
      canvasHeight: 0,
      transparent: 1, // 透明度
      selectColor: 'black',
      lineColor: '#1A1A1A', // 颜色
      lineSize: 1.5,  // 笔记倍数
      lineMin: 0.5,   // 最小笔画半径
      lineMax: 4,     // 最大笔画半径
      pressure: 1,     // 默认压力
      smoothness: 60,  //顺滑度，用60的距离来计算速度
      currentPoint: {},
      currentLine: [],  // 当前线条
      firstTouch: true, // 第一次触发
      radius: 1, //画圆的半径
      cutArea: { top: 0, right: 0, bottom: 0, left: 0 }, //裁剪区域
      bethelPoint: [],  //保存所有线条 生成的贝塞尔点；
      lastPoint: 0,
      chirography: [], //笔迹
      currentChirography: {}, //当前笔迹
      linePrack: [] //划线轨迹 , 生成线条的实际点
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { selectColor } = this.state;

    return (
      <View className="wrapper">
        <View className="handBtn">
          <image catchtap="selectColorEvent" src={ selectColor === 'black' ? blackActive : black } class="{{ selectColor === 'black' ? 'color_select' : '' }} black-select" data-color="black"
            data-color-value="#1A1A1A"></image>
          <image catchtap="selectColorEvent" src={ selectColor === 'red' ? redActive : red } class="{{ selectColor === 'red' ? 'color_select' : '' }} red-select" data-color="red"
            data-color-value="#ca262a"></image>
          <button catchtap="retDraw" class="delBtn">重写</button>
        </View>
        <View className="handCenter">
          <canvas class="handWriting" disable-scroll="true" bindtouchstart="uploadScaleStart" bindtouchmove="uploadScaleMove"
            bindtouchend="uploadScaleEnd" bindtap="mouseDown" canvas-id="handWriting">
          </canvas>
        </View>
        <View className="handRight">
          <View className="handTitle">手写板</View>
        </View>
      </View>
    )
  }
}
